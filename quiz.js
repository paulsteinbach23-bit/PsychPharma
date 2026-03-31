// === STATE ===
let qSession = {
  mode: 'quiz',
  topic: 'all',
  count: 10,
  questions: [],
  idx: 0,
  score: 0,
  answers: {},    // id -> boolean
  selected: null, // currently selected option text
  deck: [],
  deckIdx: 0,
  knownIds: new Set(),
  flipped: false,
};
let qProgress = null;

// === HELPERS ===

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(pool, correct, n) {
  const unique = [...new Set(pool)].filter(x => x !== correct && x != null && String(x).trim() !== '');
  return shuffle(unique).slice(0, n);
}

function makeId(prefix, key) {
  return prefix + '_' + String(key).replace(/[^a-zA-Z0-9]/g, '_');
}

function escAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// === PROGRESS ===

function loadProgress() {
  try {
    const raw = localStorage.getItem('psychpharma-progress');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { quiz: { totalAnswered: 0, totalCorrect: 0, byId: {} }, flashcards: { byId: {} } };
}

function saveProgress() {
  try {
    localStorage.setItem('psychpharma-progress', JSON.stringify(qProgress));
  } catch (e) {}
}

function recordAnswer(id, isCorrect) {
  if (!qProgress.quiz.byId[id]) qProgress.quiz.byId[id] = { seen: 0, correct: 0 };
  qProgress.quiz.byId[id].seen++;
  if (isCorrect) qProgress.quiz.byId[id].correct++;
  qProgress.quiz.totalAnswered++;
  if (isCorrect) qProgress.quiz.totalCorrect++;
  saveProgress();
}

function markCard(id, known) {
  if (!qProgress.flashcards.byId[id]) qProgress.flashcards.byId[id] = { known: false, lastSeen: 0 };
  qProgress.flashcards.byId[id].known = known;
  qProgress.flashcards.byId[id].lastSeen = Date.now();
  saveProgress();
}

// === QUESTION GENERATORS ===

function genMedQuestions() {
  const questions = [];
  const classKeys = Object.keys(CLASSES);

  MEDS.forEach(m => {
    // M1: Substanzklasse
    const distM1 = pickDistractors(classKeys, m.klasse, 3);
    if (distM1.length === 3) {
      questions.push({
        id: makeId('M1', m.name),
        typ: 'mc',
        frage: `Welcher Substanzklasse gehört ${m.name} an?`,
        antworten: shuffle([m.klasse, ...distM1]),
        richtig: m.klasse,
        erklaerung: `${m.name} ist ein ${m.klasse}. Mechanismus: ${m.mechanismus.slice(0, 100)}…`,
        quelle: 'meds'
      });
    }

    // M2: Handelsname
    if (m.handelsname) {
      const richtig = m.handelsname.split('/')[0].trim();
      const pool = MEDS
        .filter(x => x.name !== m.name && x.handelsname)
        .map(x => x.handelsname.split('/')[0].trim());
      const distM2 = pickDistractors(pool, richtig, 3);
      if (distM2.length >= 3) {
        questions.push({
          id: makeId('M2', m.name),
          typ: 'mc',
          frage: `Unter welchem Handelsnamen ist ${m.name} bekannt?`,
          antworten: shuffle([richtig, ...distM2.slice(0, 3)]),
          richtig,
          erklaerung: `${m.name} wird unter dem Handelsnamen ${m.handelsname} vermarktet.`,
          quelle: 'meds'
        });
      }
    }

    // M3: Indikation
    if (m.indikationen && m.indikationen.length > 0) {
      const richtig = m.indikationen[Math.floor(Math.random() * m.indikationen.length)];
      const otherInds = MEDS
        .filter(x => x.name !== m.name)
        .flatMap(x => x.indikationen || [])
        .filter(i => !m.indikationen.includes(i));
      const distM3 = pickDistractors(otherInds, richtig, 3);
      if (distM3.length >= 3) {
        questions.push({
          id: makeId('M3', m.name),
          typ: 'mc',
          frage: `Welche ist eine Indikation für ${m.name}?`,
          antworten: shuffle([richtig, ...distM3.slice(0, 3)]),
          richtig,
          erklaerung: `${m.name} wird u.a. eingesetzt bei: ${m.indikationen.slice(0, 3).join(', ')}.`,
          quelle: 'meds'
        });
      }
    }

    // M4: Kontraindikation
    if (m.kontraindikationen && m.kontraindikationen.length > 0) {
      const richtig = m.kontraindikationen[Math.floor(Math.random() * m.kontraindikationen.length)];
      const otherKontras = MEDS
        .filter(x => x.name !== m.name)
        .flatMap(x => x.kontraindikationen || [])
        .filter(k => !m.kontraindikationen.includes(k));
      const distM4 = pickDistractors(otherKontras, richtig, 3);
      if (distM4.length >= 3) {
        questions.push({
          id: makeId('M4', m.name),
          typ: 'mc',
          frage: `Was ist eine Kontraindikation für ${m.name}?`,
          antworten: shuffle([richtig, ...distM4.slice(0, 3)]),
          richtig,
          erklaerung: `Kontraindikationen für ${m.name}: ${m.kontraindikationen.slice(0, 3).join(', ')}.`,
          quelle: 'meds'
        });
      }
    }

    // M5: Rezeptorprofil
    if (m.rezeptoren) {
      const strongEntries = Object.entries(m.rezeptoren)
        .filter(([, v]) => v === '+++' || v === '0');
      if (strongEntries.length > 0) {
        const [key, richtig] = strongEntries[Math.floor(Math.random() * strongEntries.length)];
        const allVals = ['0', '+/-', '+', '++', '+++'];
        const distM5 = allVals.filter(v => v !== richtig).slice(0, 3);
        questions.push({
          id: makeId('M5', m.name + '_' + key),
          typ: 'mc',
          frage: `Wie stark wirkt ${m.name} auf den ${key}-Rezeptor?`,
          antworten: shuffle([richtig, ...distM5]),
          richtig,
          erklaerung: `${m.name} wirkt mit Stärke „${richtig}" auf den ${key}-Rezeptor.`,
          quelle: 'meds'
        });
      }
    }
  });

  return questions;
}

function genReceptorQuestions() {
  const questions = [];

  RECEPTORS.forEach(r => {
    const topMeds = r.medikamente['+++'] || [];
    if (topMeds.length === 0) return;

    const richtig = topMeds[Math.floor(Math.random() * topMeds.length)];
    const weakMeds = r.medikamente['+'] || [];
    const allMedNames = MEDS.map(m => m.name);
    const pool = [
      ...weakMeds.filter(n => !topMeds.includes(n)),
      ...allMedNames.filter(n => !topMeds.includes(n) && !weakMeds.includes(n))
    ];
    const distR1 = pickDistractors(pool, richtig, 3);

    if (distR1.length >= 3) {
      questions.push({
        id: makeId('R1', r.name),
        typ: 'mc',
        frage: `Welche Substanz wirkt am stärksten auf den ${r.name}?`,
        antworten: shuffle([richtig, ...distR1.slice(0, 3)]),
        richtig,
        erklaerung: `Am stärksten am ${r.name} (${r.fullname.split('(')[0].trim()}) wirken: ${topMeds.join(', ')}.`,
        quelle: 'rezeptoren'
      });
    }
  });

  return questions;
}

function genKBQuestions() {
  const questions = [];
  const kbs = window.KRANKHEITSBILDER || [];
  const allIcd = kbs.map(k => k.icd10);
  const fakeIcd = ['F32', 'F41.1', 'F20', 'F60.3', 'F31', 'F84.0'];
  const allKat = [...new Set(kbs.map(k => k.kategorie))];
  const fakeKat = ['Persönlichkeitsstörungen', 'Suchterkrankungen', 'Neurotische Störungen'];

  kbs.forEach(kb => {
    // KB ICD auto
    const icdPool = [...allIcd.filter(i => i !== kb.icd10), ...fakeIcd.filter(i => !allIcd.includes(i))];
    const distIcd = pickDistractors(icdPool, kb.icd10, 3);
    if (distIcd.length >= 3) {
      questions.push({
        id: makeId('KB_ICD', kb.id),
        typ: 'mc',
        frage: `Welches ist der ICD-10-Code für ${kb.name}?`,
        antworten: shuffle([kb.icd10, ...distIcd.slice(0, 3)]),
        richtig: kb.icd10,
        erklaerung: `${kb.name} wird nach ICD-10 unter ${kb.icd10} kodiert (${kb.kategorie}).`,
        quelle: 'krankheitsbilder'
      });
    }

    // KB Kategorie auto
    const katPool = [...allKat.filter(k => k !== kb.kategorie), ...fakeKat.filter(k => !allKat.includes(k))];
    const distKat = pickDistractors(katPool, kb.kategorie, 3);
    if (distKat.length >= 3) {
      questions.push({
        id: makeId('KB_KAT', kb.id),
        typ: 'mc',
        frage: `Welcher diagnostischen Gruppe gehört ${kb.name} nach ICD-10 an?`,
        antworten: shuffle([kb.kategorie, ...distKat.slice(0, 3)]),
        richtig: kb.kategorie,
        erklaerung: `${kb.name} gehört zur Gruppe der ${kb.kategorie} (ICD-10: ${kb.icd10}).`,
        quelle: 'krankheitsbilder'
      });
    }
  });

  // Merge authored QUIZ_FAKTEN
  (window.QUIZ_FAKTEN || []).forEach(f => {
    questions.push({
      id: f.id,
      typ: 'mc',
      frage: f.frage,
      antworten: shuffle([f.richtig, ...f.distractors]),
      richtig: f.richtig,
      erklaerung: f.erklaerung,
      quelle: f.quelle || 'krankheitsbilder'
    });
  });

  return questions;
}

function buildQuestionPool(topic) {
  let pool = [];
  if (topic === 'all' || topic === 'meds') pool = pool.concat(genMedQuestions());
  if (topic === 'all' || topic === 'rezeptoren') pool = pool.concat(genReceptorQuestions());
  if (topic === 'all' || topic === 'krankheitsbilder') pool = pool.concat(genKBQuestions());
  return shuffle(pool);
}

// === FLASHCARD GENERATORS ===

function buildFlashcardDeck(topic) {
  const deck = [];

  if (topic === 'all' || topic === 'meds') {
    MEDS.forEach(m => {
      deck.push({
        id: makeId('FC_med_A', m.name),
        vorderseite: m.name,
        rueckseite: `${m.klasse} · ${m.handelsname || '—'}\nIndikationen: ${(m.indikationen || []).slice(0, 3).join(', ')}`,
        quelle: 'meds'
      });
      deck.push({
        id: makeId('FC_med_B', m.name),
        vorderseite: `${m.name} — Cave?`,
        rueckseite: m.cave,
        quelle: 'meds'
      });
    });
  }

  if (topic === 'all' || topic === 'rezeptoren') {
    RECEPTORS.forEach(r => {
      deck.push({
        id: makeId('FC_rec_A', r.name),
        vorderseite: `${r.name} — Funktion?`,
        rueckseite: `${r.fullname.split('(')[0].trim()}\n${r.funktion.slice(0, 120)}`,
        quelle: 'rezeptoren'
      });
      deck.push({
        id: makeId('FC_rec_B', r.name),
        vorderseite: `${r.name} — Effekt bei Hemmung?`,
        rueckseite: r.effektHemmung.slice(0, 180),
        quelle: 'rezeptoren'
      });
    });
  }

  if (topic === 'all' || topic === 'krankheitsbilder') {
    (window.KRANKHEITSBILDER || []).forEach(kb => {
      deck.push({
        id: makeId('FC_kb_A', kb.id),
        vorderseite: `${kb.name} — Definition?`,
        rueckseite: kb.definition.slice(0, 220),
        quelle: 'krankheitsbilder'
      });
      deck.push({
        id: makeId('FC_kb_B', kb.id),
        vorderseite: `${kb.name} — ICD-10 & Kategorie?`,
        rueckseite: `${kb.icd10} · ${kb.kategorie}`,
        quelle: 'krankheitsbilder'
      });
    });
  }

  return shuffle(deck);
}

// === RENDER HELPERS ===

function getDetail() {
  return document.getElementById('detail');
}

// === RENDER FUNCTIONS ===

function renderQuizLanding() {
  qProgress = loadProgress();
  const p = qProgress.quiz;
  const pct = p.totalAnswered > 0 ? Math.round(p.totalCorrect / p.totalAnswered * 100) : null;

  const topics = [
    { key: 'all', label: 'Alle' },
    { key: 'meds', label: 'Medikamente' },
    { key: 'rezeptoren', label: 'Rezeptoren' },
    { key: 'krankheitsbilder', label: 'Krankheitsbilder' },
  ];

  const topicBtns = topics.map(t =>
    `<button class="quiz-topic-btn ${qSession.topic === t.key ? 'active' : ''}" onclick="quizSelectTopic('${t.key}')">${t.label}</button>`
  ).join('');

  const modeBtns = ['quiz', 'flashcard'].map(m =>
    `<button class="quiz-topic-btn ${qSession.mode === m ? 'active' : ''}" onclick="quizSelectMode('${m}')">${m === 'quiz' ? 'Quiz' : 'Karteikarten'}</button>`
  ).join('');

  const countBtns = qSession.mode === 'quiz'
    ? [10, 20, 0].map(n =>
        `<button class="quiz-topic-btn ${qSession.count === n ? 'active' : ''}" onclick="quizSetCount(${n})">${n === 0 ? 'Alle' : n}</button>`
      ).join('')
    : '';

  const statsLine = pct !== null
    ? `<div class="quiz-stats">${p.totalAnswered} beantwortet · ${pct}% korrekt</div>`
    : `<div class="quiz-stats">Noch keine Antworten gespeichert</div>`;

  getDetail().innerHTML = `
    <div class="quiz-container">
      <div class="section-title" style="margin-bottom:0.8rem">Thema</div>
      <div class="quiz-topic-grid">${topicBtns}</div>

      <div class="section-title" style="margin-bottom:0.8rem">Modus</div>
      <div class="quiz-mode-toggle">${modeBtns}</div>

      ${qSession.mode === 'quiz' ? `
      <div class="section-title" style="margin-bottom:0.8rem">Anzahl Fragen</div>
      <div class="quiz-count-toggle">${countBtns}</div>
      ` : ''}

      <button class="quiz-btn" onclick="quizStart()">Starten →</button>
      ${statsLine}
    </div>
  `;
}

function renderQuestion() {
  const q = qSession.questions[qSession.idx];
  const total = qSession.questions.length;
  const pct = Math.round((qSession.idx / total) * 100);

  const optionsHtml = q.antworten.map(a =>
    `<button class="quiz-option ${qSession.selected === a ? 'selected' : ''}" data-answer="${escAttr(a)}" onclick="quizSelectOption(this)">${a}</button>`
  ).join('');

  getDetail().innerHTML = `
    <div class="quiz-container">
      <div class="quiz-progress-wrap">
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
        <span class="quiz-progress-label">Frage ${qSession.idx + 1} / ${total}</span>
        <span class="quiz-score">${qSession.score} ✓</span>
      </div>
      <div class="quiz-question-text">${q.frage}</div>
      <div class="quiz-options">${optionsHtml}</div>
      <button class="quiz-btn" id="quiz-submit-btn" onclick="quizAnswer()" ${!qSession.selected ? 'disabled' : ''}>Antworten →</button>
    </div>
  `;
}

function renderFeedback() {
  const q = qSession.questions[qSession.idx];
  const isCorrect = qSession.selected === q.richtig;
  const total = qSession.questions.length;
  const pct = Math.round(((qSession.idx + 1) / total) * 100);

  const optionsHtml = q.antworten.map(a => {
    let cls = 'quiz-option';
    if (a === q.richtig) cls += ' correct';
    else if (a === qSession.selected && !isCorrect) cls += ' wrong';
    return `<button class="${cls}" disabled>${a}</button>`;
  }).join('');

  const feedbackCls = isCorrect ? 'correct' : 'wrong';
  const feedbackLabel = isCorrect ? 'RICHTIG' : `FALSCH — Richtig: ${q.richtig}`;
  const isLast = qSession.idx + 1 >= total;

  getDetail().innerHTML = `
    <div class="quiz-container">
      <div class="quiz-progress-wrap">
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
        <span class="quiz-progress-label">Frage ${qSession.idx + 1} / ${total}</span>
        <span class="quiz-score">${qSession.score} ✓</span>
      </div>
      <div class="quiz-question-text">${q.frage}</div>
      <div class="quiz-options">${optionsHtml}</div>
      <div class="quiz-feedback ${feedbackCls}">
        <div class="quiz-feedback-label">${feedbackLabel}</div>
        ${q.erklaerung}
      </div>
      <button class="quiz-btn" onclick="quizNext()">${isLast ? 'Ergebnis →' : 'Weiter →'}</button>
    </div>
  `;
}

function renderResults() {
  const total = qSession.questions.length;
  const pct = total > 0 ? Math.round(qSession.score / total * 100) : 0;
  const wrongIds = Object.entries(qSession.answers)
    .filter(([, correct]) => !correct)
    .map(([id]) => id);
  const wrongQuestions = qSession.questions.filter(q => wrongIds.includes(q.id));

  const weakSection = wrongQuestions.length > 0 ? `
    <div class="section-title" style="margin-bottom:0.5rem">Schwache Stellen</div>
    <ul class="quiz-weak-list">${wrongQuestions.map(q => `<li>${q.frage}</li>`).join('')}</ul>` : '';

  const retryBtn = wrongQuestions.length > 0
    ? `<button class="quiz-btn quiz-btn-ghost" onclick="quizRetryWeak()">Schwache Stellen üben</button>`
    : '';

  getDetail().innerHTML = `
    <div class="quiz-container">
      <div class="quiz-results-score">${qSession.score} / ${total}</div>
      <div class="quiz-results-sub">richtig (${pct}%)</div>
      ${weakSection}
      <div style="display:flex;gap:0.8rem;flex-wrap:wrap">
        ${retryBtn}
        <button class="quiz-btn" onclick="quizRestart()">Neues Quiz</button>
        <button class="quiz-btn quiz-btn-ghost" onclick="goHub()">← Übersicht</button>
      </div>
    </div>
  `;
}

function renderFlashcard() {
  const deck = qSession.deck;
  const idx = qSession.deckIdx;
  const card = deck[idx];
  const total = deck.length;
  const knownCount = qSession.knownIds.size;
  const openCount = total - knownCount;
  const knownPct = total > 0 ? Math.round(knownCount / total * 100) : 0;

  const progressBar = `
    <div class="quiz-progress-wrap">
      <span class="quiz-progress-label">${knownCount} bekannt</span>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${knownPct}%"></div></div>
      <span class="quiz-progress-label">${openCount} offen</span>
    </div>`;

  if (!card) {
    getDetail().innerHTML = `
      <div class="quiz-container">
        ${progressBar}
        <div style="text-align:center;padding:3rem 0">
          <div style="font-size:2rem;opacity:0.2;margin-bottom:0.8rem">✓</div>
          <p style="font-size:0.85rem;color:var(--text-muted)">Alle Karten durchgegangen!</p>
        </div>
        <div style="display:flex;gap:0.8rem;flex-wrap:wrap">
          <button class="quiz-btn" onclick="quizRestartFlashcards()">Nochmal</button>
          <button class="quiz-btn quiz-btn-ghost" onclick="goHub()">← Übersicht</button>
        </div>
      </div>
    `;
    return;
  }

  const flippedClass = qSession.flipped ? 'flipped' : '';

  getDetail().innerHTML = `
    <div class="quiz-container">
      ${progressBar}
      <div class="flashcard-wrap">
        <div class="flashcard ${flippedClass}" id="flashcard-el" onclick="quizFlipCard()">
          <div class="flashcard-face front">
            <div class="flashcard-label">Vorderseite</div>
            <div class="flashcard-content">${card.vorderseite}</div>
            <div class="flashcard-hint">Tippen zum Umdrehen ↕</div>
          </div>
          <div class="flashcard-face back">
            <div class="flashcard-label">Rückseite</div>
            <div class="flashcard-content">${card.rueckseite}</div>
          </div>
        </div>
      </div>
      <div class="flashcard-actions">
        <button class="quiz-btn quiz-btn-ghost" onclick="quizMarkCard(false)">↩ Wiederholen</button>
        <button class="quiz-btn" onclick="quizMarkCard(true)">✓ Bekannt</button>
      </div>
      <div style="text-align:center;margin-top:0.8rem;font-size:0.68rem;font-family:'IBM Plex Mono',monospace;color:var(--text-dim)">${idx + 1} / ${total}</div>
    </div>
  `;
}

// === EVENT HANDLERS ===

window.quizSelectTopic = function (topic) {
  qSession.topic = topic;
  renderQuizLanding();
};

window.quizSelectMode = function (mode) {
  qSession.mode = mode;
  renderQuizLanding();
};

window.quizSetCount = function (n) {
  qSession.count = n;
  renderQuizLanding();
};

window.quizStart = function () {
  qProgress = loadProgress();
  if (qSession.mode === 'quiz') {
    let pool = buildQuestionPool(qSession.topic);
    if (qSession.count > 0 && pool.length > qSession.count) {
      pool = pool.slice(0, qSession.count);
    }
    qSession.questions = pool;
    qSession.idx = 0;
    qSession.score = 0;
    qSession.answers = {};
    qSession.selected = null;
    renderQuestion();
  } else {
    const deck = buildFlashcardDeck(qSession.topic);
    qSession.deck = deck;
    qSession.deckIdx = 0;
    qSession.flipped = false;
    // restore known IDs from progress
    qSession.knownIds = new Set(
      Object.entries(qProgress.flashcards.byId)
        .filter(([, v]) => v.known)
        .map(([k]) => k)
    );
    renderFlashcard();
  }
};

window.quizSelectOption = function (el) {
  qSession.selected = el.getAttribute('data-answer');
  document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  const btn = document.getElementById('quiz-submit-btn');
  if (btn) btn.disabled = false;
};

window.quizAnswer = function () {
  if (!qSession.selected) return;
  const q = qSession.questions[qSession.idx];
  const isCorrect = qSession.selected === q.richtig;
  if (isCorrect) qSession.score++;
  qSession.answers[q.id] = isCorrect;
  recordAnswer(q.id, isCorrect);
  renderFeedback();
};

window.quizNext = function () {
  qSession.idx++;
  qSession.selected = null;
  if (qSession.idx >= qSession.questions.length) {
    renderResults();
  } else {
    renderQuestion();
  }
};

window.quizFlipCard = function () {
  qSession.flipped = !qSession.flipped;
  const el = document.getElementById('flashcard-el');
  if (el) el.classList.toggle('flipped', qSession.flipped);
};

window.quizMarkCard = function (known) {
  const card = qSession.deck[qSession.deckIdx];
  if (!card) return;
  markCard(card.id, known);
  if (known) {
    qSession.knownIds.add(card.id);
  } else {
    qSession.knownIds.delete(card.id);
  }
  qSession.deckIdx++;
  qSession.flipped = false;
  renderFlashcard();
};

window.quizRetryWeak = function () {
  const pool = buildQuestionPool(qSession.topic);
  const wrongIds = Object.entries(qSession.answers)
    .filter(([, correct]) => !correct)
    .map(([id]) => id);
  const weakPool = pool.filter(q => wrongIds.includes(q.id));
  qSession.questions = weakPool.length > 0 ? weakPool : pool;
  qSession.idx = 0;
  qSession.score = 0;
  qSession.answers = {};
  qSession.selected = null;
  renderQuestion();
};

window.quizRestart = function () {
  renderQuizLanding();
};

window.quizRestartFlashcards = function () {
  const deck = buildFlashcardDeck(qSession.topic);
  qSession.deck = deck;
  qSession.deckIdx = 0;
  qSession.flipped = false;
  renderFlashcard();
};

window.renderQuizLanding = renderQuizLanding;

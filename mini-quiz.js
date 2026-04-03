// mini-quiz.js — Contextual mini-quiz at the bottom of detail pages
// Completely isolated from quiz.js — no shared state, no localStorage, no shared functions.

let mqSession = {
  questions: [],
  idx: 0,
  score: 0,
  selected: null,
  done: false,
  type: null,
  item: null,
};

// === Helpers ===

function mqShuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mqPickDistractors(pool, correct, n) {
  const unique = [...new Set(pool)].filter(x => x !== correct && x != null && String(x).trim() !== '');
  return mqShuffle(unique).slice(0, n);
}

function mqEsc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// === Question generators (scoped to current item) ===

function mqGenMedQuestions(m) {
  const questions = [];
  const classKeys = Object.keys(CLASSES);

  // Q1: Substanzklasse
  const d1 = mqPickDistractors(classKeys, m.klasse, 3);
  if (d1.length === 3) {
    questions.push({
      frage: `Welcher Substanzklasse gehört <strong>${m.name}</strong> an?`,
      antworten: mqShuffle([m.klasse, ...d1]),
      richtig: m.klasse,
      erklaerung: `${m.name} ist ein ${m.klasse}. Mechanismus: ${m.mechanismus.slice(0, 120)}…`,
    });
  }

  // Q2: Handelsname
  if (m.handelsname) {
    const richtig = m.handelsname.split('/')[0].trim();
    const pool = MEDS.filter(x => x.name !== m.name && x.handelsname)
                     .map(x => x.handelsname.split('/')[0].trim());
    const d2 = mqPickDistractors(pool, richtig, 3);
    if (d2.length >= 3) {
      questions.push({
        frage: `Unter welchem Handelsnamen ist <strong>${m.name}</strong> bekannt?`,
        antworten: mqShuffle([richtig, ...d2.slice(0, 3)]),
        richtig,
        erklaerung: `${m.name} wird unter dem Handelsnamen <strong>${m.handelsname}</strong> vermarktet.`,
      });
    }
  }

  // Q3: Indikation
  if (m.indikationen && m.indikationen.length > 0) {
    const richtig = m.indikationen[0];
    const pool = MEDS.filter(x => x.name !== m.name).flatMap(x => x.indikationen || [])
                     .filter(i => !m.indikationen.includes(i));
    const d3 = mqPickDistractors(pool, richtig, 3);
    if (d3.length >= 3) {
      questions.push({
        frage: `Welche ist eine Indikation für <strong>${m.name}</strong>?`,
        antworten: mqShuffle([richtig, ...d3.slice(0, 3)]),
        richtig,
        erklaerung: `${m.name} wird u.a. eingesetzt bei: ${m.indikationen.slice(0, 3).join(', ')}.`,
      });
    }
  }

  // Q4: Kontraindikation
  if (m.kontraindikationen && m.kontraindikationen.length > 0) {
    const richtig = m.kontraindikationen[0];
    const pool = MEDS.filter(x => x.name !== m.name).flatMap(x => x.kontraindikationen || [])
                     .filter(k => !m.kontraindikationen.includes(k));
    const d4 = mqPickDistractors(pool, richtig, 3);
    if (d4.length >= 3) {
      questions.push({
        frage: `Was ist eine Kontraindikation für <strong>${m.name}</strong>?`,
        antworten: mqShuffle([richtig, ...d4.slice(0, 3)]),
        richtig,
        erklaerung: `Kontraindikationen für ${m.name}: ${m.kontraindikationen.slice(0, 3).join(', ')}.`,
      });
    }
  }

  // Q5: Rezeptorprofil (if available)
  if (m.rezeptoren) {
    const entries = Object.entries(m.rezeptoren);
    if (entries.length > 0) {
      const [key, richtig] = entries[Math.floor(Math.random() * entries.length)];
      const allVals = ['0', '+/-', '+', '++', '+++'];
      const d5 = allVals.filter(v => v !== richtig).slice(0, 3);
      questions.push({
        frage: `Wie stark wirkt <strong>${m.name}</strong> auf den <strong>${key}</strong>-Rezeptor?`,
        antworten: mqShuffle([richtig, ...d5]),
        richtig,
        erklaerung: `${m.name} wirkt mit Stärke „${richtig}" auf den ${key}-Rezeptor.`,
      });
    }
  }

  return mqShuffle(questions).slice(0, 5);
}

function mqGenReceptorQuestions(r) {
  const questions = [];

  // Q1: Funktion
  const funTrunc = s => s.length > 90 ? s.slice(0, 88) + '…' : s;
  const richtigFun = funTrunc(r.funktion);
  const funPool = RECEPTORS.filter(x => x.name !== r.name).map(x => funTrunc(x.funktion));
  const d1 = mqPickDistractors(funPool, richtigFun, 3);
  if (d1.length >= 3) {
    questions.push({
      frage: `Was ist die physiologische Funktion des <strong>${r.name}</strong>?`,
      antworten: mqShuffle([richtigFun, ...d1.slice(0, 3)]),
      richtig: richtigFun,
      erklaerung: `${r.name} (${r.fullname.split('(')[0].trim()}): ${r.funktion}`,
    });
  }

  // Q2: Effekt bei Hemmung
  const hemTrunc = s => s.length > 90 ? s.slice(0, 88) + '…' : s;
  const richtigHem = hemTrunc(r.effektHemmung);
  const hemPool = RECEPTORS.filter(x => x.name !== r.name).map(x => hemTrunc(x.effektHemmung));
  const d2 = mqPickDistractors(hemPool, richtigHem, 3);
  if (d2.length >= 3) {
    questions.push({
      frage: `Welchen Effekt hat die Hemmung / Blockade des <strong>${r.name}</strong>?`,
      antworten: mqShuffle([richtigHem, ...d2.slice(0, 3)]),
      richtig: richtigHem,
      erklaerung: `Effekt bei Hemmung des ${r.name}: ${r.effektHemmung}`,
    });
  }

  // Q3: Stärkste Substanz
  const topMeds = r.medikamente['+++'] || [];
  if (topMeds.length > 0) {
    const richtig = topMeds[0];
    const pool = [
      ...(r.medikamente['+'] || []).filter(n => !topMeds.includes(n)),
      ...MEDS.map(m => m.name).filter(n => !topMeds.includes(n))
    ];
    const d3 = mqPickDistractors(pool, richtig, 3);
    if (d3.length >= 3) {
      questions.push({
        frage: `Welche Substanz wirkt am stärksten auf den <strong>${r.name}</strong>?`,
        antworten: mqShuffle([richtig, ...d3.slice(0, 3)]),
        richtig,
        erklaerung: `Am stärksten am ${r.name} (${r.fullname.split('(')[0].trim()}) wirken: ${topMeds.join(', ')}.`,
      });
    }
  }

  return mqShuffle(questions).slice(0, 4);
}

function mqGenKBQuestions(kb) {
  const questions = [];
  const kbs = window.KRANKHEITSBILDER || [];

  // Q1: ICD-10
  const allIcd = kbs.map(k => k.icd10);
  const fakeIcd = ['F32', 'F41.1', 'F60.3', 'F31', 'F84.0', 'F10', 'F90', 'F50', 'F43.0'];
  const icdPool = [...allIcd.filter(i => i !== kb.icd10), ...fakeIcd.filter(i => !allIcd.includes(i))];
  const d1 = mqPickDistractors(icdPool, kb.icd10, 3);
  if (d1.length >= 3) {
    questions.push({
      frage: `Welches ist der ICD-10-Code für <strong>${kb.name}</strong>?`,
      antworten: mqShuffle([kb.icd10, ...d1.slice(0, 3)]),
      richtig: kb.icd10,
      erklaerung: `${kb.name} wird nach ICD-10 unter <strong>${kb.icd10}</strong> kodiert (${kb.kategorie}).`,
    });
  }

  // Q2: Diagnostische Kategorie
  const allKat = [...new Set(kbs.map(k => k.kategorie))];
  const fakeKat = ['Persönlichkeitsstörungen', 'Suchterkrankungen', 'Neurotische Störungen', 'Entwicklungsstörungen', 'Schlafstörungen'];
  const katPool = [...allKat.filter(k => k !== kb.kategorie), ...fakeKat.filter(k => !allKat.includes(k))];
  const d2 = mqPickDistractors(katPool, kb.kategorie, 3);
  if (d2.length >= 3) {
    questions.push({
      frage: `Welcher diagnostischen Gruppe gehört <strong>${kb.name}</strong> nach ICD-10 an?`,
      antworten: mqShuffle([kb.kategorie, ...d2.slice(0, 3)]),
      richtig: kb.kategorie,
      erklaerung: `${kb.name} gehört zur Gruppe der ${kb.kategorie} (ICD-10: ${kb.icd10}).`,
    });
  }

  // Q3+: Authored QUIZ_FAKTEN matching this Krankheitsbild
  (window.QUIZ_FAKTEN || [])
    .filter(f => f.bezug === kb.id)
    .forEach(f => {
      questions.push({
        frage: f.frage,
        antworten: mqShuffle([f.richtig, ...f.distractors]),
        richtig: f.richtig,
        erklaerung: f.erklaerung,
      });
    });

  return mqShuffle(questions).slice(0, 5);
}

// === Render functions ===

function mqGetWrap() {
  return document.getElementById('mini-quiz-wrap');
}

function mqRenderQuestion() {
  const wrap = mqGetWrap();
  if (!wrap) return;
  const q = mqSession.questions[mqSession.idx];
  const total = mqSession.questions.length;
  const pct = Math.round((mqSession.idx / total) * 100);

  const optionsHtml = q.antworten.map(a =>
    `<button class="quiz-option ${mqSession.selected === a ? 'selected' : ''}" data-mq-answer="${mqEsc(a)}" onclick="mqSelectOption(this)">${a}</button>`
  ).join('');

  wrap.innerHTML = `
    <div class="mq-header">
      <span class="mq-label">Mini-Quiz</span>
      <span class="mq-counter">${mqSession.idx + 1} / ${total}</span>
    </div>
    <div class="mq-progress-bar"><div class="mq-progress-fill" style="width:${pct}%"></div></div>
    <div class="mq-question">${q.frage}</div>
    <div class="quiz-options">${optionsHtml}</div>
    <button class="quiz-btn" id="mq-submit-btn" onclick="mqAnswer()" ${!mqSession.selected ? 'disabled' : ''}>Antworten →</button>
  `;
}

function mqRenderFeedback() {
  const wrap = mqGetWrap();
  if (!wrap) return;
  const q = mqSession.questions[mqSession.idx];
  const isCorrect = mqSession.selected === q.richtig;
  const total = mqSession.questions.length;
  const pct = Math.round(((mqSession.idx + 1) / total) * 100);
  const isLast = mqSession.idx + 1 >= total;

  const optionsHtml = q.antworten.map(a => {
    let cls = 'quiz-option';
    if (a === q.richtig) cls += ' correct';
    else if (a === mqSession.selected && !isCorrect) cls += ' wrong';
    return `<button class="${cls}" disabled>${a}</button>`;
  }).join('');

  const feedbackCls = isCorrect ? 'correct' : 'wrong';
  const feedbackLabel = isCorrect ? 'RICHTIG' : `FALSCH — Richtig: ${q.richtig}`;

  wrap.innerHTML = `
    <div class="mq-header">
      <span class="mq-label">Mini-Quiz</span>
      <span class="mq-counter">${mqSession.idx + 1} / ${total}</span>
    </div>
    <div class="mq-progress-bar"><div class="mq-progress-fill" style="width:${pct}%"></div></div>
    <div class="mq-question">${q.frage}</div>
    <div class="quiz-options">${optionsHtml}</div>
    <div class="quiz-feedback ${feedbackCls}">
      <div class="quiz-feedback-label">${feedbackLabel}</div>
      ${q.erklaerung}
    </div>
    <button class="quiz-btn" onclick="mqNext()">${isLast ? 'Ergebnis →' : 'Weiter →'}</button>
  `;
}

function mqRenderResults() {
  const wrap = mqGetWrap();
  if (!wrap) return;
  const total = mqSession.questions.length;
  const pct = total > 0 ? Math.round(mqSession.score / total * 100) : 0;

  wrap.innerHTML = `
    <div class="mq-header">
      <span class="mq-label">Mini-Quiz — Ergebnis</span>
    </div>
    <div class="mq-results">
      <span class="mq-results-score">${mqSession.score} / ${total}</span>
      <span class="mq-results-sub">richtig (${pct}%)</span>
    </div>
    <button class="quiz-btn quiz-btn-ghost" onclick="mqRestart()" style="margin-top:1.2rem">Nochmal →</button>
  `;
}

// === Event handlers ===

window.mqSelectOption = function(el) {
  mqSession.selected = el.getAttribute('data-mq-answer');
  document.querySelectorAll('#mini-quiz-wrap .quiz-option').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  const btn = document.getElementById('mq-submit-btn');
  if (btn) btn.disabled = false;
};

window.mqAnswer = function() {
  if (!mqSession.selected) return;
  const q = mqSession.questions[mqSession.idx];
  if (mqSession.selected === q.richtig) mqSession.score++;
  mqRenderFeedback();
};

window.mqNext = function() {
  mqSession.idx++;
  mqSession.selected = null;
  if (mqSession.idx >= mqSession.questions.length) {
    mqSession.done = true;
    mqRenderResults();
  } else {
    mqRenderQuestion();
  }
};

window.mqRestart = function() {
  mqSession.idx = 0;
  mqSession.score = 0;
  mqSession.selected = null;
  mqSession.done = false;
  mqSession.questions = mqShuffle(mqSession.questions);
  mqRenderQuestion();
};

// Called from app.js after each detail render
window.initMiniQuiz = function(type, item) {
  let questions = [];
  if (type === 'med') questions = mqGenMedQuestions(item);
  else if (type === 'rec') questions = mqGenReceptorQuestions(item);
  else if (type === 'kb') questions = mqGenKBQuestions(item);

  mqSession = { questions, idx: 0, score: 0, selected: null, done: false, type, item };

  if (questions.length === 0) {
    const wrap = mqGetWrap();
    if (wrap) wrap.style.display = 'none';
    return;
  }

  mqRenderQuestion();
};

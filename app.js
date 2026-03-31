const CLASSES = {
  SSRI:   { color: '#52b788', bg: '#0d2e1f', border: '#1a4d35' },
  SNRI:   { color: '#74c0fc', bg: '#0d2340', border: '#1a3d6b' },
  TZA:    { color: '#da77f2', bg: '#2a0d3e', border: '#4a1a6b' },
  MAO:    { color: '#ff8787', bg: '#3e0d0d', border: '#6b1a1a' },
  NRI:    { color: '#ffa94d', bg: '#3e2000', border: '#6b3a00' },
  Andere: { color: '#a9e34b', bg: '#1e3000', border: '#3a5500' },
};

let activeFilter = 'all';
let activeMed = null;
let activeView = 'hub';
let activeRec = null;
let activeKrankheit = null;

function getClassStyle(klasse) {
  return CLASSES[klasse] || CLASSES['Andere'];
}

function setFilter(filter, el) {
  activeFilter = filter;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  renderSidebar();
}

function filterMeds() {
  renderSidebar();
}

function getFilteredMeds() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  return MEDS.filter(m => {
    const matchFilter = activeFilter === 'all' || m.klasse === activeFilter;
    const matchSearch = !q || m.name.toLowerCase().includes(q) || m.klasse.toLowerCase().includes(q) || (m.handelsname && m.handelsname.toLowerCase().includes(q));
    return matchFilter && matchSearch;
  });
}

function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  const meds = getFilteredMeds();

  if (meds.length === 0) {
    sidebar.innerHTML = '<div class="no-results">Keine Medikamente gefunden</div>';
    return;
  }

  const groups = {};
  meds.forEach(m => {
    if (!groups[m.klasse]) groups[m.klasse] = [];
    groups[m.klasse].push(m);
  });

  const order = ['SSRI', 'SNRI', 'TZA', 'MAO', 'NRI', 'Andere'];
  let html = '';

  order.forEach(klasse => {
    if (!groups[klasse]) return;
    const style = getClassStyle(klasse);
    html += `<div class="group-label">${klasse}</div>`;
    groups[klasse].forEach(m => {
      const isActive = activeMed && activeMed.name === m.name;
      html += `<div class="med-item ${isActive ? 'active' : ''}" onclick="showMed('${m.name}')">
        <div class="med-dot" style="background:${style.color}"></div>
        <span class="med-name">${m.name}</span>
        <span class="med-class-tag">${m.handelsname ? m.handelsname.split('/')[0].trim() : ''}</span>
      </div>`;
    });
  });

  sidebar.innerHTML = html;
}

function showMed(name) {
  activeMed = MEDS.find(m => m.name === name);
  if (!activeMed) return;
  renderSidebar();
  renderDetail();
}

function renderDetail() {
  const m = activeMed;
  const style = getClassStyle(m.klasse);
  const detail = document.getElementById('detail');

  const nwList = m.nebenwirkungen.map(nw => `<li>${nw}</li>`).join('');
  const indList = m.indikationen.map(i => `<li>${i}</li>`).join('');
  const kontraList = m.kontraindikationen.map(k => `<li>${k}</li>`).join('');

  detail.innerHTML = `
    <div class="detail-header">
      <div class="detail-class-badge" style="background:${style.bg};color:${style.color};border:1px solid ${style.border}">${m.klasse}</div>
      <div class="detail-name">${m.name}</div>
      ${m.handelsname ? `<div class="detail-generic">${m.handelsname}</div>` : ''}
    </div>
    <div class="sections">
      <div class="section-card full">
        <div class="section-title">Wirkungsmechanismus</div>
        <div class="section-content">${m.mechanismus}</div>
      </div>
      ${m.rezeptoren ? `
      <div class="section-card full">
        <div class="section-title">Rezeptorprofil</div>
        <div class="section-content">
          <div class="rezeptor-grid">
            ${Object.entries(m.rezeptoren).map(([key, val]) => `
              <div class="rezeptor-item">
                <span class="rezeptor-label">${key}</span>
                <span class="rezeptor-val">${val}</span>
              </div>`).join('')}
          </div>
        </div>
      </div>` : ''}
      <div class="section-card">
        <div class="section-title">Indikationen</div>
        <div class="section-content"><ul>${indList}</ul></div>
      </div>
      <div class="section-card">
        <div class="section-title">Dosierung</div>
        <div class="section-content">${m.dosierung}</div>
      </div>
      <div class="section-card">
        <div class="section-title">Nebenwirkungen</div>
        <div class="section-content"><ul>${nwList}</ul></div>
      </div>
      <div class="section-card">
        <div class="section-title">Kontraindikationen</div>
        <div class="section-content"><ul>${kontraList}</ul></div>
      </div>
      <div class="cave-card">
        <div class="cave-title">⚠ Cave / Besonderheiten</div>
        <div class="section-content">${m.cave}</div>
      </div>
    </div>
  `;
}

function renderHub() {
  document.getElementById('detail').innerHTML = `
    <div class="hub-grid">
      <div class="hub-card" onclick="setView('meds', null)">
        <div class="hub-card-icon">⊕</div>
        <div class="hub-card-title">Medikamente</div>
        <div class="hub-card-sub">Antidepressiva nach Klasse durchsuchen</div>
        <div class="hub-card-pills">
          <span class="hub-pill" style="background:var(--ssri-bg);color:var(--ssri);border:1px solid var(--ssri-border)">SSRI</span>
          <span class="hub-pill" style="background:var(--snri-bg);color:var(--snri);border:1px solid var(--snri-border)">SNRI</span>
          <span class="hub-pill" style="background:var(--tza-bg);color:var(--tza);border:1px solid var(--tza-border)">TZA</span>
          <span class="hub-pill" style="background:var(--mao-bg);color:var(--mao);border:1px solid var(--mao-border)">MAO</span>
          <span class="hub-pill" style="background:var(--nri-bg);color:var(--nri);border:1px solid var(--nri-border)">NRI</span>
        </div>
      </div>
      <div class="hub-card" onclick="setView('rezept', null)">
        <div class="hub-card-icon">⬡</div>
        <div class="hub-card-title">Rezeptoren</div>
        <div class="hub-card-sub">Monoamin-Transporter und Rezeptorprofile</div>
        <div class="hub-card-pills">
          <span class="hub-pill" style="background:var(--accent-dim);color:var(--accent);border:1px solid rgba(79,195,247,0.25)">SERT</span>
          <span class="hub-pill" style="background:var(--accent-dim);color:var(--accent);border:1px solid rgba(79,195,247,0.25)">NET</span>
          <span class="hub-pill" style="background:var(--accent-dim);color:var(--accent);border:1px solid rgba(79,195,247,0.25)">5-HT</span>
        </div>
      </div>
      <div class="hub-card" onclick="setView('krankheit', null)">
        <div class="hub-card-icon">◈</div>
        <div class="hub-card-title">Krankheitsbilder</div>
        <div class="hub-card-sub">Diagnosen, Kriterien und Therapiehinweise</div>
        <div class="hub-card-pills">
          <span class="hub-pill" style="background:rgba(116,192,252,0.08);color:#74c0fc;border:1px solid rgba(116,192,252,0.2)">Depression</span>
          <span class="hub-pill" style="background:rgba(255,169,77,0.08);color:#ffa94d;border:1px solid rgba(255,169,77,0.2)">PTBS</span>
        </div>
      </div>
      <div class="hub-card hub-card-quiz" onclick="setView('quiz', null)">
        <div class="hub-card-icon">◎</div>
        <div class="hub-card-title">Übungen</div>
        <div class="hub-card-sub">Quiz und Karteikarten zu Medikamenten, Rezeptoren und Krankheitsbildern</div>
        <div class="hub-card-pills">
          <span class="hub-pill" style="background:rgba(79,195,247,0.08);color:var(--accent);border:1px solid rgba(79,195,247,0.2)">Quiz</span>
          <span class="hub-pill" style="background:rgba(79,195,247,0.08);color:var(--accent);border:1px solid rgba(79,195,247,0.2)">Karteikarten</span>
          <span class="hub-pill" style="background:rgba(79,195,247,0.08);color:var(--accent);border:1px solid rgba(79,195,247,0.2)">Fortschritt</span>
        </div>
      </div>
    </div>`;
}

function goHub() { setView('hub', null); }

function handleSearch() {
  if (activeView === 'hub' || activeView === 'quiz') return;
  if (activeView === 'meds') renderSidebar();
  else if (activeView === 'rezept') renderReceptorSidebar();
  else renderKrankheitsbilderSidebar();
}

function setView(view, el) {
  activeView = view;
  const isHub = view === 'hub';

  document.getElementById('back-btn').style.display = isHub ? 'none' : '';
  document.getElementById('filter-bar').style.display = (!isHub && view === 'meds') ? '' : 'none';
  document.getElementById('main').classList.toggle('hub-layout', isHub);
  document.getElementById('search').closest('.search-wrap').style.display = isHub ? 'none' : '';

  document.documentElement.style.setProperty(
    '--chrome-height',
    isHub ? '58px' : (view === 'meds' ? '107px' : '58px')
  );

  if (isHub) { renderHub(); return; }

  if (view === 'quiz') {
    document.getElementById('main').classList.add('hub-layout');
    document.getElementById('search').closest('.search-wrap').style.display = 'none';
    window.renderQuizLanding();
    return;
  }

  const labels = { meds: 'ein Medikament', rezept: 'einen Rezeptor', krankheit: 'ein Krankheitsbild' };
  document.getElementById('detail').innerHTML = `
    <div class="detail-empty">
      <div class="big">⊕</div>
      <p>Wähle ${labels[view] || 'einen Eintrag'}<br>aus der Liste</p>
    </div>`;
  if (view === 'meds') renderSidebar();
  else if (view === 'rezept') renderReceptorSidebar();
  else renderKrankheitsbilderSidebar();
}

function getFilteredReceptors() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  if (!q) return RECEPTORS;
  return RECEPTORS.filter(r =>
    r.name.toLowerCase().includes(q) ||
    r.fullname.toLowerCase().includes(q) ||
    r.kategorie.toLowerCase().includes(q)
  );
}

function renderReceptorSidebar() {
  const sidebar = document.getElementById('sidebar');
  const recs = getFilteredReceptors();

  if (recs.length === 0) {
    sidebar.innerHTML = '<div class="no-results">Keine Rezeptoren gefunden</div>';
    return;
  }

  const order = ['Monoamin-Transporter', 'Rezeptoren'];
  const groups = {};
  recs.forEach(r => {
    if (!groups[r.kategorie]) groups[r.kategorie] = [];
    groups[r.kategorie].push(r);
  });

  let html = '';
  order.forEach(kat => {
    if (!groups[kat]) return;
    html += `<div class="group-label">${kat}</div>`;
    groups[kat].forEach(r => {
      const isActive = activeRec && activeRec.name === r.name;
      html += `<div class="med-item ${isActive ? 'active' : ''}" onclick="showRec('${r.name}')">
        <div class="med-dot rec-dot"></div>
        <span class="med-name">${r.name}</span>
        <span class="med-class-tag">${r.fullname.split('(')[0].trim()}</span>
      </div>`;
    });
  });

  sidebar.innerHTML = html;
}

function showRec(name) {
  activeRec = RECEPTORS.find(r => r.name === name);
  if (!activeRec) return;
  renderReceptorSidebar();
  renderReceptorDetail();
}

function renderReceptorDetail() {
  const r = activeRec;
  const detail = document.getElementById('detail');

  const nwList = r.nebenwirkungen.map(nw => `<li>${nw}</li>`).join('');
  const besondList = r.besonderheiten.map(b => `<li>${b}</li>`).join('');

  const stärkeOrder = ['+++', '++', '+'];
  const medRows = stärkeOrder
    .filter(s => r.medikamente[s] && r.medikamente[s].length)
    .map(s => `
      <div class="rec-med-row">
        <span class="rec-med-strength">${s}</span>
        <span class="rec-med-names">${r.medikamente[s].join(', ')}</span>
      </div>`).join('');

  detail.innerHTML = `
    <div class="detail-header">
      <div class="detail-class-badge rec-badge">${r.kategorie}</div>
      <div class="detail-name">${r.name}</div>
      <div class="detail-generic">${r.fullname}${r.gen ? ` — Gen: ${r.gen}` : ''}</div>
    </div>
    <div class="sections">
      <div class="section-card full">
        <div class="section-title">Lokalisation</div>
        <div class="section-content">${r.lokalisation}</div>
      </div>
      <div class="section-card">
        <div class="section-title">Physiologische Funktion</div>
        <div class="section-content">${r.funktion}</div>
      </div>
      <div class="section-card">
        <div class="section-title">Effekt bei Aktivierung</div>
        <div class="section-content">${r.effektAktivierung}</div>
      </div>
      <div class="section-card">
        <div class="section-title">Effekt bei Hemmung / Blockade</div>
        <div class="section-content">${r.effektHemmung}</div>
      </div>
      <div class="section-card">
        <div class="section-title">Therapeutischer Nutzen</div>
        <div class="section-content">${r.therapeutisch}</div>
      </div>
      <div class="section-card">
        <div class="section-title">Nebenwirkungen</div>
        <div class="section-content"><ul>${nwList}</ul></div>
      </div>
      <div class="section-card full">
        <div class="section-title">Medikamente mit Wirkung an diesem Rezeptor</div>
        <div class="section-content">
          <div class="rec-med-table">${medRows}</div>
        </div>
      </div>
      <div class="cave-card">
        <div class="cave-title">Merksatz</div>
        <div class="section-content">${r.merksatz}</div>
      </div>
      ${r.besonderheiten && r.besonderheiten.length ? `
      <div class="cave-card">
        <div class="cave-title">⚠ Besonderheiten & Klinische Warnungen</div>
        <div class="section-content"><ul>${besondList}</ul></div>
      </div>` : ''}
    </div>
  `;
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function getFilteredKrankheitsbilder() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  if (!q) return KRANKHEITSBILDER;
  return KRANKHEITSBILDER.filter(k =>
    k.name.toLowerCase().includes(q) ||
    k.subtitle.toLowerCase().includes(q) ||
    k.kategorie.toLowerCase().includes(q)
  );
}

function renderKrankheitsbilderSidebar() {
  const sidebar = document.getElementById('sidebar');
  const items = getFilteredKrankheitsbilder();

  if (items.length === 0) {
    sidebar.innerHTML = '<div class="no-results">Keine Krankheitsbilder gefunden</div>';
    return;
  }

  const groups = {};
  items.forEach(k => {
    if (!groups[k.kategorie]) groups[k.kategorie] = [];
    groups[k.kategorie].push(k);
  });

  let html = '';
  Object.keys(groups).sort().forEach(kat => {
    html += `<div class="group-label">${kat}</div>`;
    groups[kat].forEach(k => {
      const isActive = activeKrankheit && activeKrankheit.id === k.id;
      html += `<div class="med-item ${isActive ? 'active' : ''}" onclick="showKrankheit('${k.id}')">
        <div class="med-dot" style="background:${k.farbe}"></div>
        <span class="med-name">${k.name}</span>
        <span class="med-class-tag">${k.icd10}</span>
      </div>`;
    });
  });

  sidebar.innerHTML = html;
}

function showKrankheit(id) {
  activeKrankheit = KRANKHEITSBILDER.find(k => k.id === id);
  if (!activeKrankheit) return;
  renderKrankheitsbilderSidebar();
  renderKrankheitDetail();
}

function renderKrankheitDetail() {
  const k = activeKrankheit;
  const detail = document.getElementById('detail');
  const farbeBg = hexToRgba(k.farbe, 0.08);
  const farbeBorder = hexToRgba(k.farbe, 0.25);

  let sectionsHtml = '';
  k.sektionen.forEach(sek => {
    let content = '';
    if (sek.intro) {
      content += `<p class="kb-intro">${sek.intro}</p>`;
    }
    if (sek.gruppen) {
      sek.gruppen.forEach(g => {
        const items = g.punkte.map(p => `<li>${p}</li>`).join('');
        content += `<div class="kb-gruppe">
          <div class="kb-gruppe-titel">${g.titel}</div>
          <ul>${items}</ul>
        </div>`;
      });
    } else if (sek.punkte) {
      const items = sek.punkte.map(p => `<li>${p}</li>`).join('');
      content += `<ul>${items}</ul>`;
    }
    sectionsHtml += `<div class="section-card full">
      <div class="section-title">${sek.titel}</div>
      <div class="section-content">${content}</div>
    </div>`;
  });

  detail.innerHTML = `
    <div class="detail-header">
      <div class="detail-class-badge" style="background:${farbeBg};color:${k.farbe};border:1px solid ${farbeBorder}">${k.kategorie}</div>
      <div class="detail-name">${k.name}</div>
      ${k.subtitle ? `<div class="detail-generic">${k.subtitle}${k.icd10 ? ` · ICD-10: ${k.icd10}` : ''}</div>` : ''}
    </div>
    <div class="sections">
      <div class="section-card full">
        <div class="section-title">Definition</div>
        <div class="section-content">${k.definition}</div>
      </div>
      ${sectionsHtml}
      <div class="cave-card">
        <div class="cave-title">⚠ Cave / Warnhinweise</div>
        <div class="section-content">${k.cave}</div>
      </div>
      ${k.merksaetze && k.merksaetze.length ? `
      <div class="merke-card">
        <div class="merke-title">Merke</div>
        <div class="section-content"><ul>${k.merksaetze.map(m => `<li>${m}</li>`).join('')}</ul></div>
      </div>` : ''}
    </div>
  `;
}

window.setFilter = setFilter;
window.filterMeds = filterMeds;
window.showMed = showMed;
window.handleSearch = handleSearch;
window.setView = setView;
window.showRec = showRec;
window.showKrankheit = showKrankheit;
window.goHub = goHub;

setView('hub', null);

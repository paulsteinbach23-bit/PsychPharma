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
let activeView = 'meds';
let activeRec = null;

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

function handleSearch() {
  activeView === 'meds' ? renderSidebar() : renderReceptorSidebar();
}

function setView(view, el) {
  activeView = view;
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('filter-bar').style.display = view === 'meds' ? '' : 'none';
  document.documentElement.style.setProperty('--chrome-height', view === 'meds' ? '149px' : '100px');
  document.getElementById('detail').innerHTML = `
    <div class="detail-empty">
      <div class="big">⊕</div>
      <p>Wähle ${view === 'meds' ? 'ein Medikament' : 'einen Rezeptor'}<br>aus der Liste</p>
    </div>`;
  view === 'meds' ? renderSidebar() : renderReceptorSidebar();
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

window.setFilter = setFilter;
window.filterMeds = filterMeds;
window.showMed = showMed;
window.handleSearch = handleSearch;
window.setView = setView;
window.showRec = showRec;

renderSidebar();

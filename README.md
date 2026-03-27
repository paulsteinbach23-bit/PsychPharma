# PsychPharma

A client-side reference app for psychiatric pharmacology, designed for German-speaking healthcare professionals and medical students.

No installation, no backend, no build step — open `psychiatrie_app.html` directly in any modern browser.

---

## Features

### Medikamente
- 26 antidepressants across 6 pharmacological classes (SSRI, SNRI, TZA, MAO-Hemmer, NRI, Andere)
- Filter by class or search by name / trade name
- Detail view per medication:
  - Mechanism of action
  - Receptor profile (10 receptor/transporter affinities, graded 0 → +++)
  - Indications, dosing, adverse effects, contraindications
  - Clinical warnings (Cave)

### Rezeptoren
- 9 receptor/transporter entries: SERT, NET, DAT, MAO, mACh, H₁, 5-HT₂, α₁, α₂
- Grouped into *Monoamin-Transporter* and *Rezeptoren*
- Detail view per receptor:
  - Localisation & physiological function
  - Effects of activation vs. inhibition/blockade
  - Therapeutic relevance and adverse effects
  - Graded list of medications acting on this receptor
  - Clinical mnemonics and exam-relevant notes (e.g. Serotonin syndrome, Tyramine crisis, anticholinergic syndrome)

---

## Usage

```bash
# Clone the repository
git clone https://github.com/<your-username>/PsychPharma.git
cd PsychPharma

# Open directly in the browser — no server needed
open psychiatrie_app.html        # macOS
xdg-open psychiatrie_app.html   # Linux
start psychiatrie_app.html       # Windows
```

> **Note:** The app uses plain `<script>` tags (no ES modules), so it works with `file://` URLs without a local server.

---

## Project Structure

```
PsychPharma/
├── psychiatrie_app.html   # Entry point — full app shell & layout
├── app.js                 # All application logic (rendering, state, routing)
├── style.css              # Dark theme, CSS Grid layout, all component styles
└── data/
    ├── medications.js     # MEDS[] — 26 antidepressant entries
    └── receptors.js       # RECEPTORS[] — 9 receptor/transporter entries
```

### Adding a Medication

Add an object to the `MEDS` array in `data/medications.js` following the existing schema:

```js
{
  name: 'Substanzname',
  klasse: 'SSRI',           // must match a key in CLASSES (app.js)
  handelsname: 'Handelsname',
  mechanismus: '...',
  dosierung: '...',
  indikationen: ['...'],
  nebenwirkungen: ['...'],
  kontraindikationen: ['...'],
  cave: '...',
  rezeptoren: {
    '5-HT-I': '+++', 'NA-I': '0', 'DA-I': '0',
    'MAOH': '0', 'mACh': '0', 'H₁': '0',
    '5-HT₂': '0', 'DA': '0', 'α₁': '0', 'α₂': '0'
  }
}
```

### Adding a Medication Class

1. Add an entry to `CLASSES` in `app.js` with a key, `color`, `bg`, and `border`.
2. Add a filter button in the `.filter-bar` section of `psychiatrie_app.html`.
3. Add medications with that key as their `klasse`.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styles | CSS (custom properties, CSS Grid) |
| Logic | Vanilla JavaScript (ES6) |
| Fonts | IBM Plex Sans, IBM Plex Mono, Playfair Display (Google Fonts) |
| Dependencies | **None** |

---

## Target Audience

- Medical students preparing for pharmacology exams (German-speaking countries)
- Residents and clinicians needing a quick psychiatric drug reference
- Anyone learning the receptor pharmacology of antidepressants

---

## License

MIT — free to use, modify and distribute.

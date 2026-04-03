MEDS.push(

  // ─── AAP – Atypische Antipsychotika (2. Generation) ───────────────────────

  {
    name: 'Amisulprid',
    klasse: 'AAP',
    handelsname: 'Solian',
    mechanismus: 'Selektiver D2/D3-Antagonist (Benzamid). Einzigartige dosisabhängige Wirkung: Niedrigdosis (50–300 mg) → Blockade präsynaptischer D2/D3-Autorezeptoren → ↑ Dopaminfreisetzung → Wirkung auf Negativsymptomatik; Hochdosis (400–800 mg) → postsynaptische D2-Blockade → Wirkung auf Positivsymptomatik. Kein 5-HT₂A-Antagonismus – kein klassisch atypisches Profil, trotzdem als AAP eingestuft. Rein renale Elimination.',
    dosierung: 'Positivsymptomatik: 400–800 mg/Tag (max. 1200 mg). Negativsymptomatik (Monotherapie): 50–300 mg/Tag. Dosisreduktion bei Niereninsuffizienz: GFR 30–60 → halbe Dosis; GFR 10–30 → Viertel-Dosis; GFR <10 → kontraindiziert.',
    indikationen: ['Schizophrenie (Positiv- und Negativsymptomatik)', 'Laut S3-Leitlinie: 1. Wahl bei vorwiegender Negativsymptomatik (neben Cariprazin)', 'Dysthymie (Niedrigdosis, off-label)'],
    nebenwirkungen: ['Prolaktinerhöhung (stärkste aller AAP → Amenorrhö, Galaktorrhö, Gynäkomastie, Osteoporose)', 'QTc-Verlängerung (dosisabhängig)', 'EPS bei Hochdosis', 'Wenig Sedierung', 'Wenig oder keine Gewichtszunahme', 'Wenig metabolische NW'],
    kontraindikationen: ['Phäochromozytom', 'Prolaktin-abhängige Tumore (Mammakarzinom, Hypophysenadenom)', 'QTc-Verlängerung bekannt', 'Hypokaliämie / Hypomagnesiämie (QTc-Risiko)', 'Schwere Niereninsuffizienz (GFR <10 ml/min)'],
    cave: 'Stärkste Prolaktinerhöhung aller AAP → Sexualfunktion und Knochendichte (Osteoporose) regelmäßig kontrollieren! QTc-EKG vor Therapiebeginn und bei Dosisänderung obligat. Rein renale Elimination ohne hepatischen Metabolismus → Dosisanpassung bei Niereninsuffizienz strikt erforderlich, aber sicher bei Lebererkrankungen.',
    rezeptoren: { 'D₁': '0', 'D₂': '+++', '5-HT₂A': '0/+', 'M₁': '0', 'α₁': '0', 'H₁': '0' }
  },

  {
    name: 'Aripiprazol',
    klasse: 'AAP',
    handelsname: 'Abilify / Abilify Maintena (Depot)',
    mechanismus: 'Partieller D2/D3-Agonist (Phenylpiperazinylchinolin) – sog. „Dopamin-System-Stabilisator": Bei hyperdopaminerger Aktivität (limbisch → Positivsymptomatik) wirkt Aripiprazol antagonistisch; bei hypodopaminerger Aktivität (frontal → Negativsymptomatik, Kognition) partiell agonistisch. Zusätzlich: partieller 5-HT₁A-Agonist (anxiolytisch, antidepressiv) + 5-HT₂A-Antagonist. Einziges AAP ohne Gewichtszunahme, QTc-Verlängerung oder Prolaktinerhöhung.',
    dosierung: 'Schizophrenie: 10–30 mg/Tag (Zieldosis 15 mg, einmal täglich). Manie: 15–30 mg/Tag. Augmentation bei MDD: 2–15 mg/Tag. Depot (Abilify Maintena): 400 mg/Monat i.m.; Aristada 882 mg: alle 6 Wochen; Aristada 1064 mg: alle 2 Monate.',
    indikationen: ['Schizophrenie', 'Manische und gemischte Episoden (Bipolar I)', 'Augmentation bei therapieresistenter Depression (MDD)', 'Tourette-Syndrom', 'Reizbarkeit bei Autismus-Spektrum-Störung (Kinder ≥6 J.)'],
    nebenwirkungen: ['Akathisie (häufigste UAW, bis 15% – häufigstes Abbruchkriterium!)', 'Übelkeit, Erbrechen (initial)', 'Insomnie, Agitiertheit (initial)', 'Kopfschmerzen', 'Kein metabolisches Syndrom', 'Keine Gewichtszunahme', 'Keine QTc-Verlängerung', 'Keine Prolaktinerhöhung'],
    kontraindikationen: ['Bekannte Überempfindlichkeit gegenüber Aripiprazol'],
    cave: 'Akathisie ernst nehmen und aktiv erfragen – wird oft unterschätzt und ist häufigster Grund für Therapieabbruch! Kein sedierender Effekt → ungeeignet für akute Erregungszustände. Metabolisch günstigstes Profil aller Antipsychotika. CYP3A4- und CYP2D6-Substrat: Bei Kombination mit starken CYP2D6-Inhibitoren (Fluoxetin, Paroxetin) → Aripiprazol-Dosis halbieren! Keine Dosisanpassung bei Leber- oder Niereninsuffizienz nötig.',
    rezeptoren: { 'D₁': '++', 'D₂': '+++ (part. Ag.)', '5-HT₂A': '++', 'M₁': '0', 'α₁': '+', 'H₁': '+' }
  },

  {
    name: 'Asenapin',
    klasse: 'AAP',
    handelsname: 'Sycrest',
    mechanismus: 'Dibenzoxazepinpyrrol mit sehr breitem Rezeptorprofil: starker D2/D3/D4-Antagonist + 5-HT₂A/2B/2C/7/1A-Antagonismus + H1/α1/α2-Blockade. 5-HT₇-Blockade wirkt prokognitiv. Sublingurale Formulierung ist zwingend erforderlich: oraler First-Pass-Effekt beträgt 85% → orale Schlucktablette ist klinisch wirkungslos.',
    dosierung: '5 mg zweimal täglich sublingual (Schizophrenie, Akutphase). Manie: 10 mg zweimal täglich. Erhaltung: 5 mg zweimal täglich. Keine Nahrung oder Flüssigkeit in den ersten 10 Minuten nach Einnahme!',
    indikationen: ['Schizophrenie', 'Manische und gemischte Episoden (Bipolar I)'],
    nebenwirkungen: ['Sedierung', 'Schwindel', 'Orale Hypästhesie (lokale Taubheit unter der Zunge)', 'Gewichtszunahme (moderat)', 'Orthostatische Hypotonie', 'EPS selten', 'Mundtrockenheit'],
    kontraindikationen: ['Schwere Leberinsuffizienz (Child-Pugh C)'],
    cave: 'Nur sublingual wirksam! Schlucken der Tablette macht die Einnahme klinisch wirkungslos (85% First-Pass). Keine Nahrung/Flüssigkeit 10 Minuten nach Einnahme. Schleimhautreaktion (Taubheitsgefühl) ist harmlos, aber unangenehm → Patienten aufklären. Keine i.v.- oder i.m.-Formulierung.',
    rezeptoren: { 'D₁': '++', 'D₂': '+++', '5-HT₂A': '+++', 'M₁': '+', 'α₁': '+++', 'H₁': '+++' }
  },

  {
    name: 'Brexpiprazol',
    klasse: 'AAP',
    handelsname: 'Rxulti',
    mechanismus: 'Phenylpiperazinylchinolin, strukturverwandt mit Aripiprazol. Partieller D2/D3-Agonist + partieller 5-HT₁A-Agonist + 5-HT₂A-Antagonist. Im Vergleich zu Aripiprazol: geringere intrinsische D2-Aktivität (weniger Akathisie), stärkere α1B- und H1-Affinität (mehr Sedierung, mehr Gewichtszunahme). Günstigeres Akathisie-Profil bei vergleichbarer Wirksamkeit.',
    dosierung: 'Schizophrenie: 2–4 mg/Tag (Start: 1 mg in Woche 1, 2 mg in Woche 2). Augmentation bei MDD: 0,5–3 mg/Tag (langsam einschleichen).',
    indikationen: ['Schizophrenie', 'Augmentation bei therapieresistenter Depression (MDD)', 'PTBS (in den USA zugelassen)'],
    nebenwirkungen: ['Gewichtszunahme', 'Akathisie (geringer als Aripiprazol)', 'Somnolenz', 'Nasopharyngitis', 'Kopfschmerzen'],
    kontraindikationen: ['Bekannte Überempfindlichkeit'],
    cave: 'CYP2D6- und CYP3A4-Substrat: Dosisanpassung bei schwachen CYP2D6-Metabolisierern oder starken CYP-Inhibitoren/-Induktoren. Weniger Akathisie als Aripiprazol, aber etwas mehr Gewichtszunahme und Sedierung. In Deutschland weniger verbreitet als in den USA.',
    rezeptoren: { 'D₁': '+', 'D₂': '+++ (part. Ag.)', '5-HT₂A': '++', 'M₁': '0', 'α₁': '++', 'H₁': '+' }
  },

  {
    name: 'Cariprazin',
    klasse: 'AAP',
    handelsname: 'Reagila',
    mechanismus: 'Piperazin-Derivat. Partieller D3>D2-Agonist (höchste D3-Affinität aller zugelassenen Antipsychotika!) + 5-HT₂A/2B-Antagonist. D3-Rezeptoren sind limbisch lokalisiert und für Motivation, Kognition und soziale Interaktion relevant → erklärt besondere Wirksamkeit auf Negativsymptomatik und kognitive Defizite. Aktiver Metabolit DCAR: Halbwertszeit 1–3 Wochen!',
    dosierung: 'Schizophrenie: 1,5–6 mg/Tag (Start 1,5 mg, langsam steigern). Manische Episoden: 3–6 mg/Tag. Bipolare Depression: 1,5–3 mg/Tag.',
    indikationen: ['Schizophrenie (v.a. Negativsymptomatik)', 'Laut S3-Leitlinie: 1. Wahl bei vorwiegender Negativsymptomatik (neben Amisulprid)', 'Manische Episoden (Bipolar I)', 'Bipolare Depression'],
    nebenwirkungen: ['Akathisie (häufig, insb. in den ersten Wochen)', 'EPS (Parkinsonoid, Tremor)', 'Übelkeit', 'Insomnie', 'Kein metabolisches Syndrom', 'Keine Prolaktinerhöhung', 'Keine QTc-Verlängerung'],
    kontraindikationen: ['Starke CYP3A4-Inhibitoren (Ketoconazol, Clarithromycin, HIV-Proteaseinhibitoren)', 'Starke CYP3A4-Induktoren (Rifampicin, Carbamazepin, Johanniskraut)'],
    cave: 'Sehr lange HWZ des aktiven Metaboliten (bis 3 Wochen) → nach Absetzen Wirkung und NW noch wochenlang! CYP3A4-Substrat: Interaktionen sorgfältig prüfen. Akathisie tritt v.a. zu Therapiebeginn auf – langsam einschleichen und Patienten aufklären.',
    rezeptoren: { 'D₁': '++', 'D₂': '+++ (part. Ag.)', '5-HT₂A': '+', 'M₁': '0', 'α₁': '+', 'H₁': '+' }
  },

  {
    name: 'Clozapin',
    klasse: 'AAP',
    handelsname: 'Leponex / Clozapin-Neuraxpharm',
    mechanismus: 'Dibenzodiazepin (trizyklisch). Multirezektor-Profil: Schwacher D2-Antagonist (niedrige Affinität und rasche Dissoziation = „loose and fast" → kein EPS, keine tardive Dyskinesie) + starker M1-5 / H1 / α1 / 5-HT₂A-Antagonist. Einzige Substanz mit konsistent nachgewiesener Überlegenheit bei therapieresistenter Schizophrenie (Level-I-Evidenz). Einziges AP mit nachgewiesen reduzierter Suizidmortalität.',
    dosierung: 'Start: 12,5 mg abends (Tag 1), 25 mg (Tag 2), dann wöchentlich steigern. Zieldosis: 300–600 mg/Tag in 2–3 Gaben. Abends betonte Gabe empfohlen (Sedierung nutzen). Plasmaspiegel-Monitoring obligat: Ziel ≥350 ng/mL; bei Non-Response Steigerung bis 600 ng/mL. Max. 900 mg/Tag.',
    indikationen: ['Therapieresistente Schizophrenie (Mittel der Wahl nach Versagen von ≥2 Antipsychotika einschl. eines AAP)', 'Anhaltende Suizidalität bei Schizophrenie oder schizoaffektiver Störung', 'Psychose bei Morbus Parkinson (niedrige Dosen, falls Quetiapin unzureichend)', 'Schwere tardive Dyskinesie'],
    nebenwirkungen: ['Agranulozytose (1–2%! – lebensbedrohlich, Latenz Wochen bis Monate)', 'Myokarditis/Kardiomyopathie (früh, erste 4–8 Wochen)', 'Metabolisches Syndrom (Gewichtszunahme +++, Hypertriglyzeridämie, Diabetes)', 'Ausgeprägte Sedierung', 'Hypersalivation (v.a. nachts, unangenehm)', 'Krampfanfälle (dosisabhängig, v.a. >600 mg/Tag)', 'Orthostatische Hypotonie', 'Obstipation (bis zum Ileus!)', 'Tachykardie', 'Hypertension', 'Fieber (erste Wochen)'],
    kontraindikationen: ['Knochenmarksuppression / Agranulozytose in der Anamnese', 'Aktive Lebererkrankung / Leberversagen', 'Kreislaufversagen / Koma', 'Unkontrollierte Epilepsie', 'Gleichzeitige Gabe von Substanzen mit Agranulozytose-Risiko (z.B. Carbamazepin)'],
    cave: 'BLUTBILD-MONITORING PFLICHT: Wöchentlich für die ersten 18 Wochen, dann alle 4 Wochen lebenslang. Neutrophile <1500/µl → Dosis reduzieren; <1000/µl → sofort absetzen! Myokarditis-Screening: Troponin + CRP wöchentlich in den ersten 4 Wochen + EKG. Obstipation aktiv behandeln – Ileus ist lebensbedrohlich! Nie abrupt absetzen (cholinerger Rebound + Rebound-Psychose). Fluvoxamin erhöht Clozapin-Spiegel um das 5–10-fache! Rauchen (CYP1A2-Induktion) senkt den Spiegel – bei Änderung des Rauchstatus Spiegel kontrollieren.',
    rezeptoren: { 'D₁': '++', 'D₂': '++ (niedrig)', '5-HT₂A': '++', 'M₁': '+++', 'α₁': '+++', 'H₁': '+++' }
  },

  {
    name: 'Lurasidon',
    klasse: 'AAP',
    handelsname: 'Latuda',
    mechanismus: 'Benzisothiazol. D2/5-HT₂A-Antagonist + starker 5-HT₇-Antagonist (prokognitiver und antidepressiver Effekt durch erhöhte glutamaterge Transmission) + partieller 5-HT₁A-Agonist. Kein H1-, M1- oder α1-Antagonismus → kein metabolisches Syndrom, keine Gewichtszunahme, keine Sedierung. Resorption ist stark mahlzeitabhängig.',
    dosierung: 'Schizophrenie: 40–80 mg/Tag (max. 160 mg), einmal täglich mit Mahlzeit (≥350 kcal). Bipolare Depression: 20–120 mg/Tag, einmal täglich mit Mahlzeit.',
    indikationen: ['Schizophrenie', 'Bipolare Depression (als Mono- oder Zusatztherapie zu Lithium / Valproat)'],
    nebenwirkungen: ['EPS moderat (Parkinsonoid, Akathisie)', 'Übelkeit, Somnolenz (initial)', 'Kein metabolisches Syndrom', 'Keine Gewichtszunahme', 'Keine QTc-Verlängerung', 'Keine Prolaktinerhöhung'],
    kontraindikationen: ['Starke CYP3A4-Inhibitoren (Ketoconazol, Clarithromycin)', 'Starke CYP3A4-Induktoren (Rifampicin, Carbamazepin, Johanniskraut)'],
    cave: 'MIT MAHLZEIT einnehmen (mind. 350 kcal)! Ohne Mahlzeit bis zu 50% geringere Bioverfügbarkeit – dieser Effekt ist klinisch relevant. Kein Grapefruitsaft (CYP3A4-Hemmung). Metabolisch zweitgünstigstes Profil nach Aripiprazol. Beste Evidenzlage für bipolare Depression unter den AAP.',
    rezeptoren: { 'D₁': '+', 'D₂': '+++', '5-HT₂A': '+++', 'M₁': '0', 'α₁': '+', 'H₁': '+' }
  },

  {
    name: 'Olanzapin',
    klasse: 'AAP',
    handelsname: 'Zyprexa / Zypadhera (Depot)',
    mechanismus: 'Thienobenzodiazepin (strukturell trizyklisch). Breites Multirezektor-Profil: D1-4 + 5-HT₂A/2C + M1-5 + H1 + α1-Antagonist. Ausgeprägte H1+5-HT₂C-Blockade → starker orexigener Effekt → rasche, erhebliche Gewichtszunahme. Trotz schlechtestem metabolischen Profil eine der wirksamsten Substanzen (Metaanalysen). Verfügbar als Tablette, schnellauflösende Schmelztablette (Velotab), i.m. Kurzwirkform und Depot-Suspension (Zypadhera).',
    dosierung: 'Schizophrenie: 10–20 mg/Tag (Zieldosis 10–15 mg, einmal täglich). Akut i.m.: 10 mg (max. 3 Injektionen à 10 mg / 24h, Abstand mind. 2h). Depot Zypadhera: 150–300 mg/2–4 Wochen i.m. gluteal.',
    indikationen: ['Schizophrenie', 'Manische und gemischte Episoden', 'Rezidivprophylaxe Bipolar I (Erhaltung)', 'Akute Erregungszustände (i.m.)', 'Chemotherapie-induziertes Erbrechen (off-label)'],
    nebenwirkungen: ['Gewichtszunahme +++ (schnell einsetzend, durchschnittlich 4–5 kg in 10 Wochen)', 'Metabolisches Syndrom', 'Diabetes mellitus Typ 2 (Neuauftreten)', 'Sedierung ++', 'Anticholinerge NW (Mundtrockenheit, Obstipation)', 'EPS gering', 'Prolaktinerhöhung (moderat)', 'Orthostatische Hypotonie', 'Transaminasenanstieg'],
    kontraindikationen: ['Engwinkelglaukom', 'Bekannte Überempfindlichkeit'],
    cave: 'Metabolisches Monitoring obligat: Gewicht, BMI, Taillenumfang, Nüchternglukose, HbA1c, Lipide – vor Therapiebeginn, nach 4 Wochen, dann alle 3 Monate! I.m.-Form: KEIN Benzodiazepin in den folgenden 1–4 Stunden (Atemdepression, Todesfälle beschrieben)! Depot Zypadhera: Post-Injection-Delirium/Sedation-Syndrom (PDSS) möglich (0,07% der Injektionen) → 3h Überwachung nach jeder Injektion obligat.',
    rezeptoren: { 'D₁': '+', 'D₂': '+++', '5-HT₂A': '+++', 'M₁': '+++', 'α₁': '++', 'H₁': '+++' }
  },

  {
    name: 'Paliperidon',
    klasse: 'AAP',
    handelsname: 'Invega / Xeplion / Trevicta / Byannli',
    mechanismus: 'Benzisoxazol. Aktiver 9-OH-Metabolit von Risperidon. D2/5-HT₂A-Antagonist + α1/α2/H1-Antagonist. Rein renale Elimination (kein hepatischer First-Pass-Effekt) → keine CYP-vermittelten pharmakokinetischen Interaktionen. Einziges AAP mit 1-monatlichem (Xeplion), 3-monatlichem (Trevicta) und 6-monatlichem Depot (Byannli) – optimal für Langzeitadhärenz.',
    dosierung: 'Oral (Invega, Retardtablette): 6 mg/Tag (Start und Zieldosis), einmal täglich morgens. Range: 3–12 mg/Tag. Depot 1-monatlich (Xeplion): Initiierung 150 mg Tag 1 + 100 mg Tag 8 (beide Deltoid), dann 75–150 mg/Monat i.m. Depot 3-monatlich (Trevicta): 175–525 mg alle 3 Monate i.m. gluteal.',
    indikationen: ['Schizophrenie', 'Schizoaffektive Störung (als Monotherapie oder in Kombination mit Antidepressivum/Stimmungsstabilisierer)'],
    nebenwirkungen: ['Prolaktinerhöhung (ausgeprägt, ähnlich Risperidon)', 'EPS moderat', 'Gewichtszunahme moderat', 'QTc-Verlängerung (leicht)', 'Orthostatische Hypotonie', 'Tachykardie', 'Sedierung', 'Kopfschmerzen'],
    kontraindikationen: ['Schwere Niereninsuffizienz (GFR <10 ml/min) für orale Form; GFR <50 ml/min für Depot', 'Demenz-assoziierte Psychosen bei älteren Patienten (erhöhte Mortalität)'],
    cave: 'Rein renale Elimination → Dosisreduktion bei GFR <80 ml/min strikt erforderlich! Aber: kein Dosisanpassung bei Leberinsuffizienz nötig – Vorteil gegenüber Risperidon. Prolaktinspiegel regelmäßig kontrollieren. Depotformen (1M, 3M, 6M) sind bei Adhärenz-Problemen die therapeutisch wertvollste Option.',
    rezeptoren: { 'D₁': '+', 'D₂': '+++', '5-HT₂A': '+++', 'M₁': '0', 'α₁': '+++', 'H₁': '++' }
  },

  // ─── KAP – Klassische Antipsychotika (1. Generation) ──────────────────────

  {
    name: 'Benperidol',
    klasse: 'KAP',
    handelsname: 'Glianimon',
    mechanismus: 'Butyrophenon. Hochpotentes KAP (HP): Stärkstes verfügbares Antipsychotikum nach D2-Affinität. Nahezu selektiver D2-Antagonist – kaum H1/M1/α1-Wirkung → wenig Sedierung und anticholinerge NW, aber maximale EPS-Rate. Niedrigste wirksame Dosis aller Antipsychotika in mg.',
    dosierung: '0,75–10 mg/Tag in 2–3 Einzeldosen. Einschleichend beginnen. Im Alter: deutlich niedriger.',
    indikationen: ['Akute Psychosen und schwere Erregungszustände', 'Schizophrenie', 'Libidominderung bei Sexualdelinquenz (off-label, ethisch umstritten)'],
    nebenwirkungen: ['Starke EPS (Parkinsonoid, Akathisie, akute Dystonie – sehr häufig)', 'Tardive Dyskinesie (Langzeit)', 'Prolaktinerhöhung', 'Wenig Sedierung', 'Wenig anticholinerge NW', 'NMS (selten, aber lebensbedrohlich)'],
    kontraindikationen: ['Morbus Parkinson', 'Lewy-Body-Demenz', 'Koma / Bewusstseinstrübung', 'Knochenmarkdepression'],
    cave: 'Stärkstes verfügbares Antipsychotikum – sehr kleine Dosen verwenden! Biperiden (Anticholinergikum) prophylaktisch bei EPS-Risiko (v.a. junge Männer) erwägen. Bei jedem Hochpotenten: NMS-Triade beachten (Hyperthermie, Rigor, Bewusstseinsveränderung).',
    rezeptoren: { 'D₁': '0', 'D₂': '+++', '5-HT₂A': '+', 'M₁': '0', 'α₁': '+', 'H₁': '+' }
  },

  {
    name: 'Bromperidol',
    klasse: 'KAP',
    handelsname: 'Impromen',
    mechanismus: 'Butyrophenon (wie Haloperidol). Hochpotentes KAP (HP). Starker, selektiver D2-Antagonist. Nahezu identisches Rezeptorprofil und klinisches Wirkprofil wie Haloperidol, aber keine i.v.-Formulierung und geringere klinische Studienlage. Heute weitgehend durch Haloperidol ersetzt.',
    dosierung: '2–20 mg/Tag in 2 Gaben.',
    indikationen: ['Schizophrenie und andere Psychosen'],
    nebenwirkungen: ['Starke EPS', 'Tardive Dyskinesie', 'Prolaktinerhöhung', 'QTc-Verlängerung', 'Wenig Sedierung', 'NMS'],
    kontraindikationen: ['Morbus Parkinson', 'Lewy-Body-Demenz', 'QTc-Verlängerung bekannt', 'Koma'],
    cave: 'Keine klinischen Vorteile gegenüber Haloperidol. Haloperidol bevorzugen wenn Butyrophenon indiziert (bessere Datenlage, i.v.-Option, Depot verfügbar).',
    rezeptoren: { 'D₁': '0', 'D₂': '+++', '5-HT₂A': '+', 'M₁': '0', 'α₁': '+', 'H₁': '+' }
  },

  {
    name: 'Chlorprothixen',
    klasse: 'KAP',
    handelsname: 'Truxal',
    mechanismus: 'Thioxanthen (trizyklisch). Niederpotentes KAP (NP): D2 (mäßig) + H1 (stark) + α1 (stark) + M1 (leicht) Antagonist. Die H1/α1-dominierte Wirkung erklärt die ausgeprägte Sedierung und anxiolytische Wirkung bei schwächerer antipsychotischer Potenz. Ähnliches Profil wie Levomepromazin, aber etwas geringere Stärke.',
    dosierung: '30–200 mg/Tag, ggf. aufgeteilt. Schlaf und Anxiolyse: 15–75 mg zur Nacht.',
    indikationen: ['Angst- und Unruhezustände', 'Schlafstörungen im Rahmen psychiatrischer Erkrankungen', 'Agitiertheit und Erregungszustände (leicht bis mittelschwer)', 'Entzugsbehandlung', 'Leichte Psychosen (additiv)'],
    nebenwirkungen: ['Starke Sedierung', 'Orthostatische Hypotonie (Sturzrisiko!)', 'Anticholinerge NW', 'Gewichtszunahme', 'EPS selten (wegen Niedrigpotenz)', 'QTc-Verlängerung'],
    kontraindikationen: ['Koma / schwere ZNS-Depression', 'Prostatahyperplasie (anticholinerg)', 'Engwinkelglaukom'],
    cave: 'Im Alter hohes Sturzrisiko durch Sedierung + Hypotonie! Nicht als Monotherapie für chronische Schizophrenie geeignet – antipsychotische Potenz zu gering. Häufig als adjuvantes Sedativum / Schlafmittel bei Psychosen eingesetzt.',
    rezeptoren: { 'D₁': '+', 'D₂': '++', '5-HT₂A': '++', 'M₁': '+', 'α₁': '++', 'H₁': '+++' }
  },

  {
    name: 'Flupentixol',
    klasse: 'KAP',
    handelsname: 'Fluanxol / Fluanxol Depot',
    mechanismus: 'Thioxanthen (trizyklisch). Hochpotentes KAP (HP). Besonderheit: Bei Niedrigdosis (≤3 mg) präsynaptische D2-Autorezeptor-Blockade → ↑ Dopaminfreisetzung → antidepressive Wirkung! Bei höherer Dosis postsynaptischer D2-Antagonismus (antipsychotisch). Aktivierender als andere KAP → kontraindiziert bei Manie. Depot: Flupentixol-Decanoat (alle 2–4 Wochen).',
    dosierung: 'Schizophrenie: 3–18 mg/Tag oral (einschleichen). Depot: 20–400 mg i.m. alle 2–4 Wochen. Antidepressiv (off-label): 0,5–3 mg/Tag.',
    indikationen: ['Schizophrenie', 'Depression (Niedrigdosis, off-label, v.a. mit Angstsymptomen)', 'Borderline-Persönlichkeitsstörung (off-label)', 'Schizophrenie-Langzeitbehandlung (Depot)'],
    nebenwirkungen: ['EPS (bei Hochdosis)', 'Akathisie', 'Prolaktinerhöhung', 'Wenig Sedierung (aktivierend)'],
    kontraindikationen: ['Akute Manie (aktivierende Wirkung kontraproduktiv!)', 'Schwere Agitiertheit', 'Koma', 'Morbus Parkinson'],
    cave: 'Aktivierende Komponente: kontraindiziert bei akuter Manie oder schwerer Agitiertheit! Antidepressive Wirkung bei Niedrigdosis klinisch etabliert. Depotform bewährt bei Adhärenz-Problemen. Keine Gewichtszunahme als wesentliche NW.',
    rezeptoren: { 'D₁': '+', 'D₂': '+++', '5-HT₂A': '++', 'M₁': '+', 'α₁': '+', 'H₁': '+' }
  },

  {
    name: 'Fluphenazin',
    klasse: 'KAP',
    handelsname: 'Lyogen / Dapotum Depot',
    mechanismus: 'Phenothiazin, Piperazin-Typ (trizyklisch). Hochpotentes KAP (HP). Stark D2-selektiv, kaum H1/M1/α1-Wirkung → minimale Sedierung, aber ausgeprägte EPS. Historische Bedeutung: Fluphenazin-Decanoat war die erste klinisch eingesetzte Depot-Formulierung eines Antipsychotikums (Entwicklung der Langzeitbehandlung).',
    dosierung: 'Oral: 2,5–20 mg/Tag (in 2–3 Gaben). Depot (Dapotum D): 12,5–100 mg i.m. alle 2–4 Wochen.',
    indikationen: ['Schizophrenie', 'Chronische Psychosen (v.a. Langzeittherapie mit Depot)'],
    nebenwirkungen: ['Sehr starke EPS (höchste Rate aller Phenothiazine)', 'Akute Dystonie', 'Akathisie', 'Tardive Dyskinesie', 'Prolaktinerhöhung', 'NMS'],
    kontraindikationen: ['Morbus Parkinson', 'Lewy-Body-Demenz', 'Koma', 'Knochenmarkdepression', 'Schwere Lebererkrankung'],
    cave: 'Eine der höchsten EPS-Raten aller Antipsychotika! Biperiden prophylaktisch oder therapeutisch einsetzen. Heute von AAP-Depots weitgehend verdrängt. Kaum noch Erstwahl.',
    rezeptoren: { 'D₁': '+', 'D₂': '+++', '5-HT₂A': '++', 'M₁': '+', 'α₁': '+', 'H₁': '+' }
  },

  {
    name: 'Flupirilen',
    klasse: 'KAP',
    handelsname: 'Imap',
    mechanismus: 'Diphenylbutylpiperidin. Hochpotentes KAP (HP). Selektiver D2-Antagonist mit sehr langer Wirkdauer. Ausschließlich als wöchentliche Depot-Injektion (i.m.) verfügbar – keine orale Formulierung existiert.',
    dosierung: '1,5–8 mg/Woche i.m.',
    indikationen: ['Schizophrenie und chronische Psychosen (Langzeittherapie)'],
    nebenwirkungen: ['Starke EPS', 'Tardive Dyskinesie', 'Prolaktinerhöhung', 'Wenig Sedierung'],
    kontraindikationen: ['Morbus Parkinson', 'Koma', 'Bekannte Überempfindlichkeit'],
    cave: 'Nur als Wochendepot verfügbar – kein akuter Einsatz möglich. Heute weitgehend obsolet; von modernen 1- und 3-Monatsdepots (z.B. Paliperidon) verdrängt.',
    rezeptoren: { 'D₁': '0', 'D₂': '+++', '5-HT₂A': '+', 'M₁': '0', 'α₁': '+', 'H₁': '+' }
  },

  {
    name: 'Haloperidol',
    klasse: 'KAP',
    handelsname: 'Haldol / Haldol Decanoat (Depot)',
    mechanismus: 'Butyrophenon. Hochpotentes KAP (HP). Referenzsubstanz der klassischen Antipsychotika. Hoch selektiver D2-Antagonist (kaum H1, M1, α1) → kein metabolisches Syndrom, keine Gewichtszunahme, keine Sedierung, aber hohe EPS-Rate. Einziges Antipsychotikum mit breiter klinischer Zulassung für i.v.-Applikation (Standard auf Intensivstationen). Depot: Haloperidol-Decanoat (alle 4 Wochen).',
    dosierung: 'Oral: 2–20 mg/Tag in 1–2 Gaben. Akut i.m.: 5–10 mg (alle 30 min wiederholbar, max. 100 mg/24h). i.v.: 1–5 mg langsam unter EKG-Monitoring. Depot: 25–200 mg i.m. alle 4 Wochen.',
    indikationen: ['Schizophrenie', 'Akute Psychosen und schwere Erregungszustände (i.m./i.v.)', 'Delir (v.a. Intensivmedizin – i.v.)', 'Antiemetikum (Niedrigdosis 0,5–2 mg)', 'Tourette-Syndrom', 'Chorea Huntington', 'Palliativmedizin (Agitation, Erbrechen, Schmerz)'],
    nebenwirkungen: ['Starke EPS (Parkinsonoid, Akathisie, akute Dystonie – sehr häufig)', 'Tardive Dyskinesie (bei Langzeittherapie)', 'Prolaktinerhöhung', 'QTc-Verlängerung (v.a. i.v.!)', 'NMS (selten, aber lebensbedrohlich)', 'Wenig Sedierung', 'Wenig anticholinerge NW', 'Kein metabolisches Syndrom'],
    kontraindikationen: ['Morbus Parkinson', 'Lewy-Body-Demenz', 'QTc-Verlängerung bekannt', 'Koma', 'Knochenmarkdepression', 'Phäochromozytom'],
    cave: 'i.v.-Gabe: EKG-Monitoring wegen QTc zwingend! Kein Einsatz bei M. Parkinson und Lewy-Body-Demenz (dramatische Verschlechterung, lebensbedrohlich!). NMS: Hyperthermie + Rigor + Bewusstseinsveränderung + autonome Instabilität → sofort absetzen, intensivmedizinische Behandlung. Biperiden prophylaktisch bei jungen Männern (hohes Dystonie-Risiko). Goldstandard für Delirbehandlung auf ICU (Evidenz vorhanden trotz FDA-Warnung).',
    rezeptoren: { 'D₁': '+', 'D₂': '+++', '5-HT₂A': '+', 'M₁': '0', 'α₁': '+', 'H₁': '+' }
  },

  {
    name: 'Levomepromazin',
    klasse: 'KAP',
    handelsname: 'Neurocil / Nozinan',
    mechanismus: 'Phenothiazin, aliphatischer Typ (trizyklisch). Niederpotentes KAP (NP). Breites Rezeptorprofil mit dominanter H1/α1/M1-Blockade → stärkste sedierende, analgetische und antiemetische Wirkung aller Antipsychotika. D2-Blockade nur moderat → eher schwach antipsychotisch. Wertvoller Einsatz in der Palliativmedizin.',
    dosierung: '25–400 mg/Tag in 2–3 Gaben (psychiatrisch). Palliativ/Schlaf: 12,5–50 mg zur Nacht. Antiemetikum: 6,25–12,5 mg. Terminale Sedierung: bis 200–300 mg/24h s.c. oder i.v.',
    indikationen: ['Schwere Agitation und Erregungszustände', 'Schlafstörungen bei psychiatrischen Erkrankungen', 'Palliativmedizin (terminale Agitation, Übelkeit/Erbrechen, Schmerzaugmentation)', 'Schmerztherapie (adjuvant)', 'Entzugsbehandlung'],
    nebenwirkungen: ['Ausgeprägte Sedierung (+++)', 'Starke orthostatische Hypotonie (Sturzgefahr!)', 'Anticholinerge NW', 'Gewichtszunahme', 'EPS selten (Niedrigpotenz)', 'QTc-Verlängerung'],
    kontraindikationen: ['Schwere Leberinsuffizienz', 'Koma / ZNS-Depression', 'Prostatahyperplasie', 'Engwinkelglaukom'],
    cave: 'Im Alter SEHR zurückhaltend! Massive Sedierung + Hypotonie = hohes Sturzrisiko und erhöhte Mortalität. In der Palliativmedizin wertvoll für terminale Sedierung und Symptomkontrolle. Nicht als Monotherapie für chronische Schizophrenie (zu schwach antipsychotisch).',
    rezeptoren: { 'D₁': '+', 'D₂': '++', '5-HT₂A': '++', 'M₁': '++', 'α₁': '+++', 'H₁': '+++' }
  },

  {
    name: 'Loxapin',
    klasse: 'KAP',
    handelsname: 'Adasuve (Inhalat) / Loxapin oral',
    mechanismus: 'Dibenzoxazepin (trizyklisch). Mittelpotentes KAP (MP). Strukturell verwandt mit Clozapin und Asenapin. Ähnliches breites Rezeptorprofil: D2 + 5-HT₂A + H1 + α1-Antagonist. Besonderheit: Inhalationsformulierung (Adasuve) ermöglicht Pulmonaladministration mit rapidem Wirkeintritt in 10 Minuten (direkter Übertritt ins ZNS). Metabolit Amoxapin hat antidepressive Wirkung.',
    dosierung: 'Inhalation (Adasuve): 9,1 mg als Einzeldosis, max. 1× täglich, max. 2× im Abstand von 2h. Oral: 25–100 mg/Tag in 2 Gaben.',
    indikationen: ['Akute leichte bis mittelschwere Agitation bei Schizophrenie oder Bipolar I (Inhalation – nicht für schwere Gewalt)', 'Schizophrenie (oral)'],
    nebenwirkungen: ['Sedierung', 'EPS moderat', 'Schwindel', 'Orthostatische Hypotonie', 'Mundtrockenheit', 'Bronchospasmus (Inhalation – kontraindiziert bei Atemwegserkrankungen!)'],
    kontraindikationen: ['Inhalation: Asthma bronchiale, COPD, aktive Bronchospasmen, schwere Atemwegserkrankungen'],
    cave: 'Inhalation: Nur unter medizinischer Überwachung mit Bronchodilatator (Salbutamol) bereit! Bronchospasmusrisiko ist real. Hauptvorteil: Rascher Wirkeintritt in 10 Minuten – bei kooperativen Patienten mit Agitation eine schonende Alternative zu i.m.-Injektion. Oral: heute selten eingesetzt.',
    rezeptoren: { 'D₁': '+', 'D₂': '++', '5-HT₂A': '++', 'M₁': '+', 'α₁': '++', 'H₁': '+++' }
  },

  {
    name: 'Melperon',
    klasse: 'KAP',
    handelsname: 'Eunerpan',
    mechanismus: 'Butyrophenon. Niederpotentes KAP mit atypischen Eigenschaften (NP-A). Schwacher D2-Antagonist + H1-Antagonist. Kaum antipsychotisch wirksam bei Positivsymptomatik. Kein relevanter Prolaktinanstieg, minimale EPS → deshalb besonders für ältere Patienten und Parkinson-Psychose geeignet. Wenig kardiale Wirkung (keine relevante QTc-Verlängerung bei üblichen Dosen).',
    dosierung: '25–200 mg/Tag in 2–3 Gaben. Schlaf/Unruhezustände: 25–100 mg zur Nacht.',
    indikationen: ['Schlafstörungen und Unruhezustände bei älteren Patienten', 'Delirante Syndrome', 'Agitiertheit bei Demenz', 'Psychose bei Morbus Parkinson (off-label, 3. Wahl nach Clozapin und Quetiapin)'],
    nebenwirkungen: ['Sedierung', 'Schwindel, Hypotonie', 'Wenig oder keine EPS', 'Kein relevanter Prolaktinanstieg', 'QTc-Verlängerung (leicht, meist klinisch nicht relevant)'],
    kontraindikationen: ['QTc-Verlängerung bekannt (Cave: EKG-Kontrolle)', 'Koma', 'Schwere Leberinsuffizienz'],
    cave: 'Bei Parkinson-Psychose gilt die Hierarchie: 1. Wahl Clozapin, 2. Wahl Quetiapin, 3. Wahl ggf. Melperon (off-label). Kein Wirksamkeitsnachweis für Positivsymptomatik. Im Alter gut verträglich wegen geringer EPS und Prolaktin-Wirkung. Dosierung konservativ halten.',
    rezeptoren: { 'D₁': '0', 'D₂': '++', '5-HT₂A': '+', 'M₁': '0', 'α₁': '+', 'H₁': '++' }
  }

);

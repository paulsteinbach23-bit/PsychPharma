(window.QUIZ_FAKTEN = window.QUIZ_FAKTEN || []).push(
  // Depression
  {
    id: 'dep_symptomdauer',
    frage: 'Wie lange müssen Symptome einer Depression mindestens andauern?',
    richtig: 'Mind. 2 Wochen',
    distractors: ['Mind. 1 Woche', 'Mind. 4 Wochen', 'Mind. 6 Monate'],
    erklaerung: 'Nach ICD-10 müssen die Symptome einer depressiven Episode für mindestens 2 Wochen bestehen.',
    quelle: 'krankheitsbilder',
    bezug: 'depression'
  },
  {
    id: 'dep_hauptsymptome',
    frage: 'Wie viele der 3 Hauptsymptome (Kriterium A) müssen für eine Depressions-Diagnose erfüllt sein?',
    richtig: 'Mind. 2',
    distractors: ['Mind. 1', 'Alle 3', 'Mind. 3 von 3'],
    erklaerung: 'Für eine depressive Episode müssen nach ICD-10 mindestens 2 der 3 Hauptsymptome (gedrückte Stimmung, Interessenverlust, Antriebsmangel) vorliegen.',
    quelle: 'krankheitsbilder',
    bezug: 'depression'
  },
  {
    id: 'dep_schwergrad_leicht',
    frage: 'Wie viele Zusatzsymptome (Kriterium B) sind für eine leichte depressive Episode erforderlich?',
    richtig: '1 bis 3',
    distractors: ['Keine', '4 bis 5', 'Mind. 4'],
    erklaerung: 'Eine leichte depressive Episode erfordert nach ICD-10 mind. 2 Hauptsymptome und 1–3 Zusatzsymptome (Gesamtzahl Symptome: 4–5).',
    quelle: 'krankheitsbilder',
    bezug: 'depression'
  },
  {
    id: 'dep_hamd',
    frage: 'Welches Fremdbeurteilungsinstrument dient zur Verlaufsmessung der Depression?',
    richtig: 'HAMD-17',
    distractors: ['PHQ-9', 'BDI-II', 'GAF-Skala'],
    erklaerung: 'Die Hamilton-Depressionsskala (HAMD-17) ist das klassische Fremdbeurteilungsinstrument; der PHQ-9 ist ein Selbstbeurteilungsinstrument.',
    quelle: 'krankheitsbilder',
    bezug: 'depression'
  },
  {
    id: 'dep_icd_rezidivierend',
    frage: 'Welches ist der ICD-10-Code für die rezidivierende depressive Störung?',
    richtig: 'F33',
    distractors: ['F32', 'F34', 'F31'],
    erklaerung: 'F32 = einzelne depressive Episode, F33 = rezidivierende depressive Störung, F34 = anhaltende affektive Störungen.',
    quelle: 'krankheitsbilder',
    bezug: 'depression'
  },
  {
    id: 'dep_erstlinien',
    frage: 'Welche Substanzklassen sind pharmakologische Erstlinientherapie bei unipolarer Depression?',
    richtig: 'SSRI, SNRI und NaSSA',
    distractors: ['MAO-Hemmer und TZA', 'NRI und TZA', 'SSRI und MAO-Hemmer'],
    erklaerung: 'Leitliniengerecht sind SSRI, SNRI und NaSSA (z.B. Mirtazapin) die 1. Wahl. MAO-Hemmer und TZA sind Reservemittel.',
    quelle: 'krankheitsbilder',
    bezug: 'depression'
  },
  {
    id: 'dep_psychotherapie',
    frage: 'Welche Psychotherapieverfahren haben die stärkste Evidenz bei unipolarer Depression?',
    richtig: 'KVT und IPT',
    distractors: ['Psychoanalyse und Schematherapie', 'EMDR und DBT', 'Gesprächstherapie und Gestalttherapie'],
    erklaerung: 'Kognitive Verhaltenstherapie (KVT) und Interpersonelle Therapie (IPT) haben nach S3-Leitlinie die stärkste Evidenz bei Depression.',
    quelle: 'krankheitsbilder',
    bezug: 'depression'
  },
  {
    id: 'dep_stationaer',
    frage: 'Wann ist eine stationäre Behandlung bei Depression indiziert?',
    richtig: 'Suizidalität, psychotische Symptome oder fehlende ambulante Versorgung',
    distractors: ['Nur bei schwerer depressiver Episode', 'Immer ab HAMD-17 > 18', 'Nur bei fehlender sozialer Unterstützung'],
    erklaerung: 'Stationäre Indikationen: Suizidalität, Stupor, psychotische Symptome, schwere psychosoziale Belastung oder fehlende ambulante Versorgung.',
    quelle: 'krankheitsbilder',
    bezug: 'depression'
  },
  // PTBS
  {
    id: 'ptbs_icd',
    frage: 'Welches ist der ICD-10-Code der Posttraumatischen Belastungsstörung?',
    richtig: 'F43.1',
    distractors: ['F43.0', 'F44.0', 'F41.1'],
    erklaerung: 'F43.1 = PTBS, F43.0 = akute Belastungsreaktion, F41.1 = Generalisierte Angststörung.',
    quelle: 'krankheitsbilder',
    bezug: 'ptbs'
  },
  {
    id: 'ptbs_leitsymptome',
    frage: 'Welche 3 Leitsymptomgruppen kennzeichnen die PTBS?',
    richtig: 'Wiedererleben, Vermeidung und Hyperarousal',
    distractors: ['Angst, Panik und Dissoziation', 'Flashbacks, Amnesie und Halluzinationen', 'Stimmungslabilität, Schlafstörungen und Konzentrationsprobleme'],
    erklaerung: 'Die PTBS wird durch die Trias Wiedererleben (Flashbacks/Albträume), Vermeidung traumaassoziierter Stimuli und chronisches Hyperarousal definiert.',
    quelle: 'krankheitsbilder',
    bezug: 'ptbs'
  },
  {
    id: 'ptbs_therapie',
    frage: 'Welche Therapieverfahren gelten als Methoden der Wahl bei PTBS?',
    richtig: 'Traumafokussierte KVT und EMDR',
    distractors: ['IPT und Schematherapie', 'DBT und Gesprächstherapie', 'Entspannungsverfahren und Psychoanalyse'],
    erklaerung: 'Traumafokussierte KVT (inkl. Exposition) und EMDR sind leitliniengerecht die Verfahren der Wahl bei PTBS.',
    quelle: 'krankheitsbilder',
    bezug: 'ptbs'
  },
  {
    id: 'ptbs_zeitkriterium',
    frage: 'Innerhalb welches Zeitraums nach dem Trauma müssen PTBS-Symptome nach ICD-10 auftreten?',
    richtig: 'Innerhalb von 6 Monaten',
    distractors: ['Innerhalb von 4 Wochen', 'Innerhalb von 1 Monat', 'Innerhalb von 1 Jahr'],
    erklaerung: 'Nach ICD-10 müssen die PTBS-Symptome innerhalb von 6 Monaten nach dem Trauma auftreten (DSM-5 hat kein striktes Zeitkriterium).',
    quelle: 'krankheitsbilder',
    bezug: 'ptbs'
  }
);

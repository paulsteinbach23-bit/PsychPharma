(window.KRANKHEITSBILDER = window.KRANKHEITSBILDER || []).push({
  id: 'schizophrenie',
  name: 'Schizophrenie',
  subtitle: 'Schizophrener Formenkreis',
  icd10: 'F20',
  kategorie: 'Psychotische Störungen',
  farbe: '#e599f7',
  definition: 'Psychische Erkrankung aus dem schizophrenen Formenkreis, gekennzeichnet durch eine Vielfalt produktiver (Positiv-) und nicht-produktiver (Negativ-)Symptome wie Wahn, Halluzinationen, Ich-Störungen, Denkstörungen sowie Affektverflachung und sozialen Rückzug. Die Ätiopathogenese ist multifaktoriell und bis heute nicht abschließend geklärt. Behandlungsziel ist ein von der Symptomatik weitgehend unabhängiges Leben in Selbstbestimmung (Recovery).',
  sektionen: [
    {
      titel: 'Epidemiologie',
      gruppen: [
        { titel: 'Prävalenz und Inzidenz', punkte: [
          'Lebenszeitprävalenz: Weltweit ca. 1%; bei familiärer Belastung deutlich erhöht',
          'Jahresinzidenz: Weltweit 15/100.000 Personen; leicht erhöht in städtischen Regionen',
        ]},
        { titel: 'Familiäres Risiko', punkte: [
          'Kinder erkrankter Eltern: 12%',
          'Eineiige Zwillinge: Ca. 46%; zweieiige Zwillinge: Ca. 14%; Geschwister: Ca. 10%',
        ]},
        { titel: 'Erkrankungsbeginn', punkte: [
          'Meist zwischen dem 15. und 35. Lebensjahr',
          'Bei Männern durchschnittlich 3–4 Jahre früher als bei Frauen',
          'Zweiter Erkrankungsgipfel postmenopausal bei Frauen',
          'Lebenszeitrisiko: Männer ≈ Frauen',
        ]},
      ],
    },
    {
      titel: 'Ätiologie',
      intro: 'Multifaktoriell bedingt. Genetische, neurobiologische und psychosoziale Faktoren wirken im Rahmen des Vulnerabilitäts-Stress-Modells zusammen.',
      gruppen: [
        { titel: 'Genetische Faktoren', punkte: [
          'Große Rolle der Erblichkeit, jedoch nicht als alleiniger Faktor',
          'Vermutlich polygener Erbgang mit über 100 identifizierten Risikogenen',
          'Risikofaktor: Hohes paternales Alter',
        ]},
        { titel: 'Umweltassoziierte Faktoren', punkte: [
          'Prä-, peri- und postnatale Hirnschädigungen (Infektionen der Mutter, Geburtskomplikationen)',
          'Saisonale Faktoren: Gehäuftes Auftreten bei Wintergeburten',
          'Noxen im Kinder-/Jugendalter: Amphetamin- und Cannabiskonsum',
          'Psychosoziale Stressoren: Elterntrennung, Urbanisation, Migration, High Expressed Emotions, Missbrauch/Misshandlung',
          'Sozialstatus: Häufiger in sozial benachteiligten Schichten',
        ]},
        { titel: 'Neurobiologische Faktoren', punkte: [
          'Dopaminhypothese: Dysregulation des Dopaminstoffwechsels mit Hyperaktivität im limbischen System und Hypoaktivität im Frontalhirn',
          'Glutamathypothese: Unterfunktion von NMDA-Rezeptoren, insb. frontal; gestützt durch psychoseinduzierende Wirkung von NMDA-Antagonisten (Phencyclidin, Ketamin)',
          'Serotonin: Psychoseauslösung durch serotonerge Halluzinogene (Psilocybin, LSD); atypische Antipsychotika blockieren 5-HT2-Rezeptoren',
          'Strukturelle Veränderungen: Verminderung grauer Substanz, Vergrößerung der Seitenventrikel, Hypofrontalität, fronto-temporo-limbische Netzwerkstörung (Diskonnektivitätshypothese)',
        ]},
        { titel: 'Pathophysiologische Modelle', punkte: [
          'Vulnerabilitäts-Stress-Modell (Zubin & Spring): Erhöhte neuropsychologische Anfälligkeit + endogene/exogene Stressoren → Manifestation',
          'Vulnerabilitäts-Stress-Coping-Modell (Nuechterlein): Unzureichendes Coping in Stresssituationen führt zu psychotischer Symptomatik',
          'Multiple-Hit-Modell: Genetische Prädisposition (First Hit) + mehrere pathogene Umweltfaktoren → Ausbruch',
        ]},
      ],
    },
    {
      titel: 'Prognose',
      gruppen: [
        { titel: 'Verlaufsformen', punkte: [
          '20% Vollremission nach erster Episode ohne späteres Rezidiv',
          'Ca. 2/3 episodischer Verlauf (mit vollständiger oder teilweiser Remission)',
          '5–10% chronisch progredienter Verlauf',
          'Individuelle Verläufe nicht vorhersagbar',
        ]},
        { titel: 'Mortalität', punkte: [
          'Lebenserwartung ca. 15 Jahre kürzer als Gesamtbevölkerung; Mortalität 2,6-fach erhöht',
          'Suizidalität: 10% der Betroffenen unternehmen innerhalb des ersten Jahres einen Suizidversuch; 5–15% versterben an einem Suizid',
        ]},
        { titel: 'Prognosefaktoren', punkte: [
          'Günstig: Weibliches Geschlecht, verheiratet, akuter Krankheitsbeginn, kurze DUP (Dauer der unbehandelten Psychose), soziale Integration',
          'Ungünstig: Männliches Geschlecht, alleinstehend, schleichender Beginn, initiale Negativsymptomatik, High Expressed Emotions, Cannabismissbrauch, lange DUP',
        ]},
      ],
    },
    {
      titel: 'Symptome',
      gruppen: [
        { titel: 'Positivsymptomatik (insb. in akuten Phasen)', punkte: [
          'Wahn: Verfolgungswahn, Beeinträchtigungs- und Beziehungswahn, Wahnwahrnehmungen',
          'Halluzinationen: Meist akustisch (kommentierende/dialogisierende Stimmen); seltener optisch, taktil, olfaktorisch',
          'Ich-Störungen: Gedankeneingebung, Gedankenentzug, Gedankenausbreitung, Gedankenlautwerden, Fremdbeeinflussungserleben',
          'Formale Denkstörungen: Denkzerfahrenheit, Ideenflucht, Gedankenabreißen, Neologismen, Vorbeireden',
          'Desorganisiertes, bizarres Verhalten',
        ]},
        { titel: 'Negativsymptomatik – die 6 A (insb. in chronischen Phasen)', punkte: [
          'Anhedonie, Apathie, Affektverflachung, Aufmerksamkeitsstörungen, Asozialität, Alogie',
        ]},
        { titel: 'Einteilung nach K. Schneider', punkte: [
          'Symptome 1. Ranges: Ich-Störungen mit Fremdbeeinflussungserleben, Wahnwahrnehmungen, kommentierende/dialogisierende Stimmen',
          'Symptome 2. Ranges: Andere akustische Halluzinationen, Halluzinationen anderer Sinnesmodalitäten, Wahneinfälle, Affektstörungen',
        ]},
        { titel: 'Weitere Symptome', punkte: [
          'Katatone Symptome: Stupor, Mutismus, Katalepsie, Flexibilitas cerea, Negativismus, Echopraxie, katatone Erregung',
          'Neuropsychologische Defizite: Aufmerksamkeits-, Gedächtnis- und Exekutivfunktionsstörungen',
          'Vegetative Störungen: Schlaf-Wach-Rhythmusstörungen, gastrointestinale, urologische und kardiale Beschwerden',
          'Frühwarnzeichen eines Rezidivs: Unruhe, Schlafstörungen, Reizbarkeit, Konzentrationsstörungen, sozialer Rückzug, Misstrauen, depressive Verstimmung',
        ]},
        { titel: 'Komorbiditäten', punkte: [
          'Psychisch: Substanzmissbrauch (insb. Cannabis, Alkohol), Angststörungen, PTBS, Zwangsstörungen, Depression',
          'Somatisch: Metabolische und kardiovaskuläre Erkrankungen, Diabetes mellitus Typ 2, Adipositas, Schlafapnoe, Epilepsie',
        ]},
      ],
    },
    {
      titel: 'Diagnostik',
      gruppen: [
        { titel: 'Diagnostische Kriterien nach ICD-10 (mind. 1 Monat Dauer)', punkte: [
          'Kriterium B – mind. 1 Symptom aus: Ich-Störungen mit Fremdbeeinflussungserleben; anhaltender bizarrer Wahn; kommentierende/dialogisierende Stimmen',
          'oder mind. 2 Symptome aus: Anhaltende Halluzinationen; Denkzerfahrenheit/Gedankenabreißen/Neologismen; katatone Symptome; Negativsymptome (Apathie, Sprachverarmung, inadäquater Affekt)',
          'Kriterium C – Ausschlusskriterien: Affektive Störung trat zeitlich vor den schizophrenen Kriterien auf; psychotische Störung durch Intoxikation, Entzug oder organische Hirnerkrankung',
        ]},
        { titel: 'Diagnostische Unterformen nach ICD-10', punkte: [
          'Paranoide Schizophrenie (F20.0): Häufigste Form (65%); Leitsymptome Wahn und akustische Halluzinationen; Beginn 25.–35. Lj.; eher günstigere Prognose',
          'Hebephrene Schizophrenie (F20.1): 15% der Fälle; Leitsymptome Affektverflachung/inadäquater Affekt und Denkzerfahrenheit; Beginn 15.–25. Lj.; ungünstigere Prognose',
          'Katatone Schizophrenie (F20.2): 2–8%; Leitsymptom psychomotorische Störungen (Stupor, Erregung, Katalepsie); eher günstigere Prognose',
          'Weitere Formen: Undifferenzierte Schizophrenie (F20.3), Postschizophrene Depression (F20.4), Schizophrenes Residuum (F20.5), Schizophrenia simplex (F20.6)',
        ]},
        { titel: 'Obligate Diagnostik bei Erstmanifestation', punkte: [
          'Psychiatrische Anamnese und psychopathologischer Befund',
          'Internistische und neurologische Untersuchung inkl. Vitalzeichen',
          'Routinelabordiagnostik, Urin-Drogenscreening, EKG',
          'cMRT zum Ausschluss organischer Ursachen',
          'Fakultativ: Liquorpunktion, EEG, neuropsychologische Testung bei entsprechendem Verdacht',
        ]},
      ],
    },
    {
      titel: 'Therapie',
      intro: 'Multiprofessionell, mehrdimensional und phasenspezifisch. Partizipative Entscheidungsfindung und Vermeidung von Zwangsmaßnahmen. Behandlung möglichst ambulant und wohnortnah.',
      gruppen: [
        { titel: 'Pharmakotherapie – Antipsychotische Therapie', punkte: [
          'Orale Monotherapie in möglichst niedriger Dosierung bevorzugen',
          'Keine generelle Priorisierung einzelner Substanzen; Orientierung am Nebenwirkungsprofil und Patientenwunsch',
          'Vorwiegende Negativsymptomatik: Amisulprid (niedrig dosiert) oder Cariprazin',
          'Therapieresistenz: Umstellung auf Clozapin (Zielplasmaspiegel mind. 350 ng/mL)',
          'Bei Unverträglichkeit/Ablehnung von Clozapin: Olanzapin oder Risperidon',
          'Erfolglose Monotherapie mit 3 Antipsychotika (inkl. Clozapin): Kombinationstherapie mit 2 Antipsychotika',
          'Erhaltungs- und Langzeittherapie: Kontinuierliche Fortführung in möglichst niedriger Dosierung; Dosisreduktion langsam in Schritten von 5–20%',
        ]},
        { titel: 'Begleitsymptome', punkte: [
          'Erregung/Angst/Unruhe: Lorazepam oral oder parenteral, ggf. + Antipsychotikum',
          'Schlafstörungen: Atypisches Antipsychotikum mit sedierender Komponente (Quetiapin, Olanzapin)',
          'Depression: Antipsychotikum mit antidepressiver Komponente (Quetiapin), ggf. + Antidepressivum',
          'Akute Suizidalität: Benzodiazepin; bei anhaltender Suizidalität: Clozapin erwägen',
        ]},
        { titel: 'Psychotherapie und psychosoziale Verfahren', punkte: [
          'Psychoedukation: Wesentlicher Bestandteil in allen Phasen; Einbeziehung von Angehörigen',
          'Kognitive Verhaltenstherapie (KVT): Für alle Betroffenen; mind. 16 Sitzungen; auch bei erhöhtem Psychoserisiko',
          'Metakognitives Training (MKT): Reduktion von Positivsymptomatik; Einzel- oder Gruppentherapie',
          'Familienfokussierte Interventionen: Für alle Betroffenen und Angehörigen; mind. 10 Sitzungen über 3 Monate bis 1 Jahr; senkt Rezidivrate signifikant',
          'Soziales Kompetenztraining, Kognitive Remediation, Traumafokussierte Interventionen (bei komorbider PTBS)',
          'Weitere Verfahren: Ergotherapie, Sport- und Bewegungstherapie, Musiktherapie, Soziotherapie',
        ]},
        { titel: 'Nicht-invasive Stimulationsverfahren', punkte: [
          'EKT: Bei perniziöser Katatonie (1. Wahl), schwerer Depression mit Suizidalität, Therapieresistenz',
          'rTMS: Niederfrequent (1 Hz) links temporal bei akustischen Halluzinationen; hochfrequent (10/20 Hz) links dorsolateral-präfrontal bei Negativsymptomatik',
        ]},
        { titel: 'Behandlung nach Krankheitsphase', punkte: [
          'Stadium des erhöhten Psychoserisikos: KVT, psychosoziale Maßnahmen, Substanzscreening',
          'Frühphase (Erstmanifestation): Intensive Pharmako-, Psycho- und Soziotherapie; DUP möglichst kurz halten; Dauer 3–5 Jahre',
          'Akutphase: Symptomlinderung, Beziehungsaufbau, Psychoedukation; bevorzugt ambulant; Dauer Wochen bis 3 Monate',
          'Postakute Stabilisierungsphase: Therapiestabilisierung, Negativsymptombehandlung, Rückfallfrüherkennung; Dauer 3–6 Monate',
          'Remissionsphase: Rezidivprophylaxe, Lebensqualität, soziale Wiedereingliederung; Dauer Monate bis Jahre',
        ]},
      ],
    },
  ],
  cave: 'Psychotische Symptomatik ist nicht primär "psychiatrisch" – eine somatische Genese muss immer ausgeschlossen werden! Ein Medikationscheck ist obligat bei jeder neu aufgetretenen Symptomatik! Suizidalität: 5–15% der Betroffenen versterben an einem Suizid.',
  merksaetze: [
    'Die Negativsymptomatik lässt sich gut mit den 6 "A" merken: Anhedonie, Apathie, Affektverflachung, Aufmerksamkeitsstörungen, Asozialität und Alogie!',
    'Frühzeitige medikamentöse Akutbehandlung, konsequente Rückfallprophylaxe, Psycho- und Soziotherapie sowie soziale Wiedereingliederung!',
  ],
});

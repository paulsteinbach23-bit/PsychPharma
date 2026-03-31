(window.KRANKHEITSBILDER = window.KRANKHEITSBILDER || []).push({
  id: 'depression',
  name: 'Depression',
  subtitle: 'Unipolare depressive Störung',
  icd10: 'F32 / F33',
  kategorie: 'Affektive Störungen',
  farbe: '#74c0fc',
  definition: 'Affektive Störung mit dem Leitsymptom einer gedrückten Stimmung, verbunden mit vermindertem Antrieb und Freudlosigkeit. Die unipolare Depression macht ca. 65% aller affektiven Störungen aus. Eine Klassifikation erfolgt nach Schweregrad (leicht, mittelgradig, schwer) sowie dem zeitlichen Verlauf (monophasisch, rezidivierend, chronisch). Eine Chronifizierung ist möglich.',
  sektionen: [
    {
      titel: 'Epidemiologie',
      gruppen: [
        { titel: 'Lebenszeitprävalenz', punkte: [
          'Allgemeinbevölkerung: 16–20%',
          'Verwandte 1. Grades einer erkrankten Person: bis zu 30%',
          'Konkordanzrate bei eineiigen Zwillingen: ca. 50%',
        ]},
        { titel: 'Jahresprävalenz (Stand 2014)', punkte: [
          'Allgemeinbevölkerung: ca. 8%',
          'Erhöht bei Personen in sozial schwachen Schichten, in städtischem Wohnumfeld und ohne enge soziale Beziehungsstrukturen',
        ]},
        { titel: 'Erstmanifestation', punkte: [
          'In ca. 50% der Fälle vor dem 31. Lebensjahr',
          'Nach dem 60. Lebensjahr selten (10% der Fälle)',
          'Bei Frauen früher als bei Männern',
        ]},
        { titel: 'Geschlechterverteilung', punkte: [
          'Frauen > Männer (2:1)',
        ]},
      ],
    },
    {
      titel: 'Ätiologie',
      intro: 'Es wird von einem komplexen Vulnerabilitäts-Stress-Modell ausgegangen. Genetische, neurobiologische und psychosoziale Faktoren wirken zusammen.',
      gruppen: [
        { titel: 'Genetische Faktoren', punkte: [
          'Bekannte familiäre Häufung',
          'Vulnerabilität wird vererbt, keine spezifischen Gene bekannt',
        ]},
        { titel: 'Neurobiologische Aspekte', punkte: [
          'Monoaminmangelhypothese: Relatives Defizit von Noradrenalin, Serotonin und Dopamin; gestützt durch Wirkweise der Antidepressiva',
          'Cholinerg-aminerge Imbalance-Hypothese: Relatives cholinerges Übergewicht bei Depression; relatives aminerges Übergewicht bei Manie',
          'Glutamat-Hypothese: Überaktivität des glutamatergen Systems; gestützt durch antidepressive Wirkung von Ketamin',
          'Neurotrophin-Hypothese: Defizit an neurotrophen Faktoren (BDNF); Hippocampusatrophie bei depressiv Erkrankten',
          'Erhöhte Cortisolwerte: Konstitutionell gesteigerter HHN-Achse, Dysregulation bei Depression und PTBS',
          'Verändertes Schlafmuster: Verlängerte Einschlaflatenz, verkürzte REM-Latenz, verlängerte erste REM-Phase, Reduktion des Tiefschlafs',
        ]},
        { titel: 'Psychische Faktoren', punkte: [
          'Kognitive Triade (nach Beck): Negativ verzerrte Sicht auf sich selbst, die Welt und die Zukunft',
          'Erlernte Hilflosigkeit (nach Seligman): In subjektiv unkontrollierbarer Situation erlebte Hilflosigkeit wird auf nachfolgende Situationen übertragen',
          'Verstärkerverlust: Verlust positiver Verstärkerquellen durch äußere Einwirkung oder Reduktion positiv verstärkender Verhaltensweisen',
          'Psychodynamisch: Störung in früher Entwicklungsphase führt zu unsicherem Selbstwertgefühl und ungünstiger Konfliktlösung',
        ]},
        { titel: 'Psychosoziale Faktoren', punkte: [
          'Kindheitserfahrungen: Verlust-/Trennungserlebnisse, Mangel emotionaler Zuwendung',
          'Interpersonelle Faktoren: Störungen sozialer Beziehungen, Fehlen enger sozialer Strukturen',
          'Soziales Umfeld: Niedriger sozialer Status, städtisches Wohnumfeld',
        ]},
      ],
    },
    {
      titel: 'Prognose',
      punkte: [
        'Leichte/mittelgradige Episode: Ambulante Behandlung in der Regel möglich',
        'Auf eine erfolgreiche Akuttherapie (6–12 Wochen) sollte eine Erhaltungstherapie folgen → senkt Rückfallrisiko um ca. 70%',
        'Rezidivprophylaxe bei ≥2 depressiven Episoden in den vergangenen 5 Jahren empfohlen (Pharmako- oder Psychotherapie über mind. 2 Jahre)',
        'Chronifizierungsrisiko besteht, insb. bei fehlender oder unzureichender Behandlung',
        'Hohe Komorbidität mit anderen psychiatrischen Erkrankungen (ca. 60%), insb. Angststörungen, Substanzabhängigkeit, Persönlichkeitsstörungen',
      ],
    },
    {
      titel: 'Symptome',
      intro: 'Symptomdauer mind. 2 Wochen. Einteilung nach Schweregrad:',
      gruppen: [
        { titel: 'Hauptsymptome (mind. 2 von 3 müssen vorliegen)', punkte: [
          'Gedrückte Stimmung (ggf. als Gefühl der Gefühllosigkeit)',
          'Freud- oder Interessenverlust an normalerweise angenehmen Aktivitäten',
          'Verminderter Antrieb oder gesteigerte Ermüdbarkeit',
        ]},
        { titel: 'Zusatzsymptome', punkte: [
          'Schlafstörungen jeder Art',
          'Unbegründete Selbstvorwürfe oder ausgeprägte Schuldgefühle',
          'Verlust des Selbstvertrauens oder des Selbstwertgefühls',
          'Wiederkehrende Gedanken an Tod oder Suizid',
          'Appetitverlust oder gesteigerter Appetit mit Gewichtsveränderung',
          'Vermindertes Denk- oder Konzentrationsvermögen, Unschlüssigkeit',
          'Psychomotorische Hemmung oder Agitiertheit',
        ]},
        { titel: 'Psychotische Symptome (nur bei schwerer depressiver Episode)', punkte: [
          'Depressiver Stupor',
          'Halluzinationen',
          'Wahnideen (i.d.R. synthymer Wahn): Schuldwahn, hypochondrischer Wahn, nihilistischer Wahn, Verarmungswahn',
        ]},
        { titel: 'Somatisches Syndrom (mind. 4 der folgenden Symptome)', punkte: [
          'Deutlicher Interessens- oder Freudverlust (Anhedonie)',
          'Mangelnde Reagibilität, Früherwachen, Morgentief',
          'Psychomotorische Hemmung oder Agitiertheit',
          'Deutlicher Appetitverlust, Gewichtsverlust ≥5% im letzten Monat',
          'Deutlicher Libidoverlust',
        ]},
        { titel: 'Komorbiditäten', punkte: [
          'Psychisch: Angststörungen, Zwangsstörungen, Substanzabhängigkeit, Persönlichkeitsstörungen, somatoforme Störungen',
          'Somatisch: KHK, Diabetes mellitus, Parkinson-Syndrom, Demenz, Tumorerkrankungen, Schlaganfall',
        ]},
      ],
    },
    {
      titel: 'Diagnostik',
      gruppen: [
        { titel: 'Diagnostische Kriterien nach ICD-10', punkte: [
          'Kriterium A – Allgemeine Kriterien: Dauer der depressiven Episode mind. 2 Wochen; keine anamnestischen (hypo-)manischen Symptome; Ausschluss von Substanzmissbrauch oder organischer Ursache',
          'Kriterium B – Hauptsymptome (mind. 2 von 3): Gedrückte Stimmung; Freud-/Interessenverlust; verminderter Antrieb oder Ermüdbarkeit',
          'Kriterium C – Zusatzsymptome: Verlust des Selbstvertrauens; Schuldgefühle; Suizidgedanken; Konzentrationsstörungen; veränderte Psychomotorik; Schlafstörungen; Appetitveränderungen',
          'Kriterium D – Psychotische Symptome: Gilt nur bei schwerer depressiver Episode: depressiver Stupor, Halluzinationen oder Wahnideen',
        ]},
        { titel: 'Schweregradeinteilung nach ICD-10', punkte: [
          'Leichte depressive Episode (F32.0): Alle Kriterien A, mind. 2 aus B, 1–3 aus C',
          'Mittelgradige depressive Episode (F32.1): Alle Kriterien A, mind. 2 aus B, 3–5 aus C',
          'Schwere depressive Episode (F32.2): Alle Kriterien A, alle 3 aus B, mind. 5 aus C',
          'Schwere depressive Episode mit psychotischen Symptomen (F32.3): Kriterien der schweren Episode + Kriterium D',
        ]},
        { titel: 'Screeningverfahren', punkte: [
          'Zwei-Fragen-Test: Freudverlust und Niedergeschlagenheit im letzten Monat erfragen',
          'PHQ-9: Selbstbeurteilungsverfahren mit 9 Items; Hinweis auf mind. mittelgradige Symptomatik bei ≥5 bejahten Items',
          'WHO-5-Fragebogen: Einschätzung des Wohlbefindens der letzten 2 Wochen, 0–5 Punkte pro Aussage',
        ]},
        { titel: 'Fremdbeurteilungsskalen zur Verlaufskontrolle', punkte: [
          'HAMD (17-Item): ≤8 = Remission; 9–16 = leicht; 17–24 = mittelgradig; ≥25 = schwer',
          'MADRS: ≤6 = Remission; 7–19 = leicht; 20–34 = mittelgradig; ≥35 = schwer',
          'BDI-II: <14 = Remission; 14–19 = leicht; 20–28 = mittelgradig; ≥29 = schwer',
        ]},
      ],
    },
    {
      titel: 'Therapie',
      intro: 'Abhängig vom Schweregrad; Kombination aus Pharmako- und Psychotherapie bei schwerer Episode, chronischem/rezidivierendem Verlauf und unzureichender Wirksamkeit einer Monotherapie. Ausführliche Psychoedukation zu Beginn.',
      gruppen: [
        { titel: 'Psychotherapie', punkte: [
          'Beste Datenlage: Kognitive Verhaltenstherapie (KVT) und Interpersonelle Psychotherapie (IPT)',
          'Weitere Verfahren: Psychodynamische Psychotherapie, Gesprächspsychotherapie, CBASP (bei chronischer Depression, ≥3 Episoden), ACT, MBCT, Behavioral Activation (Verhaltenstherapie dritte Welle)',
          'Im Vergleich zu Pharmakotherapie: Längere Wirklatenz, aber Hinweise auf länger anhaltenden Therapieeffekt, niedrigere Rückfallrate und bessere Adhärenz',
        ]},
        { titel: 'Pharmakotherapie – 1. Wahl', punkte: [
          'SSRI (z.B. Citalopram, Sertralin, Fluoxetin)',
          'SSNRI (z.B. Venlafaxin, Duloxetin)',
          'NaSSA (z.B. Mirtazapin)',
        ]},
        { titel: 'Pharmakotherapie – weitere Optionen & Vorgehen', punkte: [
          'SNDRI (Bupropion), Trizyklika (z.B. Trimipramin), MAO-Hemmer (z.B. Moclobemid), Agomelatin, Trazodon, Esketamin-Nasenspray',
          'Auswahl nach: Nebenwirkungsprofil, Komorbiditäten, Patientenpräferenz, Alter, Toxizität und Erfahrungen aus Vortherapie',
          'Beginn: Niedrige Dosierung (3 Tage), dann zügige Steigerung bis Standarddosis; wöchentliches Monitoring in den ersten 4 Wochen',
          'Non-Response: Reduktion ≤25% | Partielle Response: Reduktion 26–49% | Response: Reduktion ≥50% | Remission: Weitestgehende Symptomfreiheit',
          'Bei unzureichender Response: Augmentation (Lithium, atypische Antipsychotika), Wechsel des Antidepressivums oder Kombination',
        ]},
        { titel: 'Nicht-medikamentöse somatische Therapieverfahren', punkte: [
          'EKT (Elektrokonvulsionstherapie): Wirksamkeit 80–90% (unbehandelt), 50–75% (therapieresistent); indiziert bei schwerer therapieresistenter Depression, depressivem Stupor und akuter Suizidalität',
          'rTMS (repetitive transkranielle Magnetstimulation): Bei therapieresistenter Depression; geringere Wirksamkeit als EKT',
          'Schlafentzugstherapie (Wachtherapie): Rascher Wirkungseintritt; positive Effekte in ca. 60% der Fälle; antidepressiver Effekt i.d.R. nicht anhaltend; zur Überbrückung der Wirklatenz von Antidepressiva',
          'Lichttherapie: Insb. bei saisonaler Depression; 10.000 Lux, weißes Licht ohne UV-Anteil; täglich 30–120 min; Response-Rate 60–90%',
          'Weitere: Strukturierter Sport (möglichst im Gruppensetting), Entspannungsverfahren, Ergotherapie, Soziotherapie',
        ]},
      ],
    },
  ],
  cave: 'Suizidalität ist eine ernste Komplikation der Depression und muss aktiv erfragt und engmaschig überwacht werden! Schwere depressive Episoden erfordern stationäre Behandlung, insb. bei Suizidalität, depressivem Stupor, psychotischen Symptomen oder starker psychosozialer Belastung!',
  merksaetze: [
    'Schwere depressive Episoden gehen i.d.R. mit einem somatischen Syndrom einher!',
  ],
});

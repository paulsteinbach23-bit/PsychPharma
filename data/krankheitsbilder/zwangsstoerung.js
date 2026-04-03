(window.KRANKHEITSBILDER = window.KRANKHEITSBILDER || []).push({
  id: 'zwangsstoerung',
  name: 'Zwangsstörung',
  subtitle: 'Obsessive-Compulsive Disorder (OCD)',
  icd10: 'F42',
  kategorie: 'Angst- und Zwangsstörungen',
  farbe: '#69db7c',
  definition: 'Psychische Erkrankung, gekennzeichnet durch rezidivierende Zwangsgedanken (Obsessions) und/oder Zwangshandlungen (Compulsions), die als eigene Gedanken erlebt, als unangenehm und unsinnig erkannt und gegen inneren Widerstand ausgeführt werden. Die Symptome verursachen erheblichen Leidensdruck und beeinträchtigen die soziale und berufliche Funktionsfähigkeit. Ohne Behandlung ist eine Spontanremission selten; ca. die Hälfte der Betroffenen leidet lebenslang unter schwankender Symptomatik.',
  sektionen: [
    {
      titel: 'Epidemiologie',
      gruppen: [
        { titel: 'Prävalenz und Beginn', punkte: [
          'Lebenszeitprävalenz: Ca. 2–3%',
          'Erkrankungsbeginn: Meist im Jugendalter',
          'Lebenszeitrisiko: Männer ≈ Frauen',
        ]},
      ],
    },
    {
      titel: 'Ätiologie',
      intro: 'Multifaktorielle Genese; genetische, neurobiologische und kognitive Faktoren wirken zusammen.',
      gruppen: [
        { titel: 'Genetik', punkte: [
          'Familiäre Häufung: 4–6-fach höheres Risiko bei Verwandten 1. Grades',
        ]},
        { titel: 'Neurobiologie', punkte: [
          'Dysbalance der Regelschleife zwischen Frontalhirn, limbischem System und Basalganglien',
          'Reduzierte Inhibition des Thalamus; verminderte Informationsfilterung durch die Basalganglien',
          'Hypermetabolismus im orbitofrontalen Kortex und Nucleus caudatus',
          'Störung des Serotoninsystems; mögliche autoimmune ZNS-Prozesse',
        ]},
        { titel: 'Kognitive Modelle', punkte: [
          'Zwei-Faktoren-Modell nach Mowrer: Klassische Konditionierung (Angstauslösung) + operante Konditionierung (Angstreduktion durch Zwangshandlung)',
          'Kognitive Modelle: Negative Bewertung eigener Zwangsgedanken führt zu Angst, größerer Bedeutungszuschreibung und dysfunktionalen Bewältigungsstrategien',
        ]},
        { titel: 'Psychodynamische Modelle', punkte: [
          'Stark ausgeprägtes Über-Ich',
          'Zwänge als Ergebnis psychologischer Abwehrmechanismen',
        ]},
      ],
    },
    {
      titel: 'Prognose',
      gruppen: [
        { titel: 'Verlauf', punkte: [
          'Ohne Behandlung: Selten Spontanremission; Ausbreitungsneigung; in ca. der Hälfte der Fälle lebenslange (meist schwankende) Symptomatik',
          'Mit Behandlung: Gute Symptomlinderung möglich; nachhaltiger Therapieerfolg meist nur durch KVT erreichbar; vollständige Remission selten',
        ]},
        { titel: 'Prognosefaktoren', punkte: [
          'Positiv: Primär Zwangshandlungen, gutes psychosoziales Netz, keine überwertigen Ideen, kaum depressive Symptome',
          'Negativ: Primär Zwangsgedanken, religiöse/sexuelle Inhalte, starkes magisches Denken, früher Krankheitsbeginn, psychiatrische Komorbidität, Borderline- oder schizotype Persönlichkeitsstörung',
        ]},
        { titel: 'Häufige Komorbiditäten', punkte: [
          'Depression, Angststörungen, Persönlichkeitsstörungen, Substanzmissbrauch, Essstörungen, Tic-Störungen',
        ]},
      ],
    },
    {
      titel: 'Symptome',
      gruppen: [
        { titel: 'Allgemeine Merkmale', punkte: [
          'Rezidivierende Zwangsgedanken und/oder -handlungen über mind. 2 Wochen',
          'Gedanken/Handlungen werden i.d.R. als unsinnig erlebt (Ich-Syntonie möglich)',
          'Widerstand führt zu Angstentwicklung und bleibt i.d.R. erfolglos',
          'Starke Beeinträchtigung des sozialen und beruflichen Alltags',
          'Häufig Vermeidungsverhalten und Verheimlichung der Symptome aus Scham',
        ]},
        { titel: 'Zwangsgedanken (Obsessions)', punkte: [
          'Aufdrängende Vorstellungen und Ideen, die als eigene Gedanken eingeordnet werden',
          'Meist quälender Charakter; häufige Themen: Kontamination (Schmutz, Infektion), pathologischer Zweifel, Ordnung/Symmetrie, magisches Denken',
          'Zwangsimpulse: Sich aufdrängende Handlungsimpulse; angstauslösend, als unsinnig bewertet; werden in aller Regel nicht ausgeführt',
        ]},
        { titel: 'Zwangshandlungen (Compulsions)', punkte: [
          'Von außen sichtbare oder rein kognitive, repetitive und oft ritualisierte Handlungen gegen inneren Widerstand',
          'Meist Folge von Zwangsgedanken oder auf Vollständigkeitserleben ausgerichtet',
          'Ausführung wird nicht als angenehm empfunden',
          'Häufige Ausprägungen: Waschzwang, Kontrollzwang, Ordnungszwang, Zählzwang',
        ]},
      ],
    },
    {
      titel: 'Diagnostik',
      gruppen: [
        { titel: 'Screening – Zohar-Fineberg Obsessive Compulsive Screen (ZF-OCS)', punkte: [
          'Positives Screening bei mind. 1 bejahter Frage + Alltagsbeeinträchtigung:',
          'Waschen und putzen Sie sehr viel?',
          'Kontrollieren Sie sehr viel?',
          'Haben Sie quälende Gedanken, die Sie nicht loswerden können?',
          'Brauchen Sie für Alltagstätigkeiten sehr lange?',
          'Machen Sie sich Gedanken um Ordnung und Symmetrie?',
        ]},
        { titel: 'Diagnostische Kriterien nach ICD-10', punkte: [
          'Kriterium A: Zwangsgedanken und/oder -handlungen an den meisten Tagen über mind. 2 Wochen',
          'Kriterium B: Als eigene Gedanken erlebt; wiederholen sich und werden als unangenehm empfunden; mind. einer wird als übertrieben/unsinnig erkannt; Widerstandsversuche vorhanden; Ausführung ist nicht angenehm',
          'Kriterium C: Leidensdruck oder Beeinträchtigung der sozialen/individuellen Leistungsfähigkeit',
          'Kriterium D: Ausschluss einer anderen psychischen Störung als Ursache (z.B. Schizophrenie, affektive Störung)',
          'Differenzierungen: F42.0 = vorwiegend Zwangsgedanken; F42.1 = vorwiegend Zwangshandlungen; F42.2 = gemischt',
        ]},
        { titel: 'Testpsychologische Verfahren', punkte: [
          'Y-BOCS (Yale-Brown Obsessive Compulsive Scale): Goldstandard; Symptom-Checkliste + halbstrukturiertes Interview; Remission bei Y-BOCS ≤12',
          'HZI-K (Hamburger Zwangsinventar-Kurzform): Selbstrating mit 72 Items',
          'OCI-R (Obsessive Compulsive Inventory-Revised): Selbstrating mit 18 Items; geringer Zeitaufwand',
        ]},
        { titel: 'Somatische Diagnostik', punkte: [
          'Bei Erstmanifestation: Neurologische und internistische Untersuchung',
          'Bei später Erstmanifestation (>50 Jahre): Kranielle Bildgebung (CT/MRT) und neuropsychologisches Screening',
        ]},
      ],
    },
    {
      titel: 'Therapie',
      intro: 'Therapie der 1. Wahl ist die Kognitive Verhaltenstherapie mit Expositionstraining und Reaktionsverhinderung. Pharmakotherapie ist nicht Mittel der 1. Wahl, kann aber kombiniert werden.',
      gruppen: [
        { titel: 'Psychotherapie – KVT mit Expositionstraining und Reaktionsverhinderung', punkte: [
          'Vorbereitung: Komorbiditäten abklären, Psychoedukation, Zwangshierarchie erstellen',
          'Vorgehen: I.d.R. graduierte Konfrontation beginnend mit mittelschweren Stimuli; zunächst therapeutisch begleitet; möglichst hochfrequent (an aufeinanderfolgenden Tagen); Expositionen auch im häuslichen Umfeld',
          'Therapieeffekte: Response in ca. 60–80% der Fälle; mittlere bis hohe Effektstärken; langanhaltende Symptombesserung möglich',
          'Sonderfall reine Zwangsgedanken: Exposition z.B. durch wiederholtes Hören selbst aufgenommener Zwangsgedanken; Kombination mit SSRI empfohlen',
          'Setting: Ambulant (1. Wahl); stationär bei schwerer Symptomatik, unzureichender ambulanter Wirksamkeit, Suizidalität oder ausgeprägter Verwahrlosung',
          'Weitere Verfahren: Metakognitive Therapie nach Wells, Akzeptanz- und Commitment-Therapie, Mindfulness-based Cognitive Therapy',
        ]},
        { titel: 'Pharmakotherapie', punkte: [
          '1. Wahl: SSRI – Besonderheiten: Längere Wirklatenz (Wirkeintritt i.d.R. nicht vor der 5. Woche), höhere Dosis als bei Depression notwendig, Wirkmaximum nach 8–12 Wochen',
          'Geeignete Substanzen: Escitalopram, Sertralin, Fluoxetin, Paroxetin, Fluvoxamin',
          'Responserate bei Monotherapie: Ca. 60%; durchschnittliche Y-BOCS-Besserung: 20–40%',
          'Bei Therapieerfolg: Erhaltungsbehandlung über 1–2 Jahre, dann langsam ausschleichen',
          '2. Wahl: Clomipramin oder Venlafaxin (Off-Label)',
          'Bei unzureichender SSRI-Response: Dosiserhöhung (Off-Label), Umstellung auf anderes SSRI oder Clomipramin, Augmentation mit Risperidon oder Aripiprazol (Off-Label)',
        ]},
        { titel: 'Weitere Therapieverfahren', punkte: [
          'Sport: Insb. Ausdauertraining sinnvoll; kein nachgewiesener Effekt auf Zwangsgedanken',
          'rTMS: Zur kurzfristigen Symptomreduktion; Niederfrequenzstimulation des linken dorsolateralen Präfrontalkortex',
          'Tiefe Hirnstimulation: Bei schwerster Symptomausprägung und Therapieresistenz; Symptombesserung in ca. 40–60% der Fälle; Stimulationsort oft vordere Capsula interna beidseits',
        ]},
      ],
    },
  ],
  cave: 'Viele Betroffene verheimlichen ihre Symptome – empathische und gezielte Befragung ist essenziell! SSRI bei OCD erfordern höhere Dosierungen und längere Wirklatenz als bei Depression (Wirkmaximum erst nach 8–12 Wochen).',
  merksaetze: [
    'KVT mit Expositionstraining und Reaktionsverhinderung ist die Therapie der 1. Wahl!',
    'Das Expositionstraining sollte möglichst als Blockexposition (an aufeinanderfolgenden Tagen) erfolgen!',
  ],
});

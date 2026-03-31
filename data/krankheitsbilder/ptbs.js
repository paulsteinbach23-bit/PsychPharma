(window.KRANKHEITSBILDER = window.KRANKHEITSBILDER || []).push({
  id: 'ptbs',
  name: 'PTBS',
  subtitle: 'Posttraumatische Belastungsstörung',
  icd10: 'F43.1',
  kategorie: 'Traumafolgestörungen',
  farbe: '#ffa94d',
  definition: 'Verzögerte oder protrahierte Reaktion, die innerhalb von 6 Monaten nach einem traumatischen, emotional belastenden Ereignis eintreten kann. Die posttraumatische Belastungsstörung (PTBS) zählt somit zu den spezifischen Traumafolgestörungen. Gekennzeichnet ist sie durch eine Erschütterung des Selbst- und Weltbildes. Leitsymptome sind ein Wiedererleben des Traumas (Flashbacks), Vermeidung traumaassoziierter Stimuli und Hyperarousal. Eine Chronifizierung ist möglich (ca. 20–30% der Fälle).',
  sektionen: [
    {
      titel: 'Ätiologie',
      gruppen: [
        { titel: 'Ursache', punkte: [
          'Erleben oder Beobachten eines traumatischen Ereignisses',
          'Typ-1-Trauma: Kurzfristiges, plötzliches Auftreten',
          'Typ-2-Trauma: Länger andauerndes, mehrfaches Auftreten',
          'Entscheidend: Schwere des Traumas (Art und Dauer), subjektive Bewertung sowie erlebter Kontrollverlust',
        ]},
        { titel: 'Risikofaktoren', punkte: [
          'Prätraumatisch: Traumatische Kindheitserfahrungen, vorherige Traumatisierungen, psychische Erkrankungen',
          'Peritraumatisch: Hoher empfundener Autonomieverlust, plötzliches Auftreten des Traumas, subjektiv hohe wahrgenommene Lebensgefahr, langandauernde dissoziative Symptome, zwischenmenschliche Gewalt (Man-made-Trauma)',
          'Posttraumatisch: Mangelnde soziale Unterstützung, körperliche Verletzungen/Schmerzen, anhaltender Stress, fortgesetzte Dissoziationsneigung, eigene Schuldzuweisung, sekundäre Belastungen, Alkoholmissbrauch',
        ]},
        { titel: 'Schutzfaktoren', punkte: [
          'Peritraumatisch: Hohe Selbstwirksamkeitserwartung',
          'Posttraumatisch: Soziale Unterstützung, Schutz vor weiteren Belastungen, hohes Kohärenzgefühl',
        ]},
        { titel: 'Biologisches Erklärungsmodell', punkte: [
          'Normaler Weg: Thalamus → Assoziationskortex → Orbitofrontaler Kortex und Hippocampus → Amygdala',
          'Verkürzter Weg (pathologisch): Thalamus → Amygdala → Ausbildung eines Traumagedächtnisses',
          'Mögliche Einflussfaktoren: Hypocortisolismus → Erhöhte Katecholaminfreisetzung bei Stress → Inhibition des präfrontalen Kortex, Disinhibition der Amygdala',
        ]},
      ],
    },
    {
      titel: 'Prognose',
      punkte: [
        'Mittlere Dauer: Frauen 48 Monate, Männer 12 Monate (Symptome >3 Monate prognostisch ungünstig)',
        'Vollständige Remission in den ersten 3 Monaten bei 50% der Fälle; 80–90% Remission insgesamt',
        'Spontanremission von 50% nach 4 Jahren (weitere Quelle)',
        'Chronifizierung in ca. 20–30% der Fälle',
        'Verzögerte PTBS: Entwickelt sich bei ca. 7% (nach >6 Monaten)',
        'Komplikation: Kann in eine andauernde Persönlichkeitsänderung (F62.0) übergehen',
      ],
    },
    {
      titel: 'Symptome',
      gruppen: [
        { titel: 'Wiedererleben (Re-experiencing)', punkte: [
          'Häufig ausgelöst durch einen Schlüsselreiz (Trigger)',
          'Intrusionen: Eindringliches, ungewolltes Erinnern und Wiedererleben bei erhaltener Realitätskontrolle',
          'Flashbacks: Ausgeprägte Form der Intrusion; traumatisches Ereignis wird durch Gedanken, Gefühle und Bilder erneut erlebt; Realitätskontrolle i.d.R. nicht mehr erhalten',
          'Intrusive Bilder',
          'Albträume',
        ]},
        { titel: 'Vermeidungsverhalten', punkte: [
          'Vermeidung von Gesprächen, Situationen, Orten etc., die mit dem Trauma in Verbindung stehen',
          'Emotionale Taubheit (Numbing)',
          'Partielle Amnesie: Erinnerungsbeeinträchtigung in Bezug auf das traumatische Ereignis',
        ]},
        { titel: 'Hyperarousal', punkte: [
          'Psychische Übererregung: Reizbarkeit, erhöhte Anspannung, Wutausbrüche, Schlafstörungen, Konzentrationsschwierigkeiten, übermäßige Wachsamkeit, erhöhte Schreckhaftigkeit',
          'Vegetative Übererregung: Tachykardie (subjektiv Herzklopfen/-rasen), Engegefühl in der Brust, Atembeschwerden, Zittern',
        ]},
        { titel: 'Weitere Symptome', punkte: [
          'Depressivität: Interessenverlust, Anhedonie, emotionale Abstumpfung und sozialer Rückzug',
          'Anhaltende negative Einstellungen und verzerrte Kognitionen, bspw. bzgl. der Schuldzuweisung',
          'Dissoziative Symptome: Dissoziative Amnesie, Derealisation, Depersonalisation, Abwesenheit, Lähmungen',
          'Suizidgedanken',
          'Symptombedingte psychosoziale Komplikationen: Arbeitsplatzverlust, Konflikte in zwischenmenschlichen Beziehungen',
        ]},
        { titel: 'Komorbiditäten', punkte: [
          'Psychisch: Affektive Störungen, Suchterkrankungen, Somatisierungsstörungen, Psychosen, Borderline-Persönlichkeitsstörungen, Angst- und Zwangsstörungen',
          'Somatisch: Arterielle Hypertonie, Asthma, chronische Schmerzsyndrome, rheumatische Erkrankungen',
        ]},
      ],
    },
    {
      titel: 'Diagnostik',
      intro: 'Diagnostische Kriterien nach ICD-10:',
      punkte: [
        'Kriterium A – Traumatisches Ereignis: Exposition gegenüber einem Ereignis von außergewöhnlicher Bedrohung oder katastrophalem Ausmaß, das bei nahezu jedem Menschen tiefe Verzweiflung auslösen würde',
        'Kriterium B – Wiedererleben: Das Trauma drängt sich in Form von unwillkürlichen Erinnerungen, Flashbacks und Albträumen wiederholt ins Bewusstsein',
        'Kriterium C – Vermeidungsverhalten: Neu aufgetretenes Vermeidungsverhalten in direktem Zusammenhang mit dem traumatischen Erlebnis',
        'Kriterium D – Amnesie oder Übererregung: Vollständiger oder teilweiser Erinnerungsverlust an das Trauma ODER anhaltende Übererregungssymptome mit mind. 2 von: Ein-/Durchschlafstörungen, Reizbarkeit/Wutausbrüche, Konzentrationsschwierigkeiten, Hypervigilanz, erhöhte Schreckhaftigkeit',
        'Kriterium E – Zeitkriterium: Sämtliche Symptome müssen innerhalb von 6 Monaten nach dem traumatischen Erlebnis aufgetreten sein; in begründeten Ausnahmefällen kann auch ein späterer Beginn berücksichtigt werden',
      ],
    },
    {
      titel: 'Therapie',
      gruppen: [
        { titel: 'Psychotherapie', punkte: [
          'Frühintervention: Bei akuter Symptomatik auf Therapieansätze der akuten Belastungsreaktion verweisen',
          'Methode der Wahl – Traumafokussierte KVT: Bausteine: imaginative Exposition, narrative Exposition, Exposition in vivo, kognitive Umstrukturierung',
          'Etablierte KVT-Verfahren: Prolongierte Exposition (Foa), Kognitive Verarbeitungstherapie (Resick), Kognitive Therapie (Ehlers/Clark), Narrative Expositionstherapie (NET)',
          'Methode der Wahl – EMDR (Eye Movement Desensitization and Reprocessing): Traumaszene wird innerlich wachgerufen, während die Augen den sich links-rechts bewegenden Fingern des Therapeuten folgen',
          'Phasenbasierte Ansätze bei komplexer PTBS: STAIR/NT (Skills-Training zur affektiven und interpersonellen Regulation + narrative Therapie), DBT-PTBS',
        ]},
        { titel: 'Pharmakotherapie', punkte: [
          'Nur adjuvant (oder alternativ bei Ablehnung/fehlender Möglichkeit einer Psychotherapie); Effekt tritt deutlich zeitverzögert ein',
          'Mittel der Wahl: Sertralin (Start 25 mg 1-0-0, nach 1 Woche auf 50 mg 1-0-0, max. 200 mg/Tag)',
          'Mittel der Wahl: Paroxetin (Start 10 mg 1-0-0, Erhaltung 20 mg 1-0-0, max. 50 mg/Tag; bei >65 Jahren max. 40 mg/Tag)',
          'Dosierung initial etwas niedriger wählen, da PTBS-Patienten meist empfindsamer auf Nebenwirkungen reagieren',
          'Erhaltungstherapie: mind. 8–12 Wochen eher hohe Erhaltungsdosis; mind. 1 Jahr, bei persistierender Restsymptomatik mind. 2 Jahre',
          'Alternativ (Off-Label): Venlafaxin (initial 37,5 mg/d, langsame Dosissteigerung in Zwei-Wochen-Schritten bis max. 375 mg/Tag)',
        ]},
      ],
    },
  ],
  cave: 'Die Rate an Suizidversuchen ist bei Vorliegen einer PTBS ca. 8-fach erhöht! Komorbide Störungen sind bei der PTBS häufig und müssen aktiv exploriert werden.',
  merksaetze: [
    'Komorbide Störungen sind bei der PTBS häufig!',
  ],
});

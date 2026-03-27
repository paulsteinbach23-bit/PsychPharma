const MEDS = [
  {
    name: 'Citalopram', klasse: 'SSRI', handelsname: 'Cipramil',
    mechanismus: 'Selektiver Serotonin-Wiederaufnahmehemmer (SSRI). Blockiert den SERT-Transporter und erhöht so die synaptische Serotoninkonzentration.',
    dosierung: '20–40 mg/Tag, einmal täglich. Start mit 20 mg, nach 2–4 Wochen ggf. auf 40 mg erhöhen. Max. 40 mg (> 60 J.: max. 20 mg).',
    indikationen: ['Depression', 'Panikstörung', 'Soziale Phobie', 'Zwangsstörung (OCD)', 'PTBS'],
    nebenwirkungen: ['Übelkeit, Diarrhö (initial)', 'Sexuelle Dysfunktion', 'Schlafstörungen', 'Kopfschmerzen', 'QTc-Verlängerung (dosisabhängig)', 'Gewichtszunahme (langfristig)'],
    kontraindikationen: ['MAO-Hemmer (Mindestabstand 14 Tage)', 'Bekannte QTc-Verlängerung', 'Hypokaliämie / Hypomagnesiämie'],
    cave: 'QTc-Monitoring bei Risikopatienten! Höchste QTc-Verlängerung aller SSRI. Im Alter max. 20 mg. EKG vor Beginn empfohlen.',
    rezeptoren: { '5-HT-I': '+++', 'NA-I': '+/-', 'DA-I': '0', 'MAOH': '0', 'mACh': '0', 'H₁': '+', '5-HT₂': '0', 'DA': '+/-', 'α₁': '+/-', 'α₂': '0' }
  },
  {
    name: 'Escitalopram', klasse: 'SSRI', handelsname: 'Lexapro / Cipralex',
    mechanismus: 'Aktives S-Enantiomer des Citaloprams. Hochselektiver SSRI mit allosterischer Bindungsstelle am SERT – dadurch stärkere Hemmung als Citalopram.',
    dosierung: '10–20 mg/Tag, einmal täglich. Start 10 mg, nach 1–2 Wochen auf 20 mg. Max. 20 mg (> 65 J.: max. 10 mg).',
    indikationen: ['Depression', 'Generalisierte Angststörung (GAD)', 'Panikstörung', 'Soziale Phobie', 'OCD'],
    nebenwirkungen: ['Übelkeit (initial)', 'Sexuelle Dysfunktion', 'Insomnie oder Somnolenz', 'Kopfschmerzen', 'Schwitzen', 'Leichte QTc-Verlängerung'],
    kontraindikationen: ['MAO-Hemmer', 'QTc-Verlängerung bekannt', 'Pimozid'],
    cave: 'Gilt als SSRI mit bestem Nebenwirkungsprofil. Trotzdem QTc beachten. Abruptes Absetzen vermeiden (Ausschleichen).',
    rezeptoren: { '5-HT-I': '+++', 'NA-I': '+/-', 'DA-I': '0', 'MAOH': '0', 'mACh': '0', 'H₁': '+/-', '5-HT₂': '0', 'DA': '+/-', 'α₁': '+/-', 'α₂': '0' }
  },
  {
    name: 'Sertralin', klasse: 'SSRI', handelsname: 'Zoloft / Gladem',
    mechanismus: 'Potenter, selektiver SSRI. Schwache Dopamin-Wiederaufnahmehemmung. Wenige CYP-Interaktionen.',
    dosierung: '50–200 mg/Tag. Start 50 mg, wöchentlich steigern. Max. 200 mg/Tag.',
    indikationen: ['Depression', 'Panikstörung', 'PTBS', 'OCD', 'Soziale Phobie', 'Prämenstruelle Dysphoristörung'],
    nebenwirkungen: ['Diarrhö (häufig)', 'Übelkeit', 'Sexuelle Dysfunktion', 'Insomnie', 'Mundtrockenheit'],
    kontraindikationen: ['MAO-Hemmer', 'Pimozid'],
    cave: 'Mittel der Wahl in der Schwangerschaft. Günstigstes Interaktionsprofil aller SSRI. Erste Wahl bei komorbiden körperlichen Erkrankungen.',
    rezeptoren: { '5-HT-I': '+++', 'NA-I': '+/-', 'DA-I': '+', 'MAOH': '0', 'mACh': '+/-', 'H₁': '0', '5-HT₂': '0', 'DA': '+', 'α₁': '0', 'α₂': '0' }
  },
  {
    name: 'Fluoxetin', klasse: 'SSRI', handelsname: 'Fluctin / Prozac',
    mechanismus: 'SSRI mit sehr langer Halbwertszeit (1–4 Tage, aktiver Metabolit Norfluoxetin: 4–16 Tage). Dadurch geringeres Absetzsyndrom.',
    dosierung: '20–60 mg/Tag. Start 20 mg morgens. Max. 60 mg/Tag.',
    indikationen: ['Depression', 'OCD', 'Bulimia nervosa', 'Panikstörung', 'PMDS'],
    nebenwirkungen: ['Unruhe, Agitiertheit', 'Insomnie', 'Übelkeit', 'Sexuelle Dysfunktion', 'Gewichtsverlust initial'],
    kontraindikationen: ['MAO-Hemmer (Abstand mind. 5 Wochen nach Absetzen!)', 'Thioridazin'],
    cave: 'Starker CYP2D6-Inhibitor – viele Interaktionen! Sehr lange HWZ: nach Absetzen noch wochenlang wirksam. Wegen Aktivierungseffekt morgens geben.',
    rezeptoren: { '5-HT-I': '+++', 'NA-I': '+/-', 'DA-I': '+/-', 'MAOH': '0', 'mACh': '+/-', 'H₁': '+/-', '5-HT₂': '+', 'DA': '+/-', 'α₁': '+/-', 'α₂': '0' }
  },
  {
    name: 'Fluvoxamin', klasse: 'SSRI', handelsname: 'Fevarin',
    mechanismus: 'SSRI mit zusätzlicher Sigma-1-Rezeptor-Agonismus. Starker CYP1A2- und CYP3A4-Inhibitor.',
    dosierung: '100–300 mg/Tag, aufgeteilt in 2 Dosen. Start 50 mg abends.',
    indikationen: ['OCD (Hauptindikation)', 'Depression', 'Soziale Phobie'],
    nebenwirkungen: ['Übelkeit (häufig)', 'Sedierung', 'Sexuelle Dysfunktion', 'Mundtrockenheit'],
    kontraindikationen: ['MAO-Hemmer', 'Tizanidin', 'Ramelteon'],
    cave: 'Stärkster CYP-Inhibitor aller SSRI – Interaktionen unbedingt prüfen! Theophyllin, Clozapin, Olanzapin-Spiegel steigen stark an.',
    rezeptoren: { '5-HT-I': '+++', 'NA-I': '+', 'DA-I': '0', 'MAOH': '0', 'mACh': '0', 'H₁': '0', '5-HT₂': '0', 'DA': '+/-', 'α₁': '+/-', 'α₂': '0' }
  },
  {
    name: 'Paroxetin', klasse: 'SSRI', handelsname: 'Seroxat / Tagonis',
    mechanismus: 'Potenter SSRI mit zusätzlicher anticholinerger Wirkung und Noradrenalin-Wiederaufnahmehemmung. Starker CYP2D6-Inhibitor.',
    dosierung: '20–50 mg/Tag. Start 20 mg, langsam steigern.',
    indikationen: ['Depression', 'Panikstörung', 'Soziale Phobie', 'GAD', 'PTBS', 'OCD'],
    nebenwirkungen: ['Gewichtszunahme (ausgeprägt)', 'Sexuelle Dysfunktion (häufigste NW)', 'Sedierung', 'Mundtrockenheit', 'Verstopfung', 'Absetzsyndrom (stark)'],
    kontraindikationen: ['MAO-Hemmer', 'Thioridazin'],
    cave: 'Stärkste Gewichtszunahme & sexuelle Dysfunktion aller SSRI. Sehr ausgeprägtes Absetzsyndrom – langsam ausschleichen! In der Schwangerschaft zurückhaltend.',
    rezeptoren: { '5-HT-I': '+++', 'NA-I': '+/-', 'DA-I': '0', 'MAOH': '0', 'mACh': '++', 'H₁': '0', '5-HT₂': '0', 'DA': '+', 'α₁': '+/-', 'α₂': '0' }
  },
  {
    name: 'Venlafaxin', klasse: 'SNRI', handelsname: 'Effexor / Trevilor',
    mechanismus: 'Serotonin-Noradrenalin-Wiederaufnahmehemmer (SNRI). Bei niedrigen Dosen primär SSRI-Wirkung, bei höheren Dosen zusätzlich NRI-Wirkung.',
    dosierung: '75–225 mg/Tag (Retardform). Start 75 mg, alle 2 Wochen steigern. Max. 375 mg bei schwerer Depression.',
    indikationen: ['Depression', 'GAD', 'Panikstörung', 'Soziale Phobie', 'Neuropathische Schmerzen'],
    nebenwirkungen: ['Übelkeit', 'Blutdruckerhöhung (dosisabhängig)', 'Sexuelle Dysfunktion', 'Insomnie', 'Schwitzen', 'Absetzsyndrom'],
    kontraindikationen: ['MAO-Hemmer', 'Unkontrollierte Hypertonie'],
    cave: 'RR-Monitoring! Ab 150 mg steigt der Blutdruck. Abruptes Absetzen vermeiden – starkes Absetzsyndrom. Suizidrisiko zu Therapiebeginn beachten.',
    rezeptoren: { '5-HT-I': '+++', 'NA-I': '+/-', 'DA-I': '+/-', 'MAOH': '0', 'mACh': '0', 'H₁': '0', '5-HT₂': '0', 'DA': '+/-', 'α₁': '+/-', 'α₂': '0' }
  },
  {
    name: 'Duloxetin', klasse: 'SNRI', handelsname: 'Cymbalta / Ariclaim',
    mechanismus: 'Ausgewogener SNRI – gleichmäßige Hemmung von Serotonin- und Noradrenalin-Wiederaufnahme über alle Dosierungen.',
    dosierung: '60 mg/Tag (einmal täglich). Bei Schmerzen: 60–120 mg. Start ggf. 30 mg.',
    indikationen: ['Depression', 'GAD', 'Diabetische Neuropathie', 'Fibromyalgie', 'Chronische Rückenschmerzen', 'Stressinkontinenz'],
    nebenwirkungen: ['Übelkeit', 'Mundtrockenheit', 'Schlafstörungen', 'Schwitzen', 'Blutdruckanstieg', 'Hepatotoxizität (selten)'],
    kontraindikationen: ['MAO-Hemmer', 'Schwere Leberinsuffizienz', 'Unkontrolliertes Glaukom'],
    cave: 'Leberwerte kontrollieren! Kein Alkohol. Besonders geeignet bei Depression + Schmerzsyndrom. Keine Dosisanpassung nötig in der Niere bis GFR 30.',
    rezeptoren: { '5-HT-I': '++', 'NA-I': '++', 'DA-I': '+/-', 'MAOH': '0', 'mACh': '+/-', 'H₁': '+/-', '5-HT₂': '0', 'DA': '+/-', 'α₁': '+/-', 'α₂': '0' }
  },
  {
    name: 'Amitriptylin', klasse: 'TZA', handelsname: 'Saroten / Amineurin',
    mechanismus: 'Trizyklisches Antidepressivum. Hemmt Serotonin- und Noradrenalin-Wiederaufnahme. Zusätzlich: antihistaminerg (sedierend), anticholinerg, antiadrenerg.',
    dosierung: 'Depression: 75–200 mg/Tag. Schmerz/Schlaf: 10–75 mg zur Nacht.',
    indikationen: ['Depression (schwer)', 'Neuropathische Schmerzen', 'Migräneprophylaxe', 'Schlafstörungen', 'Enuresis'],
    nebenwirkungen: ['Starke Sedierung', 'Mundtrockenheit', 'Obstipation', 'Harnverhalt', 'Orthostatische Hypotonie', 'QTc-Verlängerung', 'Gewichtszunahme', 'Kognitive Einschränkungen'],
    kontraindikationen: ['MAO-Hemmer', 'Frischer Herzinfarkt', 'AV-Block', 'Engwinkelglaukom', 'Prostatahyperplasie'],
    cave: 'Hohes Interaktionspotenzial! Im Alter sehr zurückhaltend (Sturzgefahr, anticholinerges Syndrom). Letale Dosis bei Überdosierung – gefährlich bei Suizidalität. EKG-Pflicht!',
    rezeptoren: { '5-HT-I': '++', 'NA-I': '++', 'DA-I': '+/-', 'MAOH': '0', 'mACh': '++', 'H₁': '+++', '5-HT₂': '++', 'DA': '+/-', 'α₁': '+++', 'α₂': '0' }
  },
  {
    name: 'Clomipramin', klasse: 'TZA', handelsname: 'Anafranil',
    mechanismus: 'TZA mit stärkster Serotonin-Wiederaufnahmehemmung aller Trizyklika. Goldstandard bei OCD.',
    dosierung: '75–250 mg/Tag. Langsam einschleichen.',
    indikationen: ['OCD (Goldstandard)', 'Depression', 'Panikstörung', 'Phobien', 'Kataplexie bei Narkolepsie'],
    nebenwirkungen: ['Sedierung', 'Anticholinerge NW', 'Sexuelle Dysfunktion', 'Gewichtszunahme', 'Krampfschwelle ↓'],
    kontraindikationen: ['MAO-Hemmer', 'Herzerkrankungen', 'Engwinkelglaukom'],
    cave: 'Bei OCD oft Therapiemittel der Wahl wenn SSRI versagen. Krampfanfallsrisiko erhöht. EKG obligat. Suizidalität: gefährlich bei Überdosierung.',
    rezeptoren: { '5-HT-I': '+++', 'NA-I': '++', 'DA-I': '+/-', 'MAOH': '0', 'mACh': '++', 'H₁': '+', '5-HT₂': '+', 'DA': '+/-', 'α₁': '++', 'α₂': '0' }
  },
  {
    name: 'Imipramin', klasse: 'TZA', handelsname: 'Tofranil',
    mechanismus: 'Klassisches TZA. Hemmt NE > Serotonin-Wiederaufnahme. Aktivierender als Amitriptylin.',
    dosierung: '75–200 mg/Tag. Im Alter niedriger.',
    indikationen: ['Depression', 'Panikstörung', 'Enuresis nocturna (Kinder)', 'Chronische Schmerzen'],
    nebenwirkungen: ['Anticholinerge NW', 'Kardiotoxizität', 'Orthostatische Hypotonie', 'Schlafstörungen (aktivierend)'],
    kontraindikationen: ['MAO-Hemmer', 'Herzerkrankungen', 'Engwinkelglaukom'],
    cave: 'Aktivierender als Amitriptylin – weniger für Schlaf geeignet. Historisch bedeutsam als erstes klinisch eingesetztes Antidepressivum (1957).',
    rezeptoren: { '5-HT-I': '++', 'NA-I': '++', 'DA-I': '+/-', 'MAOH': '0', 'mACh': '+', 'H₁': '+/-', '5-HT₂': '+', 'DA': '0', 'α₁': '+', 'α₂': '0' }
  },
  {
    name: 'Doxepin', klasse: 'TZA', handelsname: 'Aponal / Sinquan',
    mechanismus: 'TZA mit stark antihistaminerger, sedierender Wirkung. Bei sehr niedriger Dosis (3–6 mg) selektiver H1-Antagonist.',
    dosierung: 'Depression: 75–150 mg. Schlaf: 3–6 mg (Silenor). Niedrig einschleichen.',
    indikationen: ['Depression mit Angst/Schlafstörung', 'Insomnie (Niedrigdosis)', 'Juckreiz (topisch)'],
    nebenwirkungen: ['Starke Sedierung', 'Gewichtszunahme', 'Anticholinerge NW', 'Mundtrockenheit'],
    kontraindikationen: ['MAO-Hemmer', 'Engwinkelglaukom', 'Harnverhalt'],
    cave: 'Sehr sedierend – abends geben. Niedrigdosis (6 mg) zugelassen für primäre Insomnie mit weniger NW. Im Alter Sturzrisiko beachten.',
    rezeptoren: { '5-HT-I': '+', 'NA-I': '++', 'DA-I': '+', 'MAOH': '0', 'mACh': '+', 'H₁': '+++', '5-HT₂': '++', 'DA': '+', 'α₁': '+++', 'α₂': '0' }
  },
  {
    name: 'Maprotilin', klasse: 'TZA', handelsname: 'Ludiomil',
    mechanismus: 'Tetrazyklisches Antidepressivum (strukturell TZA-ähnlich). Selektiver NRI ohne Serotonin-Effekt. Antihistaminerg (sedierend).',
    dosierung: '75–150 mg/Tag.',
    indikationen: ['Depression', 'Angst-depressive Zustände'],
    nebenwirkungen: ['Sedierung', 'Krampfanfälle (höheres Risiko als andere TZA)', 'Anticholinerge NW', 'Hautausschlag'],
    kontraindikationen: ['MAO-Hemmer', 'Epilepsie', 'Herzerkrankungen'],
    cave: 'Erhöhtes Krampfrisiko – bei Epilepsie kontraindiziert. Kaum noch Erstlinie, aber relevant für Prüfungen.',
    rezeptoren: { '5-HT-I': '+/-', 'NA-I': '+++', 'DA-I': '+/-', 'MAOH': '0', 'mACh': '+', 'H₁': '+++', '5-HT₂': '+', 'DA': '0', 'α₁': '+', 'α₂': '0' }
  },
  {
    name: 'Trimipramin', klasse: 'TZA', handelsname: 'Stangyl',
    mechanismus: 'Atypisches TZA. Schwache Monoamin-Wiederaufnahmehemmung, aber stark antihistaminerg und antidopaminerg. Kein klassischer antidepressiver Mechanismus.',
    dosierung: '75–300 mg/Tag, Hauptdosis abends.',
    indikationen: ['Depression mit schwerer Insomnie', 'Agitierte Depression', 'Schlafstörungen'],
    nebenwirkungen: ['Starke Sedierung', 'Gewichtszunahme', 'Orthostatische Hypotonie', 'Anticholinerge NW'],
    kontraindikationen: ['MAO-Hemmer', 'Engwinkelglaukom'],
    cave: 'Besonders schlaffördernd – Mittel der Wahl bei Depression + schwerer Insomnie. REM-Schlaf bleibt erhalten (Vorteil gegenüber anderen TZA).',
    rezeptoren: { '5-HT-I': '+/-', 'NA-I': '+', 'DA-I': '+/-', 'MAOH': '0', 'mACh': '++', 'H₁': '+++', '5-HT₂': '++', 'DA': '+/-', 'α₁': '+++', 'α₂': '0' }
  },
  {
    name: 'Nortriptylin', klasse: 'TZA', handelsname: 'Nortrilen',
    mechanismus: 'Aktiver Metabolit von Amitriptylin. Selektiverer NRI als Amitriptylin, weniger anticholinerg.',
    dosierung: '50–150 mg/Tag.',
    indikationen: ['Depression', 'Neuropathische Schmerzen', 'Migräneprophylaxe'],
    nebenwirkungen: ['Anticholinerge NW (schwächer als Amitriptylin)', 'Sedierung', 'Orthostatische Hypotonie'],
    kontraindikationen: ['MAO-Hemmer', 'Herzerkrankungen'],
    cave: 'Besser verträglich als Amitriptylin. Therapeutisches Drug Monitoring empfohlen (Zielspiegel 50–150 ng/ml).',
    rezeptoren: { '5-HT-I': '+', 'NA-I': '+++', 'DA-I': '+/-', 'MAOH': '0', 'mACh': '+', 'H₁': '+', '5-HT₂': '+', 'DA': '0', 'α₁': '+', 'α₂': '0' }
  },
  {
    name: 'Tranylcypromin', klasse: 'MAO', handelsname: 'Jatrosom',
    mechanismus: 'Irreversibler, nicht-selektiver MAO-Hemmer (MAO-A und MAO-B). Verhindert Abbau von Serotonin, Noradrenalin, Dopamin und Tyramin.',
    dosierung: '10–40 mg/Tag in 2 Dosen. Start 10 mg.',
    indikationen: ['Therapieresistente Depression', 'Atypische Depression', 'Soziale Phobie'],
    nebenwirkungen: ['Hypertensive Krise (Tyramin!)', 'Insomnie', 'Orthostatische Hypotonie', 'Sexuelle Dysfunktion', 'Gewichtszunahme'],
    kontraindikationen: ['Alle anderen Antidepressiva (Abstand mind. 14 Tage)', 'Tyraminreiche Ernährung', 'Sympathomimetika', 'Opioid Meperidin'],
    cave: '⚠ TYRAMIN-DIÄT PFLICHT! Kein Käse, kein Rotwein, keine Wurstwaren. Hypertensive Krisen können lebensbedrohlich sein. Mindestabstand zu anderen AD: 14 Tage (nach Fluoxetin: 5 Wochen)!',
    rezeptoren: { '5-HT-I': '0', 'NA-I': '0', 'DA-I': '0', 'MAOH': '+++', 'mACh': '0', 'H₁': '0', '5-HT₂': '0', 'DA': '0', 'α₁': '0', 'α₂': '0' }
  },
  {
    name: 'Moclobemid', klasse: 'MAO', handelsname: 'Aurorix',
    mechanismus: 'Reversibler, selektiver MAO-A-Hemmer (RIMA). Hemmt Abbau von Serotonin und Noradrenalin. Reversibel: Tyramin verdrängt Moclobemid kompetitiv.',
    dosierung: '300–600 mg/Tag in 2 Dosen. Nach den Mahlzeiten.',
    indikationen: ['Depression', 'Soziale Phobie'],
    nebenwirkungen: ['Insomnie', 'Übelkeit', 'Kopfschmerzen', 'Mundtrockenheit', 'Agitiertheit'],
    kontraindikationen: ['Andere Antidepressiva (Abstand beachten)', 'Verwirrtheitszustände'],
    cave: 'Wesentlich sicherer als Tranylcypromin! Tyramin-Restriktion nur bei sehr großen Mengen nötig. Nach den Mahlzeiten einnehmen (nicht vor). Trotzdem: 24h Abstand nach anderen AD.',
    rezeptoren: { '5-HT-I': '0', 'NA-I': '0', 'DA-I': '0', 'MAOH': '++', 'mACh': '0', 'H₁': '0', '5-HT₂': '0', 'DA': '0', 'α₁': '0', 'α₂': '0' }
  },
  {
    name: 'Mirtazapin', klasse: 'Andere', handelsname: 'Remergil / Remeron',
    mechanismus: 'Noradrenerges und spezifisch serotonerges Antidepressivum (NaSSA). Blockiert α2-Autorezeptoren → erhöhte NE/5-HT-Freisetzung. Blockiert 5-HT2/3 und H1 (stark sedierend, antiemetisch).',
    dosierung: '15–45 mg/Tag, abends. Paradox: 15 mg sedierender als 30–45 mg (mehr NE bei höherer Dosis).',
    indikationen: ['Depression mit Insomnie', 'Depression mit Appetitverlust', 'Angststörungen', 'PTBS', 'Übelkeit (antiemetisch)'],
    nebenwirkungen: ['Starke Sedierung (bes. bei 15 mg)', 'Gewichtszunahme (Appetitsteigerung)', 'Mundtrockenheit', 'Cholesterin ↑', 'Agranulozytose (selten)'],
    kontraindikationen: ['MAO-Hemmer'],
    cave: 'Kein Serotonin-Syndrom-Risiko (kein SERT-Effekt). Ideal bei Schlaf- und Appetitstörung. Blutbild bei Infektzeichen prüfen (Agranulozytose). Sehr gut kombinierbar.',
    rezeptoren: { '5-HT-I': '+/-', 'NA-I': '0', 'DA-I': '0', 'MAOH': '0', 'mACh': '+/-', 'H₁': '+++', '5-HT₂': '+', 'DA': '+', 'α₁': '+', 'α₂': '++' }
  },
  {
    name: 'Vortioxetin', klasse: 'Andere', handelsname: 'Brintellix',
    mechanismus: 'Multimodales Antidepressivum: SSRI + 5-HT3/5-HT7-Antagonist + 5-HT1A-Agonist. Kognitive Wirkung über 5-HT-Modulation.',
    dosierung: '10–20 mg/Tag, einmal täglich. Start 10 mg.',
    indikationen: ['Depression', 'Kognitive Symptome bei Depression'],
    nebenwirkungen: ['Übelkeit (häufig, initial)', 'Verstopfung', 'Erbrechen', 'Sexuelle Dysfunktion (weniger als SSRI)', 'Pruritus'],
    kontraindikationen: ['MAO-Hemmer'],
    cave: 'Prokognitive Wirkung klinisch belegt. Gute Wahl bei kognitiven Beeinträchtigungen. Übelkeit oft initial – mit Mahlzeit nehmen, sinkt nach 1–2 Wochen.',
    rezeptoren: { '5-HT-I': '+++', 'NA-I': '+/-', 'DA-I': '0', 'MAOH': '0', 'mACh': '0', 'H₁': '0', '5-HT₂': '0', 'DA': '0', 'α₁': '0', 'α₂': '0' }
  },
  {
    name: 'Agomelatin', klasse: 'Andere', handelsname: 'Valdoxan',
    mechanismus: 'MT1/MT2-Melatonin-Rezeptor-Agonist + 5-HT2C-Antagonist. Resynchronisiert den zirkadianen Rhythmus. Kein Einfluss auf Monoamin-Wiederaufnahme.',
    dosierung: '25–50 mg abends (zur Schlafenszeit).',
    indikationen: ['Depression', 'Depression mit Schlafstörung'],
    nebenwirkungen: ['Hepatotoxizität (Transaminasen ↑)', 'Schwindel', 'Übelkeit', 'Kopfschmerzen'],
    kontraindikationen: ['Lebererkrankungen', 'Fluvoxamin (CYP1A2-Inhibitor)', 'Ciprofloxacin'],
    cave: '⚠ Leberwerte obligat: vor Beginn, nach 3, 6, 12, 24 Wochen! Kein Absetzsyndrom. Keine sexuellen NW. Einnahme abends wichtig für Wirkung.',
    rezeptoren: { '5-HT-I': '0', 'NA-I': '0', 'DA-I': '0', 'MAOH': '0', 'mACh': '0', 'H₁': '0', '5-HT₂': '++', 'DA': '0', 'α₁': '0', 'α₂': '0' }
  },
  {
    name: 'Bupropion', klasse: 'NRI', handelsname: 'Elontril / Wellbutrin / Zyban',
    mechanismus: 'Selektiver Noradrenalin-Dopamin-Wiederaufnahmehemmer (NDRI). Kein serotonerger Effekt. Nikotinrezeptor-Antagonist.',
    dosierung: '150–300 mg/Tag (Retardform). Start 150 mg, nach 1 Woche auf 300 mg.',
    indikationen: ['Depression', 'Raucherentwöhnung (Zyban)', 'ADHS (off-label)', 'Bipolare Depression (Augmentation)'],
    nebenwirkungen: ['Insomnie', 'Agitiertheit', 'Mundtrockenheit', 'Kopfschmerzen', 'Krampfanfälle (dosisabhängig)', 'Hypertonie'],
    kontraindikationen: ['Epilepsie / erhöhte Krampfbereitschaft', 'Essstörungen (Bulimie, Anorexie)', 'MAO-Hemmer', 'Abrupter Alkohol-/Benzo-Entzug'],
    cave: 'Keine sexuellen NW – Vorteil gegenüber SSRI/SNRI! Aktivierend: morgens geben. Krampfrisiko ab 450 mg. Kein Gewichtsanstieg (eher Gewichtsabnahme).',
    rezeptoren: { '5-HT-I': '+/-', 'NA-I': '++', 'DA-I': '++', 'MAOH': '0', 'mACh': '+/-', 'H₁': '+/-', '5-HT₂': '+/-', 'DA': '0', 'α₁': '+', 'α₂': '+/-' }
  },
  {
    name: 'Reboxetin', klasse: 'NRI', handelsname: 'Edronax',
    mechanismus: 'Selektiver Noradrenalin-Wiederaufnahmehemmer (NRI/NARI). Kein Serotonin- oder Dopamin-Effekt.',
    dosierung: '8–12 mg/Tag in 2 Dosen.',
    indikationen: ['Depression', 'Panikstörung'],
    nebenwirkungen: ['Insomnie', 'Schwitzen', 'Mundtrockenheit', 'Verstopfung', 'Harnverhalt', 'Tachykardie'],
    kontraindikationen: ['MAO-Hemmer', 'Engwinkelglaukom'],
    cave: 'In Metaanalysen schlechter wirksam als andere AD. Kaum noch Erstlinie. Aktivierend – morgens geben. Keine Gewichtszunahme, keine sexuellen NW.',
    rezeptoren: { '5-HT-I': '0', 'NA-I': '+++', 'DA-I': '0', 'MAOH': '0', 'mACh': '0', 'H₁': '0', '5-HT₂': '0', 'DA': '0', 'α₁': '0', 'α₂': '0' }
  },
  {
    name: 'Trazodon', klasse: 'Andere', handelsname: 'Trittico',
    mechanismus: 'Serotonin-Antagonist und -Wiederaufnahmehemmer (SARI). Blockiert 5-HT2A/C und H1 (sedierend). Schwacher SSRI.',
    dosierung: 'Depression: 150–400 mg/Tag. Schlaf: 25–100 mg zur Nacht.',
    indikationen: ['Depression mit Schlafstörung', 'Insomnie', 'Angststörungen'],
    nebenwirkungen: ['Starke Sedierung', 'Schwindel', 'Orthostatische Hypotonie', 'Priapismus (selten!)', 'Mundtrockenheit'],
    kontraindikationen: ['MAO-Hemmer', 'Frischer Herzinfarkt'],
    cave: '⚠ Priapismus-Risiko: Patienten aufklären (urologischer Notfall)! Gut verträglich, keine anticholinergen NW, kein Gewichtsanstieg. Zunehmend als Schlafmittel eingesetzt.',
    rezeptoren: { '5-HT-I': '++', 'NA-I': '0', 'DA-I': '0', 'MAOH': '0', 'mACh': '0', 'H₁': '+', '5-HT₂': '++', 'DA': '++', 'α₁': '++', 'α₂': '0' }
  },
  {
    name: 'Hypericum', klasse: 'Andere', handelsname: 'Johanniskraut / Laif',
    mechanismus: 'Pflanzliches AD. Hypericin und Hyperforin hemmen Wiederaufnahme von Serotonin, Noradrenalin und Dopamin. Starker CYP3A4-Induktor.',
    dosierung: '900 mg/Tag (standardisiert auf 5% Hyperforin) in 3 Dosen.',
    indikationen: ['Leichte bis mittelschwere Depression'],
    nebenwirkungen: ['Photosensibilisierung', 'Wechselwirkungen (CYP3A4!)', 'Übelkeit', 'Mundtrockenheit'],
    kontraindikationen: ['Schwere Depression', 'Bipolare Störung', 'Kombination mit serotonergen AD'],
    cave: '⚠ Starker CYP3A4-Induktor: Pille, Ciclosporin, HIV-Mittel, Warfarin werden abgebaut! Serotonin-Syndrom mit SSRI möglich. Nur leichte Depression!',
    rezeptoren: { '5-HT-I': '++', 'NA-I': '+', 'DA-I': '+', 'MAOH': '0', 'mACh': '0', 'H₁': '0', '5-HT₂': '+', 'DA': '0', 'α₁': '+', 'α₂': '0' }
  },
  {
    name: 'Esketamin', klasse: 'Andere', handelsname: 'Spravato (Nasenspray)',
    mechanismus: 'S-Enantiomer von Ketamin. NMDA-Rezeptor-Antagonist. Schnelle antidepressive Wirkung über glutamaterges System und AMPA-Potenzierung.',
    dosierung: '56–84 mg intranasal, 2x/Woche für 4 Wochen, dann 1x/Woche.',
    indikationen: ['Therapieresistente Depression (TRD)', 'Akute Suizidalität (schnelle Wirkung)'],
    nebenwirkungen: ['Dissoziation', 'Schwindel', 'Übelkeit', 'Sedierung', 'Blutdruckanstieg', 'Missbrauchspotenzial'],
    kontraindikationen: ['Psychose / Schizophrenie', 'Unkontrollierte Hypertonie', 'Aneurysma'],
    cave: 'Nur unter Aufsicht in zertifizierten Zentren! Patient muss 2h nachbeobachtet werden. Kein Autofahren am Anwendungstag. Revolutionär schnelle Wirkung (Stunden bis Tage).',
    rezeptoren: { '5-HT-I': '0', 'NA-I': '+/-', 'DA-I': '0', 'MAOH': '0', 'mACh': '+/-', 'H₁': '0', '5-HT₂': '?', 'DA': '+/-', 'α₁': '+/-', 'α₂': '0' }
  },
  {
    name: 'Tianeptin', klasse: 'Andere', handelsname: 'Stablon',
    mechanismus: 'Atypisch: Stimuliert (statt hemmt) die Serotonin-Wiederaufnahme. Glutamat-Modulation, AMPA-Potenzierung. Neuroprotektion.',
    dosierung: '37,5 mg/Tag in 3 Dosen (12,5 mg 3x täglich).',
    indikationen: ['Depression', 'Angststörungen', 'Alkoholabhängigkeit (begleitend)'],
    nebenwirkungen: ['Mundtrockenheit', 'Übelkeit', 'Verstopfung', 'Missbrauchspotenzial (Opioid-ähnlich)'],
    kontraindikationen: ['MAO-Hemmer', 'Kinder unter 15 J.'],
    cave: 'In Deutschland nicht zugelassen (aber bekannt für Prüfungen). Einziges AD das Serotonin-Wiederaufnahme fördert. Missbrauchspotenzial beachten (μ-Opioid-Agonismus).',
    rezeptoren: { '5-HT-I': '0', 'NA-I': '0', 'DA-I': '0', 'MAOH': '0', 'mACh': '0', 'H₁': '0', '5-HT₂': '0', 'DA': '0', 'α₁': '0', 'α₂': '0' }
  }
];

(function () {
  'use strict';

  var T = {
    en: {
      /* NAV */
      'nav.weddings':'Weddings','nav.sports':'Sports','nav.commercial':'Commercial',
      'nav.contact':'Contact','nav.home':'Home',
      /* FOOTER */
      'footer.tag':'filmmaker · vienna · beyond',
      'footer.work':'Work','footer.work.weddings':'Weddings',
      'footer.work.sports':'Sports & Events','footer.work.commercial':'Commercial',
      'footer.follow':'Follow','footer.contact':'Contact',
      'footer.contact.link':'Get in touch',
      'footer.copy':'© 2025 SOV MEDIA · Sovran Reshani · Vienna',
      'footer.filmed':'Filmed in Vienna.',
      /* INDEX HERO */
      'hero.label':'filmmaker · vienna · beyond',
      'hero.sub':'Real moments. Cinematic frames.',
      'hero.btn.wed':'Weddings','hero.btn.spo':'Sports & Events','hero.btn.com':'Commercial',
      'hero.scroll':'Scroll',
      /* INDEX SERVICES */
      'svc.tag':'What I do',
      'svc.h2':'Every moment deserves<br>a cinematic frame.',
      'svc.wed.h3':'Weddings',
      'svc.wed.p':'Your wedding, but make it feel like Hollywood. Cinematic films & photos for all cultures, all styles.',
      'svc.wed.link':'View work →',
      'svc.spo.h3':'Sports & Events',
      'svc.spo.p':'Boxing nights, football matches, athlete portraits. The intensity of sport, captured with cinematic precision.',
      'svc.spo.link':'View work →',
      'svc.com.h3':'Commercial',
      'svc.com.p':'Brand content, automotive shoots, aerial drone footage. Creative visuals that sell your story before a word is said.',
      'svc.com.link':'View work →',
      'svc.idea.h3':'Your idea',
      'svc.idea.p':"Got something different in mind? Portrait, music video, corporate, event? Let's build it together.",
      'svc.idea.link':'Get in touch →',
      /* INDEX PORTFOLIO */
      'port.tag':'Selected Work',
      'port.h2':'The frames that<br>define the story.',
      'port.cat.wed':'Weddings','port.cat.spo':'Sports','port.cat.com':'Commercial','port.cat.aer':'Aerial',
      'port.lbl.vienna':'Vienna 2024','port.lbl.boxing':'Boxing Night',
      'port.lbl.auto':'Automotive','port.lbl.cult':'Cultural Wedding','port.lbl.drone':'Drone',
      'port.ig':'View all on Instagram →',
      /* INDEX ABOUT */
      'about.tag':'Behind the lens',
      'about.role':'Filmmaker & Photographer · Vienna',
      'about.p1':"I'm Sovran — a Vienna-based filmmaker obsessed with one thing: turning real moments into cinematic memories. Boxing rings, first dances, mountain landscapes, brand stories — I find the frame that makes it unforgettable.",
      'about.p2':'From wedding films that feel like movie trailers to fight-night coverage that hits like a broadcast, to drone shots over Kosovo and documentary work in Bosnia — I go wherever the story is.',
      'about.stat.fol':'Followers','about.stat.loc':'Locations shot','about.stat.cul':'Cultures',
      'about.cta':'Work with me',
      /* INDEX CTA */
      'cta.idx.h2':'Ready to create something<br>cinematic?','cta.idx.btn':"Let's talk",
      /* WEDDINGS PAGE */
      'wed.hero.tag':'SOV Weddings',
      'wed.hero.h1':'Your wedding,<br>but make it feel<br>like Hollywood.',
      'wed.hero.p':'Real love. Movie vibes. Vienna & beyond.',
      'wed.app.tag':'The approach',
      'wed.app.h2':'Not just photos.<br>A film.',
      'wed.app.p1':"Every wedding I shoot is treated like a short film. I'm looking for the stolen glances, the nervous laugh before the vows, the moment the music drops and everything falls into place.",
      'wed.app.p2':'I work across all cultures and traditions — from European church ceremonies to Indian and Arabic celebrations — and I bring the same cinematic intensity to every one.',
      'wed.app.p3':'Multicultural background. Multicultural weddings. Always cinematic.',
      'wed.app.cta':'Book your date',
      'wed.inc.tag':"What's included",'wed.inc.h2':'Choose your format.',
      'wed.film.h3':'Cinematic Film',
      'wed.film.p':'A short film of your wedding day — edited to music, color-graded, ready to share.',
      'wed.film.li1':'Full day coverage','wed.film.li2':'Cinematic color grade',
      'wed.film.li3':'Music-driven edit','wed.film.li4':'Highlight reel (3–5 min)','wed.film.li5':'Full ceremony cut',
      'wed.photo.h3':'Photography',
      'wed.photo.p':'Documentary-style wedding photography — real moments, no stiff poses.',
      'wed.photo.li1':'Full day coverage','wed.photo.li2':'Edited gallery (300+ photos)',
      'wed.photo.li3':'Ceremony & reception','wed.photo.li4':'Couple portraits','wed.photo.li5':'Digital delivery',
      'wed.combo.h3':'Film + Photo',
      'wed.combo.p':'The complete package — cinematic film and full photo gallery from one photographer.',
      'wed.combo.li1':'Everything from both packages','wed.combo.li2':'Consistent visual style',
      'wed.combo.li3':'Reel + gallery delivery','wed.combo.li4':'Instagram-cut teaser','wed.combo.li5':'Priority booking',
      'wed.quote.btn':'Get a quote',
      'wed.gal.tag':'Portfolio','wed.gal.h2':'Real love.<br>Movie vibes.',
      'wed.gal.p':'Every wedding in the gallery below was shot on location in Vienna and beyond. From Viennese palaces to outdoor ceremonies, from European traditions to South Asian celebrations.',
      'wed.gal.ig':'More on @sov.weddings →',
      'cta.wed.h2':"Your date is waiting.<br>Let's make it cinematic.",'cta.wed.btn':'Book your wedding',
      /* SPORTS PAGE */
      'spo.hero.tag':'Sports & Events',
      'spo.hero.h1':'The intensity<br>of sport,<br>on film.',
      'spo.hero.p':'Boxing. Football. Martial arts. Athlete portraits. Vienna & beyond.',
      'spo.app.tag':'The approach',
      'spo.app.h2':'Sport is drama.<br>I just find the frame.',
      'spo.app.p1':'A boxing ring entrance with pyrotechnics. A striker locking eyes with the goalkeeper. A fighter in the locker room before the bell. These are cinematic moments — and most sports photographers miss them.',
      'spo.app.p2':'I shoot sport the way a film director would: looking for tension, character, and atmosphere. The result feels less like a press photo and more like a movie still.',
      'spo.app.cta':'Book your event',
      'spo.svc.tag':'Services','spo.svc.h2':'Every discipline.<br>Cinematic.',
      'spo.fight.h3':'Fight Nights',
      'spo.fight.p':'From ring walk to final bell — full coverage of boxing and martial arts events with a cinematic eye.',
      'spo.fight.li1':'Ring entrance coverage','spo.fight.li2':'Fight photo & video',
      'spo.fight.li3':'Backstage & atmosphere','spo.fight.li4':'Event highlight reel','spo.fight.li5':'Post-fight portraits',
      'spo.foot.h3':'Football & Team Sports',
      'spo.foot.p':'Match coverage, player portraits, and team content for clubs and athletes at every level.',
      'spo.foot.li1':'Match day coverage','spo.foot.li2':'Player portrait sessions',
      'spo.foot.li3':'Training ground shoots','spo.foot.li4':'Team content creation','spo.foot.li5':'Aerial drone option',
      'spo.ath.h3':'Athlete Content',
      'spo.ath.p':'Personal brand content for athletes — the material that makes sponsors take notice.',
      'spo.ath.li1':'Studio & on-location shoots','spo.ath.li2':'Gym / training content',
      'spo.ath.li3':'Social media reels','spo.ath.li4':'Sponsor content packages','spo.ath.li5':'Campaign-style photography',
      'spo.cta.btn':'Get in touch',
      'spo.gal.tag':'Portfolio','spo.gal.h2':'The frames<br>that hit different.',
      'spo.gal.ig':'More on @sovr4n →',
      'cta.spo.h2':'Got a fight night or<br>match coming up?','cta.spo.btn':'Book the date',
      /* COMMERCIAL PAGE */
      'com.hero.tag':'Commercial',
      'com.hero.h1':'Your brand.<br>But cinematic.',
      'com.hero.p':'Brand content · Automotive · Aerial · Product · Corporate',
      'com.app.tag':'The approach',
      'com.app.h2':'Visuals that sell<br>before a word<br>is said.',
      'com.app.p1':"Commercial work is about making people feel something before they think. A car that looks like it's alive. A brand identity that stops the scroll. A product that looks like it costs twice as much.",
      'com.app.p2':'I combine photography, video, and drone to build the visual language your brand needs — clean, cinematic, and always on-brand.',
      'com.app.cta':'Discuss your project',
      'com.svc.tag':'Services','com.svc.h2':'What I shoot<br>for brands.',
      'com.brand.h3':'Brand Content',
      'com.brand.p':'Social media content, campaign shoots, and visual branding for businesses and creators.',
      'com.brand.li1':'Product photography','com.brand.li2':'Brand storytelling reels',
      'com.brand.li3':'Social media packages','com.brand.li4':'Campaign art direction','com.brand.li5':'Behind-the-scenes content',
      'com.auto.h3':'Automotive',
      'com.auto.p':'Car photography and film that makes machines feel alive — studio, location, and aerial.',
      'com.auto.li1':'Location car shoots','com.auto.li2':'Studio automotive',
      'com.auto.li3':'Aerial drone car footage','com.auto.li4':'Detail & interior shots','com.auto.li5':'Social media reels',
      'com.aer.h3':'Aerial & Drone',
      'com.aer.p':'Cinematic aerial footage for real estate, events, construction, and creative projects.',
      'com.aer.li1':'Establishing shots','com.aer.li2':'Event aerial coverage',
      'com.aer.li3':'Real estate flyovers','com.aer.li4':'Landscape & nature','com.aer.li5':'Combined with ground footage',
      'com.proj.btn':'Start your project',
      'com.gal.tag':'Portfolio','com.gal.h2':'Brands. Cars.<br>Frames from above.',
      'com.gal.ig':'More on @sovr4n →',
      'cta.com.h2':"Let's build your<br>visual identity.",'cta.com.btn':'Start the conversation',
      /* CONTACT PAGE */
      'con.tag':'Get in touch',
      'con.h2':"Let's create<br>something<br>cinematic.",
      'con.p':"Whether it's a wedding date, a fight night, a brand campaign, or something completely different — drop a message and I'll get back to you within 24 hours.",
      'con.lbl.email':'Email','con.lbl.ig.main':'Instagram (Main)','con.lbl.ig.wed':'Instagram (Weddings)',
      'con.lbl.based':'Based in','con.based.val':'Vienna, Austria · Available worldwide',
      'con.f.name.lbl':'Your name','con.f.email.lbl':'Your email',
      'con.f.svc.lbl':'What are you looking for?','con.f.svc.ph':'Select a service',
      'con.opt.wf':'Wedding Film','con.opt.wp':'Wedding Photography','con.opt.wb':'Wedding Film + Photography',
      'con.opt.se':'Sports / Fight Night Coverage','con.opt.ac':'Athlete Content',
      'con.opt.bc':'Brand Content','con.opt.auto':'Automotive','con.opt.aer':'Aerial / Drone','con.opt.oth':'Something else',
      'con.f.date.lbl':'Date (if applicable)','con.f.loc.lbl':'Location','con.f.msg.lbl':'Tell me more',
      'con.f.submit':'Send message →',
      'con.f.name.ph':'Firstname Lastname','con.f.date.ph':'e.g. 15 August 2025',
      'con.f.loc.ph':'e.g. Vienna, destination...','con.f.msg.ph':'Describe your project, vision, or just say hi...',
    },
    de: {
      /* NAV */
      'nav.weddings':'Hochzeiten','nav.sports':'Sport','nav.commercial':'Werbung',
      'nav.contact':'Kontakt','nav.home':'Startseite',
      /* FOOTER */
      'footer.tag':'Filmemacher · Wien · darüber hinaus',
      'footer.work':'Arbeiten','footer.work.weddings':'Hochzeiten',
      'footer.work.sports':'Sport & Events','footer.work.commercial':'Werbung',
      'footer.follow':'Folgen','footer.contact':'Kontakt',
      'footer.contact.link':'Kontakt aufnehmen',
      'footer.copy':'© 2025 SOV MEDIA · Sovran Reshani · Wien',
      'footer.filmed':'Gefilmt in Wien.',
      /* INDEX HERO */
      'hero.label':'Filmemacher · Wien · darüber hinaus',
      'hero.sub':'Echte Momente. Cinematische Bilder.',
      'hero.btn.wed':'Hochzeiten','hero.btn.spo':'Sport & Events','hero.btn.com':'Werbung',
      'hero.scroll':'Scrollen',
      /* INDEX SERVICES */
      'svc.tag':'Was ich mache',
      'svc.h2':'Jeder Moment verdient<br>einen cinematischen Rahmen.',
      'svc.wed.h3':'Hochzeiten',
      'svc.wed.p':'Deine Hochzeit, aber wie ein Hollywood-Film. Cinematische Filme & Fotos für alle Kulturen, alle Stile.',
      'svc.wed.link':'Arbeiten ansehen →',
      'svc.spo.h3':'Sport & Events',
      'svc.spo.p':'Boxabende, Fußballspiele, Athletenporträts. Die Intensität des Sports, cinematisch festgehalten.',
      'svc.spo.link':'Arbeiten ansehen →',
      'svc.com.h3':'Werbung',
      'svc.com.p':'Brand-Content, Automotive-Shoots, Drohnenaufnahmen. Kreative Visuals, die deine Geschichte verkaufen, bevor ein Wort fällt.',
      'svc.com.link':'Arbeiten ansehen →',
      'svc.idea.h3':'Deine Idee',
      'svc.idea.p':'Etwas anderes im Sinn? Portrait, Musikvideo, Corporate, Event? Lass es uns gemeinsam umsetzen.',
      'svc.idea.link':'Kontakt aufnehmen →',
      /* INDEX PORTFOLIO */
      'port.tag':'Ausgewählte Arbeiten',
      'port.h2':'Die Aufnahmen, die<br>die Geschichte erzählen.',
      'port.cat.wed':'Hochzeiten','port.cat.spo':'Sport','port.cat.com':'Werbung','port.cat.aer':'Aerial',
      'port.lbl.vienna':'Wien 2024','port.lbl.boxing':'Boxnacht',
      'port.lbl.auto':'Automotive','port.lbl.cult':'Kulturelle Hochzeit','port.lbl.drone':'Drohne',
      'port.ig':'Alle auf Instagram ansehen →',
      /* INDEX ABOUT */
      'about.tag':'Hinter der Kamera',
      'about.role':'Filmemacher & Fotograf · Wien',
      'about.p1':'Ich bin Sovran — ein Wiener Filmemacher, dem es um eine Sache geht: echte Momente in cinematische Erinnerungen zu verwandeln. Boxringe, erste Tänze, Berglandschaften, Brand-Stories — ich finde den Bildausschnitt, der unvergesslich macht.',
      'about.p2':'Von Hochzeitsfilmen, die sich wie Filmtrailer anfühlen, über Kampfabend-Coverage bis hin zu Drohnenaufnahmen über Kosovo und Dokumentararbeit in Bosnien — ich gehe dorthin, wo die Geschichte ist.',
      'about.stat.fol':'Follower','about.stat.loc':'Drehorte','about.stat.cul':'Kulturen',
      'about.cta':'Zusammenarbeiten',
      /* INDEX CTA */
      'cta.idx.h2':'Bereit, etwas Cinematisches<br>zu erschaffen?','cta.idx.btn':'Lass uns reden',
      /* WEDDINGS PAGE */
      'wed.hero.tag':'SOV Hochzeiten',
      'wed.hero.h1':'Deine Hochzeit,<br>aber wie ein<br>Hollywood-Film.',
      'wed.hero.p':'Echte Liebe. Kinogefühl. Wien & darüber hinaus.',
      'wed.app.tag':'Der Ansatz',
      'wed.app.h2':'Nicht nur Fotos.<br>Ein Film.',
      'wed.app.p1':'Jede Hochzeit, die ich filme, behandle ich wie einen Kurzfilm. Ich suche nach den gestohlenen Blicken, dem nervösen Lachen vor den Gelübden, dem Moment, in dem die Musik einsetzt und alles passt.',
      'wed.app.p2':'Ich arbeite über alle Kulturen und Traditionen hinweg — von europäischen Kirchenzeremonien bis zu indischen und arabischen Feiern — und bringe bei jeder dieselbe cinematische Intensität.',
      'wed.app.p3':'Multikultureller Hintergrund. Multikulturelle Hochzeiten. Immer cinematisch.',
      'wed.app.cta':'Datum buchen',
      'wed.inc.tag':'Was enthalten ist','wed.inc.h2':'Wähle dein Format.',
      'wed.film.h3':'Cinematischer Film',
      'wed.film.p':'Ein Kurzfilm deines Hochzeitstages — musikunterlegt, coloriert, bereit zum Teilen.',
      'wed.film.li1':'Ganztagesbegleitung','wed.film.li2':'Cinematisches Color Grading',
      'wed.film.li3':'Musikgetriebener Schnitt','wed.film.li4':'Highlight-Reel (3–5 Min.)','wed.film.li5':'Vollständiger Zeremonienfilm',
      'wed.photo.h3':'Fotografie',
      'wed.photo.p':'Dokumentarische Hochzeitsfotografie — echte Momente, keine steifen Posen.',
      'wed.photo.li1':'Ganztagesbegleitung','wed.photo.li2':'Bearbeitete Galerie (300+ Fotos)',
      'wed.photo.li3':'Zeremonie & Empfang','wed.photo.li4':'Paarporträts','wed.photo.li5':'Digitale Lieferung',
      'wed.combo.h3':'Film + Foto',
      'wed.combo.p':'Das Komplettpaket — cinematischer Film und vollständige Fotogalerie von einem Fotografen.',
      'wed.combo.li1':'Alles aus beiden Paketen','wed.combo.li2':'Einheitlicher Bildstil',
      'wed.combo.li3':'Reel + Galerie Lieferung','wed.combo.li4':'Instagram-Teaser','wed.combo.li5':'Prioritätsbuchung',
      'wed.quote.btn':'Angebot anfragen',
      'wed.gal.tag':'Portfolio','wed.gal.h2':'Echte Liebe.<br>Kinogefühl.',
      'wed.gal.p':'Jede Hochzeit in der untenstehenden Galerie wurde vor Ort in Wien und darüber hinaus gefilmt. Von Wiener Schlössern bis zu Outdoor-Zeremonien, von europäischen Traditionen bis zu südasiatischen Feierlichkeiten.',
      'wed.gal.ig':'Mehr auf @sov.weddings →',
      'cta.wed.h2':'Dein Datum wartet.<br>Machen wir es cinematisch.','cta.wed.btn':'Hochzeit buchen',
      /* SPORTS PAGE */
      'spo.hero.tag':'Sport & Events',
      'spo.hero.h1':'Die Intensität<br>des Sports,<br>auf Film.',
      'spo.hero.p':'Boxen. Fußball. Kampfsport. Athletenporträts. Wien & darüber hinaus.',
      'spo.app.tag':'Der Ansatz',
      'spo.app.h2':'Sport ist Drama.<br>Ich finde nur den Bildausschnitt.',
      'spo.app.p1':'Ein Boxring-Einzug mit Pyrotechnik. Ein Stürmer, der dem Torwart in die Augen schaut. Ein Kämpfer in der Umkleidekabine vor dem Gong. Das sind cinematische Momente — und die meisten Sportfotografen verpassen sie.',
      'spo.app.p2':'Ich filme Sport wie ein Filmregisseur: auf der Suche nach Spannung, Charakter und Atmosphäre. Das Ergebnis fühlt sich weniger wie ein Pressefoto an und mehr wie ein Filmstill.',
      'spo.app.cta':'Event buchen',
      'spo.svc.tag':'Leistungen','spo.svc.h2':'Jede Disziplin.<br>Cinematisch.',
      'spo.fight.h3':'Kampfabende',
      'spo.fight.p':'Vom Ring-Einzug bis zur letzten Runde — vollständige Berichterstattung von Box- und Kampfsportveranstaltungen mit cinematischem Blick.',
      'spo.fight.li1':'Ring-Einzug Begleitung','spo.fight.li2':'Kampf Foto & Video',
      'spo.fight.li3':'Backstage & Atmosphäre','spo.fight.li4':'Event Highlight-Reel','spo.fight.li5':'Nachkampf-Porträts',
      'spo.foot.h3':'Fußball & Teamsport',
      'spo.foot.p':'Spielberichterstattung, Spielerporträts und Team-Content für Vereine und Athleten aller Ebenen.',
      'spo.foot.li1':'Spieltag-Berichterstattung','spo.foot.li2':'Spieler-Portraitsessions',
      'spo.foot.li3':'Trainingssessions','spo.foot.li4':'Team-Content Erstellung','spo.foot.li5':'Drohnen-Option',
      'spo.ath.h3':'Athleten-Content',
      'spo.ath.p':'Persönlicher Brand-Content für Athleten — das Material, das Sponsoren aufhorchen lässt.',
      'spo.ath.li1':'Studio & Vor-Ort Aufnahmen','spo.ath.li2':'Gym / Trainings-Content',
      'spo.ath.li3':'Social Media Reels','spo.ath.li4':'Sponsor-Content Pakete','spo.ath.li5':'Kampagnenfotografie',
      'spo.cta.btn':'Kontakt aufnehmen',
      'spo.gal.tag':'Portfolio','spo.gal.h2':'Die Aufnahmen,<br>die anders treffen.',
      'spo.gal.ig':'Mehr auf @sovr4n →',
      'cta.spo.h2':'Steht ein Kampfabend oder<br>ein Spiel an?','cta.spo.btn':'Termin buchen',
      /* COMMERCIAL PAGE */
      'com.hero.tag':'Werbung',
      'com.hero.h1':'Deine Marke.<br>Aber cinematisch.',
      'com.hero.p':'Brand-Content · Automotive · Aerial · Produkt · Corporate',
      'com.app.tag':'Der Ansatz',
      'com.app.h2':'Visuals, die verkaufen,<br>bevor ein Wort<br>gesagt wird.',
      'com.app.p1':'Werbliche Arbeit bedeutet, Menschen etwas fühlen zu lassen, bevor sie denken. Ein Auto, das lebendig aussieht. Eine Markenidentität, die den Scroll stoppt. Ein Produkt, das das Doppelte wert zu sein scheint.',
      'com.app.p2':'Ich kombiniere Fotografie, Video und Drohne, um die visuelle Sprache aufzubauen, die deine Marke braucht — clean, cinematisch und immer on-brand.',
      'com.app.cta':'Projekt besprechen',
      'com.svc.tag':'Leistungen','com.svc.h2':'Was ich<br>für Marken filme.',
      'com.brand.h3':'Brand-Content',
      'com.brand.p':'Social-Media-Content, Kampagnen-Shoots und visuelles Branding für Unternehmen und Creator.',
      'com.brand.li1':'Produktfotografie','com.brand.li2':'Brand-Storytelling Reels',
      'com.brand.li3':'Social-Media-Pakete','com.brand.li4':'Kampagnen Art Direction','com.brand.li5':'Behind-the-Scenes Content',
      'com.auto.h3':'Automotive',
      'com.auto.p':'Autofotografie und -film, der Maschinen lebendig wirken lässt — Studio, Location und Aerial.',
      'com.auto.li1':'Location Autoshoots','com.auto.li2':'Studio Automotive',
      'com.auto.li3':'Drohnen-Fahrzeugaufnahmen','com.auto.li4':'Detail- & Innenraumaufnahmen','com.auto.li5':'Social Media Reels',
      'com.aer.h3':'Aerial & Drohne',
      'com.aer.p':'Cinematische Luftaufnahmen für Immobilien, Events, Bauprojekte und kreative Projekte.',
      'com.aer.li1':'Establishing Shots','com.aer.li2':'Event-Luftberichterstattung',
      'com.aer.li3':'Immobilien-Überflüge','com.aer.li4':'Landschaft & Natur','com.aer.li5':'Kombiniert mit Bodenaufnahmen',
      'com.proj.btn':'Projekt starten',
      'com.gal.tag':'Portfolio','com.gal.h2':'Marken. Autos.<br>Aufnahmen von oben.',
      'com.gal.ig':'Mehr auf @sovr4n →',
      'cta.com.h2':'Lass uns deine<br>visuelle Identität aufbauen.','cta.com.btn':'Gespräch starten',
      /* CONTACT PAGE */
      'con.tag':'Kontakt aufnehmen',
      'con.h2':'Lass uns etwas<br>Cinematisches<br>erschaffen.',
      'con.p':'Ob Hochzeitstermin, Kampfabend, Markenkampagne oder etwas ganz anderes — hinterlasse eine Nachricht und ich melde mich innerhalb von 24 Stunden.',
      'con.lbl.email':'E-Mail','con.lbl.ig.main':'Instagram (Haupt)','con.lbl.ig.wed':'Instagram (Hochzeiten)',
      'con.lbl.based':'Standort','con.based.val':'Wien, Österreich · Weltweit verfügbar',
      'con.f.name.lbl':'Dein Name','con.f.email.lbl':'Deine E-Mail',
      'con.f.svc.lbl':'Wonach suchst du?','con.f.svc.ph':'Leistung auswählen',
      'con.opt.wf':'Hochzeitsfilm','con.opt.wp':'Hochzeitsfotografie','con.opt.wb':'Hochzeitsfilm + Fotografie',
      'con.opt.se':'Sport / Kampfabend','con.opt.ac':'Athleten-Content',
      'con.opt.bc':'Brand-Content','con.opt.auto':'Automotive','con.opt.aer':'Aerial / Drohne','con.opt.oth':'Anderes',
      'con.f.date.lbl':'Datum (falls zutreffend)','con.f.loc.lbl':'Ort','con.f.msg.lbl':'Erzähl mir mehr',
      'con.f.submit':'Nachricht senden →',
      'con.f.name.ph':'Vorname Nachname','con.f.date.ph':'z.B. 15. August 2025',
      'con.f.loc.ph':'z.B. Wien, Reiseziel...','con.f.msg.ph':'Beschreibe dein Projekt, deine Vision, oder sag einfach Hallo...',
    }
  };

  function setToggleUI(lang) {
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      var en = btn.querySelector('.lt-en');
      var de = btn.querySelector('.lt-de');
      if (en) en.classList.toggle('lt-active', lang === 'en');
      if (de) de.classList.toggle('lt-active', lang === 'de');
    });
  }

  function applyLang(lang) {
    var t = T[lang] || T.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n')];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-html')];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-placeholder')];
      if (v !== undefined) el.placeholder = v;
    });
    document.querySelectorAll('[data-i18n-opt]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-opt')];
      if (v !== undefined) el.textContent = v;
    });
    document.documentElement.lang = lang === 'de' ? 'de' : 'en';
    setToggleUI(lang);
  }

  function init() {
    var lang = localStorage.getItem('sov-lang') || 'en';
    applyLang(lang);
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = (localStorage.getItem('sov-lang') || 'en') === 'en' ? 'de' : 'en';
        localStorage.setItem('sov-lang', next);
        applyLang(next);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

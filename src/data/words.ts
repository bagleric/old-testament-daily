export interface ScriptureLink {
  reference: string;
  url: string;
}

export interface Word {
  id: string;
  date: string;
  weekTitle: string;
  word: string;
  definition: string;
  context: string;
  scriptures: ScriptureLink[];
}

export const words: Word[] = [
  // Week 1: Moses 1
  {
    id: "word-2026-01-01",
    date: "2026-01-01",
    weekTitle: "Moses 1",
    word: "Glory",
    definition: "The divine splendor, majesty, and power of God; the radiant manifestation of His presence and perfection.",
    context: "Moses beheld God's glory and learned that man is nothing without God's sustaining power.",
    scriptures: [
      { reference: "Moses 1:2", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1?lang=eng&id=p2#p2" },
      { reference: "Exodus 33:18-23", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/33?lang=eng&id=p18-p23#p18" },
      { reference: "John 17:5", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/17?lang=eng&id=p5#p5" },
      { reference: "D&C 76:20", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/76?lang=eng&id=p20#p20" }
    ]
  },
  {
    id: "word-2026-01-02",
    date: "2026-01-02",
    weekTitle: "Moses 1",
    word: "Transfigured",
    definition: "A temporary change in appearance or nature that allows a mortal to endure the presence of God.",
    context: "Moses was transfigured so he could behold God and not be consumed by His glory.",
    scriptures: [
      { reference: "Moses 1:11", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1?lang=eng&id=p11#p11" },
      { reference: "Matthew 17:1-2", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/17?lang=eng&id=p1-p2#p1" },
      { reference: "3 Nephi 28:15", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/28?lang=eng&id=p15#p15" }
    ]
  },
  // Week 2: Abraham 3
  {
    id: "word-2026-01-05",
    date: "2026-01-05",
    weekTitle: "Abraham 3",
    word: "Intelligence",
    definition: "The eternal essence or spirit of a person that existed before mortal birth; also refers to light and truth.",
    context: "Abraham learned about intelligences that were organized before the world was created.",
    scriptures: [
      { reference: "Abraham 3:22-23", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng&id=p22-p23#p22" },
      { reference: "D&C 93:29", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/93?lang=eng&id=p29#p29" },
      { reference: "D&C 130:18-19", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/130?lang=eng&id=p18-p19#p18" }
    ]
  },
  {
    id: "word-2026-01-06",
    date: "2026-01-06",
    weekTitle: "Abraham 3",
    word: "Foreordination",
    definition: "The premortal appointment of individuals to fulfill specific missions or callings during mortality.",
    context: "Abraham was shown that noble spirits were chosen before birth for important earthly missions.",
    scriptures: [
      { reference: "Abraham 3:23", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng&id=p23#p23" },
      { reference: "Jeremiah 1:5", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/jer/1?lang=eng&id=p5#p5" },
      { reference: "Alma 13:3", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/13?lang=eng&id=p3#p3" }
    ]
  },
  // Week 3: Genesis 1-2
  {
    id: "word-2026-01-12",
    date: "2026-01-12",
    weekTitle: "Genesis 1–2; Moses 2–3; Abraham 4–5",
    word: "Create",
    definition: "To organize existing matter into new forms; in Hebrew, 'bara' implies divine action in bringing order from chaos.",
    context: "God created the heavens and earth by organizing matter, not creating from nothing.",
    scriptures: [
      { reference: "Genesis 1:1", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1?lang=eng&id=p1#p1" },
      { reference: "Abraham 4:1", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/4?lang=eng&id=p1#p1" },
      { reference: "Hebrews 11:3", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/11?lang=eng&id=p3#p3" }
    ]
  },
  {
    id: "word-2026-01-13",
    date: "2026-01-13",
    weekTitle: "Genesis 1–2; Moses 2–3; Abraham 4–5",
    word: "Dominion",
    definition: "Righteous stewardship and responsibility over creation; to care for and manage with wisdom.",
    context: "Adam and Eve were given dominion over all living things, meaning responsibility to care for them.",
    scriptures: [
      { reference: "Genesis 1:26", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1?lang=eng&id=p26#p26" },
      { reference: "D&C 121:39-41", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/121?lang=eng&id=p39-p41#p39" },
      { reference: "Psalm 8:6", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ps/8?lang=eng&id=p6#p6" }
    ]
  },
  // Week 4: Genesis 3-4; Moses 4-5
  {
    id: "word-2026-01-19",
    date: "2026-01-19",
    weekTitle: "Genesis 3–4; Moses 4–5",
    word: "Fall",
    definition: "The transgression of Adam and Eve that introduced mortality, physical death, and the need for redemption.",
    context: "The Fall was a necessary step in God's plan, allowing mankind to experience mortality and growth.",
    scriptures: [
      { reference: "2 Nephi 2:25", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=eng&id=p25#p25" },
      { reference: "Moses 5:10-11", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5?lang=eng&id=p10-p11#p10" },
      { reference: "1 Corinthians 15:22", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/15?lang=eng&id=p22#p22" }
    ]
  },
  {
    id: "word-2026-01-20",
    date: "2026-01-20",
    weekTitle: "Genesis 3–4; Moses 4–5",
    word: "Atonement",
    definition: "The reconciling sacrifice of Jesus Christ that overcomes the effects of the Fall and personal sin.",
    context: "After the Fall, Adam and Eve learned about the Atonement through the symbolism of sacrifice.",
    scriptures: [
      { reference: "Moses 5:7-8", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5?lang=eng&id=p7-p8#p7" },
      { reference: "Alma 34:9-10", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=eng&id=p9-p10#p9" },
      { reference: "Isaiah 53:5", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/isa/53?lang=eng&id=p5#p5" }
    ]
  },
  // Week 5: Moses 6-7
  {
    id: "word-2026-01-26",
    date: "2026-01-26",
    weekTitle: "Moses 6–7",
    word: "Zion",
    definition: "The pure in heart; also refers to a place where righteous people dwell in unity and peace.",
    context: "Enoch established the city of Zion, whose inhabitants were of one heart and one mind.",
    scriptures: [
      { reference: "Moses 7:18-19", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/7?lang=eng&id=p18-p19#p18" },
      { reference: "D&C 97:21", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/97?lang=eng&id=p21#p21" },
      { reference: "Psalm 48:2", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ps/48?lang=eng&id=p2#p2" }
    ]
  },
  {
    id: "word-2026-01-27",
    date: "2026-01-27",
    weekTitle: "Moses 6–7",
    word: "Translated",
    definition: "Changed from a mortal to an immortal state without experiencing death; taken up to heaven.",
    context: "Enoch and his people were translated and taken up into heaven because of their righteousness.",
    scriptures: [
      { reference: "Moses 7:21", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/7?lang=eng&id=p21#p21" },
      { reference: "Hebrews 11:5", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/11?lang=eng&id=p5#p5" },
      { reference: "3 Nephi 28:7-8", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/28?lang=eng&id=p7-p8#p7" }
    ]
  },
  // Week 6: Genesis 5; Moses 8
  {
    id: "word-2026-02-02",
    date: "2026-02-02",
    weekTitle: "Genesis 5; Moses 8",
    word: "Patriarch",
    definition: "A father and leader of a family; in scripture, the early prophets who presided over their posterity.",
    context: "The patriarchs from Adam to Noah faithfully preserved and taught the gospel to their descendants.",
    scriptures: [
      { reference: "Genesis 5:1-3", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/5?lang=eng&id=p1-p3#p1" },
      { reference: "D&C 107:40-42", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/107?lang=eng&id=p40-p42#p40" },
      { reference: "Hebrews 7:4", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/7?lang=eng&id=p4#p4" }
    ]
  },
  {
    id: "word-2026-02-03",
    date: "2026-02-03",
    weekTitle: "Genesis 5; Moses 8",
    word: "Longevity",
    definition: "Extended lifespan; the early patriarchs lived hundreds of years, allowing them to teach many generations.",
    context: "Methuselah lived 969 years, the longest recorded lifespan in scripture.",
    scriptures: [
      { reference: "Genesis 5:27", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/5?lang=eng&id=p27#p27" },
      { reference: "Moses 8:17", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/8?lang=eng&id=p17#p17" },
      { reference: "Isaiah 65:20", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/isa/65?lang=eng&id=p20#p20" }
    ]
  },
  // Week 7: Genesis 6-7; Moses 8
  {
    id: "word-2026-02-09",
    date: "2026-02-09",
    weekTitle: "Genesis 6–7; Moses 8",
    word: "Ark",
    definition: "A large vessel built by Noah at God's command to preserve life during the Flood; a symbol of salvation.",
    context: "The ark provided temporal salvation from the Flood and symbolizes Christ's salvation from sin.",
    scriptures: [
      { reference: "Genesis 6:14-16", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/6?lang=eng&id=p14-p16#p14" },
      { reference: "1 Peter 3:20-21", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-pet/3?lang=eng&id=p20-p21#p20" },
      { reference: "Ether 6:7", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/6?lang=eng&id=p7#p7" }
    ]
  },
  {
    id: "word-2026-02-10",
    date: "2026-02-10",
    weekTitle: "Genesis 6–7; Moses 8",
    word: "Covenant",
    definition: "A sacred agreement between God and His people, with promised blessings for obedience.",
    context: "God established His covenant with Noah, promising preservation and future blessings.",
    scriptures: [
      { reference: "Genesis 6:18", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/6?lang=eng&id=p18#p18" },
      { reference: "Genesis 9:9-11", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/9?lang=eng&id=p9-p11#p9" },
      { reference: "D&C 82:10", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/82?lang=eng&id=p10#p10" }
    ]
  },
  // Week 8: Genesis 8-10
  {
    id: "word-2026-02-16",
    date: "2026-02-16",
    weekTitle: "Genesis 8–10",
    word: "Rainbow",
    definition: "A sign of God's covenant with Noah, promising He would never again destroy the earth by flood.",
    context: "The rainbow serves as a reminder of God's mercy and faithfulness to His promises.",
    scriptures: [
      { reference: "Genesis 9:13-16", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/9?lang=eng&id=p13-p16#p13" },
      { reference: "JST Genesis 9:21-25", url: "https://www.churchofjesuschrist.org/study/scriptures/jst/jst-gen/9?lang=eng&id=p21-p25#p21" },
      { reference: "Ezekiel 1:28", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ezek/1?lang=eng&id=p28#p28" }
    ]
  },
  // Week 9: Genesis 11
  {
    id: "word-2026-02-23",
    date: "2026-02-23",
    weekTitle: "Genesis 11",
    word: "Babel",
    definition: "A tower built in defiance of God; the place where languages were confounded.",
    context: "The Tower of Babel represents human pride and the consequences of rejecting God's will.",
    scriptures: [
      { reference: "Genesis 11:4-9", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/11?lang=eng&id=p4-p9#p4" },
      { reference: "Ether 1:33-35", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/1?lang=eng&id=p33-p35#p33" },
      { reference: "Mosiah 28:17", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/28?lang=eng&id=p17#p17" }
    ]
  },
  // Week 10: Genesis 12-17; Abraham 1-2
  {
    id: "word-2026-03-02",
    date: "2026-03-02",
    weekTitle: "Genesis 12–17; Abraham 1–2",
    word: "Abrahamic Covenant",
    definition: "The promises God made to Abraham including posterity, priesthood, and land, extending to all his faithful descendants.",
    context: "Abraham received promises of numberless posterity and that through his seed all nations would be blessed.",
    scriptures: [
      { reference: "Abraham 2:9-11", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/2?lang=eng&id=p9-p11#p9" },
      { reference: "Genesis 17:1-8", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/17?lang=eng&id=p1-p8#p1" },
      { reference: "Galatians 3:29", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/gal/3?lang=eng&id=p29#p29" }
    ]
  },
  // Week 11: Genesis 18-23
  {
    id: "word-2026-03-09",
    date: "2026-03-09",
    weekTitle: "Genesis 18–23",
    word: "Intercession",
    definition: "Pleading or praying on behalf of another; mediating between God and people.",
    context: "Abraham interceded for the righteous in Sodom, negotiating with the Lord for their preservation.",
    scriptures: [
      { reference: "Genesis 18:23-32", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/18?lang=eng&id=p23-p32#p23" },
      { reference: "Exodus 32:11-14", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/32?lang=eng&id=p11-p14#p11" },
      { reference: "Romans 8:34", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/rom/8?lang=eng&id=p34#p34" }
    ]
  },
  // Week 12: Genesis 24-27
  {
    id: "word-2026-03-16",
    date: "2026-03-16",
    weekTitle: "Genesis 24–27",
    word: "Birthright",
    definition: "The rights and privileges belonging to the firstborn son, including leadership and a double inheritance.",
    context: "Esau sold his birthright to Jacob for a bowl of pottage, showing disregard for sacred things.",
    scriptures: [
      { reference: "Genesis 25:31-34", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/25?lang=eng&id=p31-p34#p31" },
      { reference: "Hebrews 12:16-17", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/12?lang=eng&id=p16-p17#p16" },
      { reference: "1 Chronicles 5:1-2", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/1-chr/5?lang=eng&id=p1-p2#p1" }
    ]
  },
  // Week 13: Genesis 28-33
  {
    id: "word-2026-03-23",
    date: "2026-03-23",
    weekTitle: "Genesis 28–33",
    word: "Israel",
    definition: "The name given to Jacob meaning 'one who prevails with God'; also refers to his descendants and the covenant people.",
    context: "After wrestling with an angel, Jacob received the name Israel, signifying his spiritual victory.",
    scriptures: [
      { reference: "Genesis 32:28", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/32?lang=eng&id=p28#p28" },
      { reference: "2 Nephi 25:16", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/25?lang=eng&id=p16#p16" },
      { reference: "Romans 9:6", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/rom/9?lang=eng&id=p6#p6" }
    ]
  },
  // Week 14: Genesis 34-36
  {
    id: "word-2026-03-30",
    date: "2026-03-30",
    weekTitle: "Genesis 34–36",
    word: "Reconciliation",
    definition: "The restoration of harmony and peace between parties who were previously estranged or in conflict.",
    context: "Jacob and Esau reconciled after years of separation, embracing in forgiveness.",
    scriptures: [
      { reference: "Genesis 33:4", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/33?lang=eng&id=p4#p4" },
      { reference: "Matthew 5:23-24", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/5?lang=eng&id=p23-p24#p23" },
      { reference: "2 Corinthians 5:18-19", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/2-cor/5?lang=eng&id=p18-p19#p18" }
    ]
  },
  // Week 15: Genesis 37-41
  {
    id: "word-2026-04-06",
    date: "2026-04-06",
    weekTitle: "Genesis 37–41",
    word: "Dreams",
    definition: "Visions received during sleep; a means by which God communicates His will and reveals the future.",
    context: "Joseph received dreams of his future greatness and later interpreted Pharaoh's prophetic dreams.",
    scriptures: [
      { reference: "Genesis 37:5-10", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/37?lang=eng&id=p5-p10#p5" },
      { reference: "Genesis 41:25", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/41?lang=eng&id=p25#p25" },
      { reference: "Joel 2:28", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/joel/2?lang=eng&id=p28#p28" }
    ]
  },
  // Week 16: Genesis 42-45
  {
    id: "word-2026-04-13",
    date: "2026-04-13",
    weekTitle: "Genesis 42–45",
    word: "Providence",
    definition: "God's divine guidance and care; His ability to work all things for the good of His children.",
    context: "Joseph recognized that God's providence had turned his brothers' evil intentions into a means of salvation.",
    scriptures: [
      { reference: "Genesis 45:5-8", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/45?lang=eng&id=p5-p8#p5" },
      { reference: "Romans 8:28", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/rom/8?lang=eng&id=p28#p28" },
      { reference: "D&C 122:7", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/122?lang=eng&id=p7#p7" }
    ]
  },
  // Week 17: Genesis 46-50
  {
    id: "word-2026-04-20",
    date: "2026-04-20",
    weekTitle: "Genesis 46–50",
    word: "Forgiveness",
    definition: "The act of pardoning an offense and releasing feelings of resentment; essential for spiritual healing.",
    context: "Joseph forgave his brothers who had sold him into slavery, demonstrating Christlike mercy.",
    scriptures: [
      { reference: "Genesis 50:15-21", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/50?lang=eng&id=p15-p21#p15" },
      { reference: "Matthew 18:21-22", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/18?lang=eng&id=p21-p22#p21" },
      { reference: "D&C 64:10", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/64?lang=eng&id=p10#p10" }
    ]
  },
  // Week 18: Exodus 1-6
  {
    id: "word-2026-04-27",
    date: "2026-04-27",
    weekTitle: "Exodus 1–6",
    word: "Deliverer",
    definition: "One who rescues or saves from bondage, danger, or oppression; a type of Christ.",
    context: "Moses was called to be a deliverer of Israel, foreshadowing Christ's deliverance from sin.",
    scriptures: [
      { reference: "Exodus 3:10", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/3?lang=eng&id=p10#p10" },
      { reference: "Acts 7:35", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/acts/7?lang=eng&id=p35#p35" },
      { reference: "2 Nephi 6:17", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/6?lang=eng&id=p17#p17" }
    ]
  },
  // Week 19: Exodus 7-13
  {
    id: "word-2026-05-04",
    date: "2026-05-04",
    weekTitle: "Exodus 7–13",
    word: "Passover",
    definition: "The feast commemorating Israel's deliverance from Egypt; the lamb's blood on doorposts caused death to 'pass over.'",
    context: "The Passover lamb symbolizes Christ, whose blood saves us from spiritual death.",
    scriptures: [
      { reference: "Exodus 12:21-27", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/12?lang=eng&id=p21-p27#p21" },
      { reference: "1 Corinthians 5:7", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/5?lang=eng&id=p7#p7" },
      { reference: "John 1:29", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/1?lang=eng&id=p29#p29" }
    ]
  },
  // Week 20: Exodus 14-17
  {
    id: "word-2026-05-11",
    date: "2026-05-11",
    weekTitle: "Exodus 14–17",
    word: "Manna",
    definition: "The miraculous bread from heaven that sustained Israel in the wilderness; a symbol of Christ, the Bread of Life.",
    context: "God provided manna daily to teach Israel dependence on Him and to point them to Christ.",
    scriptures: [
      { reference: "Exodus 16:14-15", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/16?lang=eng&id=p14-p15#p14" },
      { reference: "John 6:48-51", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/6?lang=eng&id=p48-p51#p48" },
      { reference: "1 Nephi 17:28", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/17?lang=eng&id=p28#p28" }
    ]
  },
  // Week 21: Exodus 18-20
  {
    id: "word-2026-05-18",
    date: "2026-05-18",
    weekTitle: "Exodus 18–20",
    word: "Commandments",
    definition: "Divine laws and instructions given by God to guide His children toward righteousness and happiness.",
    context: "The Ten Commandments were given at Sinai as the foundation of God's covenant with Israel.",
    scriptures: [
      { reference: "Exodus 20:1-17", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/20?lang=eng&id=p1-p17#p1" },
      { reference: "John 14:15", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/14?lang=eng&id=p15#p15" },
      { reference: "Mosiah 2:22", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=eng&id=p22#p22" }
    ]
  },
  // Week 22: Exodus 24; 31-34
  {
    id: "word-2026-05-25",
    date: "2026-05-25",
    weekTitle: "Exodus 24; 31–34",
    word: "Tabernacle",
    definition: "A portable sanctuary where God's presence dwelt among Israel; a pattern of heavenly things.",
    context: "The tabernacle symbolized God dwelling with His people and pointed to Christ.",
    scriptures: [
      { reference: "Exodus 25:8-9", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/25?lang=eng&id=p8-p9#p8" },
      { reference: "Hebrews 8:5", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/8?lang=eng&id=p5#p5" },
      { reference: "John 1:14", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/1?lang=eng&id=p14#p14" }
    ]
  },
  // Week 23: Exodus 35-40; Leviticus 1
  {
    id: "word-2026-06-01",
    date: "2026-06-01",
    weekTitle: "Exodus 35–40; Leviticus 1",
    word: "Sacrifice",
    definition: "An offering to God; giving up something valued for a higher purpose; central to worship.",
    context: "Animal sacrifices taught Israel about the coming Atonement of Jesus Christ.",
    scriptures: [
      { reference: "Leviticus 1:3-4", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/lev/1?lang=eng&id=p3-p4#p3" },
      { reference: "Hebrews 10:1-4", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/10?lang=eng&id=p1-p4#p1" },
      { reference: "3 Nephi 9:19-20", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/9?lang=eng&id=p19-p20#p19" }
    ]
  },
  // Week 24: Leviticus 8-10; 16-17
  {
    id: "word-2026-06-08",
    date: "2026-06-08",
    weekTitle: "Leviticus 8–10; 16–17",
    word: "Holy",
    definition: "Sacred, set apart for God's purposes; pure and worthy of reverence.",
    context: "The Day of Atonement rituals taught Israel about holiness and approaching God.",
    scriptures: [
      { reference: "Leviticus 19:2", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/lev/19?lang=eng&id=p2#p2" },
      { reference: "1 Peter 1:15-16", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-pet/1?lang=eng&id=p15-p16#p15" },
      { reference: "D&C 46:33", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/46?lang=eng&id=p33#p33" }
    ]
  },
  // Week 25: Leviticus 19; 26
  {
    id: "word-2026-06-15",
    date: "2026-06-15",
    weekTitle: "Leviticus 19; 26",
    word: "Neighbor",
    definition: "Fellow human beings; all people we encounter who deserve our love and kindness.",
    context: "The command to love thy neighbor as thyself is central to the law of Moses.",
    scriptures: [
      { reference: "Leviticus 19:18", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/lev/19?lang=eng&id=p18#p18" },
      { reference: "Luke 10:29-37", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/10?lang=eng&id=p29-p37#p29" },
      { reference: "Mosiah 4:15", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4?lang=eng&id=p15#p15" }
    ]
  },
  // Week 26: Numbers 11-14; 20-24
  {
    id: "word-2026-06-22",
    date: "2026-06-22",
    weekTitle: "Numbers 11–14; 20–24",
    word: "Murmur",
    definition: "To complain or grumble, especially against God or His servants; showing lack of faith.",
    context: "Israel's murmuring in the wilderness resulted in prolonged wandering and loss of blessings.",
    scriptures: [
      { reference: "Numbers 14:27-29", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/num/14?lang=eng&id=p27-p29#p27" },
      { reference: "1 Corinthians 10:10", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/10?lang=eng&id=p10#p10" },
      { reference: "D&C 75:7", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/75?lang=eng&id=p7#p7" }
    ]
  }
];

export const getWordForDate = (dateString: string): Word | undefined => {
  return words.find((w) => w.date === dateString);
};

export const getAvailableWordDates = (): string[] => {
  return words.map((w) => w.date);
};

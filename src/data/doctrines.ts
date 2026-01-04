export interface DoctrineReference {
  reference: string;
  url: string;
}

export interface Doctrine {
  id: string;
  date: string;
  weekTitle: string;
  doctrine: string;
  summary: string;
  explanation: string;
  references: DoctrineReference[];
}

export const doctrines: Doctrine[] = [
  // Week 1: Moses 1
  {
    id: "doctrine-2026-01-01",
    date: "2026-01-01",
    weekTitle: "Moses 1",
    doctrine: "We are children of God",
    summary: "Every person is a literal spirit child of Heavenly Father, with divine potential and eternal worth.",
    explanation: "God declared to Moses, 'Thou art my son.' This teaches us that our relationship to God is not figurative but literal—we are His spirit children. This divine parentage gives us infinite worth and the potential to become like Him.",
    references: [
      { reference: "Moses 1:4", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1?lang=eng&id=p4#p4" },
      { reference: "Romans 8:16-17", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/rom/8?lang=eng&id=p16-p17#p16" },
      { reference: "The Family: A Proclamation to the World", url: "https://www.churchofjesuschrist.org/study/scriptures/the-family-a-proclamation-to-the-world/the-family-a-proclamation-to-the-world?lang=eng" }
    ]
  },
  {
    id: "doctrine-2026-01-02",
    date: "2026-01-02",
    weekTitle: "Moses 1",
    doctrine: "God's work is to bring to pass our immortality and eternal life",
    summary: "The entire purpose of God's plan is to help His children return to live with Him forever.",
    explanation: "Moses learned that God's 'work and glory' is focused entirely on us. Everything He does—creation, commandments, covenants, the Atonement—serves this single purpose: bringing His children back to Him with immortal, glorified bodies to live eternally.",
    references: [
      { reference: "Moses 1:39", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1?lang=eng&id=p39#p39" },
      { reference: "2 Nephi 26:24", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/26?lang=eng&id=p24#p24" },
      { reference: "John 3:16", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/3?lang=eng&id=p16#p16" }
    ]
  },
  // Week 2: Abraham 3
  {
    id: "doctrine-2026-01-05",
    date: "2026-01-05",
    weekTitle: "Abraham 3",
    doctrine: "We lived with God before this life",
    summary: "All people existed as spirit children of God before being born on earth.",
    explanation: "Abraham saw the 'intelligences that were organized before the world was.' We existed as spirits, learned, grew, and made choices in God's presence before coming to earth. This premortal life explains our purpose here and our divine nature.",
    references: [
      { reference: "Abraham 3:22-23", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng&id=p22-p23#p22" },
      { reference: "Jeremiah 1:5", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/jer/1?lang=eng&id=p5#p5" },
      { reference: "D&C 138:55-56", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/138?lang=eng&id=p55-p56#p55" }
    ]
  },
  {
    id: "doctrine-2026-01-06",
    date: "2026-01-06",
    weekTitle: "Abraham 3",
    doctrine: "Earth life is a test",
    summary: "Mortality is a time of probation where we are tested and given the opportunity to prove ourselves.",
    explanation: "God said He would 'prove them herewith, to see if they will do all things whatsoever the Lord their God shall command them.' Earth life is not random—it is a purposeful test where we learn to walk by faith, keep commandments, and choose to follow Christ.",
    references: [
      { reference: "Abraham 3:25", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng&id=p25#p25" },
      { reference: "Alma 34:32", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=eng&id=p32#p32" },
      { reference: "2 Nephi 2:21", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=eng&id=p21#p21" }
    ]
  },
  // Week 3: Genesis 1-2
  {
    id: "doctrine-2026-01-12",
    date: "2026-01-12",
    weekTitle: "Genesis 1–2; Moses 2–3; Abraham 4–5",
    doctrine: "God created the earth for us",
    summary: "The earth was created as a place for God's children to receive physical bodies and be tested.",
    explanation: "The Creation was not accidental but purposeful. God organized the earth specifically to provide a place for His spirit children to receive mortal bodies, gain experience, and prove themselves worthy to return to His presence.",
    references: [
      { reference: "Genesis 1:1", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1?lang=eng&id=p1#p1" },
      { reference: "Abraham 4:1", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/4?lang=eng&id=p1#p1" },
      { reference: "1 Nephi 17:36", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/17?lang=eng&id=p36#p36" }
    ]
  },
  {
    id: "doctrine-2026-01-13",
    date: "2026-01-13",
    weekTitle: "Genesis 1–2; Moses 2–3; Abraham 4–5",
    doctrine: "We are created in God's image",
    summary: "Human beings are created in the physical and spiritual likeness of God.",
    explanation: "The declaration that we are made 'in the image of God' teaches that our Heavenly Father has a tangible body of flesh and bones. We are not random creations but intentional reflections of our divine Parent, made to become like Him.",
    references: [
      { reference: "Genesis 1:26-27", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1?lang=eng&id=p26-p27#p26" },
      { reference: "D&C 130:22", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/130?lang=eng&id=p22#p22" },
      { reference: "Moses 6:9", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/6?lang=eng&id=p9#p9" }
    ]
  },
  // Week 4: Genesis 3-4; Moses 4-5
  {
    id: "doctrine-2026-01-19",
    date: "2026-01-19",
    weekTitle: "Genesis 3–4; Moses 4–5",
    doctrine: "The Fall was necessary for our progression",
    summary: "Adam and Eve's transgression was a crucial step in God's plan, enabling mortality and spiritual growth.",
    explanation: "Unlike the view that the Fall was a tragedy, restored truth teaches it was essential. Eve recognized that without the Fall, they would never have had children, known joy and misery, or understood redemption. The Fall made mortal life and the Atonement possible.",
    references: [
      { reference: "2 Nephi 2:22-25", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=eng&id=p22-p25#p22" },
      { reference: "Moses 5:10-11", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5?lang=eng&id=p10-p11#p10" },
      { reference: "1 Corinthians 15:21-22", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/15?lang=eng&id=p21-p22#p21" }
    ]
  },
  {
    id: "doctrine-2026-01-20",
    date: "2026-01-20",
    weekTitle: "Genesis 3–4; Moses 4–5",
    doctrine: "Sacrifice points to Jesus Christ",
    summary: "Animal sacrifice was instituted to teach about and point to the Atonement of Jesus Christ.",
    explanation: "When Adam asked why he was to offer sacrifice, an angel explained it was 'a similitude of the sacrifice of the Only Begotten.' Every ancient sacrifice taught about Jesus Christ—the only sacrifice that could truly take away sin.",
    references: [
      { reference: "Moses 5:5-8", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5?lang=eng&id=p5-p8#p5" },
      { reference: "Alma 34:14", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=eng&id=p14#p14" },
      { reference: "Hebrews 10:1-4", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/10?lang=eng&id=p1-p4#p1" }
    ]
  },
  // Week 5: Moses 6-7
  {
    id: "doctrine-2026-01-26",
    date: "2026-01-26",
    weekTitle: "Moses 6–7",
    doctrine: "Repentance and baptism bring forgiveness",
    summary: "Through faith in Christ, repentance, and baptism, we can receive remission of sins.",
    explanation: "Enoch was taught the doctrine of Christ: to believe, repent, be baptized, and receive the Holy Ghost. This pattern has been taught since Adam and remains the only way to be cleansed from sin and enter God's kingdom.",
    references: [
      { reference: "Moses 6:52-60", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/6?lang=eng&id=p52-p60#p52" },
      { reference: "2 Nephi 31:13", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/31?lang=eng&id=p13#p13" },
      { reference: "Acts 2:38", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/acts/2?lang=eng&id=p38#p38" }
    ]
  },
  {
    id: "doctrine-2026-01-27",
    date: "2026-01-27",
    weekTitle: "Moses 6–7",
    doctrine: "Zion is the pure in heart",
    summary: "Zion is both a place and a condition—a community of people who are unified and pure before God.",
    explanation: "Enoch's city was called Zion because the people were 'of one heart and one mind, and dwelt in righteousness; and there was no poor among them.' We are commanded to build Zion today through unity, righteousness, and caring for one another.",
    references: [
      { reference: "Moses 7:18", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/7?lang=eng&id=p18#p18" },
      { reference: "D&C 97:21", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/97?lang=eng&id=p21#p21" },
      { reference: "4 Nephi 1:2-3", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/4-ne/1?lang=eng&id=p2-p3#p2" }
    ]
  },
  // Week 6: Genesis 5; Moses 8
  {
    id: "doctrine-2026-02-02",
    date: "2026-02-02",
    weekTitle: "Genesis 5; Moses 8",
    doctrine: "Priesthood authority has been on the earth since Adam",
    summary: "The priesthood was given to Adam and passed down through righteous patriarchs.",
    explanation: "From Adam to Noah, the priesthood was held and passed from father to son. This authority to act in God's name has been restored today, allowing ordinances like baptism and temple blessings to be performed with divine approval.",
    references: [
      { reference: "D&C 107:40-42", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/107?lang=eng&id=p40-p42#p40" },
      { reference: "Moses 6:7", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/6?lang=eng&id=p7#p7" },
      { reference: "D&C 84:6-17", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/84?lang=eng&id=p6-p17#p6" }
    ]
  },
  // Week 7: Genesis 6-7; Moses 8
  {
    id: "doctrine-2026-02-09",
    date: "2026-02-09",
    weekTitle: "Genesis 6–7; Moses 8",
    doctrine: "God warns before destruction",
    summary: "God sends prophets to warn people before judgments come, giving them opportunity to repent.",
    explanation: "Noah preached repentance for 120 years before the Flood. God does not destroy people without warning—He always sends messengers first. This pattern continues today with living prophets who warn and invite all to come unto Christ.",
    references: [
      { reference: "Moses 8:17", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/8?lang=eng&id=p17#p17" },
      { reference: "Amos 3:7", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/amos/3?lang=eng&id=p7#p7" },
      { reference: "2 Peter 2:5", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/2-pet/2?lang=eng&id=p5#p5" }
    ]
  },
  // Week 8: Genesis 8-10
  {
    id: "doctrine-2026-02-16",
    date: "2026-02-16",
    weekTitle: "Genesis 8–10",
    doctrine: "God keeps His covenants",
    summary: "When God makes a promise, He always fulfills it. His covenants are sure and unfailing.",
    explanation: "After the Flood, God established a covenant with Noah, setting the rainbow as a token. This demonstrates that God never forgets His promises. Every covenant He makes—including those with us—will be honored perfectly.",
    references: [
      { reference: "Genesis 9:9-16", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/9?lang=eng&id=p9-p16#p9" },
      { reference: "D&C 82:10", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/82?lang=eng&id=p10#p10" },
      { reference: "1 Nephi 1:20", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/1?lang=eng&id=p20#p20" }
    ]
  },
  // Week 9: Genesis 11
  {
    id: "doctrine-2026-02-23",
    date: "2026-02-23",
    weekTitle: "Genesis 11",
    doctrine: "Pride leads to spiritual downfall",
    summary: "Pride and seeking glory for ourselves rather than God leads to confusion and separation from Him.",
    explanation: "The builders of Babel sought to 'make us a name' and reach heaven by their own means. Their pride led to the confounding of languages and scattering. Conversely, humility and seeking God's glory brings unity and divine blessings.",
    references: [
      { reference: "Genesis 11:4", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/11?lang=eng&id=p4#p4" },
      { reference: "Proverbs 16:18", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/prov/16?lang=eng&id=p18#p18" },
      { reference: "Ezra Taft Benson, 'Beware of Pride'", url: "https://www.churchofjesuschrist.org/study/general-conference/1989/04/beware-of-pride?lang=eng" }
    ]
  },
  // Week 10: Genesis 12-17; Abraham 1-2
  {
    id: "doctrine-2026-03-02",
    date: "2026-03-02",
    weekTitle: "Genesis 12–17; Abraham 1–2",
    doctrine: "Through Abraham's seed, all nations are blessed",
    summary: "God promised Abraham that through his posterity, the blessings of the gospel would reach all people.",
    explanation: "The Abrahamic covenant includes the promise that through Abraham's seed, all families of the earth would be blessed. This refers to Jesus Christ and the spreading of the gospel. Covenant members share this blessing as they invite others to Christ.",
    references: [
      { reference: "Abraham 2:9-11", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/2?lang=eng&id=p9-p11#p9" },
      { reference: "Genesis 22:18", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/22?lang=eng&id=p18#p18" },
      { reference: "Galatians 3:8", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/gal/3?lang=eng&id=p8#p8" }
    ]
  },
  // Week 11: Genesis 18-23
  {
    id: "doctrine-2026-03-09",
    date: "2026-03-09",
    weekTitle: "Genesis 18–23",
    doctrine: "Nothing is too hard for the Lord",
    summary: "God's power is unlimited—He can accomplish anything according to His will and purposes.",
    explanation: "When Sarah laughed at the promise of a child in her old age, the Lord asked, 'Is any thing too hard for the Lord?' His question reminds us that human limitations do not constrain God. What seems impossible to us is simple for Him.",
    references: [
      { reference: "Genesis 18:14", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/18?lang=eng&id=p14#p14" },
      { reference: "Luke 1:37", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/1?lang=eng&id=p37#p37" },
      { reference: "1 Nephi 17:50", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/17?lang=eng&id=p50#p50" }
    ]
  },
  // Week 12: Genesis 24-27
  {
    id: "doctrine-2026-03-16",
    date: "2026-03-16",
    weekTitle: "Genesis 24–27",
    doctrine: "Eternal marriage is essential for exaltation",
    summary: "Marriage between a man and woman, sealed by priesthood authority, is ordained of God and essential for the highest degree of glory.",
    explanation: "Abraham sent his servant to find a righteous wife for Isaac, understanding the eternal importance of covenant marriage. Today, temple marriage seals families for eternity and is required for exaltation in the celestial kingdom.",
    references: [
      { reference: "Genesis 24:3-4", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/24?lang=eng&id=p3-p4#p3" },
      { reference: "D&C 131:1-4", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/131?lang=eng&id=p1-p4#p1" },
      { reference: "D&C 132:19", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/132?lang=eng&id=p19#p19" }
    ]
  },
  // Week 13: Genesis 28-33
  {
    id: "doctrine-2026-03-23",
    date: "2026-03-23",
    weekTitle: "Genesis 28–33",
    doctrine: "Temples connect heaven and earth",
    summary: "Temples are sacred places where heaven and earth meet, and where eternal ordinances are performed.",
    explanation: "Jacob's vision of a ladder reaching to heaven, with angels ascending and descending, symbolizes the temple. In temples, we make covenants with God, receive ordinances, and experience the closest connection to heaven available on earth.",
    references: [
      { reference: "Genesis 28:12-17", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/28?lang=eng&id=p12-p17#p12" },
      { reference: "D&C 109:13-21", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/109?lang=eng&id=p13-p21#p13" },
      { reference: "D&C 124:40-41", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/124?lang=eng&id=p40-p41#p40" }
    ]
  },
  // Week 14: Genesis 34-36
  {
    id: "doctrine-2026-03-30",
    date: "2026-03-30",
    weekTitle: "Genesis 34–36",
    doctrine: "Forgiveness is required of all",
    summary: "We are commanded to forgive everyone, leaving judgment to the Lord.",
    explanation: "Jacob and Esau's reconciliation demonstrates the power of forgiveness. The Lord has declared that we must forgive all men—holding grudges harms us and prevents us from receiving forgiveness ourselves.",
    references: [
      { reference: "Genesis 33:4", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/33?lang=eng&id=p4#p4" },
      { reference: "D&C 64:9-10", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/64?lang=eng&id=p9-p10#p9" },
      { reference: "Matthew 6:14-15", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/6?lang=eng&id=p14-p15#p14" }
    ]
  },
  // Week 15: Genesis 37-41
  {
    id: "doctrine-2026-04-06",
    date: "2026-04-06",
    weekTitle: "Genesis 37–41",
    doctrine: "God is with us in adversity",
    summary: "Even in our darkest trials, God does not abandon us. He is with us and can bring good from our suffering.",
    explanation: "Joseph was sold into slavery and wrongly imprisoned, yet 'the Lord was with Joseph.' Through every trial, God sustained him and eventually elevated him to save his family. Our trials can likewise become the means of our growth and others' blessing.",
    references: [
      { reference: "Genesis 39:2-3, 21", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/39?lang=eng&id=p2-p3,p21#p2" },
      { reference: "D&C 122:7", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/122?lang=eng&id=p7#p7" },
      { reference: "Romans 8:28", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/rom/8?lang=eng&id=p28#p28" }
    ]
  },
  // Week 16: Genesis 42-45
  {
    id: "doctrine-2026-04-13",
    date: "2026-04-13",
    weekTitle: "Genesis 42–45",
    doctrine: "God turns all things for our good",
    summary: "What others may intend for evil, God can transform into blessings and salvation.",
    explanation: "Joseph told his brothers, 'Ye thought evil against me; but God meant it unto good.' This profound truth teaches that God's providence is greater than any mortal scheme. He weaves even our trials into His plan for our ultimate benefit.",
    references: [
      { reference: "Genesis 50:20", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/50?lang=eng&id=p20#p20" },
      { reference: "Genesis 45:5-8", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/45?lang=eng&id=p5-p8#p5" },
      { reference: "D&C 98:3", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/98?lang=eng&id=p3#p3" }
    ]
  },
  // Week 17: Genesis 46-50
  {
    id: "doctrine-2026-04-20",
    date: "2026-04-20",
    weekTitle: "Genesis 46–50",
    doctrine: "Families can be together forever",
    summary: "Through temple ordinances, families can be sealed together for eternity, not just until death.",
    explanation: "Jacob's blessing of his sons and the reunion with Joseph remind us of the eternal nature of family. God's plan is centered on families. Through temple sealings, the bonds of family can extend beyond the grave forever.",
    references: [
      { reference: "Genesis 46:29-30", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/46?lang=eng&id=p29-p30#p29" },
      { reference: "D&C 138:47-48", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/138?lang=eng&id=p47-p48#p47" },
      { reference: "Malachi 4:5-6", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/mal/4?lang=eng&id=p5-p6#p5" }
    ]
  },
  // Week 18: Exodus 1-6
  {
    id: "doctrine-2026-04-27",
    date: "2026-04-27",
    weekTitle: "Exodus 1–6",
    doctrine: "God hears and remembers His people",
    summary: "God is aware of our suffering and remembers His covenants with us. He will deliver us.",
    explanation: "When Israel groaned in bondage, 'God heard their groaning, and God remembered his covenant.' God is never unaware of our struggles. He remembers every promise and covenant, and in His time, He will deliver His faithful children.",
    references: [
      { reference: "Exodus 2:24-25", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/2?lang=eng&id=p24-p25#p24" },
      { reference: "1 Nephi 21:15-16", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/21?lang=eng&id=p15-p16#p15" },
      { reference: "D&C 3:1", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/3?lang=eng&id=p1#p1" }
    ]
  },
  // Week 19: Exodus 7-13
  {
    id: "doctrine-2026-05-04",
    date: "2026-05-04",
    weekTitle: "Exodus 7–13",
    doctrine: "Jesus Christ is our Passover",
    summary: "The Passover lamb was a type and shadow of Jesus Christ, whose blood saves us from spiritual death.",
    explanation: "The blood of the lamb on Israelite doorposts saved the firstborn from death. This foreshadowed Jesus Christ, 'the Lamb of God,' whose atoning blood saves all who accept Him from spiritual death and brings eternal life.",
    references: [
      { reference: "Exodus 12:13", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/12?lang=eng&id=p13#p13" },
      { reference: "1 Corinthians 5:7", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/5?lang=eng&id=p7#p7" },
      { reference: "John 1:29", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/1?lang=eng&id=p29#p29" }
    ]
  },
  // Week 20: Exodus 14-17
  {
    id: "doctrine-2026-05-11",
    date: "2026-05-11",
    weekTitle: "Exodus 14–17",
    doctrine: "The Lord will fight our battles",
    summary: "When we trust in the Lord, He fights for us against challenges we cannot overcome alone.",
    explanation: "At the Red Sea, Moses told the terrified Israelites, 'The Lord shall fight for you.' When we face overwhelming opposition—whether physical, spiritual, or emotional—we can trust that God will intervene and deliver us.",
    references: [
      { reference: "Exodus 14:13-14", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/14?lang=eng&id=p13-p14#p13" },
      { reference: "D&C 105:14", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/105?lang=eng&id=p14#p14" },
      { reference: "2 Chronicles 20:15", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-chr/20?lang=eng&id=p15#p15" }
    ]
  },
  // Week 21: Exodus 18-20
  {
    id: "doctrine-2026-05-18",
    date: "2026-05-18",
    weekTitle: "Exodus 18–20",
    doctrine: "Keeping the commandments brings blessings",
    summary: "God gives commandments to bless us. Obedience brings happiness; disobedience brings sorrow.",
    explanation: "The Ten Commandments were given to guide Israel into happiness and prosperity. Commandments are not restrictions but divine instructions for joy. Every commandment carries promised blessings for those who obey.",
    references: [
      { reference: "Exodus 20:1-17", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/20?lang=eng&id=p1-p17#p1" },
      { reference: "Mosiah 2:41", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=eng&id=p41#p41" },
      { reference: "D&C 130:20-21", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/130?lang=eng&id=p20-p21#p20" }
    ]
  },
  // Week 22: Exodus 24; 31-34
  {
    id: "doctrine-2026-05-25",
    date: "2026-05-25",
    weekTitle: "Exodus 24; 31–34",
    doctrine: "We can see God and live",
    summary: "Through righteousness and the power of the priesthood, mortals can be sanctified to behold God.",
    explanation: "Moses and the elders of Israel saw God and 'did eat and drink' in His presence. While normally mortals cannot endure God's glory, He can sanctify individuals to enter His presence—a promise available to all who seek Him.",
    references: [
      { reference: "Exodus 24:9-11", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/24?lang=eng&id=p9-p11#p9" },
      { reference: "D&C 93:1", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/93?lang=eng&id=p1#p1" },
      { reference: "D&C 88:68", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/88?lang=eng&id=p68#p68" }
    ]
  },
  // Week 23: Exodus 35-40; Leviticus 1; 16; 19
  {
    id: "doctrine-2026-06-01",
    date: "2026-06-01",
    weekTitle: "Exodus 35–40; Leviticus 1; 16; 19",
    doctrine: "The tabernacle represents God's presence among His people",
    summary: "Sacred places of worship allow God to dwell symbolically among His people and bless them.",
    explanation: "The tabernacle was built so that God could 'dwell among' Israel. It symbolized His presence and provided a place for sacred ordinances. Today, temples serve the same purpose—sacred spaces where we feel God's presence and receive His blessings.",
    references: [
      { reference: "Exodus 25:8", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/25?lang=eng&id=p8#p8" },
      { reference: "Exodus 40:34-35", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/40?lang=eng&id=p34-p35#p34" },
      { reference: "D&C 97:15-16", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/97?lang=eng&id=p15-p16#p15" }
    ]
  },
  // Week 24: Numbers 11-14; 20-24
  {
    id: "doctrine-2026-06-08",
    date: "2026-06-08",
    weekTitle: "Numbers 11–14; 20–24",
    doctrine: "Murmuring shows lack of faith",
    summary: "Complaining against God and His servants demonstrates a lack of trust and leads to lost blessings.",
    explanation: "Israel's constant murmuring in the wilderness led to serious consequences, including being denied entry to the promised land. Murmuring is more than complaining—it reflects distrust in God's purposes and His chosen leaders.",
    references: [
      { reference: "Numbers 14:27-30", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/num/14?lang=eng&id=p27-p30#p27" },
      { reference: "1 Nephi 2:11-12", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/2?lang=eng&id=p11-p12#p11" },
      { reference: "D&C 75:7", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/75?lang=eng&id=p7#p7" }
    ]
  },
  // Week 25: Deuteronomy 6-8; 15; 18; 29-30; 34
  {
    id: "doctrine-2026-06-15",
    date: "2026-06-15",
    weekTitle: "Deuteronomy 6–8; 15; 18; 29–30; 34",
    doctrine: "Love God with all your heart, might, mind, and strength",
    summary: "The first and great commandment is to love God completely and unreservedly.",
    explanation: "The Shema—'Hear, O Israel: The Lord our God is one Lord: And thou shalt love the Lord thy God with all thine heart'—remains the central commandment. Complete love for God is expressed through obedience, worship, and devotion.",
    references: [
      { reference: "Deuteronomy 6:4-5", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/deut/6?lang=eng&id=p4-p5#p4" },
      { reference: "Matthew 22:37-38", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/22?lang=eng&id=p37-p38#p37" },
      { reference: "D&C 59:5", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/59?lang=eng&id=p5#p5" }
    ]
  },
  // Week 26: Joshua 1-8; 23-24
  {
    id: "doctrine-2026-06-22",
    date: "2026-06-22",
    weekTitle: "Joshua 1–8; 23–24",
    doctrine: "Choose you this day whom ye will serve",
    summary: "We must make an active, personal choice to serve God. Neutrality is not an option.",
    explanation: "Joshua's declaration—'Choose you this day whom ye will serve... but as for me and my house, we will serve the Lord'—reminds us that following God requires deliberate choice. We cannot drift into discipleship; we must decide.",
    references: [
      { reference: "Joshua 24:15", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/josh/24?lang=eng&id=p15#p15" },
      { reference: "2 Nephi 2:27", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=eng&id=p27#p27" },
      { reference: "Alma 30:8", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/30?lang=eng&id=p8#p8" }
    ]
  }
];

export function getDoctrineForDate(date: string): Doctrine | undefined {
  return doctrines.find(d => d.date === date);
}

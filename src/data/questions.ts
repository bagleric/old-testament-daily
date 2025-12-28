export interface Question {
  id: string;
  date: string; // YYYY-MM-DD format
  weekTitle: string;
  scriptureReference: string;
  lessonUrl: string; // URL to the Come Follow Me lesson
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
}

// Come Follow Me 2026 Old Testament questions
// Starting January 2026
export const questions: Question[] = [
  // Week 1: December 29 - January 4 (Introductory Week)
  {
    id: "2026-01-01",
    date: "2026-01-01",
    weekTitle: "Introductory Week",
    scriptureReference: "Moses 1",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/01?lang=eng",
    question: "In Moses 1, what did God tell Moses about his divine identity?",
    options: [
      "Moses was a servant of God",
      "Moses was a son of God, in the similitude of the Only Begotten",
      "Moses was a prophet chosen from birth",
      "Moses was greater than all other men"
    ],
    correctAnswer: 1,
    explanation: "God told Moses, 'Behold, thou art my son' and that he was 'in the similitude of mine Only Begotten' (Moses 1:4, 6)."
  },
  {
    id: "2026-01-02",
    date: "2026-01-02",
    weekTitle: "Introductory Week",
    scriptureReference: "Moses 1",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/01?lang=eng",
    question: "After Satan departed from Moses, what did Moses realize about man compared to God?",
    options: [
      "Man is powerful like God",
      "Man is nothing, which Moses had never supposed",
      "Man is equal to angels",
      "Man is destined to become a god"
    ],
    correctAnswer: 1,
    explanation: "Moses exclaimed, 'Now, for this cause I know that man is nothing, which thing I never had supposed' (Moses 1:10)."
  },
  {
    id: "2026-01-03",
    date: "2026-01-03",
    weekTitle: "Introductory Week",
    scriptureReference: "Moses 1",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/01?lang=eng",
    question: "How did Moses resist Satan's temptations?",
    options: [
      "He ran away and hid",
      "He called upon God and commanded Satan to depart in the name of the Only Begotten",
      "He argued with Satan using logic",
      "He ignored Satan until he left"
    ],
    correctAnswer: 1,
    explanation: "Moses called upon God and said, 'In the name of the Only Begotten, depart hence, Satan' (Moses 1:21)."
  },
  {
    id: "2026-01-04",
    date: "2026-01-04",
    weekTitle: "Introductory Week",
    scriptureReference: "Moses 1",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/01?lang=eng",
    question: "What is God's work and glory according to Moses 1:39?",
    options: [
      "To create worlds without number",
      "To bring to pass the immortality and eternal life of man",
      "To test mankind's obedience",
      "To defeat Satan and his followers"
    ],
    correctAnswer: 1,
    explanation: "'For behold, this is my work and my glory—to bring to pass the immortality and eternal life of man' (Moses 1:39)."
  },
  
  // Week 2: January 5-11 - Moses 1; Abraham 3
  {
    id: "2026-01-05",
    date: "2026-01-05",
    weekTitle: "Moses 1; Abraham 3",
    scriptureReference: "Abraham 3",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/02?lang=eng",
    question: "What did the Lord show Abraham through the Urim and Thummim?",
    options: [
      "The future of his descendants",
      "The stars and their order",
      "The location of the promised land",
      "The faces of his enemies"
    ],
    correctAnswer: 1,
    explanation: "The Lord showed Abraham 'the stars, that they were very great' and taught him about their order and governance (Abraham 3:2-3)."
  },
  {
    id: "2026-01-06",
    date: "2026-01-06",
    weekTitle: "Moses 1; Abraham 3",
    scriptureReference: "Abraham 3",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/02?lang=eng",
    question: "What is the name of the great star nearest to God's throne?",
    options: [
      "Shinehah",
      "Kolob",
      "Olea",
      "Kokaubeam"
    ],
    correctAnswer: 1,
    explanation: "Kolob is the great star 'nearest unto the throne of God' (Abraham 3:2-3)."
  },
  {
    id: "2026-01-07",
    date: "2026-01-07",
    weekTitle: "Moses 1; Abraham 3",
    scriptureReference: "Abraham 3",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/02?lang=eng",
    question: "According to Abraham 3, what existed before the world was created?",
    options: [
      "Only darkness and void",
      "Angels singing praises",
      "Intelligences or spirits",
      "The elements of earth"
    ],
    correctAnswer: 2,
    explanation: "Abraham learned that 'intelligences' were organized before the world was (Abraham 3:22)."
  },
  {
    id: "2026-01-08",
    date: "2026-01-08",
    weekTitle: "Moses 1; Abraham 3",
    scriptureReference: "Abraham 3",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/02?lang=eng",
    question: "Who was 'like unto God' among the noble and great spirits?",
    options: [
      "Abraham",
      "Moses",
      "One like unto the Son of God (Jesus Christ)",
      "Michael"
    ],
    correctAnswer: 2,
    explanation: "Abraham saw 'one among them that was like unto God' who would be sent to earth (Abraham 3:24)."
  },
  {
    id: "2026-01-09",
    date: "2026-01-09",
    weekTitle: "Moses 1; Abraham 3",
    scriptureReference: "Abraham 3",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/02?lang=eng",
    question: "What was the purpose of earth life according to Abraham 3:25?",
    options: [
      "To punish the wicked",
      "To prove us and see if we will do all things commanded",
      "To allow spirits to experience joy",
      "To separate the righteous from the wicked"
    ],
    correctAnswer: 1,
    explanation: "'We will prove them herewith, to see if they will do all things whatsoever the Lord their God shall command them' (Abraham 3:25)."
  },
  {
    id: "2026-01-10",
    date: "2026-01-10",
    weekTitle: "Moses 1; Abraham 3",
    scriptureReference: "Moses 1",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/02?lang=eng",
    question: "What did Satan want Moses to do that would have been contrary to God's commandment?",
    options: [
      "Curse God",
      "Worship Satan",
      "Deny the existence of God",
      "Leave the mountain"
    ],
    correctAnswer: 1,
    explanation: "Satan commanded Moses, 'Worship me' (Moses 1:12), which Moses refused."
  },
  {
    id: "2026-01-11",
    date: "2026-01-11",
    weekTitle: "Moses 1; Abraham 3",
    scriptureReference: "Abraham 3",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/02?lang=eng",
    question: "Abraham was told he was chosen before he was born. What does this teach about premortal life?",
    options: [
      "Only prophets existed before birth",
      "Spirits were organized and some were noble and great",
      "All spirits were equal in the premortal life",
      "Spirits had no agency before birth"
    ],
    correctAnswer: 1,
    explanation: "Abraham saw 'the intelligences that were organized before the world was' and that some were 'noble and great ones' (Abraham 3:22)."
  },

  // Week 3: January 12-18 - Genesis 1-2; Moses 2-3; Abraham 4-5
  {
    id: "2026-01-12",
    date: "2026-01-12",
    weekTitle: "The Creation",
    scriptureReference: "Genesis 1",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/03?lang=eng",
    question: "What did God create on the first day according to Genesis 1?",
    options: [
      "The sun and moon",
      "Light",
      "Land and sea",
      "Animals"
    ],
    correctAnswer: 1,
    explanation: "God said, 'Let there be light: and there was light' (Genesis 1:3)."
  },
  {
    id: "2026-01-13",
    date: "2026-01-13",
    weekTitle: "The Creation",
    scriptureReference: "Genesis 1",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/03?lang=eng",
    question: "On which day were humans created?",
    options: [
      "Fourth day",
      "Fifth day",
      "Sixth day",
      "Seventh day"
    ],
    correctAnswer: 2,
    explanation: "On the sixth day, 'God created man in his own image' (Genesis 1:27)."
  },
  {
    id: "2026-01-14",
    date: "2026-01-14",
    weekTitle: "The Creation",
    scriptureReference: "Genesis 2",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/03?lang=eng",
    question: "What did God do on the seventh day?",
    options: [
      "Created more animals",
      "Rested and sanctified the day",
      "Created the Garden of Eden",
      "Spoke with Adam"
    ],
    correctAnswer: 1,
    explanation: "On the seventh day God 'rested' and 'blessed the seventh day, and sanctified it' (Genesis 2:2-3)."
  },
  {
    id: "2026-01-15",
    date: "2026-01-15",
    weekTitle: "The Creation",
    scriptureReference: "Moses 3",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/03?lang=eng",
    question: "According to Moses 3, what was created spiritually before it was naturally upon the earth?",
    options: [
      "Only humans",
      "Only animals",
      "Every plant and herb of the field",
      "Only the trees"
    ],
    correctAnswer: 2,
    explanation: "'I, the Lord God, created all things... spiritually, before they were naturally upon the face of the earth' (Moses 3:5)."
  },
  {
    id: "2026-01-16",
    date: "2026-01-16",
    weekTitle: "The Creation",
    scriptureReference: "Genesis 2",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/03?lang=eng",
    question: "From what did God form Adam?",
    options: [
      "Water",
      "Fire",
      "Dust of the ground",
      "Clay from the river"
    ],
    correctAnswer: 2,
    explanation: "'The Lord God formed man of the dust of the ground, and breathed into his nostrils the breath of life' (Genesis 2:7)."
  },
  {
    id: "2026-01-17",
    date: "2026-01-17",
    weekTitle: "The Creation",
    scriptureReference: "Abraham 4",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/03?lang=eng",
    question: "In Abraham's account, who participated in the creation?",
    options: [
      "God alone",
      "The Gods (plural)",
      "Angels",
      "Adam and Eve"
    ],
    correctAnswer: 1,
    explanation: "Abraham's account uses 'the Gods' throughout, indicating multiple beings participated in creation (Abraham 4:1)."
  },
  {
    id: "2026-01-18",
    date: "2026-01-18",
    weekTitle: "The Creation",
    scriptureReference: "Genesis 2",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/03?lang=eng",
    question: "What was the one tree Adam was commanded not to eat from?",
    options: [
      "The tree of life",
      "The tree of knowledge of good and evil",
      "The olive tree",
      "The fig tree"
    ],
    correctAnswer: 1,
    explanation: "'Of the tree of the knowledge of good and evil, thou shalt not eat of it' (Genesis 2:17)."
  },

  // Week 4: January 19-25 - Genesis 3-4; Moses 4-5
  {
    id: "2026-01-19",
    date: "2026-01-19",
    weekTitle: "The Fall",
    scriptureReference: "Genesis 3",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/04?lang=eng",
    question: "What animal did Satan use to tempt Eve?",
    options: [
      "A lion",
      "A serpent",
      "A raven",
      "A goat"
    ],
    correctAnswer: 1,
    explanation: "'The serpent was more subtil than any beast of the field' and spoke to Eve (Genesis 3:1)."
  },
  {
    id: "2026-01-20",
    date: "2026-01-20",
    weekTitle: "The Fall",
    scriptureReference: "Genesis 3",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/04?lang=eng",
    question: "What did Adam and Eve realize after eating the forbidden fruit?",
    options: [
      "They became like gods knowing all things",
      "They were naked",
      "They could fly",
      "They could speak to animals"
    ],
    correctAnswer: 1,
    explanation: "'The eyes of them both were opened, and they knew that they were naked' (Genesis 3:7)."
  },
  {
    id: "2026-01-21",
    date: "2026-01-21",
    weekTitle: "The Fall",
    scriptureReference: "Moses 4",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/04?lang=eng",
    question: "According to Moses 4, why did Satan want to destroy the world?",
    options: [
      "Because he was bored",
      "Because he sought God's glory and was cast out",
      "Because he hated humans",
      "Because he wanted to rule alone"
    ],
    correctAnswer: 1,
    explanation: "Satan 'sought to destroy the agency of man' and 'rebelled against me, saying, Give me thine honor' (Moses 4:3)."
  },
  {
    id: "2026-01-22",
    date: "2026-01-22",
    weekTitle: "The Fall",
    scriptureReference: "Genesis 4",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/04?lang=eng",
    question: "What was the occupation of Abel?",
    options: [
      "A farmer",
      "A keeper of sheep",
      "A builder",
      "A hunter"
    ],
    correctAnswer: 1,
    explanation: "'Abel was a keeper of sheep, but Cain was a tiller of the ground' (Genesis 4:2)."
  },
  {
    id: "2026-01-23",
    date: "2026-01-23",
    weekTitle: "The Fall",
    scriptureReference: "Genesis 4",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/04?lang=eng",
    question: "Why was Cain's offering not accepted by the Lord?",
    options: [
      "It was too small",
      "He offered it at the wrong time",
      "He did not offer it in faith and righteousness",
      "He used the wrong altar"
    ],
    correctAnswer: 2,
    explanation: "Moses 5:21 explains Cain 'loved Satan more than God' and did not offer in faith."
  },
  {
    id: "2026-01-24",
    date: "2026-01-24",
    weekTitle: "The Fall",
    scriptureReference: "Moses 5",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/04?lang=eng",
    question: "What was Adam commanded to offer as a sacrifice?",
    options: [
      "Grain and fruit",
      "The firstlings of his flocks",
      "Gold and silver",
      "Incense"
    ],
    correctAnswer: 1,
    explanation: "Adam was commanded 'that thou shalt offer the firstlings of thy flocks, for an offering unto the Lord' (Moses 5:5)."
  },
  {
    id: "2026-01-25",
    date: "2026-01-25",
    weekTitle: "The Fall",
    scriptureReference: "Moses 5",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/04?lang=eng",
    question: "What did the sacrifice of the firstlings symbolize?",
    options: [
      "Man's dominion over animals",
      "The sacrifice of the Only Begotten of the Father",
      "The changing of seasons",
      "Thanksgiving for harvests"
    ],
    correctAnswer: 1,
    explanation: "'This thing is a similitude of the sacrifice of the Only Begotten of the Father' (Moses 5:7)."
  },

  // Week 5: January 26 - February 1 - Moses 6-7
  {
    id: "2026-01-26",
    date: "2026-01-26",
    weekTitle: "Enoch and Zion",
    scriptureReference: "Moses 6",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/05?lang=eng",
    question: "What book contained the genealogy and records of Adam's descendants?",
    options: [
      "The Book of Life",
      "The Book of Remembrance",
      "The Book of the Covenant",
      "The Book of Generations"
    ],
    correctAnswer: 1,
    explanation: "'A book of remembrance was kept' in the language of Adam (Moses 6:5)."
  },
  {
    id: "2026-01-27",
    date: "2026-01-27",
    weekTitle: "Enoch and Zion",
    scriptureReference: "Moses 6",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/05?lang=eng",
    question: "How old was Enoch when he was called to preach?",
    options: [
      "25 years old",
      "65 years old",
      "100 years old",
      "30 years old"
    ],
    correctAnswer: 1,
    explanation: "Enoch said, 'I am but a lad, and all the people hate me; for I am slow of speech' when called at 65 years (Moses 6:31)."
  },
  {
    id: "2026-01-28",
    date: "2026-01-28",
    weekTitle: "Enoch and Zion",
    scriptureReference: "Moses 7",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/05?lang=eng",
    question: "What name was given to Enoch's righteous city?",
    options: [
      "Jerusalem",
      "Zion",
      "Eden",
      "Bethel"
    ],
    correctAnswer: 1,
    explanation: "'And the Lord called his people Zion, because they were of one heart and one mind' (Moses 7:18)."
  },
  {
    id: "2026-01-29",
    date: "2026-01-29",
    weekTitle: "Enoch and Zion",
    scriptureReference: "Moses 7",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/05?lang=eng",
    question: "What happened to the city of Enoch?",
    options: [
      "It was destroyed by enemies",
      "It was taken up into heaven",
      "It sank into the sea",
      "It became Jerusalem"
    ],
    correctAnswer: 1,
    explanation: "'Zion, in process of time, was taken up into heaven' (Moses 7:21)."
  },
  {
    id: "2026-01-30",
    date: "2026-01-30",
    weekTitle: "Enoch and Zion",
    scriptureReference: "Moses 7",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/05?lang=eng",
    question: "What did Enoch see that caused God to weep?",
    options: [
      "The destruction of the temple",
      "The wickedness of mankind",
      "The death of Abel",
      "The tower of Babel"
    ],
    correctAnswer: 1,
    explanation: "God wept because of the wickedness of His children and their rejection of the gospel (Moses 7:28-37)."
  },
  {
    id: "2026-01-31",
    date: "2026-01-31",
    weekTitle: "Enoch and Zion",
    scriptureReference: "Moses 6",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/05?lang=eng",
    question: "According to Moses 6:57, how must one enter the kingdom of God?",
    options: [
      "By keeping all the commandments perfectly",
      "By being born of water and the Spirit",
      "By offering many sacrifices",
      "By living a long life"
    ],
    correctAnswer: 1,
    explanation: "'Ye must be born again into the kingdom of heaven, of water, and of the Spirit' (Moses 6:59)."
  },
  {
    id: "2026-02-01",
    date: "2026-02-01",
    weekTitle: "Enoch and Zion",
    scriptureReference: "Moses 7",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/05?lang=eng",
    question: "What quality defined the people of Zion according to Moses 7:18?",
    options: [
      "They were wealthy and powerful",
      "They were of one heart and one mind with no poor among them",
      "They had many prophets",
      "They built great temples"
    ],
    correctAnswer: 1,
    explanation: "'They were of one heart and one mind, and dwelt in righteousness; and there was no poor among them' (Moses 7:18)."
  },

  // Week 6: February 2-8 - Genesis 5; Moses 8
  {
    id: "2026-02-02",
    date: "2026-02-02",
    weekTitle: "The Patriarchs and Noah",
    scriptureReference: "Genesis 5",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/06?lang=eng",
    question: "Who was the oldest person recorded in the Bible?",
    options: [
      "Adam",
      "Noah",
      "Methuselah",
      "Enoch"
    ],
    correctAnswer: 2,
    explanation: "Methuselah lived 969 years, the longest recorded lifespan (Genesis 5:27)."
  },
  {
    id: "2026-02-03",
    date: "2026-02-03",
    weekTitle: "The Patriarchs and Noah",
    scriptureReference: "Genesis 5",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/06?lang=eng",
    question: "What was unique about Enoch's death according to Genesis 5?",
    options: [
      "He died young",
      "He did not die - God took him",
      "He died in battle",
      "He died peacefully at home"
    ],
    correctAnswer: 1,
    explanation: "'Enoch walked with God: and he was not; for God took him' (Genesis 5:24)."
  },
  {
    id: "2026-02-04",
    date: "2026-02-04",
    weekTitle: "The Patriarchs and Noah",
    scriptureReference: "Moses 8",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/06?lang=eng",
    question: "How old was Noah when he began preaching?",
    options: [
      "100 years old",
      "450 years old",
      "480 years old",
      "500 years old"
    ],
    correctAnswer: 2,
    explanation: "Noah was 480 years old when he received his calling (Moses 8:17)."
  },
  {
    id: "2026-02-05",
    date: "2026-02-05",
    weekTitle: "The Patriarchs and Noah",
    scriptureReference: "Moses 8",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/06?lang=eng",
    question: "What message did Noah preach to the people?",
    options: [
      "To prepare for prosperity",
      "To believe on Jesus Christ, repent, and be baptized",
      "To build cities",
      "To multiply wealth"
    ],
    correctAnswer: 1,
    explanation: "Noah called upon the people to 'believe and repent... and be baptized in the name of Jesus Christ' (Moses 8:24)."
  },
  {
    id: "2026-02-06",
    date: "2026-02-06",
    weekTitle: "The Patriarchs and Noah",
    scriptureReference: "Genesis 5",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/06?lang=eng",
    question: "Who was Noah's father?",
    options: [
      "Methuselah",
      "Lamech",
      "Enoch",
      "Jared"
    ],
    correctAnswer: 1,
    explanation: "'Lamech... begat a son: And he called his name Noah' (Genesis 5:28-29)."
  },
  {
    id: "2026-02-07",
    date: "2026-02-07",
    weekTitle: "The Patriarchs and Noah",
    scriptureReference: "Moses 8",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/06?lang=eng",
    question: "How did the people respond to Noah's preaching?",
    options: [
      "They repented and followed him",
      "They hearkened not to his words",
      "They asked for more time",
      "They helped build the ark"
    ],
    correctAnswer: 1,
    explanation: "'They hearkened not unto his words' (Moses 8:20)."
  },
  {
    id: "2026-02-08",
    date: "2026-02-08",
    weekTitle: "The Patriarchs and Noah",
    scriptureReference: "Genesis 5",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/06?lang=eng",
    question: "How many years did Adam live?",
    options: [
      "800 years",
      "900 years",
      "930 years",
      "969 years"
    ],
    correctAnswer: 2,
    explanation: "'All the days that Adam lived were nine hundred and thirty years: and he died' (Genesis 5:5)."
  },

  // Week 7: February 9-15 - Genesis 6-7; Moses 8
  {
    id: "2026-02-09",
    date: "2026-02-09",
    weekTitle: "Noah and the Flood",
    scriptureReference: "Genesis 6",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/07?lang=eng",
    question: "What were the dimensions of Noah's ark in cubits (length)?",
    options: [
      "200 cubits",
      "300 cubits",
      "400 cubits",
      "500 cubits"
    ],
    correctAnswer: 1,
    explanation: "'The length of the ark shall be three hundred cubits' (Genesis 6:15)."
  },
  {
    id: "2026-02-10",
    date: "2026-02-10",
    weekTitle: "Noah and the Flood",
    scriptureReference: "Genesis 6",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/07?lang=eng",
    question: "What type of wood was the ark made from?",
    options: [
      "Cedar",
      "Oak",
      "Gopher wood",
      "Olive wood"
    ],
    correctAnswer: 2,
    explanation: "'Make thee an ark of gopher wood' (Genesis 6:14)."
  },
  {
    id: "2026-02-11",
    date: "2026-02-11",
    weekTitle: "Noah and the Flood",
    scriptureReference: "Genesis 7",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/07?lang=eng",
    question: "How many of each clean animal did Noah take on the ark?",
    options: [
      "Two",
      "Seven",
      "Ten",
      "Twelve"
    ],
    correctAnswer: 1,
    explanation: "'Of every clean beast thou shalt take to thee by sevens' (Genesis 7:2)."
  },
  {
    id: "2026-02-12",
    date: "2026-02-12",
    weekTitle: "Noah and the Flood",
    scriptureReference: "Genesis 7",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/07?lang=eng",
    question: "How many days and nights did it rain during the flood?",
    options: [
      "7 days and nights",
      "40 days and nights",
      "100 days and nights",
      "150 days and nights"
    ],
    correctAnswer: 1,
    explanation: "'The rain was upon the earth forty days and forty nights' (Genesis 7:12)."
  },
  {
    id: "2026-02-13",
    date: "2026-02-13",
    weekTitle: "Noah and the Flood",
    scriptureReference: "Genesis 6",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/07?lang=eng",
    question: "What was the condition of mankind that led God to send the flood?",
    options: [
      "They were too numerous",
      "The wickedness of man was great and every thought was evil",
      "They had forgotten to worship",
      "They refused to work"
    ],
    correctAnswer: 1,
    explanation: "'The wickedness of man was great in the earth, and... every imagination of the thoughts of his heart was only evil continually' (Genesis 6:5)."
  },
  {
    id: "2026-02-14",
    date: "2026-02-14",
    weekTitle: "Noah and the Flood",
    scriptureReference: "Genesis 6",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/07?lang=eng",
    question: "Noah found grace in the eyes of the Lord because he was:",
    options: [
      "The oldest man alive",
      "A just man and perfect in his generations",
      "The strongest builder",
      "The wealthiest patriarch"
    ],
    correctAnswer: 1,
    explanation: "'Noah was a just man and perfect in his generations, and Noah walked with God' (Genesis 6:9)."
  },
  {
    id: "2026-02-15",
    date: "2026-02-15",
    weekTitle: "Noah and the Flood",
    scriptureReference: "Genesis 7",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/07?lang=eng",
    question: "How many people were saved on the ark?",
    options: [
      "Four",
      "Six",
      "Eight",
      "Twelve"
    ],
    correctAnswer: 2,
    explanation: "Noah, his wife, his three sons and their wives - eight souls were saved (Genesis 7:13; 1 Peter 3:20)."
  },
];

// Helper function to get question for a specific date
export function getQuestionForDate(dateString: string): Question | undefined {
  return questions.find(q => q.date === dateString);
}

// Helper function to get today's question
export function getTodaysQuestion(): Question | undefined {
  const today = new Date().toISOString().split('T')[0];
  // For demo purposes, if today's date doesn't have a question, use the first question
  return getQuestionForDate(today) || questions[0];
}

// Helper function to get questions for a specific week
export function getQuestionsForWeek(weekTitle: string): Question[] {
  return questions.filter(q => q.weekTitle === weekTitle);
}

// Get all unique weeks
export function getUniqueWeeks(): string[] {
  return [...new Set(questions.map(q => q.weekTitle))];
}

// Get available dates that have questions
export function getAvailableDates(): string[] {
  return questions.map(q => q.date);
}

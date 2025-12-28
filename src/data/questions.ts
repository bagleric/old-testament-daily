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

  // Week 8: February 16-22 - Genesis 8-9
  {
    id: "2026-02-16",
    date: "2026-02-16",
    weekTitle: "After the Flood",
    scriptureReference: "Genesis 8",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/08?lang=eng",
    question: "What bird did Noah first send out from the ark?",
    options: [
      "A dove",
      "A raven",
      "A sparrow",
      "An eagle"
    ],
    correctAnswer: 1,
    explanation: "Noah 'sent forth a raven, which went forth to and fro' (Genesis 8:7)."
  },
  {
    id: "2026-02-17",
    date: "2026-02-17",
    weekTitle: "After the Flood",
    scriptureReference: "Genesis 8",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/08?lang=eng",
    question: "What did the dove bring back to Noah?",
    options: [
      "A fig leaf",
      "An olive leaf",
      "A flower",
      "A twig"
    ],
    correctAnswer: 1,
    explanation: "The dove came back with 'an olive leaf pluckt off' showing the waters had receded (Genesis 8:11)."
  },
  {
    id: "2026-02-18",
    date: "2026-02-18",
    weekTitle: "After the Flood",
    scriptureReference: "Genesis 8",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/08?lang=eng",
    question: "On which mountain did the ark rest?",
    options: [
      "Mount Sinai",
      "Mount Ararat",
      "Mount Moriah",
      "Mount Nebo"
    ],
    correctAnswer: 1,
    explanation: "The ark 'rested... upon the mountains of Ararat' (Genesis 8:4)."
  },
  {
    id: "2026-02-19",
    date: "2026-02-19",
    weekTitle: "After the Flood",
    scriptureReference: "Genesis 9",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/08?lang=eng",
    question: "What was the sign of God's covenant that He would never flood the earth again?",
    options: [
      "A pillar of fire",
      "A rainbow",
      "A burning bush",
      "A star"
    ],
    correctAnswer: 1,
    explanation: "'I do set my bow in the cloud, and it shall be for a token of a covenant' (Genesis 9:13)."
  },
  {
    id: "2026-02-20",
    date: "2026-02-20",
    weekTitle: "After the Flood",
    scriptureReference: "Genesis 9",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/08?lang=eng",
    question: "What commandment did God give Noah regarding blood?",
    options: [
      "To use it in sacrifices only",
      "Not to eat flesh with blood still in it",
      "To pour it on the altar",
      "To mark doorposts with it"
    ],
    correctAnswer: 1,
    explanation: "'Flesh with the life thereof, which is the blood thereof, shall ye not eat' (Genesis 9:4)."
  },
  {
    id: "2026-02-21",
    date: "2026-02-21",
    weekTitle: "After the Flood",
    scriptureReference: "Genesis 8",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/08?lang=eng",
    question: "What did Noah build after leaving the ark?",
    options: [
      "A house",
      "An altar",
      "A city",
      "A tower"
    ],
    correctAnswer: 1,
    explanation: "Noah 'builded an altar unto the Lord' and offered burnt offerings (Genesis 8:20)."
  },
  {
    id: "2026-02-22",
    date: "2026-02-22",
    weekTitle: "After the Flood",
    scriptureReference: "Genesis 9",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/08?lang=eng",
    question: "Who were Noah's three sons?",
    options: [
      "Abraham, Isaac, and Jacob",
      "Shem, Ham, and Japheth",
      "Cain, Abel, and Seth",
      "Reuben, Simeon, and Levi"
    ],
    correctAnswer: 1,
    explanation: "'The sons of Noah, that went forth of the ark, were Shem, and Ham, and Japheth' (Genesis 9:18)."
  },

  // Week 9: February 23 - March 1 - Genesis 10-11; Abraham 1-2
  {
    id: "2026-02-23",
    date: "2026-02-23",
    weekTitle: "Tower of Babel and Abraham",
    scriptureReference: "Genesis 11",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/09?lang=eng",
    question: "Why did the people build the Tower of Babel?",
    options: [
      "To reach heaven and make a name for themselves",
      "To escape another flood",
      "To worship the sun",
      "To store grain"
    ],
    correctAnswer: 0,
    explanation: "They said, 'Let us build us a city and a tower, whose top may reach unto heaven; and let us make us a name' (Genesis 11:4)."
  },
  {
    id: "2026-02-24",
    date: "2026-02-24",
    weekTitle: "Tower of Babel and Abraham",
    scriptureReference: "Genesis 11",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/09?lang=eng",
    question: "How did the Lord stop the building of the Tower of Babel?",
    options: [
      "He destroyed the tower with fire",
      "He confounded their language",
      "He sent a flood",
      "He made the ground shake"
    ],
    correctAnswer: 1,
    explanation: "'The Lord did there confound the language of all the earth' (Genesis 11:9)."
  },
  {
    id: "2026-02-25",
    date: "2026-02-25",
    weekTitle: "Tower of Babel and Abraham",
    scriptureReference: "Abraham 1",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/09?lang=eng",
    question: "What did Abraham seek to receive from God?",
    options: [
      "Wealth and power",
      "The blessings of the fathers and the right of the priesthood",
      "A large family",
      "Victory over enemies"
    ],
    correctAnswer: 1,
    explanation: "Abraham desired 'to be a greater follower of righteousness... to possess a greater knowledge... to be a prince of peace' (Abraham 1:2)."
  },
  {
    id: "2026-02-26",
    date: "2026-02-26",
    weekTitle: "Tower of Babel and Abraham",
    scriptureReference: "Abraham 1",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/09?lang=eng",
    question: "What false god was worshiped by Abraham's father's people?",
    options: [
      "Baal",
      "Elkenah",
      "Dagon",
      "Molech"
    ],
    correctAnswer: 1,
    explanation: "Abraham describes the idol worship of 'the god of Elkenah' among other false gods (Abraham 1:6)."
  },
  {
    id: "2026-02-27",
    date: "2026-02-27",
    weekTitle: "Tower of Babel and Abraham",
    scriptureReference: "Abraham 2",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/09?lang=eng",
    question: "What land did God promise to give Abraham?",
    options: [
      "Egypt",
      "Babylon",
      "Canaan",
      "Ur"
    ],
    correctAnswer: 2,
    explanation: "God promised Abraham, 'Unto thy seed will I give this land' referring to Canaan (Abraham 2:19)."
  },
  {
    id: "2026-02-28",
    date: "2026-02-28",
    weekTitle: "Tower of Babel and Abraham",
    scriptureReference: "Abraham 2",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/09?lang=eng",
    question: "What blessing did God promise through Abraham's seed?",
    options: [
      "Great wealth",
      "The blessings of the Gospel to all nations",
      "Military conquests",
      "Long life"
    ],
    correctAnswer: 1,
    explanation: "'In thy seed shall all the families of the earth be blessed, even with the blessings of the Gospel' (Abraham 2:11)."
  },
  {
    id: "2026-03-01",
    date: "2026-03-01",
    weekTitle: "Tower of Babel and Abraham",
    scriptureReference: "Abraham 1",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/09?lang=eng",
    question: "How was Abraham saved from being sacrificed?",
    options: [
      "He escaped on his own",
      "An angel of the Lord delivered him",
      "His father saved him",
      "The altar broke"
    ],
    correctAnswer: 1,
    explanation: "'The Lord... filled me with the vision of the Almighty, and the angel of his presence stood by me, and... loosed my bands' (Abraham 1:15)."
  },

  // Week 10: March 2-8 - Genesis 12-17; Abraham 1-2
  {
    id: "2026-03-02",
    date: "2026-03-02",
    weekTitle: "The Abrahamic Covenant",
    scriptureReference: "Genesis 12",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/10?lang=eng",
    question: "How old was Abraham when he left Haran?",
    options: [
      "50 years old",
      "65 years old",
      "75 years old",
      "99 years old"
    ],
    correctAnswer: 2,
    explanation: "'Abram was seventy and five years old when he departed out of Haran' (Genesis 12:4)."
  },
  {
    id: "2026-03-03",
    date: "2026-03-03",
    weekTitle: "The Abrahamic Covenant",
    scriptureReference: "Genesis 13",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/10?lang=eng",
    question: "When Abraham and Lot separated, which land did Lot choose?",
    options: [
      "The mountains of Canaan",
      "The plain of Jordan toward Sodom",
      "The land of Egypt",
      "The desert of Sinai"
    ],
    correctAnswer: 1,
    explanation: "'Lot chose him all the plain of Jordan' which was near Sodom (Genesis 13:11)."
  },
  {
    id: "2026-03-04",
    date: "2026-03-04",
    weekTitle: "The Abrahamic Covenant",
    scriptureReference: "Genesis 14",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/10?lang=eng",
    question: "Who was the king of Salem and priest of the most high God?",
    options: [
      "Pharaoh",
      "Melchizedek",
      "Abimelech",
      "Lot"
    ],
    correctAnswer: 1,
    explanation: "'Melchizedek king of Salem brought forth bread and wine: and he was the priest of the most high God' (Genesis 14:18)."
  },
  {
    id: "2026-03-05",
    date: "2026-03-05",
    weekTitle: "The Abrahamic Covenant",
    scriptureReference: "Genesis 15",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/10?lang=eng",
    question: "What did God use to illustrate the number of Abraham's future posterity?",
    options: [
      "Grains of sand",
      "Stars of heaven",
      "Drops of water",
      "Leaves on trees"
    ],
    correctAnswer: 1,
    explanation: "'Look now toward heaven, and tell the stars... So shall thy seed be' (Genesis 15:5)."
  },
  {
    id: "2026-03-06",
    date: "2026-03-06",
    weekTitle: "The Abrahamic Covenant",
    scriptureReference: "Genesis 15",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/10?lang=eng",
    question: "What was counted unto Abraham for righteousness?",
    options: [
      "His sacrifices",
      "His obedience",
      "His belief in the Lord",
      "His wealth"
    ],
    correctAnswer: 2,
    explanation: "'He believed in the Lord; and he counted it to him for righteousness' (Genesis 15:6)."
  },
  {
    id: "2026-03-07",
    date: "2026-03-07",
    weekTitle: "The Abrahamic Covenant",
    scriptureReference: "Genesis 17",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/10?lang=eng",
    question: "What was the token of the covenant between God and Abraham?",
    options: [
      "A rainbow",
      "Circumcision",
      "A burnt offering",
      "A pillar of stone"
    ],
    correctAnswer: 1,
    explanation: "'Every man child among you shall be circumcised... it shall be a token of the covenant' (Genesis 17:10-11)."
  },
  {
    id: "2026-03-08",
    date: "2026-03-08",
    weekTitle: "The Abrahamic Covenant",
    scriptureReference: "Genesis 17",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/10?lang=eng",
    question: "What was Sarah's name before God changed it?",
    options: [
      "Sadie",
      "Sarai",
      "Shara",
      "Sariel"
    ],
    correctAnswer: 1,
    explanation: "'As for Sarai thy wife, thou shalt not call her name Sarai, but Sarah shall her name be' (Genesis 17:15)."
  },

  // Week 11: March 9-15 - Genesis 18-19
  {
    id: "2026-03-09",
    date: "2026-03-09",
    weekTitle: "Abraham and Lot",
    scriptureReference: "Genesis 18",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/11?lang=eng",
    question: "How many messengers visited Abraham at Mamre?",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correctAnswer: 2,
    explanation: "'The Lord appeared unto him... and, lo, three men stood by him' (Genesis 18:1-2)."
  },
  {
    id: "2026-03-10",
    date: "2026-03-10",
    weekTitle: "Abraham and Lot",
    scriptureReference: "Genesis 18",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/11?lang=eng",
    question: "Why did Sarah laugh when she heard the promise of a son?",
    options: [
      "She was happy",
      "She thought it was a joke",
      "She and Abraham were old, past the age of having children",
      "She didn't believe in God"
    ],
    correctAnswer: 2,
    explanation: "'Abraham and Sarah were old and well stricken in age' so she laughed in disbelief (Genesis 18:11-12)."
  },
  {
    id: "2026-03-11",
    date: "2026-03-11",
    weekTitle: "Abraham and Lot",
    scriptureReference: "Genesis 18",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/11?lang=eng",
    question: "What rhetorical question did the Lord ask about Sarah's laughter?",
    options: [
      "Why does Sarah doubt?",
      "Is any thing too hard for the Lord?",
      "Does Sarah not remember the covenant?",
      "Will Sarah not repent?"
    ],
    correctAnswer: 1,
    explanation: "'Is any thing too hard for the Lord?' (Genesis 18:14)."
  },
  {
    id: "2026-03-12",
    date: "2026-03-12",
    weekTitle: "Abraham and Lot",
    scriptureReference: "Genesis 18",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/11?lang=eng",
    question: "For how few righteous people did Abraham eventually ask God to spare Sodom?",
    options: [
      "Fifty",
      "Twenty",
      "Ten",
      "Five"
    ],
    correctAnswer: 2,
    explanation: "Abraham negotiated from 50 down to 10, asking 'Peradventure ten shall be found there' (Genesis 18:32)."
  },
  {
    id: "2026-03-13",
    date: "2026-03-13",
    weekTitle: "Abraham and Lot",
    scriptureReference: "Genesis 19",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/11?lang=eng",
    question: "What happened to Lot's wife when she looked back at Sodom?",
    options: [
      "She died of grief",
      "She became a pillar of salt",
      "She was struck blind",
      "She was taken back to the city"
    ],
    correctAnswer: 1,
    explanation: "'His wife looked back from behind him, and she became a pillar of salt' (Genesis 19:26)."
  },
  {
    id: "2026-03-14",
    date: "2026-03-14",
    weekTitle: "Abraham and Lot",
    scriptureReference: "Genesis 19",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/11?lang=eng",
    question: "What did God rain upon Sodom and Gomorrah?",
    options: [
      "Water",
      "Brimstone and fire",
      "Locusts",
      "Hail"
    ],
    correctAnswer: 1,
    explanation: "'The Lord rained upon Sodom and upon Gomorrah brimstone and fire from the Lord out of heaven' (Genesis 19:24)."
  },
  {
    id: "2026-03-15",
    date: "2026-03-15",
    weekTitle: "Abraham and Lot",
    scriptureReference: "Genesis 19",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/11?lang=eng",
    question: "To which city did Lot flee after leaving Sodom?",
    options: [
      "Jerusalem",
      "Zoar",
      "Hebron",
      "Bethel"
    ],
    correctAnswer: 1,
    explanation: "Lot pleaded to flee to the small city of Zoar (Genesis 19:22)."
  },

  // Week 12: March 16-22 - Genesis 20-22
  {
    id: "2026-03-16",
    date: "2026-03-16",
    weekTitle: "Isaac and the Sacrifice",
    scriptureReference: "Genesis 21",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/12?lang=eng",
    question: "What does the name Isaac mean?",
    options: [
      "Beloved",
      "Promised one",
      "Laughter",
      "Blessing"
    ],
    correctAnswer: 2,
    explanation: "Isaac means 'laughter' because Sarah said, 'God hath made me to laugh' (Genesis 21:6)."
  },
  {
    id: "2026-03-17",
    date: "2026-03-17",
    weekTitle: "Isaac and the Sacrifice",
    scriptureReference: "Genesis 21",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/12?lang=eng",
    question: "Who was Ishmael's mother?",
    options: [
      "Sarah",
      "Hagar",
      "Keturah",
      "Rebekah"
    ],
    correctAnswer: 1,
    explanation: "Hagar was Sarah's handmaid and the mother of Ishmael (Genesis 21:9)."
  },
  {
    id: "2026-03-18",
    date: "2026-03-18",
    weekTitle: "Isaac and the Sacrifice",
    scriptureReference: "Genesis 22",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/12?lang=eng",
    question: "Where did God command Abraham to offer Isaac as a sacrifice?",
    options: [
      "Mount Sinai",
      "Mount Moriah",
      "Mount Ararat",
      "Mount Carmel"
    ],
    correctAnswer: 1,
    explanation: "'Get thee into the land of Moriah; and offer him there for a burnt offering' (Genesis 22:2)."
  },
  {
    id: "2026-03-19",
    date: "2026-03-19",
    weekTitle: "Isaac and the Sacrifice",
    scriptureReference: "Genesis 22",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/12?lang=eng",
    question: "What did Abraham tell his servants when he left them at the foot of the mountain?",
    options: [
      "Wait here forever",
      "We will worship and come again to you",
      "Go home without us",
      "Prepare a feast"
    ],
    correctAnswer: 1,
    explanation: "Abraham said, 'I and the lad will go yonder and worship, and come again to you' (Genesis 22:5)."
  },
  {
    id: "2026-03-20",
    date: "2026-03-20",
    weekTitle: "Isaac and the Sacrifice",
    scriptureReference: "Genesis 22",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/12?lang=eng",
    question: "What was provided as a substitute sacrifice for Isaac?",
    options: [
      "A lamb",
      "A ram caught in a thicket",
      "A dove",
      "A bull"
    ],
    correctAnswer: 1,
    explanation: "'Abraham lifted up his eyes... and behold behind him a ram caught in a thicket by his horns' (Genesis 22:13)."
  },
  {
    id: "2026-03-21",
    date: "2026-03-21",
    weekTitle: "Isaac and the Sacrifice",
    scriptureReference: "Genesis 22",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/12?lang=eng",
    question: "What did Abraham name the place where he offered the sacrifice?",
    options: [
      "Bethel",
      "Jehovah-jireh (The Lord will provide)",
      "Peniel",
      "Beersheba"
    ],
    correctAnswer: 1,
    explanation: "'Abraham called the name of that place Jehovah-jireh' meaning 'The Lord will provide' (Genesis 22:14)."
  },
  {
    id: "2026-03-22",
    date: "2026-03-22",
    weekTitle: "Isaac and the Sacrifice",
    scriptureReference: "Genesis 22",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/12?lang=eng",
    question: "Why did God test Abraham with this command?",
    options: [
      "To punish him",
      "To know that Abraham feared God and would not withhold his son",
      "To see if Abraham loved Isaac",
      "To test Sarah's faith"
    ],
    correctAnswer: 1,
    explanation: "'Now I know that thou fearest God, seeing thou hast not withheld thy son, thine only son from me' (Genesis 22:12)."
  },

  // Week 13: March 23-29 - Genesis 23-24
  {
    id: "2026-03-23",
    date: "2026-03-23",
    weekTitle: "Finding Rebekah",
    scriptureReference: "Genesis 23",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/13?lang=eng",
    question: "How old was Sarah when she died?",
    options: [
      "90 years old",
      "100 years old",
      "127 years old",
      "150 years old"
    ],
    correctAnswer: 2,
    explanation: "'Sarah was an hundred and seven and twenty years old' when she died (Genesis 23:1)."
  },
  {
    id: "2026-03-24",
    date: "2026-03-24",
    weekTitle: "Finding Rebekah",
    scriptureReference: "Genesis 23",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/13?lang=eng",
    question: "Where was Sarah buried?",
    options: [
      "In Egypt",
      "In the cave of Machpelah",
      "On Mount Moriah",
      "In Beersheba"
    ],
    correctAnswer: 1,
    explanation: "Abraham bought 'the cave of Machpelah' for a burying place (Genesis 23:9, 19)."
  },
  {
    id: "2026-03-25",
    date: "2026-03-25",
    weekTitle: "Finding Rebekah",
    scriptureReference: "Genesis 24",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/13?lang=eng",
    question: "Who did Abraham send to find a wife for Isaac?",
    options: [
      "Isaac himself",
      "Abraham's eldest servant",
      "An angel",
      "Abraham's nephew"
    ],
    correctAnswer: 1,
    explanation: "Abraham said to 'his eldest servant of his house' to find a wife for Isaac (Genesis 24:2)."
  },
  {
    id: "2026-03-26",
    date: "2026-03-26",
    weekTitle: "Finding Rebekah",
    scriptureReference: "Genesis 24",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/13?lang=eng",
    question: "What sign did the servant ask God for to identify Isaac's future wife?",
    options: [
      "She would be wearing a red veil",
      "She would offer water to him and his camels",
      "She would be carrying a lamb",
      "She would be singing"
    ],
    correctAnswer: 1,
    explanation: "The servant prayed that the chosen woman would offer him water and say, 'I will give thy camels drink also' (Genesis 24:14)."
  },
  {
    id: "2026-03-27",
    date: "2026-03-27",
    weekTitle: "Finding Rebekah",
    scriptureReference: "Genesis 24",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/13?lang=eng",
    question: "Who was Rebekah's brother?",
    options: [
      "Esau",
      "Laban",
      "Bethuel",
      "Nahor"
    ],
    correctAnswer: 1,
    explanation: "'Rebekah had a brother, and his name was Laban' (Genesis 24:29)."
  },
  {
    id: "2026-03-28",
    date: "2026-03-28",
    weekTitle: "Finding Rebekah",
    scriptureReference: "Genesis 24",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/13?lang=eng",
    question: "What was Rebekah's response when asked if she would go with the servant?",
    options: [
      "She asked for time to think",
      "She said, 'I will go'",
      "She refused at first",
      "She asked her father to decide"
    ],
    correctAnswer: 1,
    explanation: "'They called Rebekah, and said unto her, Wilt thou go with this man? And she said, I will go' (Genesis 24:58)."
  },
  {
    id: "2026-03-29",
    date: "2026-03-29",
    weekTitle: "Finding Rebekah",
    scriptureReference: "Genesis 24",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/13?lang=eng",
    question: "What was Isaac doing when he first saw Rebekah?",
    options: [
      "Working in the fields",
      "Meditating in the field",
      "Praying at an altar",
      "Tending sheep"
    ],
    correctAnswer: 1,
    explanation: "'Isaac went out to meditate in the field at the eventide' when Rebekah arrived (Genesis 24:63)."
  },

  // Week 14: March 30 - April 5 - Genesis 25-26
  {
    id: "2026-03-30",
    date: "2026-03-30",
    weekTitle: "Jacob and Esau",
    scriptureReference: "Genesis 25",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/14?lang=eng",
    question: "Who was born first, Jacob or Esau?",
    options: [
      "Jacob",
      "Esau",
      "They were born at the same time",
      "It is not recorded"
    ],
    correctAnswer: 1,
    explanation: "'The first came out red... and they called his name Esau' (Genesis 25:25)."
  },
  {
    id: "2026-03-31",
    date: "2026-03-31",
    weekTitle: "Jacob and Esau",
    scriptureReference: "Genesis 25",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/14?lang=eng",
    question: "What was Jacob holding when he was born?",
    options: [
      "A staff",
      "Esau's heel",
      "A piece of cloth",
      "Nothing"
    ],
    correctAnswer: 1,
    explanation: "'His hand took hold on Esau's heel; and his name was called Jacob' (Genesis 25:26)."
  },
  {
    id: "2026-04-01",
    date: "2026-04-01",
    weekTitle: "Jacob and Esau",
    scriptureReference: "Genesis 25",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/14?lang=eng",
    question: "What did Esau sell to Jacob for a mess of pottage?",
    options: [
      "His inheritance",
      "His birthright",
      "His sword",
      "His flock"
    ],
    correctAnswer: 1,
    explanation: "'Esau said... sell me this day thy birthright... Thus Esau despised his birthright' (Genesis 25:31-34)."
  },
  {
    id: "2026-04-02",
    date: "2026-04-02",
    weekTitle: "Jacob and Esau",
    scriptureReference: "Genesis 25",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/14?lang=eng",
    question: "What occupation did Esau have?",
    options: [
      "A shepherd",
      "A cunning hunter",
      "A farmer",
      "A merchant"
    ],
    correctAnswer: 1,
    explanation: "'Esau was a cunning hunter, a man of the field' (Genesis 25:27)."
  },
  {
    id: "2026-04-03",
    date: "2026-04-03",
    weekTitle: "Jacob and Esau",
    scriptureReference: "Genesis 25",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/14?lang=eng",
    question: "What was Jacob described as?",
    options: [
      "A mighty warrior",
      "A plain man, dwelling in tents",
      "A cunning hunter",
      "A wealthy trader"
    ],
    correctAnswer: 1,
    explanation: "'Jacob was a plain man, dwelling in tents' (Genesis 25:27)."
  },
  {
    id: "2026-04-04",
    date: "2026-04-04",
    weekTitle: "Jacob and Esau",
    scriptureReference: "Genesis 26",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/14?lang=eng",
    question: "What did Isaac do during a famine in the land?",
    options: [
      "He went to Egypt",
      "He stayed in Gerar as God commanded",
      "He moved to Babylon",
      "He returned to Haran"
    ],
    correctAnswer: 1,
    explanation: "God said to Isaac, 'Go not down into Egypt; dwell in the land which I shall tell thee of' (Genesis 26:2)."
  },
  {
    id: "2026-04-05",
    date: "2026-04-05",
    weekTitle: "Jacob and Esau",
    scriptureReference: "Genesis 26",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/14?lang=eng",
    question: "Why did the Philistines envy Isaac?",
    options: [
      "His wisdom",
      "His great wealth and blessings from God",
      "His military power",
      "His many children"
    ],
    correctAnswer: 1,
    explanation: "'The Philistines envied him' because 'the man waxed great, and went forward, and grew until he became very great' (Genesis 26:13-14)."
  },

  // Week 15: April 6-12 - Genesis 27-28
  {
    id: "2026-04-06",
    date: "2026-04-06",
    weekTitle: "Jacob's Blessing and Vision",
    scriptureReference: "Genesis 27",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/15?lang=eng",
    question: "Who helped Jacob deceive Isaac to receive the blessing?",
    options: [
      "His servant",
      "Rebekah, his mother",
      "Esau",
      "An angel"
    ],
    correctAnswer: 1,
    explanation: "Rebekah instructed Jacob on how to receive Isaac's blessing (Genesis 27:6-17)."
  },
  {
    id: "2026-04-07",
    date: "2026-04-07",
    weekTitle: "Jacob's Blessing and Vision",
    scriptureReference: "Genesis 27",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/15?lang=eng",
    question: "How did Jacob disguise himself to feel like Esau?",
    options: [
      "He wore Esau's clothes and goat skins on his hands",
      "He changed his voice",
      "He wore a wig",
      "He used makeup"
    ],
    correctAnswer: 0,
    explanation: "Rebekah 'put the skins of the kids of the goats upon his hands' and dressed him in Esau's clothes (Genesis 27:15-16)."
  },
  {
    id: "2026-04-08",
    date: "2026-04-08",
    weekTitle: "Jacob's Blessing and Vision",
    scriptureReference: "Genesis 27",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/15?lang=eng",
    question: "What was Esau's reaction when he discovered Jacob received the blessing?",
    options: [
      "He laughed",
      "He cried with a great and bitter cry",
      "He was indifferent",
      "He congratulated Jacob"
    ],
    correctAnswer: 1,
    explanation: "'He cried with a great and exceeding bitter cry' (Genesis 27:34)."
  },
  {
    id: "2026-04-09",
    date: "2026-04-09",
    weekTitle: "Jacob's Blessing and Vision",
    scriptureReference: "Genesis 28",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/15?lang=eng",
    question: "What did Jacob see in his dream at Bethel?",
    options: [
      "A burning bush",
      "A ladder reaching to heaven with angels ascending and descending",
      "A river of fire",
      "A great army"
    ],
    correctAnswer: 1,
    explanation: "'He dreamed, and behold a ladder set up on the earth, and the top of it reached to heaven: and behold the angels of God ascending and descending on it' (Genesis 28:12)."
  },
  {
    id: "2026-04-10",
    date: "2026-04-10",
    weekTitle: "Jacob's Blessing and Vision",
    scriptureReference: "Genesis 28",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/15?lang=eng",
    question: "What did Jacob name the place where he had his dream?",
    options: [
      "Jerusalem",
      "Bethel (House of God)",
      "Hebron",
      "Beersheba"
    ],
    correctAnswer: 1,
    explanation: "'He called the name of that place Bethel' meaning 'house of God' (Genesis 28:19)."
  },
  {
    id: "2026-04-11",
    date: "2026-04-11",
    weekTitle: "Jacob's Blessing and Vision",
    scriptureReference: "Genesis 28",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/15?lang=eng",
    question: "What did Jacob do with the stone he had used as a pillow?",
    options: [
      "He threw it away",
      "He set it up as a pillar and poured oil on it",
      "He carved it into an idol",
      "He built a house with it"
    ],
    correctAnswer: 1,
    explanation: "'Jacob... took the stone... and set it up for a pillar, and poured oil upon the top of it' (Genesis 28:18)."
  },
  {
    id: "2026-04-12",
    date: "2026-04-12",
    weekTitle: "Jacob's Blessing and Vision",
    scriptureReference: "Genesis 28",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/15?lang=eng",
    question: "What did Jacob vow to give to God?",
    options: [
      "His firstborn son",
      "A tenth of all he received",
      "His entire flock",
      "A temple"
    ],
    correctAnswer: 1,
    explanation: "'Of all that thou shalt give me I will surely give the tenth unto thee' (Genesis 28:22)."
  },

  // Week 16: April 13-19 - Genesis 29-30
  {
    id: "2026-04-13",
    date: "2026-04-13",
    weekTitle: "Jacob's Marriages",
    scriptureReference: "Genesis 29",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/16?lang=eng",
    question: "Who did Jacob meet at the well?",
    options: [
      "Leah",
      "Rachel",
      "Laban",
      "Rebekah"
    ],
    correctAnswer: 1,
    explanation: "'While he yet spake with them, Rachel came with her father's sheep' (Genesis 29:9)."
  },
  {
    id: "2026-04-14",
    date: "2026-04-14",
    weekTitle: "Jacob's Marriages",
    scriptureReference: "Genesis 29",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/16?lang=eng",
    question: "How many years did Jacob serve Laban for Rachel?",
    options: [
      "Three years",
      "Seven years",
      "Ten years",
      "Fourteen years"
    ],
    correctAnswer: 1,
    explanation: "'I will serve thee seven years for Rachel thy younger daughter' (Genesis 29:18)."
  },
  {
    id: "2026-04-15",
    date: "2026-04-15",
    weekTitle: "Jacob's Marriages",
    scriptureReference: "Genesis 29",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/16?lang=eng",
    question: "Who did Laban deceive Jacob into marrying first?",
    options: [
      "Rachel",
      "Leah",
      "Bilhah",
      "Zilpah"
    ],
    correctAnswer: 1,
    explanation: "'In the morning, behold, it was Leah' instead of Rachel (Genesis 29:25)."
  },
  {
    id: "2026-04-16",
    date: "2026-04-16",
    weekTitle: "Jacob's Marriages",
    scriptureReference: "Genesis 29",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/16?lang=eng",
    question: "What was Laban's excuse for substituting Leah for Rachel?",
    options: [
      "Rachel was too young",
      "It was not done to give the younger before the firstborn",
      "Leah loved Jacob more",
      "Rachel had another suitor"
    ],
    correctAnswer: 1,
    explanation: "'It must not be so done in our country, to give the younger before the firstborn' (Genesis 29:26)."
  },
  {
    id: "2026-04-17",
    date: "2026-04-17",
    weekTitle: "Jacob's Marriages",
    scriptureReference: "Genesis 29",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/16?lang=eng",
    question: "What was the name of Leah's firstborn son?",
    options: [
      "Joseph",
      "Reuben",
      "Judah",
      "Simeon"
    ],
    correctAnswer: 1,
    explanation: "'Leah conceived, and bare a son, and she called his name Reuben' (Genesis 29:32)."
  },
  {
    id: "2026-04-18",
    date: "2026-04-18",
    weekTitle: "Jacob's Marriages",
    scriptureReference: "Genesis 30",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/16?lang=eng",
    question: "What was the name of Rachel's firstborn son?",
    options: [
      "Benjamin",
      "Joseph",
      "Dan",
      "Naphtali"
    ],
    correctAnswer: 1,
    explanation: "'God remembered Rachel... and she conceived, and bare a son; and called his name Joseph' (Genesis 30:22-24)."
  },
  {
    id: "2026-04-19",
    date: "2026-04-19",
    weekTitle: "Jacob's Marriages",
    scriptureReference: "Genesis 30",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/16?lang=eng",
    question: "How many sons did Jacob have?",
    options: [
      "Ten",
      "Twelve",
      "Fourteen",
      "Eight"
    ],
    correctAnswer: 1,
    explanation: "Jacob had twelve sons who became the heads of the twelve tribes of Israel."
  },

  // Week 17: April 20-26 - Genesis 31-32
  {
    id: "2026-04-20",
    date: "2026-04-20",
    weekTitle: "Jacob Returns Home",
    scriptureReference: "Genesis 31",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/17?lang=eng",
    question: "Why did Jacob leave Laban secretly?",
    options: [
      "He was afraid Laban wouldn't let him go",
      "God told him to leave at night",
      "He wanted to surprise his family",
      "Rachel suggested it"
    ],
    correctAnswer: 0,
    explanation: "Jacob 'stole away unawares to Laban' because he feared Laban would take his daughters away (Genesis 31:20, 31)."
  },
  {
    id: "2026-04-21",
    date: "2026-04-21",
    weekTitle: "Jacob Returns Home",
    scriptureReference: "Genesis 31",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/17?lang=eng",
    question: "What did Rachel steal from Laban?",
    options: [
      "His gold",
      "His household images (idols)",
      "His best sheep",
      "His blessing"
    ],
    correctAnswer: 1,
    explanation: "'Rachel had stolen the images that were her father's' (Genesis 31:19)."
  },
  {
    id: "2026-04-22",
    date: "2026-04-22",
    weekTitle: "Jacob Returns Home",
    scriptureReference: "Genesis 32",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/17?lang=eng",
    question: "How many men was Esau bringing to meet Jacob?",
    options: [
      "100",
      "200",
      "400",
      "1000"
    ],
    correctAnswer: 2,
    explanation: "'Esau cometh to meet thee, and four hundred men with him' (Genesis 32:6)."
  },
  {
    id: "2026-04-23",
    date: "2026-04-23",
    weekTitle: "Jacob Returns Home",
    scriptureReference: "Genesis 32",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/17?lang=eng",
    question: "What did Jacob send ahead as a gift to Esau?",
    options: [
      "Gold and silver",
      "Herds of goats, sheep, camels, cattle, and donkeys",
      "Servants",
      "Clothing"
    ],
    correctAnswer: 1,
    explanation: "Jacob sent 'two hundred she goats... two hundred ewes... thirty milch camels' and more (Genesis 32:14-15)."
  },
  {
    id: "2026-04-24",
    date: "2026-04-24",
    weekTitle: "Jacob Returns Home",
    scriptureReference: "Genesis 32",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/17?lang=eng",
    question: "What happened to Jacob at Peniel?",
    options: [
      "He had a vision",
      "He wrestled with a man until daybreak",
      "He was attacked by wild animals",
      "He found a treasure"
    ],
    correctAnswer: 1,
    explanation: "'There wrestled a man with him until the breaking of the day' (Genesis 32:24)."
  },
  {
    id: "2026-04-25",
    date: "2026-04-25",
    weekTitle: "Jacob Returns Home",
    scriptureReference: "Genesis 32",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/17?lang=eng",
    question: "What new name was given to Jacob?",
    options: [
      "Abraham",
      "Israel",
      "Judah",
      "Joseph"
    ],
    correctAnswer: 1,
    explanation: "'Thy name shall be called no more Jacob, but Israel' (Genesis 32:28)."
  },
  {
    id: "2026-04-26",
    date: "2026-04-26",
    weekTitle: "Jacob Returns Home",
    scriptureReference: "Genesis 32",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/17?lang=eng",
    question: "What does the name Israel mean?",
    options: [
      "Blessed of God",
      "One who prevails with God",
      "Prince of peace",
      "Chosen one"
    ],
    correctAnswer: 1,
    explanation: "The name means 'for as a prince hast thou power with God and with men, and hast prevailed' (Genesis 32:28)."
  },

  // Week 18: April 27 - May 3 - Genesis 33-36
  {
    id: "2026-04-27",
    date: "2026-04-27",
    weekTitle: "Jacob and Esau Reunited",
    scriptureReference: "Genesis 33",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/18?lang=eng",
    question: "How did Esau greet Jacob when they met?",
    options: [
      "With anger",
      "He ran to embrace and kiss him",
      "With suspicion",
      "He ignored him"
    ],
    correctAnswer: 1,
    explanation: "'Esau ran to meet him, and embraced him, and fell on his neck, and kissed him' (Genesis 33:4)."
  },
  {
    id: "2026-04-28",
    date: "2026-04-28",
    weekTitle: "Jacob and Esau Reunited",
    scriptureReference: "Genesis 33",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/18?lang=eng",
    question: "Where did Jacob settle after parting from Esau?",
    options: [
      "Beersheba",
      "Shechem",
      "Hebron",
      "Bethel"
    ],
    correctAnswer: 1,
    explanation: "'Jacob came to Shalem, a city of Shechem... and pitched his tent' (Genesis 33:18)."
  },
  {
    id: "2026-04-29",
    date: "2026-04-29",
    weekTitle: "Jacob and Esau Reunited",
    scriptureReference: "Genesis 35",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/18?lang=eng",
    question: "What did God command Jacob to do at Bethel?",
    options: [
      "Offer a sacrifice",
      "Build an altar",
      "Marry another wife",
      "Fast for seven days"
    ],
    correctAnswer: 1,
    explanation: "'God said unto Jacob, Arise, go up to Bethel... and make there an altar unto God' (Genesis 35:1)."
  },
  {
    id: "2026-04-30",
    date: "2026-04-30",
    weekTitle: "Jacob and Esau Reunited",
    scriptureReference: "Genesis 35",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/18?lang=eng",
    question: "What did Jacob tell his household to put away before going to Bethel?",
    options: [
      "Their weapons",
      "Their strange gods (idols)",
      "Their extra possessions",
      "Their Egyptian clothing"
    ],
    correctAnswer: 1,
    explanation: "'Put away the strange gods that are among you, and be clean' (Genesis 35:2)."
  },
  {
    id: "2026-05-01",
    date: "2026-05-01",
    weekTitle: "Jacob and Esau Reunited",
    scriptureReference: "Genesis 35",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/18?lang=eng",
    question: "Where did Rachel die?",
    options: [
      "In Bethel",
      "On the way to Ephrath (Bethlehem)",
      "In Shechem",
      "In Hebron"
    ],
    correctAnswer: 1,
    explanation: "'Rachel died, and was buried in the way to Ephrath, which is Bethlehem' (Genesis 35:19)."
  },
  {
    id: "2026-05-02",
    date: "2026-05-02",
    weekTitle: "Jacob and Esau Reunited",
    scriptureReference: "Genesis 35",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/18?lang=eng",
    question: "What was the name of Rachel's second son?",
    options: [
      "Joseph",
      "Benjamin",
      "Judah",
      "Dan"
    ],
    correctAnswer: 1,
    explanation: "'She called his name Benoni: but his father called him Benjamin' (Genesis 35:18)."
  },
  {
    id: "2026-05-03",
    date: "2026-05-03",
    weekTitle: "Jacob and Esau Reunited",
    scriptureReference: "Genesis 35",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/18?lang=eng",
    question: "How old was Isaac when he died?",
    options: [
      "120 years old",
      "150 years old",
      "180 years old",
      "200 years old"
    ],
    correctAnswer: 2,
    explanation: "'The days of Isaac were an hundred and fourscore years' (180 years) (Genesis 35:28)."
  },

  // Week 19: May 4-10 - Genesis 37
  {
    id: "2026-05-04",
    date: "2026-05-04",
    weekTitle: "Joseph's Dreams",
    scriptureReference: "Genesis 37",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/19?lang=eng",
    question: "Why did Joseph's brothers hate him?",
    options: [
      "He was lazy",
      "Their father loved him more and gave him a coat of many colors",
      "He was older than them",
      "He stole their inheritance"
    ],
    correctAnswer: 1,
    explanation: "'Israel loved Joseph more than all his children... he made him a coat of many colours' and his brothers 'hated him' (Genesis 37:3-4)."
  },
  {
    id: "2026-05-05",
    date: "2026-05-05",
    weekTitle: "Joseph's Dreams",
    scriptureReference: "Genesis 37",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/19?lang=eng",
    question: "In Joseph's first dream, what did his brothers' sheaves do?",
    options: [
      "They burned",
      "They bowed down to his sheaf",
      "They blew away",
      "They turned into gold"
    ],
    correctAnswer: 1,
    explanation: "'Your sheaves stood round about, and made obeisance to my sheaf' (Genesis 37:7)."
  },
  {
    id: "2026-05-06",
    date: "2026-05-06",
    weekTitle: "Joseph's Dreams",
    scriptureReference: "Genesis 37",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/19?lang=eng",
    question: "In Joseph's second dream, what bowed down to him?",
    options: [
      "Trees",
      "The sun, moon, and eleven stars",
      "Animals",
      "Mountains"
    ],
    correctAnswer: 1,
    explanation: "'The sun and the moon and the eleven stars made obeisance to me' (Genesis 37:9)."
  },
  {
    id: "2026-05-07",
    date: "2026-05-07",
    weekTitle: "Joseph's Dreams",
    scriptureReference: "Genesis 37",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/19?lang=eng",
    question: "Where were Joseph's brothers when they plotted against him?",
    options: [
      "In Egypt",
      "In Shechem/Dothan",
      "In Hebron",
      "In Beersheba"
    ],
    correctAnswer: 1,
    explanation: "The brothers were feeding their flocks near Shechem and then Dothan (Genesis 37:12-17)."
  },
  {
    id: "2026-05-08",
    date: "2026-05-08",
    weekTitle: "Joseph's Dreams",
    scriptureReference: "Genesis 37",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/19?lang=eng",
    question: "Which brother saved Joseph from being killed?",
    options: [
      "Judah",
      "Reuben",
      "Simeon",
      "Levi"
    ],
    correctAnswer: 1,
    explanation: "'Reuben heard it, and he delivered him out of their hands; and said, Let us not kill him' (Genesis 37:21)."
  },
  {
    id: "2026-05-09",
    date: "2026-05-09",
    weekTitle: "Joseph's Dreams",
    scriptureReference: "Genesis 37",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/19?lang=eng",
    question: "To whom did Joseph's brothers sell him?",
    options: [
      "Egyptians",
      "Ishmeelite/Midianite merchants",
      "Philistines",
      "Canaanites"
    ],
    correctAnswer: 1,
    explanation: "'They... sold Joseph to the Ishmeelites for twenty pieces of silver' (Genesis 37:28)."
  },
  {
    id: "2026-05-10",
    date: "2026-05-10",
    weekTitle: "Joseph's Dreams",
    scriptureReference: "Genesis 37",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/19?lang=eng",
    question: "What did the brothers use to deceive Jacob about Joseph's fate?",
    options: [
      "A false letter",
      "Joseph's coat dipped in goat's blood",
      "A false witness",
      "Joseph's sandals"
    ],
    correctAnswer: 1,
    explanation: "'They took Joseph's coat... and dipped the coat in the blood' of a goat (Genesis 37:31)."
  },

  // Week 20: May 11-17 - Genesis 38-39
  {
    id: "2026-05-11",
    date: "2026-05-11",
    weekTitle: "Joseph in Egypt",
    scriptureReference: "Genesis 39",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/20?lang=eng",
    question: "Who bought Joseph in Egypt?",
    options: [
      "Pharaoh",
      "Potiphar, captain of Pharaoh's guard",
      "A merchant",
      "The high priest"
    ],
    correctAnswer: 1,
    explanation: "'Potiphar, an officer of Pharaoh, captain of the guard... bought him' (Genesis 39:1)."
  },
  {
    id: "2026-05-12",
    date: "2026-05-12",
    weekTitle: "Joseph in Egypt",
    scriptureReference: "Genesis 39",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/20?lang=eng",
    question: "Why did everything Joseph do prosper in Potiphar's house?",
    options: [
      "He was very smart",
      "The Lord was with him",
      "Potiphar helped him",
      "He was lucky"
    ],
    correctAnswer: 1,
    explanation: "'The Lord was with Joseph, and he was a prosperous man' (Genesis 39:2)."
  },
  {
    id: "2026-05-13",
    date: "2026-05-13",
    weekTitle: "Joseph in Egypt",
    scriptureReference: "Genesis 39",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/20?lang=eng",
    question: "What position did Potiphar give Joseph?",
    options: [
      "Field worker",
      "Overseer of his house",
      "Cook",
      "Guard"
    ],
    correctAnswer: 1,
    explanation: "'He made him overseer over his house, and all that he had he put into his hand' (Genesis 39:4)."
  },
  {
    id: "2026-05-14",
    date: "2026-05-14",
    weekTitle: "Joseph in Egypt",
    scriptureReference: "Genesis 39",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/20?lang=eng",
    question: "How did Joseph respond to Potiphar's wife's temptation?",
    options: [
      "He considered it",
      "He fled and left his garment in her hand",
      "He agreed",
      "He told Potiphar"
    ],
    correctAnswer: 1,
    explanation: "'He left his garment in her hand, and fled, and got him out' (Genesis 39:12)."
  },
  {
    id: "2026-05-15",
    date: "2026-05-15",
    weekTitle: "Joseph in Egypt",
    scriptureReference: "Genesis 39",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/20?lang=eng",
    question: "What reason did Joseph give for refusing Potiphar's wife?",
    options: [
      "Fear of Potiphar",
      "It would be a great sin against God",
      "He was engaged",
      "He didn't like her"
    ],
    correctAnswer: 1,
    explanation: "'How then can I do this great wickedness, and sin against God?' (Genesis 39:9)."
  },
  {
    id: "2026-05-16",
    date: "2026-05-16",
    weekTitle: "Joseph in Egypt",
    scriptureReference: "Genesis 39",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/20?lang=eng",
    question: "Where was Joseph put after being falsely accused?",
    options: [
      "He was executed",
      "In prison",
      "He was sold again",
      "He was banished"
    ],
    correctAnswer: 1,
    explanation: "'Joseph's master took him, and put him into the prison' (Genesis 39:20)."
  },
  {
    id: "2026-05-17",
    date: "2026-05-17",
    weekTitle: "Joseph in Egypt",
    scriptureReference: "Genesis 39",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/20?lang=eng",
    question: "Even in prison, what happened to Joseph?",
    options: [
      "He was forgotten",
      "The Lord was with him and gave him favor",
      "He escaped",
      "He became ill"
    ],
    correctAnswer: 1,
    explanation: "'The Lord was with Joseph, and shewed him mercy, and gave him favour in the sight of the keeper of the prison' (Genesis 39:21)."
  },

  // Week 21: May 18-24 - Genesis 40-41
  {
    id: "2026-05-18",
    date: "2026-05-18",
    weekTitle: "Joseph Interprets Dreams",
    scriptureReference: "Genesis 40",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/21?lang=eng",
    question: "Whose dreams did Joseph interpret in prison?",
    options: [
      "Pharaoh's and his wife's",
      "The butler's and baker's",
      "Two soldiers'",
      "His fellow prisoners'"
    ],
    correctAnswer: 1,
    explanation: "Joseph interpreted the dreams of 'the butler of the king of Egypt and his baker' (Genesis 40:1)."
  },
  {
    id: "2026-05-19",
    date: "2026-05-19",
    weekTitle: "Joseph Interprets Dreams",
    scriptureReference: "Genesis 40",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/21?lang=eng",
    question: "What did the butler's dream mean?",
    options: [
      "He would die",
      "He would be restored to his position in three days",
      "He would escape prison",
      "He would become Pharaoh"
    ],
    correctAnswer: 1,
    explanation: "'Within three days shall Pharaoh... restore thee unto thy place' (Genesis 40:13)."
  },
  {
    id: "2026-05-20",
    date: "2026-05-20",
    weekTitle: "Joseph Interprets Dreams",
    scriptureReference: "Genesis 40",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/21?lang=eng",
    question: "What did the baker's dream mean?",
    options: [
      "He would be freed",
      "He would be hanged in three days",
      "He would become wealthy",
      "He would serve Pharaoh again"
    ],
    correctAnswer: 1,
    explanation: "'Within three days shall Pharaoh... hang thee on a tree' (Genesis 40:19)."
  },
  {
    id: "2026-05-21",
    date: "2026-05-21",
    weekTitle: "Joseph Interprets Dreams",
    scriptureReference: "Genesis 41",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/21?lang=eng",
    question: "What did Pharaoh's dream about seven fat and lean cows mean?",
    options: [
      "Seven years of war",
      "Seven years of plenty followed by seven years of famine",
      "A flood",
      "A plague"
    ],
    correctAnswer: 1,
    explanation: "The seven good cows represented seven years of plenty, and the lean cows seven years of famine (Genesis 41:26-27)."
  },
  {
    id: "2026-05-22",
    date: "2026-05-22",
    weekTitle: "Joseph Interprets Dreams",
    scriptureReference: "Genesis 41",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/21?lang=eng",
    question: "Who did Joseph credit for his ability to interpret dreams?",
    options: [
      "Himself",
      "God",
      "His father Jacob",
      "Egyptian wisdom"
    ],
    correctAnswer: 1,
    explanation: "'It is not in me: God shall give Pharaoh an answer of peace' (Genesis 41:16)."
  },
  {
    id: "2026-05-23",
    date: "2026-05-23",
    weekTitle: "Joseph Interprets Dreams",
    scriptureReference: "Genesis 41",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/21?lang=eng",
    question: "What position did Pharaoh give Joseph?",
    options: [
      "Captain of the guard",
      "Ruler over all Egypt, second only to Pharaoh",
      "High priest",
      "Head butler"
    ],
    correctAnswer: 1,
    explanation: "'Thou shalt be over my house, and according unto thy word shall all my people be ruled' (Genesis 41:40)."
  },
  {
    id: "2026-05-24",
    date: "2026-05-24",
    weekTitle: "Joseph Interprets Dreams",
    scriptureReference: "Genesis 41",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/21?lang=eng",
    question: "How old was Joseph when he stood before Pharaoh?",
    options: [
      "17 years old",
      "25 years old",
      "30 years old",
      "40 years old"
    ],
    correctAnswer: 2,
    explanation: "'Joseph was thirty years old when he stood before Pharaoh' (Genesis 41:46)."
  },

  // Week 22: May 25-31 - Genesis 42-43
  {
    id: "2026-05-25",
    date: "2026-05-25",
    weekTitle: "Joseph's Brothers Come to Egypt",
    scriptureReference: "Genesis 42",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/22?lang=eng",
    question: "Why did Jacob send his sons to Egypt?",
    options: [
      "To find Joseph",
      "To buy corn during the famine",
      "To trade goods",
      "To meet Pharaoh"
    ],
    correctAnswer: 1,
    explanation: "'Jacob saw that there was corn in Egypt' and sent his sons to buy grain (Genesis 42:1-2)."
  },
  {
    id: "2026-05-26",
    date: "2026-05-26",
    weekTitle: "Joseph's Brothers Come to Egypt",
    scriptureReference: "Genesis 42",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/22?lang=eng",
    question: "Which brother did Jacob not send to Egypt initially?",
    options: [
      "Reuben",
      "Judah",
      "Benjamin",
      "Simeon"
    ],
    correctAnswer: 2,
    explanation: "'Benjamin, Joseph's brother, Jacob sent not with his brethren; for he said, Lest peradventure mischief befall him' (Genesis 42:4)."
  },
  {
    id: "2026-05-27",
    date: "2026-05-27",
    weekTitle: "Joseph's Brothers Come to Egypt",
    scriptureReference: "Genesis 42",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/22?lang=eng",
    question: "Did Joseph's brothers recognize him?",
    options: [
      "Yes, immediately",
      "No, he was dressed as an Egyptian ruler",
      "Yes, after some time",
      "No, he wore a mask"
    ],
    correctAnswer: 1,
    explanation: "'Joseph knew his brethren, but they knew not him' (Genesis 42:8)."
  },
  {
    id: "2026-05-28",
    date: "2026-05-28",
    weekTitle: "Joseph's Brothers Come to Egypt",
    scriptureReference: "Genesis 42",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/22?lang=eng",
    question: "What did Joseph accuse his brothers of being?",
    options: [
      "Thieves",
      "Spies",
      "Liars",
      "Rebels"
    ],
    correctAnswer: 1,
    explanation: "'Joseph said unto them, Ye are spies; to see the nakedness of the land ye are come' (Genesis 42:9)."
  },
  {
    id: "2026-05-29",
    date: "2026-05-29",
    weekTitle: "Joseph's Brothers Come to Egypt",
    scriptureReference: "Genesis 42",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/22?lang=eng",
    question: "Which brother was kept in Egypt while the others returned home?",
    options: [
      "Reuben",
      "Judah",
      "Simeon",
      "Levi"
    ],
    correctAnswer: 2,
    explanation: "'He took from them Simeon, and bound him before their eyes' (Genesis 42:24)."
  },
  {
    id: "2026-05-30",
    date: "2026-05-30",
    weekTitle: "Joseph's Brothers Come to Egypt",
    scriptureReference: "Genesis 43",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/22?lang=eng",
    question: "Who pledged himself as surety for Benjamin's safety?",
    options: [
      "Reuben",
      "Judah",
      "Simeon",
      "Dan"
    ],
    correctAnswer: 1,
    explanation: "'Judah said... I will be surety for him' (Genesis 43:9)."
  },
  {
    id: "2026-05-31",
    date: "2026-05-31",
    weekTitle: "Joseph's Brothers Come to Egypt",
    scriptureReference: "Genesis 43",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/22?lang=eng",
    question: "How did Joseph react when he saw Benjamin?",
    options: [
      "He was angry",
      "He wept privately because his emotions were stirred",
      "He ignored him",
      "He immediately revealed himself"
    ],
    correctAnswer: 1,
    explanation: "'Joseph made haste; for his bowels did yearn upon his brother: and he sought where to weep' (Genesis 43:30)."
  },

  // Week 23: June 1-7 - Genesis 44-45
  {
    id: "2026-06-01",
    date: "2026-06-01",
    weekTitle: "Joseph Reveals Himself",
    scriptureReference: "Genesis 44",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/23?lang=eng",
    question: "What did Joseph hide in Benjamin's sack?",
    options: [
      "Gold",
      "His silver cup",
      "A scroll",
      "Jewels"
    ],
    correctAnswer: 1,
    explanation: "'Put my cup, the silver cup, in the sack's mouth of the youngest' (Genesis 44:2)."
  },
  {
    id: "2026-06-02",
    date: "2026-06-02",
    weekTitle: "Joseph Reveals Himself",
    scriptureReference: "Genesis 44",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/23?lang=eng",
    question: "What did Judah offer to do in place of Benjamin?",
    options: [
      "Pay a large fine",
      "Become a slave in Benjamin's place",
      "Fight for Benjamin's freedom",
      "Bring their father to Egypt"
    ],
    correctAnswer: 1,
    explanation: "'Let thy servant abide instead of the lad a bondman to my lord' (Genesis 44:33)."
  },
  {
    id: "2026-06-03",
    date: "2026-06-03",
    weekTitle: "Joseph Reveals Himself",
    scriptureReference: "Genesis 45",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/23?lang=eng",
    question: "What did Joseph say when he revealed himself to his brothers?",
    options: [
      "Why did you sell me?",
      "I am Joseph; doth my father yet live?",
      "I will have my revenge",
      "You are forgiven"
    ],
    correctAnswer: 1,
    explanation: "'Joseph said unto his brethren, I am Joseph; doth my father yet live?' (Genesis 45:3)."
  },
  {
    id: "2026-06-04",
    date: "2026-06-04",
    weekTitle: "Joseph Reveals Himself",
    scriptureReference: "Genesis 45",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/23?lang=eng",
    question: "How did Joseph explain why he was sold into Egypt?",
    options: [
      "It was their mistake",
      "God sent him to preserve life",
      "It was punishment for his pride",
      "It was fate"
    ],
    correctAnswer: 1,
    explanation: "'God did send me before you to preserve life' (Genesis 45:5)."
  },
  {
    id: "2026-06-05",
    date: "2026-06-05",
    weekTitle: "Joseph Reveals Himself",
    scriptureReference: "Genesis 45",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/23?lang=eng",
    question: "Where did Joseph invite his family to live?",
    options: [
      "In the capital city",
      "In the land of Goshen",
      "Near the pyramids",
      "In Pharaoh's palace"
    ],
    correctAnswer: 1,
    explanation: "'Thou shalt dwell in the land of Goshen, and thou shalt be near unto me' (Genesis 45:10)."
  },
  {
    id: "2026-06-06",
    date: "2026-06-06",
    weekTitle: "Joseph Reveals Himself",
    scriptureReference: "Genesis 45",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/23?lang=eng",
    question: "How did Pharaoh react to hearing about Joseph's brothers?",
    options: [
      "He was angry",
      "He was pleased and invited them to Egypt",
      "He was indifferent",
      "He feared them"
    ],
    correctAnswer: 1,
    explanation: "'It pleased Pharaoh well' and he commanded Joseph to bring his family (Genesis 45:16-18)."
  },
  {
    id: "2026-06-07",
    date: "2026-06-07",
    weekTitle: "Joseph Reveals Himself",
    scriptureReference: "Genesis 45",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/23?lang=eng",
    question: "How did Jacob react when he heard Joseph was alive?",
    options: [
      "He didn't believe it at first",
      "He immediately packed to leave",
      "He was angry at his sons",
      "He fainted"
    ],
    correctAnswer: 0,
    explanation: "'Jacob's heart fainted, for he believed them not' at first (Genesis 45:26)."
  },

  // Week 24: June 8-14 - Genesis 46-47
  {
    id: "2026-06-08",
    date: "2026-06-08",
    weekTitle: "Jacob's Family in Egypt",
    scriptureReference: "Genesis 46",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/24?lang=eng",
    question: "What did God tell Jacob at Beersheba before going to Egypt?",
    options: [
      "Do not go to Egypt",
      "Fear not to go down into Egypt",
      "Stay in Canaan",
      "Send only your sons"
    ],
    correctAnswer: 1,
    explanation: "'Fear not to go down into Egypt; for I will there make of thee a great nation' (Genesis 46:3)."
  },
  {
    id: "2026-06-09",
    date: "2026-06-09",
    weekTitle: "Jacob's Family in Egypt",
    scriptureReference: "Genesis 46",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/24?lang=eng",
    question: "How many of Jacob's family went to Egypt?",
    options: [
      "12",
      "50",
      "70",
      "100"
    ],
    correctAnswer: 2,
    explanation: "'All the souls of the house of Jacob, which came into Egypt, were threescore and ten' (70) (Genesis 46:27)."
  },
  {
    id: "2026-06-10",
    date: "2026-06-10",
    weekTitle: "Jacob's Family in Egypt",
    scriptureReference: "Genesis 46",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/24?lang=eng",
    question: "Who did Joseph send to meet Jacob as he entered Egypt?",
    options: [
      "Servants",
      "Joseph went himself",
      "Pharaoh's guard",
      "His own sons"
    ],
    correctAnswer: 1,
    explanation: "'Joseph made ready his chariot, and went up to meet Israel his father, to Goshen' (Genesis 46:29)."
  },
  {
    id: "2026-06-11",
    date: "2026-06-11",
    weekTitle: "Jacob's Family in Egypt",
    scriptureReference: "Genesis 47",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/24?lang=eng",
    question: "What occupation did Joseph tell his brothers to mention to Pharaoh?",
    options: [
      "Farmers",
      "Shepherds",
      "Merchants",
      "Builders"
    ],
    correctAnswer: 1,
    explanation: "Joseph instructed them to say, 'Thy servants' trade hath been about cattle... we are shepherds' (Genesis 46:34)."
  },
  {
    id: "2026-06-12",
    date: "2026-06-12",
    weekTitle: "Jacob's Family in Egypt",
    scriptureReference: "Genesis 47",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/24?lang=eng",
    question: "How old was Jacob when he came before Pharaoh?",
    options: [
      "100 years old",
      "130 years old",
      "147 years old",
      "175 years old"
    ],
    correctAnswer: 1,
    explanation: "'Jacob said unto Pharaoh, The days of the years of my pilgrimage are an hundred and thirty years' (Genesis 47:9)."
  },
  {
    id: "2026-06-13",
    date: "2026-06-13",
    weekTitle: "Jacob's Family in Egypt",
    scriptureReference: "Genesis 47",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/24?lang=eng",
    question: "What did Jacob do when he met Pharaoh?",
    options: [
      "He bowed seven times",
      "He blessed Pharaoh",
      "He asked for gifts",
      "He was silent"
    ],
    correctAnswer: 1,
    explanation: "'Jacob blessed Pharaoh' both upon arrival and departure (Genesis 47:7, 10)."
  },
  {
    id: "2026-06-14",
    date: "2026-06-14",
    weekTitle: "Jacob's Family in Egypt",
    scriptureReference: "Genesis 47",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/24?lang=eng",
    question: "How long did Jacob live in Egypt?",
    options: [
      "7 years",
      "17 years",
      "30 years",
      "40 years"
    ],
    correctAnswer: 1,
    explanation: "'Jacob lived in the land of Egypt seventeen years' (Genesis 47:28)."
  },

  // Week 25: June 15-21 - Genesis 48-49
  {
    id: "2026-06-15",
    date: "2026-06-15",
    weekTitle: "Jacob's Blessings",
    scriptureReference: "Genesis 48",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/25?lang=eng",
    question: "Which of Joseph's sons did Jacob adopt as his own?",
    options: [
      "Only Ephraim",
      "Only Manasseh",
      "Both Ephraim and Manasseh",
      "Neither"
    ],
    correctAnswer: 2,
    explanation: "'Ephraim and Manasseh... are mine; as Reuben and Simeon, they shall be mine' (Genesis 48:5)."
  },
  {
    id: "2026-06-16",
    date: "2026-06-16",
    weekTitle: "Jacob's Blessings",
    scriptureReference: "Genesis 48",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/25?lang=eng",
    question: "Which grandson did Jacob give the greater blessing to?",
    options: [
      "Manasseh, the firstborn",
      "Ephraim, the younger",
      "He blessed them equally",
      "He refused to bless them"
    ],
    correctAnswer: 1,
    explanation: "Jacob crossed his hands to place his right hand on Ephraim, the younger, giving him the greater blessing (Genesis 48:17-19)."
  },
  {
    id: "2026-06-17",
    date: "2026-06-17",
    weekTitle: "Jacob's Blessings",
    scriptureReference: "Genesis 49",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/25?lang=eng",
    question: "Which son did Jacob prophesy would hold the scepter and produce the Messiah?",
    options: [
      "Reuben",
      "Joseph",
      "Judah",
      "Benjamin"
    ],
    correctAnswer: 2,
    explanation: "'The sceptre shall not depart from Judah... until Shiloh come' (Genesis 49:10)."
  },
  {
    id: "2026-06-18",
    date: "2026-06-18",
    weekTitle: "Jacob's Blessings",
    scriptureReference: "Genesis 49",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/25?lang=eng",
    question: "What did Jacob call Joseph?",
    options: [
      "A mighty warrior",
      "A fruitful bough by a well",
      "A wise counselor",
      "A great king"
    ],
    correctAnswer: 1,
    explanation: "'Joseph is a fruitful bough, even a fruitful bough by a well' (Genesis 49:22)."
  },
  {
    id: "2026-06-19",
    date: "2026-06-19",
    weekTitle: "Jacob's Blessings",
    scriptureReference: "Genesis 49",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/25?lang=eng",
    question: "Why did Reuben lose his birthright blessing?",
    options: [
      "He was too young",
      "He defiled his father's bed",
      "He sold Joseph",
      "He worshipped idols"
    ],
    correctAnswer: 1,
    explanation: "'Unstable as water, thou shalt not excel; because thou wentest up to thy father's bed' (Genesis 49:4)."
  },
  {
    id: "2026-06-20",
    date: "2026-06-20",
    weekTitle: "Jacob's Blessings",
    scriptureReference: "Genesis 49",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/25?lang=eng",
    question: "Where did Jacob request to be buried?",
    options: [
      "In Egypt",
      "In the cave of Machpelah with his fathers",
      "In Bethel",
      "In Beersheba"
    ],
    correctAnswer: 1,
    explanation: "'Bury me with my fathers in the cave... of Machpelah' (Genesis 49:29-30)."
  },
  {
    id: "2026-06-21",
    date: "2026-06-21",
    weekTitle: "Jacob's Blessings",
    scriptureReference: "Genesis 49",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/25?lang=eng",
    question: "What did Jacob compare Benjamin to?",
    options: [
      "A lion",
      "A wolf",
      "An eagle",
      "A serpent"
    ],
    correctAnswer: 1,
    explanation: "'Benjamin shall ravin as a wolf' (Genesis 49:27)."
  },

  // Week 26: June 22-28 - Genesis 50
  {
    id: "2026-06-22",
    date: "2026-06-22",
    weekTitle: "The Death of Jacob and Joseph",
    scriptureReference: "Genesis 50",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/26?lang=eng",
    question: "How many days did the Egyptians mourn Jacob?",
    options: [
      "7 days",
      "40 days",
      "70 days",
      "100 days"
    ],
    correctAnswer: 2,
    explanation: "'The Egyptians mourned for him threescore and ten days' (70 days) (Genesis 50:3)."
  },
  {
    id: "2026-06-23",
    date: "2026-06-23",
    weekTitle: "The Death of Jacob and Joseph",
    scriptureReference: "Genesis 50",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/26?lang=eng",
    question: "What did Joseph's brothers fear after Jacob died?",
    options: [
      "That they would be sent away",
      "That Joseph would now take revenge on them",
      "That they would lose their inheritance",
      "That Egypt would enslave them"
    ],
    correctAnswer: 1,
    explanation: "The brothers feared 'Joseph will peradventure hate us, and will certainly requite us all the evil' (Genesis 50:15)."
  },
  {
    id: "2026-06-24",
    date: "2026-06-24",
    weekTitle: "The Death of Jacob and Joseph",
    scriptureReference: "Genesis 50",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/26?lang=eng",
    question: "What famous statement did Joseph make about their evil intent?",
    options: [
      "I forgive you",
      "Ye thought evil against me; but God meant it unto good",
      "All is forgotten",
      "I will not punish you"
    ],
    correctAnswer: 1,
    explanation: "'Ye thought evil against me; but God meant it unto good, to... save much people alive' (Genesis 50:20)."
  },
  {
    id: "2026-06-25",
    date: "2026-06-25",
    weekTitle: "The Death of Jacob and Joseph",
    scriptureReference: "Genesis 50",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/26?lang=eng",
    question: "How did Joseph respond to his brothers' fear?",
    options: [
      "He punished them",
      "He wept and comforted them",
      "He ignored them",
      "He sent them away"
    ],
    correctAnswer: 1,
    explanation: "'Joseph wept when they spake unto him... and said... Fear not: I will nourish you' (Genesis 50:17-21)."
  },
  {
    id: "2026-06-26",
    date: "2026-06-26",
    weekTitle: "The Death of Jacob and Joseph",
    scriptureReference: "Genesis 50",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/26?lang=eng",
    question: "How old was Joseph when he died?",
    options: [
      "100 years old",
      "110 years old",
      "120 years old",
      "147 years old"
    ],
    correctAnswer: 1,
    explanation: "'Joseph died, being an hundred and ten years old' (Genesis 50:26)."
  },
  {
    id: "2026-06-27",
    date: "2026-06-27",
    weekTitle: "The Death of Jacob and Joseph",
    scriptureReference: "Genesis 50",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/26?lang=eng",
    question: "What prophecy did Joseph give before he died?",
    options: [
      "That Egypt would be destroyed",
      "That God would visit them and bring them out of Egypt",
      "That a new Pharaoh would arise",
      "That there would be another famine"
    ],
    correctAnswer: 1,
    explanation: "'God will surely visit you, and bring you out of this land' unto the promised land (Genesis 50:24)."
  },
  {
    id: "2026-06-28",
    date: "2026-06-28",
    weekTitle: "The Death of Jacob and Joseph",
    scriptureReference: "Genesis 50",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/26?lang=eng",
    question: "What did Joseph make his brethren promise about his bones?",
    options: [
      "To bury them in Egypt",
      "To carry them up out of Egypt when God visited them",
      "To build a monument over them",
      "To scatter them in the desert"
    ],
    correctAnswer: 1,
    explanation: "'Joseph took an oath of the children of Israel, saying, God will surely visit you, and ye shall carry up my bones from hence' (Genesis 50:25)."
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

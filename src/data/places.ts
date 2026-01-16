export interface Citation {
  title: string;
  url: string;
}

export interface Place {
  name: string;
  modernLocation: string;
  locationType: "confirmed" | "probable" | "uncertain" | "symbolic";
  description: string;
  scriptureReferences: string[];
}

export interface PlacesOfTheDay {
  id: number;
  date: string;
  weekTitle: string;
  places: Place[];
  citations: Citation[];
  url: string;
}

export const places: PlacesOfTheDay[] = [
  // Week: January 13-19 - The Creation
  {
    id: 1,
    date: "2026-01-13",
    weekTitle: "The Creation (Genesis 1-2; Moses 2-3; Abraham 4-5)",
    places: [
      {
        name: "Garden of Eden",
        modernLocation: "Location unknown; traditionally associated with the Mesopotamian region near the Tigris and Euphrates rivers (modern Iraq/Kuwait)",
        locationType: "uncertain",
        description: "The paradisiacal garden where God placed Adam and Eve after their creation. It was a place of beauty, innocence, and direct communion with God. The garden contained the tree of life and the tree of knowledge of good and evil.",
        scriptureReferences: ["Genesis 2:8-15", "Moses 3:8-15", "Abraham 5:8-11"]
      },
      {
        name: "Land of Eden",
        modernLocation: "Ancient Near East, possibly Mesopotamia or a broader paradisiacal region",
        locationType: "uncertain",
        description: "The broader region in which the Garden of Eden was located. Eden means 'delight' or 'pleasure' in Hebrew, suggesting a place of divine blessing and abundance.",
        scriptureReferences: ["Genesis 2:8", "Moses 3:8"]
      },
      {
        name: "Pison River",
        modernLocation: "Possibly the Karun River in Iran, or a now-dry riverbed in Arabia; identification uncertain",
        locationType: "uncertain",
        description: "One of four rivers described as flowing from Eden. It is said to compass the land of Havilah, where there was gold, bdellium, and onyx stone.",
        scriptureReferences: ["Genesis 2:11-12"]
      },
      {
        name: "Gihon River",
        modernLocation: "Possibly the Nile River, or the Diyala River in Iraq; identification debated",
        locationType: "uncertain",
        description: "One of the four rivers of Eden, said to compass the whole land of Ethiopia (Cush in Hebrew).",
        scriptureReferences: ["Genesis 2:13"]
      },
      {
        name: "Hiddekel (Tigris) River",
        modernLocation: "Tigris River, flowing through modern Turkey, Syria, and Iraq",
        locationType: "confirmed",
        description: "One of the four rivers of Eden, identified with the Tigris. It flows toward the east of Assyria and remains one of the major rivers of the Middle East today.",
        scriptureReferences: ["Genesis 2:14"]
      },
      {
        name: "Euphrates River",
        modernLocation: "Euphrates River, flowing through modern Turkey, Syria, and Iraq",
        locationType: "confirmed",
        description: "The fourth river of Eden and the longest river in Western Asia. It has been central to human civilization for millennia and is still a major waterway today.",
        scriptureReferences: ["Genesis 2:14"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Eden", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/eden" },
      { title: "Bible Dictionary: Euphrates", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/euphrates" },
      { title: "Old Testament Student Manual: The Creation", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-1-2-the-creation" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/2"
  },
  {
    id: 2,
    date: "2026-01-14",
    weekTitle: "The Creation (Genesis 1-2; Moses 2-3; Abraham 4-5)",
    places: [
      {
        name: "Garden of Eden",
        modernLocation: "Location unknown; traditionally associated with the Mesopotamian region near the Tigris and Euphrates rivers (modern Iraq/Kuwait)",
        locationType: "uncertain",
        description: "The paradisiacal garden where God placed Adam and Eve after their creation. It was a place of beauty, innocence, and direct communion with God. The garden contained the tree of life and the tree of knowledge of good and evil.",
        scriptureReferences: ["Genesis 2:8-15", "Moses 3:8-15", "Abraham 5:8-11"]
      },
      {
        name: "Land of Havilah",
        modernLocation: "Possibly in Arabia, near Yemen, or in the Indus Valley region; identification uncertain",
        locationType: "uncertain",
        description: "A land described as being encompassed by the Pison River, known for its gold, bdellium (aromatic resin), and onyx stone. The name appears multiple times in scripture with different geographical associations.",
        scriptureReferences: ["Genesis 2:11-12"]
      },
      {
        name: "Land of Cush (Ethiopia)",
        modernLocation: "Ancient Cush included parts of modern Sudan, Ethiopia, and possibly southern Egypt",
        locationType: "probable",
        description: "The land encompassed by the Gihon River. In ancient times, Cush referred to the region south of Egypt, known for its wealth and distinct culture.",
        scriptureReferences: ["Genesis 2:13"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Cush", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/cush" },
      { title: "Bible Dictionary: Havilah", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/havilah" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/2"
  },
  {
    id: 3,
    date: "2026-01-15",
    weekTitle: "The Creation (Genesis 1-2; Moses 2-3; Abraham 4-5)",
    places: [
      {
        name: "Assyria",
        modernLocation: "Northern Iraq, parts of Syria, Turkey, and Iran",
        locationType: "confirmed",
        description: "An ancient region mentioned in the description of Eden's rivers. The Hiddekel (Tigris) is said to flow 'toward the east of Assyria.' Assyria later became a powerful empire that interacted significantly with Israel.",
        scriptureReferences: ["Genesis 2:14"]
      },
      {
        name: "The Heavens",
        modernLocation: "Symbolic/spiritual realm; the dwelling place of God",
        locationType: "symbolic",
        description: "In the creation account, 'the heavens' refers to both the physical sky and the celestial realm where God dwells. The creation of heaven and earth represents the totality of God's creative work.",
        scriptureReferences: ["Genesis 1:1", "Moses 2:1", "Abraham 4:1"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Assyria", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/assyria" },
      { title: "Bible Dictionary: Heaven", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/heaven" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1"
  },
  {
    id: 4,
    date: "2026-01-16",
    weekTitle: "The Creation (Genesis 1-2; Moses 2-3; Abraham 4-5)",
    places: [
      {
        name: "Garden of Eden",
        modernLocation: "Location unknown; traditionally associated with the Mesopotamian region near the Tigris and Euphrates rivers (modern Iraq/Kuwait)",
        locationType: "uncertain",
        description: "The paradisiacal garden where God placed Adam and Eve after their creation. It was a place of beauty, innocence, and direct communion with God. The garden contained the tree of life and the tree of knowledge of good and evil.",
        scriptureReferences: ["Genesis 2:8-15", "Moses 3:8-15", "Abraham 5:8-11"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Eden", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/eden" },
      { title: "Come, Follow Me Manual: Genesis 1-2", url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-individuals-and-families-old-testament-2022/03" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/2"
  },
  {
    id: 5,
    date: "2026-01-17",
    weekTitle: "The Creation (Genesis 1-2; Moses 2-3; Abraham 4-5)",
    places: [
      {
        name: "Kolob",
        modernLocation: "Celestial/symbolic; described as nearest to God's throne",
        locationType: "symbolic",
        description: "In the Book of Abraham, Kolob is described as the star nearest to the throne of God. It is said to govern all planets belonging to the same order as Earth. The name appears in the context of Abraham learning about astronomy and the cosmos.",
        scriptureReferences: ["Abraham 3:2-4", "Abraham 3:9", "Abraham 3:16"]
      },
      {
        name: "Garden of Eden",
        modernLocation: "Location unknown; traditionally associated with the Mesopotamian region",
        locationType: "uncertain",
        description: "The garden prepared for Adam and Eve, described in detail in the creation accounts of Genesis, Moses, and Abraham.",
        scriptureReferences: ["Genesis 2:8-15", "Moses 3:8-15", "Abraham 5:8-11"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Eden", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/eden" },
      { title: "Pearl of Great Price Student Manual: Kolob", url: "https://www.churchofjesuschrist.org/study/manual/pearl-of-great-price-student-manual-2018/the-book-of-abraham/abraham-3" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3"
  },
  {
    id: 6,
    date: "2026-01-18",
    weekTitle: "The Creation (Genesis 1-2; Moses 2-3; Abraham 4-5)",
    places: [
      {
        name: "The Earth",
        modernLocation: "Our planet",
        locationType: "confirmed",
        description: "The scriptures describe the earth as being created by God 'without form, and void' before being organized and prepared for life. The creation account details the progressive preparation of the earth for human habitation.",
        scriptureReferences: ["Genesis 1:1-2", "Moses 2:1-2", "Abraham 4:1-2"]
      },
      {
        name: "The Firmament (Expanse)",
        modernLocation: "The sky/atmosphere",
        locationType: "confirmed",
        description: "Called 'Heaven' in the creation account, the firmament refers to the expanse of sky that separates the waters above from the waters below. It represents the atmospheric layer surrounding the earth.",
        scriptureReferences: ["Genesis 1:6-8", "Moses 2:6-8", "Abraham 4:6-8"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Creation", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/creation" },
      { title: "Old Testament Student Manual: The Creation", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-1-2-the-creation" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1"
  },
  {
    id: 7,
    date: "2026-01-19",
    weekTitle: "The Creation (Genesis 1-2; Moses 2-3; Abraham 4-5)",
    places: [
      {
        name: "Garden of Eden",
        modernLocation: "Location unknown; traditionally associated with the Mesopotamian region near the Tigris and Euphrates rivers (modern Iraq/Kuwait)",
        locationType: "uncertain",
        description: "The paradisiacal garden where God placed Adam and Eve. After the Fall, Adam and Eve were expelled from this garden, and cherubim and a flaming sword were placed to guard the way to the tree of life.",
        scriptureReferences: ["Genesis 2:8-15", "Genesis 3:23-24", "Moses 3:8-15", "Moses 4:31"]
      },
      {
        name: "East of Eden",
        modernLocation: "Unknown; symbolically represents the fallen state and separation from God's presence",
        locationType: "symbolic",
        description: "After being expelled from the Garden of Eden, Adam and Eve dwelt in a land east of Eden. This location represents their new mortal state, separated from the direct presence of God but still able to communicate with Him through prayer and sacrifice.",
        scriptureReferences: ["Genesis 3:24", "Moses 4:31"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Eden", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/eden" },
      { title: "Old Testament Student Manual: The Fall", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-3-the-fall" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/3"
  },
  // Week: January 20-26 - The Fall
  {
    id: 8,
    date: "2026-01-20",
    weekTitle: "The Fall (Genesis 3-4; Moses 4-5)",
    places: [
      {
        name: "Garden of Eden",
        modernLocation: "Location unknown; traditionally associated with the Mesopotamian region",
        locationType: "uncertain",
        description: "The setting for the Fall of Adam and Eve. It was here that the serpent tempted Eve, and both partook of the forbidden fruit, leading to their expulsion and the beginning of mortality.",
        scriptureReferences: ["Genesis 3:1-24", "Moses 4:1-31"]
      },
      {
        name: "East of Eden",
        modernLocation: "Unknown; symbolically represents mortality and the fallen world",
        locationType: "symbolic",
        description: "The region where Adam and Eve dwelt after their expulsion from the garden. Here they began their mortal existence, working the ground, bearing children, and offering sacrifices to God.",
        scriptureReferences: ["Genesis 3:24", "Genesis 4:16", "Moses 4:31", "Moses 5:1"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Eden", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/eden" },
      { title: "Old Testament Student Manual: The Fall", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-3-the-fall" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/3"
  },
  {
    id: 9,
    date: "2026-01-21",
    weekTitle: "The Fall (Genesis 3-4; Moses 4-5)",
    places: [
      {
        name: "Land of Nod",
        modernLocation: "Unknown; possibly symbolic rather than geographical",
        locationType: "uncertain",
        description: "The land where Cain dwelt after being cursed for murdering Abel. The name 'Nod' means 'wandering' in Hebrew, emphasizing Cain's state as a fugitive and vagabond. It was located 'east of Eden.'",
        scriptureReferences: ["Genesis 4:16", "Moses 5:41"]
      },
      {
        name: "East of Eden",
        modernLocation: "Unknown; represents the mortal world away from God's immediate presence",
        locationType: "symbolic",
        description: "The direction and region associated with departure from God's presence. Both Adam and Eve, and later Cain, moved eastward after their respective transgressions.",
        scriptureReferences: ["Genesis 3:24", "Genesis 4:16", "Moses 4:31", "Moses 5:41"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Nod", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/nod" },
      { title: "Old Testament Student Manual: Cain and Abel", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-4-6-cain-and-his-descendants" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/4"
  },
  {
    id: 10,
    date: "2026-01-22",
    weekTitle: "The Fall (Genesis 3-4; Moses 4-5)",
    places: [
      {
        name: "City of Enoch (Cain's city)",
        modernLocation: "Unknown; location not specified in scripture",
        locationType: "uncertain",
        description: "The first city mentioned in the Bible, built by Cain and named after his son Enoch. This city represented Cain's attempt to establish civilization apart from God's covenant people.",
        scriptureReferences: ["Genesis 4:17", "Moses 5:42"]
      },
      {
        name: "Land of Nod",
        modernLocation: "Unknown; possibly symbolic",
        locationType: "uncertain",
        description: "The region east of Eden where Cain settled and where he built his city. The name suggests a state of wandering or restlessness.",
        scriptureReferences: ["Genesis 4:16-17", "Moses 5:41-42"]
      }
    ],
    citations: [
      { title: "Old Testament Student Manual: Cain and Abel", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-4-6-cain-and-his-descendants" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/4"
  },
  {
    id: 11,
    date: "2026-01-23",
    weekTitle: "The Fall (Genesis 3-4; Moses 4-5)",
    places: [
      {
        name: "Adam-ondi-Ahman",
        modernLocation: "Daviess County, Missouri, United States",
        locationType: "confirmed",
        description: "According to Latter-day Saint revelation, this is the place where Adam dwelt after being expelled from the Garden of Eden. It is also where Adam blessed his posterity before his death and where a future meeting with Christ will occur.",
        scriptureReferences: ["D&C 107:53-57", "D&C 116:1", "D&C 117:8"]
      },
      {
        name: "Valley of Adam-ondi-Ahman",
        modernLocation: "Spring Hill, Daviess County, Missouri",
        locationType: "confirmed",
        description: "The valley where Adam gathered his righteous posterity three years before his death to bestow upon them his last blessing. This sacred location has significance for both past and future prophetic events.",
        scriptureReferences: ["D&C 107:53-57"]
      }
    ],
    citations: [
      { title: "Doctrine and Covenants 116", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/116" },
      { title: "Bible Dictionary: Adam-ondi-Ahman", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/adam-ondi-ahman" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/116"
  },
  {
    id: 12,
    date: "2026-01-24",
    weekTitle: "The Fall (Genesis 3-4; Moses 4-5)",
    places: [
      {
        name: "Altar of Sacrifice",
        modernLocation: "East of Eden; specific location unknown",
        locationType: "uncertain",
        description: "After being expelled from Eden, Adam built an altar where he offered sacrifices to the Lord. This became the pattern for worship, with burnt offerings symbolizing the future sacrifice of Jesus Christ.",
        scriptureReferences: ["Moses 5:5-8"]
      },
      {
        name: "The Field (Abel's murder site)",
        modernLocation: "Unknown; somewhere in the ancient Near East",
        locationType: "uncertain",
        description: "The location where Cain murdered his brother Abel. The scriptures record that Cain 'rose up against Abel his brother, and slew him' while they were in the field together.",
        scriptureReferences: ["Genesis 4:8", "Moses 5:32"]
      }
    ],
    citations: [
      { title: "Old Testament Student Manual: Sacrifice", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-3-the-fall" },
      { title: "Bible Dictionary: Sacrifices", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/sacrifices" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5"
  },
  {
    id: 13,
    date: "2026-01-25",
    weekTitle: "The Fall (Genesis 3-4; Moses 4-5)",
    places: [
      {
        name: "Land of Nod",
        modernLocation: "Unknown; east of Eden",
        locationType: "uncertain",
        description: "Where Cain dwelt as a fugitive after murdering Abel. The name Nod, meaning 'wandering,' reflects the curse placed upon Cain to be a 'fugitive and a vagabond' in the earth.",
        scriptureReferences: ["Genesis 4:16", "Moses 5:41"]
      },
      {
        name: "City of Enoch (Cain's)",
        modernLocation: "Unknown; built in the land of Nod",
        locationType: "uncertain",
        description: "The city Cain built and named after his son Enoch. Not to be confused with the city of Enoch built by the righteous patriarch Enoch, son of Jared, which was later translated.",
        scriptureReferences: ["Genesis 4:17", "Moses 5:42"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Nod", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/nod" },
      { title: "Old Testament Student Manual: Cain's Descendants", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-4-6-cain-and-his-descendants" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/4"
  },
  {
    id: 14,
    date: "2026-01-26",
    weekTitle: "The Fall (Genesis 3-4; Moses 4-5)",
    places: [
      {
        name: "East of Eden",
        modernLocation: "Symbolic; represents the mortal world",
        locationType: "symbolic",
        description: "The general region where mortal life began after the Fall. Moving 'east' in Genesis often symbolizes moving away from God's presence, as seen with Adam, Eve, and Cain.",
        scriptureReferences: ["Genesis 3:24", "Genesis 4:16"]
      },
      {
        name: "Garden of Eden",
        modernLocation: "Location unknown; traditionally associated with Mesopotamia",
        locationType: "uncertain",
        description: "Though no longer accessible to Adam and Eve after the Fall, the Garden of Eden remained guarded by cherubim and a flaming sword to protect the way to the tree of life.",
        scriptureReferences: ["Genesis 3:24", "Moses 4:31"]
      },
      {
        name: "Presence of the Lord",
        modernLocation: "Spiritual/symbolic; wherever God manifests Himself",
        locationType: "symbolic",
        description: "After murdering Abel, Cain went 'out from the presence of the Lord.' This phrase indicates spiritual separation from God's favor and communication, a consequence of unrepented sin.",
        scriptureReferences: ["Genesis 4:16", "Moses 5:41"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Eden", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/eden" },
      { title: "Old Testament Student Manual: The Fall", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-3-the-fall" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/4"
  }
];

export const getPlacesForDate = (dateString: string): PlacesOfTheDay | undefined => {
  return places.find(p => p.date === dateString);
};

export const getAvailablePlacesDates = (): string[] => {
  return places.map(p => p.date);
};

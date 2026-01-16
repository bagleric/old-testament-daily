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
        modernLocation: "According to Latter-day Saint revelation, located in Jackson County, Missouri, United States. Traditional biblical scholarship places it in Mesopotamia near the Tigris and Euphrates rivers.",
        locationType: "confirmed",
        description: "The paradisiacal garden where God placed Adam and Eve after their creation. Through modern revelation, Joseph Smith taught that the Garden of Eden was located in what is now Jackson County, Missouri. Brigham Young confirmed this teaching, noting that Adam dwelt in this area before and after the Fall.",
        scriptureReferences: ["Genesis 2:8-15", "Moses 3:8-15", "Abraham 5:8-11", "D&C 116:1"]
      },
      {
        name: "Land of Eden",
        modernLocation: "The region surrounding Jackson County, Missouri, extending into Daviess County",
        locationType: "confirmed",
        description: "The broader region in which the Garden of Eden was located. According to Latter-day Saint teaching, this encompasses the area of western Missouri. Eden means 'delight' or 'pleasure' in Hebrew, suggesting a place of divine blessing and abundance.",
        scriptureReferences: ["Genesis 2:8", "Moses 3:8"]
      },
      {
        name: "Pison River",
        modernLocation: "According to traditional scholarship: possibly the Karun River in Iran. Note: The geography of these rivers may have changed dramatically after the Flood.",
        locationType: "uncertain",
        description: "One of four rivers described as flowing from Eden. It is said to compass the land of Havilah, where there was gold, bdellium, and onyx stone. Latter-day Saint scholars suggest the antediluvian geography was significantly altered by the Flood.",
        scriptureReferences: ["Genesis 2:11-12"]
      },
      {
        name: "Gihon River",
        modernLocation: "Pre-Flood geography unknown; traditional scholarship suggests the Nile River or Diyala River",
        locationType: "uncertain",
        description: "One of the four rivers of Eden, said to compass the whole land of Ethiopia (Cush). The dramatic changes from the Flood make identification of pre-Flood rivers difficult.",
        scriptureReferences: ["Genesis 2:13"]
      },
      {
        name: "Hiddekel (Tigris) River",
        modernLocation: "Modern Tigris River flows through Turkey, Syria, and Iraq. May not correspond to the pre-Flood river of the same name.",
        locationType: "uncertain",
        description: "One of the four rivers of Eden. While a river by this name exists today, Latter-day Saint scholars note that the Flood dramatically reshaped earth's geography, so modern rivers may not correspond to their antediluvian namesakes.",
        scriptureReferences: ["Genesis 2:14"]
      },
      {
        name: "Euphrates River",
        modernLocation: "Modern Euphrates flows through Turkey, Syria, and Iraq. Pre-Flood location may differ significantly.",
        locationType: "uncertain",
        description: "The fourth river of Eden. Like the other rivers, the modern Euphrates may bear the same name as the pre-Flood river but occupy a different location due to the cataclysmic changes of the Flood.",
        scriptureReferences: ["Genesis 2:14"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Eden", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/eden" },
      { title: "D&C 116 - Adam-ondi-Ahman", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/116" },
      { title: "Brigham Young on Garden of Eden in Missouri", url: "https://www.churchofjesuschrist.org/study/ensign/1994/01/i-have-a-question" },
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
        modernLocation: "Jackson County, Missouri, United States (per Latter-day Saint revelation)",
        locationType: "confirmed",
        description: "The paradisiacal garden prepared for Adam and Eve. President Brigham Young taught: 'Joseph the Prophet told me that the Garden of Eden was in Jackson County, Missouri.' This location is significant to Latter-day Saint eschatology.",
        scriptureReferences: ["Genesis 2:8-15", "Moses 3:8-15", "Abraham 5:8-11"]
      },
      {
        name: "Land of Havilah",
        modernLocation: "Pre-Flood location unknown; post-Flood associations include Arabia or Indus Valley",
        locationType: "uncertain",
        description: "A land described as being encompassed by the Pison River, known for its gold, bdellium, and onyx stone. The original antediluvian location was likely different from later places bearing this name.",
        scriptureReferences: ["Genesis 2:11-12"]
      },
      {
        name: "Land of Cush",
        modernLocation: "Post-Flood Cush included parts of modern Sudan and Ethiopia; pre-Flood location unknown",
        locationType: "uncertain",
        description: "The land encompassed by the Gihon River. The name Cush was later applied to the region south of Egypt, but the original pre-Flood location remains unknown.",
        scriptureReferences: ["Genesis 2:13"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Cush", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/cush" },
      { title: "Bible Dictionary: Havilah", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/havilah" },
      { title: "Ensign: Garden of Eden Location", url: "https://www.churchofjesuschrist.org/study/ensign/1994/01/i-have-a-question" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/2"
  },
  {
    id: 3,
    date: "2026-01-15",
    weekTitle: "The Creation (Genesis 1-2; Moses 2-3; Abraham 4-5)",
    places: [
      {
        name: "The Heavens",
        modernLocation: "Symbolic/spiritual realm; the dwelling place of God",
        locationType: "symbolic",
        description: "In the creation account, 'the heavens' refers to both the physical sky and the celestial realm where God dwells. The Book of Abraham provides additional insight into the organization of the heavens and the intelligences that existed before the world was formed.",
        scriptureReferences: ["Genesis 1:1", "Moses 2:1", "Abraham 4:1", "Abraham 3:22-23"]
      },
      {
        name: "Council in Heaven",
        modernLocation: "Spiritual/celestial realm; in the presence of God before the creation of the earth",
        locationType: "symbolic",
        description: "The place where the spirits of all mankind were present when God presented His plan of salvation. Abraham saw this in vision, witnessing the noble and great ones and the choosing of the Savior.",
        scriptureReferences: ["Abraham 3:22-28", "Moses 4:1-4", "D&C 29:36-38", "Job 38:4-7"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Heaven", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/heaven" },
      { title: "Gospel Topics: Council in Heaven", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/council-in-heaven" },
      { title: "Abraham 3 - Pre-mortal Life", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3" }
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
        modernLocation: "Jackson County, Missouri, United States (per Latter-day Saint revelation)",
        locationType: "confirmed",
        description: "The garden where Adam and Eve were placed to 'dress it and to keep it.' Modern revelation confirms this location in the Americas rather than the Near East. This understanding helps explain why the four rivers mentioned cannot be located today—the Flood completely reshaped earth's geography.",
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
        modernLocation: "Celestial; described as the star nearest to God's throne",
        locationType: "symbolic",
        description: "In the Book of Abraham, Kolob is described as the great governing star nearest to the throne of God. One day on Kolob equals one thousand years according to earth's reckoning. This revelation gives insight into God's relationship to time and the cosmos.",
        scriptureReferences: ["Abraham 3:2-4", "Abraham 3:9", "Abraham 3:16", "Abraham Facsimile 2"]
      },
      {
        name: "Garden of Eden",
        modernLocation: "Jackson County, Missouri, United States",
        locationType: "confirmed",
        description: "The garden prepared for Adam and Eve, described in detail in the creation accounts of Genesis, Moses, and Abraham. Its location in Missouri is unique knowledge restored through Joseph Smith.",
        scriptureReferences: ["Genesis 2:8-15", "Moses 3:8-15", "Abraham 5:8-11"]
      }
    ],
    citations: [
      { title: "Pearl of Great Price Student Manual: Kolob", url: "https://www.churchofjesuschrist.org/study/manual/pearl-of-great-price-student-manual-2018/the-book-of-abraham/abraham-3" },
      { title: "Abraham Facsimile 2 Explanation", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/fac-2" }
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
        description: "The scriptures describe the earth as being created by God 'without form, and void' before being organized. The Book of Abraham clarifies that the Gods 'organized and formed the heavens and the earth,' using the term 'organized' rather than 'created from nothing.'",
        scriptureReferences: ["Genesis 1:1-2", "Moses 2:1-2", "Abraham 4:1-2"]
      },
      {
        name: "The Firmament (Expanse)",
        modernLocation: "The sky/atmosphere",
        locationType: "confirmed",
        description: "Called 'Heaven' in the creation account, the firmament refers to the expanse of sky that separates the waters above from the waters below. The Book of Abraham's creation account closely parallels Genesis but adds important details about the role of the Gods in creation.",
        scriptureReferences: ["Genesis 1:6-8", "Moses 2:6-8", "Abraham 4:6-8"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Creation", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/creation" },
      { title: "Gospel Topics: Creation", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/creation" }
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
        modernLocation: "Jackson County, Missouri, United States",
        locationType: "confirmed",
        description: "After the Fall, Adam and Eve were expelled from this garden. The Book of Moses provides additional detail about cherubim and a flaming sword placed to guard the way to the tree of life. Adam and Eve then journeyed to Adam-ondi-Ahman.",
        scriptureReferences: ["Genesis 2:8-15", "Genesis 3:23-24", "Moses 3:8-15", "Moses 4:31"]
      },
      {
        name: "Adam-ondi-Ahman",
        modernLocation: "Daviess County, Missouri, United States (approximately 70 miles north of Jackson County)",
        locationType: "confirmed",
        description: "According to Latter-day Saint revelation, after leaving the Garden of Eden, Adam and Eve dwelt at Adam-ondi-Ahman. The name is revealed to mean 'the place or land of God where Adam dwelt.' This is where Adam offered sacrifices and where he will return in the last days.",
        scriptureReferences: ["D&C 107:53-57", "D&C 116:1", "D&C 117:8"]
      }
    ],
    citations: [
      { title: "D&C 116 - Adam-ondi-Ahman", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/116" },
      { title: "Bible Dictionary: Adam-ondi-Ahman", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/adam-ondi-ahman" },
      { title: "Church History: Adam-ondi-Ahman", url: "https://www.churchofjesuschrist.org/study/history/topics/adam-ondi-ahman" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/116"
  },
  // Week: January 20-26 - The Fall
  {
    id: 8,
    date: "2026-01-20",
    weekTitle: "The Fall (Genesis 3-4; Moses 4-5)",
    places: [
      {
        name: "Garden of Eden",
        modernLocation: "Jackson County, Missouri, United States",
        locationType: "confirmed",
        description: "The setting for the Fall of Adam and Eve. It was here that the serpent (Lucifer) tempted Eve, and both partook of the fruit of the tree of knowledge of good and evil. The Book of Moses provides significant additional dialogue and context not found in Genesis.",
        scriptureReferences: ["Genesis 3:1-24", "Moses 4:1-31", "2 Nephi 2:19-25"]
      },
      {
        name: "Adam-ondi-Ahman",
        modernLocation: "Daviess County, Missouri, United States",
        locationType: "confirmed",
        description: "Where Adam and Eve dwelt after their expulsion from the garden. Here they began their mortal existence, working the ground, bearing children, and offering sacrifices to God. This is the same location where Adam blessed his posterity three years before his death.",
        scriptureReferences: ["D&C 107:53-57", "D&C 116:1", "Moses 5:1-12"]
      }
    ],
    citations: [
      { title: "2 Nephi 2 - The Fall", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2" },
      { title: "Moses 4 - The Fall", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/4" },
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
        modernLocation: "Unknown; possibly symbolic. If the Garden was in Missouri, Nod may have been east of that region in pre-Flood geography.",
        locationType: "uncertain",
        description: "The land where Cain dwelt after being cursed for murdering Abel. The name 'Nod' means 'wandering' in Hebrew. The Book of Moses adds that Cain was 'shut out from the presence of the Lord' and dwelt in this land.",
        scriptureReferences: ["Genesis 4:16", "Moses 5:41"]
      },
      {
        name: "Adam-ondi-Ahman",
        modernLocation: "Daviess County, Missouri, United States",
        locationType: "confirmed",
        description: "The dwelling place of Adam and Eve and their righteous descendants. While Cain departed to the land of Nod, the faithful line continued in this region, maintaining altars and offering sacrifices.",
        scriptureReferences: ["D&C 107:53-57", "D&C 116:1", "Moses 5:1-12"]
      }
    ],
    citations: [
      { title: "Bible Dictionary: Nod", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/nod" },
      { title: "Moses 5 - Cain and Abel", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5" },
      { title: "D&C 116", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/116" }
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
        modernLocation: "Unknown; built in the land of Nod, east of Adam-ondi-Ahman",
        locationType: "uncertain",
        description: "The first city mentioned in scripture, built by Cain and named after his son Enoch. This city represented the beginning of Cain's lineage establishing civilization apart from God's covenant people. Not to be confused with the City of Zion built by the righteous Enoch.",
        scriptureReferences: ["Genesis 4:17", "Moses 5:42"]
      },
      {
        name: "Land of Nod",
        modernLocation: "Unknown; east of Eden/Adam-ondi-Ahman region",
        locationType: "uncertain",
        description: "The region where Cain settled after his curse. The Book of Moses adds that Cain 'gloried in his wickedness' in this land and established secret combinations among his descendants.",
        scriptureReferences: ["Genesis 4:16-17", "Moses 5:41-42", "Moses 5:49-55"]
      }
    ],
    citations: [
      { title: "Moses 5 - Secret Combinations", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5" },
      { title: "Old Testament Student Manual: Cain's Descendants", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-4-6-cain-and-his-descendants" }
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
        modernLocation: "Daviess County, Missouri, United States (Spring Hill area)",
        locationType: "confirmed",
        description: "The name means 'the place or land of God where Adam dwelt.' Three years before his death, Adam gathered his righteous posterity here and bestowed upon them his last blessing. The Lord appeared to them, and Adam prophesied concerning his posterity to the latest generation. A future meeting with Christ will also occur here.",
        scriptureReferences: ["D&C 107:53-57", "D&C 116:1", "D&C 117:8", "Daniel 7:9-14"]
      },
      {
        name: "Valley of Adam-ondi-Ahman",
        modernLocation: "Spring Hill, Daviess County, Missouri",
        locationType: "confirmed",
        description: "The valley where Adam gathered his righteous posterity. Joseph Smith visited this location in 1838 and received revelation confirming it as the place where 'Adam shall come to visit his people, or the Ancient of Days shall sit.'",
        scriptureReferences: ["D&C 107:53-57", "D&C 116:1"]
      }
    ],
    citations: [
      { title: "Doctrine and Covenants 116", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/116" },
      { title: "Doctrine and Covenants 107:53-57", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/107" },
      { title: "Bible Dictionary: Adam-ondi-Ahman", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/adam-ondi-ahman" },
      { title: "Church History: Adam-ondi-Ahman", url: "https://www.churchofjesuschrist.org/study/history/topics/adam-ondi-ahman" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/116"
  },
  {
    id: 12,
    date: "2026-01-24",
    weekTitle: "The Fall (Genesis 3-4; Moses 4-5)",
    places: [
      {
        name: "Altar of Adam",
        modernLocation: "Adam-ondi-Ahman region, Daviess County, Missouri",
        locationType: "confirmed",
        description: "After leaving the garden, Adam built an altar and offered sacrifices. The Book of Moses records that Adam offered 'the firstlings of their flocks' as commanded. An angel appeared to teach him that these sacrifices were 'a similitude of the sacrifice of the Only Begotten of the Father.'",
        scriptureReferences: ["Moses 5:5-8", "Moses 5:19-20"]
      },
      {
        name: "The Field (Abel's murder site)",
        modernLocation: "Unknown; in the region east of Adam-ondi-Ahman",
        locationType: "uncertain",
        description: "The location where Cain murdered his brother Abel. The Book of Moses adds dramatic dialogue, including Satan's instruction to Cain and the Lord's questioning of Cain afterward. Abel's blood 'cried unto the Lord from the ground.'",
        scriptureReferences: ["Genesis 4:8-10", "Moses 5:32-35"]
      }
    ],
    citations: [
      { title: "Moses 5 - Sacrifice and Atonement", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5" },
      { title: "Bible Dictionary: Sacrifices", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/sacrifices" },
      { title: "Gospel Topics: Sacrifice", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/sacrifice" }
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
        modernLocation: "Unknown; east of the Adam-ondi-Ahman region",
        locationType: "uncertain",
        description: "Where Cain dwelt as a fugitive. The Book of Moses reveals that Cain 'went out from the presence of the Lord' and 'Satan knew it, and it pleased him.' Here Cain established secret combinations and 'gloried in his wickedness.'",
        scriptureReferences: ["Genesis 4:16", "Moses 5:41", "Moses 5:16"]
      },
      {
        name: "City of Enoch (Cain's)",
        modernLocation: "Unknown; built in the land of Nod",
        locationType: "uncertain",
        description: "The city Cain built, named after his son Enoch. Notably different from the City of Zion built by the righteous Enoch (son of Jared), which was translated and taken up to heaven because of its righteousness.",
        scriptureReferences: ["Genesis 4:17", "Moses 5:42", "Moses 7:13-21"]
      }
    ],
    citations: [
      { title: "Moses 5 - Cain's Wickedness", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5" },
      { title: "Moses 7 - City of Zion Translated", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/7" },
      { title: "Bible Dictionary: Nod", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/nod" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/4"
  },
  {
    id: 14,
    date: "2026-01-26",
    weekTitle: "The Fall (Genesis 3-4; Moses 4-5)",
    places: [
      {
        name: "Adam-ondi-Ahman",
        modernLocation: "Daviess County, Missouri, United States",
        locationType: "confirmed",
        description: "The center of Adam's righteous posterity. While Cain's descendants spread wickedness in the land of Nod, Seth and his posterity continued in righteousness in this region, 'and they were preachers of righteousness, and spake and prophesied.'",
        scriptureReferences: ["D&C 107:53-57", "Moses 6:1-4", "Moses 6:23"]
      },
      {
        name: "Garden of Eden",
        modernLocation: "Jackson County, Missouri, United States",
        locationType: "confirmed",
        description: "Though no longer accessible after the Fall, the Garden of Eden's location in Jackson County is significant in Latter-day Saint theology. This area is designated as the future location of the New Jerusalem (Zion), where the righteous will gather in the last days.",
        scriptureReferences: ["Genesis 3:24", "Moses 4:31", "D&C 57:1-3", "D&C 84:1-4", "Articles of Faith 1:10"]
      },
      {
        name: "New Jerusalem (Zion)",
        modernLocation: "Jackson County, Missouri, United States (to be built)",
        locationType: "confirmed",
        description: "Revealed as the future location of the holy city Zion, or New Jerusalem. The same region where the Garden of Eden was located will become the gathering place for the righteous in the last days. A temple will be built here as prophesied.",
        scriptureReferences: ["D&C 57:1-3", "D&C 84:1-5", "D&C 97:19", "3 Nephi 20:22", "Ether 13:2-6", "Articles of Faith 1:10"]
      }
    ],
    citations: [
      { title: "D&C 57 - Zion in Missouri", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/57" },
      { title: "D&C 84 - New Jerusalem", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/84" },
      { title: "Articles of Faith 1:10", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/a-of-f/1" },
      { title: "Gospel Topics: New Jerusalem", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/new-jerusalem" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/57"
  }
];

export const getPlacesForDate = (dateString: string): PlacesOfTheDay | undefined => {
  return places.find(p => p.date === dateString);
};

export const getAvailablePlacesDates = (): string[] => {
  return places.map(p => p.date);
};

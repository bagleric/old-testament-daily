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
        name: "Council in Heaven",
        modernLocation: "Spiritual/celestial realm; in the presence of God before the creation of the earth",
        locationType: "symbolic",
        description: "The place where the spirits of all mankind were present when God presented His plan of salvation. Abraham saw this in vision, witnessing the noble and great ones and the choosing of the Savior.",
        scriptureReferences: ["Abraham 3:22-28", "Moses 4:1-4", "D&C 29:36-38", "Job 38:4-7"]
      },
      {
        name: "Kolob",
        modernLocation: "Celestial; described as the star nearest to God's throne",
        locationType: "symbolic",
        description: "In the Book of Abraham, Kolob is described as the great governing star nearest to the throne of God. One day on Kolob equals one thousand years according to earth's reckoning. This revelation gives insight into God's relationship to time and the cosmos.",
        scriptureReferences: ["Abraham 3:2-4", "Abraham 3:9", "Abraham 3:16", "Abraham Facsimile 2"]
      },
      {
        name: "The Heavens",
        modernLocation: "Symbolic/spiritual realm; the dwelling place of God",
        locationType: "symbolic",
        description: "In the creation account, 'the heavens' refers to both the physical sky and the celestial realm where God dwells. The Book of Abraham provides additional insight into the organization of the heavens and the intelligences that existed before the world was formed.",
        scriptureReferences: ["Genesis 1:1", "Moses 2:1", "Abraham 4:1", "Abraham 3:22-23"]
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
      { title: "Bible Dictionary: Eden", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/eden" },
      { title: "D&C 116 - Adam-ondi-Ahman", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/116" },
      { title: "Brigham Young on Garden of Eden in Missouri", url: "https://www.churchofjesuschrist.org/study/ensign/1994/01/i-have-a-question" },
      { title: "Old Testament Student Manual: The Creation", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-1-2-the-creation" },
      { title: "Bible Dictionary: Heaven", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/heaven" },
      { title: "Gospel Topics: Council in Heaven", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/council-in-heaven" },
      { title: "Abraham 3 - Pre-mortal Life", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3" },
      { title: "Pearl of Great Price Student Manual: Kolob", url: "https://www.churchofjesuschrist.org/study/manual/pearl-of-great-price-student-manual-2018/the-book-of-abraham/abraham-3" },
      { title: "Bible Dictionary: Adam-ondi-Ahman", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/adam-ondi-ahman" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1"
  },
  // Week: January 20-26 - The Fall
  {
    id: 2,
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
      },
      {
        name: "Land of Nod",
        modernLocation: "Unknown; possibly symbolic. If the Garden was in Missouri, Nod may have been east of that region in pre-Flood geography.",
        locationType: "uncertain",
        description: "The land where Cain dwelt after being cursed for murdering Abel. The name 'Nod' means 'wandering' in Hebrew. The Book of Moses adds that Cain was 'shut out from the presence of the Lord' and dwelt in this land.",
        scriptureReferences: ["Genesis 4:16", "Moses 5:41"]
      },
      {
        name: "City of Enoch (Cain's city)",
        modernLocation: "Unknown; built in the land of Nod, east of Adam-ondi-Ahman",
        locationType: "uncertain",
        description: "The first city mentioned in scripture, built by Cain and named after his son Enoch. This city represented the beginning of Cain's lineage establishing civilization apart from God's covenant people. Not to be confused with the City of Zion built by the righteous Enoch.",
        scriptureReferences: ["Genesis 4:17", "Moses 5:42"]
      },
      {
        name: "Altar of Sacrifice",
        modernLocation: "In the region of Adam-ondi-Ahman, Daviess County, Missouri",
        locationType: "confirmed",
        description: "The place where Adam built an altar and offered sacrifice after leaving the garden. Here he was taught by an angel about the symbolism of sacrifice pointing to Jesus Christ. Cain and Abel also made their offerings at altars in this region.",
        scriptureReferences: ["Moses 5:5-8", "Genesis 4:3-4", "Moses 5:17-21"]
      }
    ],
    citations: [
      { title: "2 Nephi 2 - The Fall", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2" },
      { title: "Moses 4 - The Fall", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/4" },
      { title: "Old Testament Student Manual: The Fall", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-3-the-fall" },
      { title: "Bible Dictionary: Nod", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/nod" },
      { title: "Moses 5 - Cain and Abel", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5" },
      { title: "D&C 116", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/116" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/3"
  },
  // Week: January 27 - February 2 - Enoch and Zion (Moses 6-7)
  {
    id: 3,
    date: "2026-01-27",
    weekTitle: "Enoch and Zion (Moses 6–7)",
    places: [
      {
        name: "Land of Cainan",
        modernLocation: "Unknown; in the pre-Flood world, likely in the region of Missouri according to Latter-day Saint revelation",
        locationType: "uncertain",
        description: "The land where Enos, son of Seth, dwelt. The name Cainan appears in the genealogies as one of the early patriarchs. This was part of the inhabited world before the Flood.",
        scriptureReferences: ["Moses 6:17", "Genesis 5:9-14"]
      },
      {
        name: "Land of Shulon",
        modernLocation: "Unknown; pre-Flood geography",
        locationType: "uncertain",
        description: "Mentioned in the Book of Moses as one of the regions where Enoch traveled and preached. The people who heard Enoch came to stand on a hill called Simeon.",
        scriptureReferences: ["Moses 6:42"]
      },
      {
        name: "Hill Simeon",
        modernLocation: "Unknown; pre-Flood location",
        locationType: "uncertain",
        description: "A hill where Enoch stood when he began his prophetic ministry. The people gathered from the lands of Cainan, Sharon, and Enoch to hear him speak.",
        scriptureReferences: ["Moses 6:42"]
      },
      {
        name: "Land of Sharon",
        modernLocation: "Unknown; pre-Flood location. Post-Flood Sharon is in Israel, but this refers to an antediluvian place.",
        locationType: "uncertain",
        description: "One of the lands from which people came to hear Enoch preach on the hill Simeon. Not to be confused with the post-Flood Sharon in ancient Israel.",
        scriptureReferences: ["Moses 6:42"]
      },
      {
        name: "Land of Enoch",
        modernLocation: "Unknown; pre-Flood location",
        locationType: "uncertain",
        description: "A land named after the patriarch Enoch, from which people came to hear Enoch the prophet preach. This was distinct from the city that Enoch later built.",
        scriptureReferences: ["Moses 6:42"]
      },
      {
        name: "City of Zion (City of Enoch)",
        modernLocation: "Taken up to heaven; originally in the pre-Flood world, likely in the Missouri region according to LDS tradition",
        locationType: "symbolic",
        description: "The holy city established by the prophet Enoch. The inhabitants were 'of one heart and one mind, and dwelt in righteousness; and there was no poor among them.' After 365 years, the entire city was translated and taken up to heaven. This city will return to the earth in the last days.",
        scriptureReferences: ["Moses 7:18-21", "Moses 7:62-69", "D&C 45:11-12"]
      },
      {
        name: "Adam-ondi-Ahman",
        modernLocation: "Daviess County, Missouri, United States",
        locationType: "confirmed",
        description: "The patriarchal gathering place where Adam blessed his righteous posterity three years before his death. Enoch would have known this sacred location as the place where Adam dwelt after leaving the Garden of Eden. The Lord appeared to them, and Adam prophesied concerning his posterity.",
        scriptureReferences: ["D&C 107:53-57", "D&C 116:1"]
      },
      {
        name: "Waters of Judea",
        modernLocation: "Unknown; pre-Flood location",
        locationType: "uncertain",
        description: "A body of water mentioned in Enoch's vision. Enoch saw that the wicked would be destroyed by the Flood, with waters covering the earth.",
        scriptureReferences: ["Moses 6:42"]
      },
      {
        name: "Land of Mahujah",
        modernLocation: "Unknown; pre-Flood location",
        locationType: "uncertain",
        description: "A land mentioned in connection with Enoch's ministry. Mahujah was also the name of a man who questioned Enoch about his prophetic calling.",
        scriptureReferences: ["Moses 6:40"]
      },
      {
        name: "Land of Canaan (Antediluvian)",
        modernLocation: "Unknown; pre-Flood location (not the same as post-Flood Canaan in the Middle East)",
        locationType: "uncertain",
        description: "Mentioned in the Book of Moses as one of the lands in the antediluvian world. A land of promise that the Lord cursed with much heat because of the wickedness of the people.",
        scriptureReferences: ["Moses 7:6-8"]
      }
    ],
    citations: [
      { title: "Moses 6 - Enoch's Ministry", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/6" },
      { title: "Moses 7 - Zion Translated", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/7" },
      { title: "Old Testament Student Manual: Enoch and His City", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-5-6-the-patriarchs-adam-to-noah" },
      { title: "Gospel Topics: Zion", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/zion" },
      { title: "D&C 107 - Adam-ondi-Ahman", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/107" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/6"
  },
  // Week: February 3-9 - The Patriarchs and Noah's Calling (Genesis 5; Moses 8)
  {
    id: 4,
    date: "2026-02-03",
    weekTitle: "The Patriarchs and Noah's Calling (Genesis 5; Moses 8)",
    places: [
      {
        name: "Adam-ondi-Ahman",
        modernLocation: "Daviess County, Missouri, United States",
        locationType: "confirmed",
        description: "The valley where Adam gathered his righteous posterity three years before his death to bestow blessings upon them. All the patriarchs from Seth to Methuselah were present. The Lord appeared to them. This location is prophesied to be the site of a future gathering in the last days.",
        scriptureReferences: ["D&C 107:53-57", "D&C 116:1", "D&C 27:11"]
      },
      {
        name: "City of Zion (City of Enoch)",
        modernLocation: "Taken up to heaven",
        locationType: "symbolic",
        description: "By the time of Noah, the City of Zion had been translated (365 years after Enoch began his ministry). Those who remained on earth who were righteous were caught up to Zion, while the wicked remained to face the coming Flood.",
        scriptureReferences: ["Moses 7:21", "Moses 7:27", "Moses 7:69"]
      },
      {
        name: "Land of the Pre-Flood Patriarchs",
        modernLocation: "According to LDS tradition, the region surrounding Jackson County and Daviess County, Missouri",
        locationType: "confirmed",
        description: "The general region where the patriarchs from Adam to Noah lived. The Book of Moses provides a priesthood lineage from Adam through Noah, all dwelling in this general area before the Flood scattered humanity.",
        scriptureReferences: ["Moses 8:1-12", "D&C 84:6-17"]
      },
      {
        name: "Where Noah Preached",
        modernLocation: "Unknown; in the pre-Flood world",
        locationType: "uncertain",
        description: "Noah preached repentance to the people for 120 years before the Flood. He declared that unless they repented, the floods would come upon them. The people rejected his message, and all except his family perished.",
        scriptureReferences: ["Moses 8:17-24", "Genesis 6:3", "2 Peter 2:5"]
      },
      {
        name: "Mount Ararat Region (Pre-Flood)",
        modernLocation: "Unknown original location; post-Flood Mount Ararat is in eastern Turkey",
        locationType: "uncertain",
        description: "While the Ark came to rest on the mountains of Ararat after the Flood, the pre-Flood geography may have been entirely different. The Flood reshaped the entire earth's surface.",
        scriptureReferences: ["Genesis 8:4"]
      },
      {
        name: "Land of Righteousness (Methuselah's Domain)",
        modernLocation: "Unknown; pre-Flood location, likely near Adam-ondi-Ahman",
        locationType: "uncertain",
        description: "The region where Methuselah, the longest-living man in scripture (969 years), dwelt. He was the grandfather of Noah and held the priesthood. Tradition holds that the Flood came in the year of his death.",
        scriptureReferences: ["Genesis 5:25-27", "Moses 8:1-7"]
      },
      {
        name: "Lands of the Wicked",
        modernLocation: "Unknown; pre-Flood geography",
        locationType: "uncertain",
        description: "The regions where wickedness abounded in the days before the Flood. The scripture records that 'the wickedness of men had become great in the earth; and every man was lifted up in the imagination of the thoughts of his heart, being only evil continually.'",
        scriptureReferences: ["Moses 8:22", "Genesis 6:5", "Moses 8:28-30"]
      },
      {
        name: "Where the Ark Was Built",
        modernLocation: "Unknown; pre-Flood location",
        locationType: "uncertain",
        description: "The location where Noah, following God's commandment, built the ark over many years. The ark was 300 cubits long, 50 cubits wide, and 30 cubits high—a massive vessel capable of preserving life through the Flood.",
        scriptureReferences: ["Genesis 6:14-22", "Moses 8:12"]
      }
    ],
    citations: [
      { title: "Moses 8 - Noah and the Flood", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/8" },
      { title: "Genesis 5 - The Patriarchs", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/5" },
      { title: "Old Testament Student Manual: The Patriarchs", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-5-6-the-patriarchs-adam-to-noah" },
      { title: "D&C 107:53-57 - Adam-ondi-Ahman Meeting", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/107" },
      { title: "Bible Dictionary: Noah", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/noah" },
      { title: "2 Peter 2:5 - Noah, Preacher of Righteousness", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/2-pet/2" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/8"
  }
];

export const getPlacesForDate = (dateString: string): PlacesOfTheDay | undefined => {
  // Find the week that contains this date
  const targetDate = new Date(dateString);
  
  for (const week of places) {
    const weekStart = new Date(week.date);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    
    if (targetDate >= weekStart && targetDate <= weekEnd) {
      return week;
    }
  }
  
  return undefined;
};

export const getAvailablePlacesDates = (): string[] => {
  return places.map((p) => p.date);
};

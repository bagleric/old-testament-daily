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

export interface Citation {
  title: string;
  url: string;
}

export interface Scripture {
  id: number;
  date: string;
  weekTitle: string;
  reference: string;
  text: string;
  context: string;
  historicalBackground: string;
  citations: Citation[];
  url: string;
}

export const scriptures: Scripture[] = [
  {
    id: 1,
    date: "2026-01-05",
    weekTitle: "Genesis 1–2",
    reference: "Genesis 1:1",
    text: "In the beginning God created the heaven and the earth.",
    context: "This opening verse establishes God as the eternal Creator, existing before all things. It sets the foundation for understanding our relationship with Him as His creations.",
    historicalBackground: "Moses wrote Genesis while leading Israel through the wilderness, providing them with an understanding of their origins and God's purposes. Ancient Near Eastern cultures had their own creation myths, but Genesis presents a unique monotheistic account.",
    citations: [
      { title: "Bible Dictionary: Creation", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/creation?lang=eng" },
      { title: "Old Testament Student Manual: Genesis 1–2", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-1-2?lang=eng" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1?lang=eng&id=p1#p1"
  },
  {
    id: 2,
    date: "2026-01-12",
    weekTitle: "Genesis 3–4; Moses 5–6",
    reference: "Moses 5:11",
    text: "And Eve, his wife, heard all these things and was glad, saying: Were it not for our transgression we never should have had seed, and never should have known good and evil, and the joy of our redemption, and the eternal life which God giveth unto all the obedient.",
    context: "Eve's statement reveals profound understanding of the Fall as a necessary step in God's plan. Rather than viewing it solely as a tragedy, she recognized it as enabling mortality, agency, and ultimately redemption.",
    historicalBackground: "The Book of Moses, revealed to Joseph Smith, provides additional context to Genesis that was lost from the biblical record. This verse shows Eve as a wise partner who understood the eternal significance of their choice.",
    citations: [
      { title: "Gospel Topics: Fall of Adam and Eve", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/fall-of-adam-and-eve?lang=eng" },
      { title: "2 Nephi 2:22–25", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=eng&id=p22-p25#p22" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/5?lang=eng&id=p11#p11"
  },
  {
    id: 3,
    date: "2026-01-19",
    weekTitle: "Genesis 5; Moses 6–7",
    reference: "Moses 7:18",
    text: "And the Lord called his people Zion, because they were of one heart and one mind, and dwelt in righteousness; and there was no poor among them.",
    context: "This verse describes the city of Enoch, which achieved such unity and righteousness that it was taken up to heaven. It serves as the model for what we strive to create in our communities.",
    historicalBackground: "Enoch lived seven generations after Adam. His city existed during a time of great wickedness, yet they created a society so righteous that God translated them. This occurred approximately 3,000 years before Christ.",
    citations: [
      { title: "Bible Dictionary: Enoch", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/enoch?lang=eng" },
      { title: "Gospel Topics: Zion", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/zion?lang=eng" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/7?lang=eng&id=p18#p18"
  },
  {
    id: 4,
    date: "2026-01-26",
    weekTitle: "Genesis 6–7; Moses 8",
    reference: "Genesis 6:9",
    text: "Noah was a just man and perfect in his generations, and Noah walked with God.",
    context: "Being 'perfect in his generations' means Noah was blameless among the people of his time. Walking with God implies constant communion and obedience, following the pattern of Enoch before him.",
    historicalBackground: "Noah lived approximately 2,900 years before Christ. The phrase 'walked with God' was also used of Enoch, connecting these two great patriarchs. Noah preached repentance for 120 years before the flood came.",
    citations: [
      { title: "Bible Dictionary: Noah", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/noah?lang=eng" },
      { title: "Old Testament Student Manual: Genesis 6–10", url: "https://www.churchofjesuschrist.org/study/manual/old-testament-student-manual-genesis-2-samuel/genesis-6-10?lang=eng" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/6?lang=eng&id=p9#p9"
  },
  {
    id: 5,
    date: "2026-02-02",
    weekTitle: "Genesis 8–10",
    reference: "Genesis 9:13",
    text: "I do set my bow in the cloud, and it shall be for a token of a covenant between me and the earth.",
    context: "The rainbow became a symbol of God's covenant never to destroy the earth by flood again. It represents God's mercy and His faithfulness to His promises.",
    historicalBackground: "This covenant with Noah is considered the first covenant made with all humanity. Ancient peoples saw the rainbow as a warrior's bow laid aside, symbolizing peace between heaven and earth.",
    citations: [
      { title: "Bible Dictionary: Rainbow", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/rainbow?lang=eng" },
      { title: "JST, Genesis 9:21–25", url: "https://www.churchofjesuschrist.org/study/scriptures/jst/jst-gen/9?lang=eng" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/9?lang=eng&id=p13#p13"
  },
  {
    id: 6,
    date: "2026-02-09",
    weekTitle: "Genesis 11",
    reference: "Genesis 11:4",
    text: "And they said, Go to, let us build us a city and a tower, whose top may reach unto heaven; and let us make us a name, lest we be scattered abroad upon the face of the whole earth.",
    context: "The Tower of Babel represents humanity's attempt to reach heaven through their own efforts rather than through God's appointed way. Their desire to 'make a name' showed pride replacing reliance on God.",
    historicalBackground: "Babel was located in ancient Mesopotamia (modern Iraq). Ziggurats were common temple towers in this region. The confusion of languages fulfilled God's command for humanity to spread across the earth.",
    citations: [
      { title: "Bible Dictionary: Babel", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/babel?lang=eng" },
      { title: "Ether 1:33–37", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/1?lang=eng&id=p33-p37#p33" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/11?lang=eng&id=p4#p4"
  },
  {
    id: 7,
    date: "2026-02-16",
    weekTitle: "Genesis 12–14; Abraham 1–2",
    reference: "Abraham 2:11",
    text: "And I will bless them that bless thee, and curse them that curse thee; and in thee (that is, in thy Priesthood) and in thy seed (that is, thy Priesthood), for I give unto thee a promise that this right shall continue in thee, and in thy seed after thee.",
    context: "This is the Abrahamic covenant, promising that through Abraham's posterity, all nations would be blessed. The parenthetical additions clarify that the priesthood is central to this blessing.",
    historicalBackground: "Abraham lived approximately 2,000 years before Christ. He was called out of Ur of the Chaldees, a sophisticated city-state in Mesopotamia. This covenant established Israel as a covenant people.",
    citations: [
      { title: "Bible Dictionary: Abraham, Covenant of", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/abraham-covenant-of?lang=eng" },
      { title: "Gospel Topics: Abrahamic Covenant", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/abrahamic-covenant?lang=eng" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/2?lang=eng&id=p11#p11"
  },
  {
    id: 8,
    date: "2026-02-23",
    weekTitle: "Genesis 15–17; Abraham 3",
    reference: "Abraham 3:22-23",
    text: "Now the Lord had shown unto me, Abraham, the intelligences that were organized before the world was; and among all these there were many of the noble and great ones; And God saw these souls that they were good, and he stood in the midst of them.",
    context: "This vision revealed the premortal existence and the council in heaven where noble spirits were chosen for leadership roles on earth. It teaches that we existed as spirits before this life.",
    historicalBackground: "This revelation to Abraham provides unique doctrine about premortal life not found elsewhere in scripture. It helps us understand our eternal nature and divine potential.",
    citations: [
      { title: "Gospel Topics: Premortal Life", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/premortality?lang=eng" },
      { title: "D&C 138:53–56", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/138?lang=eng&id=p53-p56#p53" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng&id=p22-p23#p22"
  },
  {
    id: 9,
    date: "2026-03-02",
    weekTitle: "Genesis 18–19",
    reference: "Genesis 18:14",
    text: "Is any thing too hard for the Lord? At the time appointed I will return unto thee, according to the time of life, and Sarah shall have a son.",
    context: "This rhetorical question affirms God's unlimited power. Despite Sarah's old age and initial doubt, God's promise was fulfilled with Isaac's birth, demonstrating that divine promises are certain.",
    historicalBackground: "Abraham was 100 and Sarah was 90 when Isaac was born. The name Isaac means 'laughter,' commemorating Sarah's reaction. This miracle established the covenant line through which the Savior would come.",
    citations: [
      { title: "Bible Dictionary: Isaac", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/isaac?lang=eng" },
      { title: "Jeremiah 32:17, 27", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/jer/32?lang=eng&id=p17,p27#p17" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/18?lang=eng&id=p14#p14"
  },
  {
    id: 10,
    date: "2026-03-09",
    weekTitle: "Genesis 20–22",
    reference: "Genesis 22:12",
    text: "And he said, Lay not thine hand upon the lad, neither do thou any thing unto him: for now I know that thou fearest God, seeing thou hast not withheld thy son, thine only son from me.",
    context: "Abraham's willingness to sacrifice Isaac demonstrated complete faith and obedience. This event prefigured God the Father's sacrifice of His Only Begotten Son, with Isaac carrying wood as Christ carried His cross.",
    historicalBackground: "Mount Moriah, where this occurred, later became the site of Solomon's temple and is traditionally associated with Golgotha where Christ was crucified. The ram caught in the thicket symbolized the future Lamb of God.",
    citations: [
      { title: "Jacob 4:5", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/4?lang=eng&id=p5#p5" },
      { title: "Bible Dictionary: Moriah", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/moriah?lang=eng" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/22?lang=eng&id=p12#p12"
  },
  {
    id: 11,
    date: "2026-03-16",
    weekTitle: "Genesis 23–25",
    reference: "Genesis 24:27",
    text: "And he said, Blessed be the Lord God of my master Abraham, who hath not left destitute my master of his mercy and his truth: I being in the way, the Lord led me to the house of my master's brethren.",
    context: "Abraham's servant recognized God's guidance in finding Rebekah for Isaac. The phrase 'I being in the way' shows that when we are actively doing God's will, He directs our paths.",
    historicalBackground: "Marriage within the covenant family was essential to preserve the Abrahamic lineage. The servant traveled over 500 miles to Haran to find a wife for Isaac, trusting in God's direction.",
    citations: [
      { title: "Bible Dictionary: Rebekah", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/rebekah?lang=eng" },
      { title: "Proverbs 3:5–6", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/prov/3?lang=eng&id=p5-p6#p5" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/24?lang=eng&id=p27#p27"
  },
  {
    id: 12,
    date: "2026-03-23",
    weekTitle: "Genesis 26–27",
    reference: "Genesis 26:24",
    text: "And the Lord appeared unto him the same night, and said, I am the God of Abraham thy father: fear not, for I am with thee, and will bless thee, and multiply thy seed for my servant Abraham's sake.",
    context: "God reaffirmed the Abrahamic covenant to Isaac, assuring him of divine protection and blessing. This shows that covenant blessings pass through righteous generations.",
    historicalBackground: "Isaac lived during a time of famine and conflict with the Philistines over water rights. Despite these challenges, God prospered him greatly, causing even his enemies to seek peace with him.",
    citations: [
      { title: "Bible Dictionary: Isaac", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/isaac?lang=eng" },
      { title: "Genesis 26:12–14", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/26?lang=eng&id=p12-p14#p12" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/26?lang=eng&id=p24#p24"
  },
  {
    id: 13,
    date: "2026-03-30",
    weekTitle: "Genesis 28–30",
    reference: "Genesis 28:12",
    text: "And he dreamed, and behold a ladder set up on the earth, and the top of it reached to heaven: and behold the angels of God ascending and descending on it.",
    context: "Jacob's ladder represents the connection between heaven and earth, showing that God communicates with His children. The ascending and descending angels symbolize ongoing revelation and divine assistance.",
    historicalBackground: "This dream occurred at Bethel (meaning 'house of God'), which Jacob named after this experience. The site became sacred and was later significant in Israelite worship. The ladder symbolizes the temple and covenants.",
    citations: [
      { title: "Bible Dictionary: Bethel", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/bethel?lang=eng" },
      { title: "John 1:51", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/1?lang=eng&id=p51#p51" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/28?lang=eng&id=p12#p12"
  },
  {
    id: 14,
    date: "2026-04-06",
    weekTitle: "Genesis 31–33",
    reference: "Genesis 32:28",
    text: "And he said, Thy name shall be called no more Jacob, but Israel: for as a prince hast thou power with God and with men, and hast prevailed.",
    context: "Jacob's new name Israel means 'one who prevails with God' or 'prince of God.' This renaming marked his spiritual transformation and his role as patriarch of the covenant people.",
    historicalBackground: "This occurred at Peniel after Jacob wrestled with a divine messenger. The experience prepared him to reconcile with Esau and assume his role as father of the twelve tribes.",
    citations: [
      { title: "Bible Dictionary: Israel", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/israel?lang=eng" },
      { title: "Genesis 35:9–12", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/35?lang=eng&id=p9-p12#p9" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/32?lang=eng&id=p28#p28"
  },
  {
    id: 15,
    date: "2026-04-13",
    weekTitle: "Genesis 34–36",
    reference: "Genesis 35:2-3",
    text: "Then Jacob said unto his household, and to all that were with him, Put away the strange gods that are among you, and be clean, and change your garments: And let us arise, and go up to Beth-el.",
    context: "Before returning to Bethel, Jacob called his family to spiritual purification. Putting away false gods and changing garments symbolized repentance and covenant renewal.",
    historicalBackground: "Jacob's family had accumulated idols during their time with Laban. This cleansing prepared them to worship at Bethel, where God had first appeared to Jacob in his dream of the ladder.",
    citations: [
      { title: "Joshua 24:14–15", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/josh/24?lang=eng&id=p14-p15#p14" },
      { title: "Alma 5:57", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/5?lang=eng&id=p57#p57" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/35?lang=eng&id=p2-p3#p2"
  },
  {
    id: 16,
    date: "2026-04-20",
    weekTitle: "Genesis 37–38",
    reference: "Genesis 37:5",
    text: "And Joseph dreamed a dream, and he told it his brethren: and they hated him yet the more.",
    context: "Joseph's prophetic dreams revealed his future leadership over his family. Though initially causing jealousy, these dreams were fulfilled when Joseph saved his family during famine.",
    historicalBackground: "Joseph was Jacob's eleventh son and Rachel's firstborn. His coat of many colors signified his father's favor. He was seventeen when sold into Egypt, beginning a journey that would preserve Israel.",
    citations: [
      { title: "Bible Dictionary: Joseph", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/joseph?lang=eng" },
      { title: "2 Nephi 3:4–5", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/3?lang=eng&id=p4-p5#p4" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/37?lang=eng&id=p5#p5"
  },
  {
    id: 17,
    date: "2026-04-27",
    weekTitle: "Genesis 39–40",
    reference: "Genesis 39:9",
    text: "How then can I do this great wickedness, and sin against God?",
    context: "Joseph's response to Potiphar's wife demonstrates that true integrity comes from our relationship with God, not fear of human consequences. He recognized sin as offense against God.",
    historicalBackground: "Joseph served in Potiphar's house for approximately ten years before this incident. His refusal led to imprisonment, but his faithfulness positioned him for greater blessings.",
    citations: [
      { title: "Gospel Topics: Chastity", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/chastity?lang=eng" },
      { title: "Psalm 51:4", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ps/51?lang=eng&id=p4#p4" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/39?lang=eng&id=p9#p9"
  },
  {
    id: 18,
    date: "2026-05-04",
    weekTitle: "Genesis 41",
    reference: "Genesis 41:16",
    text: "And Joseph answered Pharaoh, saying, It is not in me: God shall give Pharaoh an answer of peace.",
    context: "Joseph deflected glory to God, acknowledging that his ability to interpret dreams came from divine power. This humility, combined with wisdom, led to his elevation as ruler of Egypt.",
    historicalBackground: "Joseph was thirty years old when he stood before Pharaoh, having spent thirteen years in servitude and prison. Egypt's Pharaoh was considered divine, yet Joseph boldly testified of the true God.",
    citations: [
      { title: "Daniel 2:27–28", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/dan/2?lang=eng&id=p27-p28#p27" },
      { title: "1 Corinthians 1:31", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/1?lang=eng&id=p31#p31" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/41?lang=eng&id=p16#p16"
  },
  {
    id: 19,
    date: "2026-05-11",
    weekTitle: "Genesis 42–43",
    reference: "Genesis 42:21",
    text: "And they said one to another, We are verily guilty concerning our brother, in that we saw the anguish of his soul, when he besought us, and we would not hear; therefore is this distress come upon us.",
    context: "Joseph's brothers recognized their past sin when facing their own distress. This acknowledgment was the beginning of their repentance and the eventual reconciliation with Joseph.",
    historicalBackground: "Over twenty years had passed since the brothers sold Joseph. Their guilty consciences had carried this burden, showing that unrepented sin continues to afflict us until we make things right.",
    citations: [
      { title: "Alma 36:12–14", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/36?lang=eng&id=p12-p14#p12" },
      { title: "Gospel Topics: Repentance", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/repentance?lang=eng" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/42?lang=eng&id=p21#p21"
  },
  {
    id: 20,
    date: "2026-05-18",
    weekTitle: "Genesis 44–45",
    reference: "Genesis 45:5",
    text: "Now therefore be not grieved, nor angry with yourselves, that ye sold me hither: for God did send me before you to preserve life.",
    context: "Joseph's perspective transformed personal tragedy into divine providence. He saw God's hand in his suffering, using it to save many lives including his own family.",
    historicalBackground: "Joseph revealed his identity after testing his brothers' changed hearts through Benjamin. His forgiveness models Christ's mercy toward those who repent.",
    citations: [
      { title: "Romans 8:28", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/rom/8?lang=eng&id=p28#p28" },
      { title: "D&C 122:7", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/122?lang=eng&id=p7#p7" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/45?lang=eng&id=p5#p5"
  },
  {
    id: 21,
    date: "2026-05-25",
    weekTitle: "Genesis 46–47",
    reference: "Genesis 46:3",
    text: "And he said, I am God, the God of thy father: fear not to go down into Egypt; for I will there make of thee a great nation.",
    context: "God reassured Jacob about relocating to Egypt, promising that this move was part of His plan for Israel's growth. What seemed like leaving the promised land was actually preparation for the Exodus.",
    historicalBackground: "Jacob was 130 years old when he moved to Egypt. His family of 70 would grow into a nation of millions during their 400+ years in Egypt before the Exodus.",
    citations: [
      { title: "Acts 7:14–17", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/acts/7?lang=eng&id=p14-p17#p14" },
      { title: "Bible Dictionary: Egypt", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/egypt?lang=eng" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/46?lang=eng&id=p3#p3"
  },
  {
    id: 22,
    date: "2026-06-01",
    weekTitle: "Genesis 48–49",
    reference: "Genesis 49:10",
    text: "The sceptre shall not depart from Judah, nor a lawgiver from between his feet, until Shiloh come; and unto him shall the gathering of the people be.",
    context: "This prophecy foretold that the Messiah (Shiloh) would come through Judah's lineage. It was fulfilled in Jesus Christ, to whom all people will ultimately gather.",
    historicalBackground: "Jacob's blessing on his twelve sons established the destiny of each tribe. Judah received the promise of kingship, fulfilled in David's dynasty and ultimately in Christ.",
    citations: [
      { title: "Bible Dictionary: Shiloh", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/shiloh?lang=eng" },
      { title: "Matthew 1:1–3", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/1?lang=eng&id=p1-p3#p1" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/49?lang=eng&id=p10#p10"
  },
  {
    id: 23,
    date: "2026-06-08",
    weekTitle: "Genesis 50",
    reference: "Genesis 50:20",
    text: "But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive.",
    context: "Joseph summarized his life's trials with profound faith, recognizing that God can transform evil intentions into instruments of His purposes. This principle applies to all adversity.",
    historicalBackground: "After Jacob's death, the brothers feared Joseph's revenge. His reassurance demonstrated complete forgiveness and trust in God's overarching plan for good.",
    citations: [
      { title: "2 Nephi 2:2", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=eng&id=p2#p2" },
      { title: "D&C 100:15", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/100?lang=eng&id=p15#p15" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/50?lang=eng&id=p20#p20"
  },
  {
    id: 24,
    date: "2026-06-15",
    weekTitle: "Exodus 1–2",
    reference: "Exodus 2:24-25",
    text: "And God heard their groaning, and God remembered his covenant with Abraham, with Isaac, and with Jacob. And God looked upon the children of Israel, and God had respect unto them.",
    context: "God's 'remembering' means He was ready to act on His promises. Though Israel suffered for generations, God's covenant faithfulness ensured their deliverance.",
    historicalBackground: "Approximately 400 years had passed since Joseph. Israel had grown from 70 people to perhaps 2 million. A new dynasty arose that did not honor Joseph's legacy, leading to enslavement.",
    citations: [
      { title: "Bible Dictionary: Exodus", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/exodus?lang=eng" },
      { title: "Acts 7:17–19", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/acts/7?lang=eng&id=p17-p19#p17" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/2?lang=eng&id=p24-p25#p24"
  },
  {
    id: 25,
    date: "2026-06-22",
    weekTitle: "Exodus 3–4",
    reference: "Exodus 3:14",
    text: "And God said unto Moses, I AM THAT I AM: and he said, Thus shalt thou say unto the children of Israel, I AM hath sent me unto you.",
    context: "The divine name 'I AM' (YHWH/Jehovah) expresses God's eternal, self-existent nature. This name became sacred to Israel and connects to Jesus declaring 'Before Abraham was, I am.'",
    historicalBackground: "Moses was 80 years old at the burning bush, having spent 40 years in Midian after fleeing Egypt. This divine commission launched the Exodus and established Moses as Israel's greatest prophet.",
    citations: [
      { title: "Bible Dictionary: Jehovah", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/jehovah?lang=eng" },
      { title: "John 8:58", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/8?lang=eng&id=p58#p58" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/3?lang=eng&id=p14#p14"
  },
  {
    id: 26,
    date: "2026-06-29",
    weekTitle: "Exodus 5–6",
    reference: "Exodus 6:7",
    text: "And I will take you to me for a people, and I will be to you a God: and ye shall know that I am the Lord your God, which bringeth you out from under the burdens of the Egyptians.",
    context: "This verse contains the essence of God's covenant relationship: 'I will be your God, and you will be my people.' The Exodus would demonstrate His power and establish this bond.",
    historicalBackground: "Moses and Aaron had just faced Pharaoh, whose refusal increased Israel's burdens. God's reaffirmation of His covenant encouraged them before the plagues began.",
    citations: [
      { title: "Jeremiah 31:33", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/jer/31?lang=eng&id=p33#p33" },
      { title: "Bible Dictionary: Covenant", url: "https://www.churchofjesuschrist.org/study/scriptures/bd/covenant?lang=eng" }
    ],
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot/ex/6?lang=eng&id=p7#p7"
  }
];

export const getScriptureForDate = (dateString: string): Scripture | undefined => {
  return scriptures.find((scripture) => scripture.date === dateString);
};

export const getAvailableScriptureDates = (): string[] => {
  return scriptures.map((scripture) => scripture.date);
};

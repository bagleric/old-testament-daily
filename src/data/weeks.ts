import { parseISO, format, addDays, isWithinInterval, startOfDay } from "date-fns";

export interface ScriptureReading {
  reference: string;
  url: string;
}

export interface Week {
  id: string;
  startDate: string; // YYYY-MM-DD format (Monday of the week)
  endDate: string; // YYYY-MM-DD format (Sunday of the week)
  title: string; // Main topic/theme
  lessonUrl: string;
  scriptures: ScriptureReading[];
}

// Come Follow Me 2026 Old Testament weeks
export const weeks: Week[] = [
  {
    id: "week-2026-01",
    startDate: "2026-01-01",
    endDate: "2026-01-04",
    title: "Introductory Week",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/01?lang=eng",
    scriptures: [
      { reference: "Moses 1", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1?lang=eng" }
    ]
  },
  {
    id: "week-2026-02",
    startDate: "2026-01-05",
    endDate: "2026-01-11",
    title: "Moses 1; Abraham 3",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/02?lang=eng",
    scriptures: [
      { reference: "Moses 1", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1?lang=eng" },
      { reference: "Abraham 3", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/3?lang=eng" }
    ]
  },
  {
    id: "week-2026-03",
    startDate: "2026-01-12",
    endDate: "2026-01-18",
    title: "The Creation",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/03?lang=eng",
    scriptures: [
      { reference: "Genesis 1–2", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/1?lang=eng" },
      { reference: "Moses 2–3", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/2?lang=eng" },
      { reference: "Abraham 4–5", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/abr/4?lang=eng" }
    ]
  },
  {
    id: "week-2026-04",
    startDate: "2026-01-19",
    endDate: "2026-01-25",
    title: "The Fall",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/04?lang=eng",
    scriptures: [
      { reference: "Genesis 3–4", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/3?lang=eng" },
      { reference: "Moses 4–5", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/4?lang=eng" }
    ]
  },
  {
    id: "week-2026-05",
    startDate: "2026-01-26",
    endDate: "2026-02-01",
    title: "Enoch and Zion",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/05?lang=eng",
    scriptures: [
      { reference: "Moses 6–7", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/6?lang=eng" }
    ]
  },
  {
    id: "week-2026-06",
    startDate: "2026-02-02",
    endDate: "2026-02-08",
    title: "The Patriarchs and Noah's Calling",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/06?lang=eng",
    scriptures: [
      { reference: "Genesis 5", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/5?lang=eng" },
      { reference: "Moses 8", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/8?lang=eng" }
    ]
  },
  {
    id: "week-2026-07",
    startDate: "2026-02-09",
    endDate: "2026-02-15",
    title: "The Flood",
    lessonUrl: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/07?lang=eng",
    scriptures: [
      { reference: "Genesis 6–7", url: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/6?lang=eng" },
      { reference: "Moses 8", url: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/8?lang=eng" }
    ]
  }
];

// Get all available weeks
export function getAvailableWeeks(): Week[] {
  return weeks;
}

// Get a week by its ID
export function getWeekById(weekId: string): Week | undefined {
  return weeks.find(w => w.id === weekId);
}

// Get the week that contains a specific date
export function getWeekForDate(dateString: string): Week | undefined {
  const date = startOfDay(parseISO(dateString));
  return weeks.find(week => {
    const start = startOfDay(parseISO(week.startDate));
    const end = startOfDay(parseISO(week.endDate));
    return isWithinInterval(date, { start, end });
  });
}

// Get all dates within a week
export function getDatesInWeek(week: Week): string[] {
  const dates: string[] = [];
  const start = parseISO(week.startDate);
  const end = parseISO(week.endDate);
  
  let current = start;
  while (current <= end) {
    dates.push(format(current, "yyyy-MM-dd"));
    current = addDays(current, 1);
  }
  
  return dates;
}

// Find the current week or the first available week
export function findInitialWeek(): Week {
  const today = new Date();
  const todayString = format(today, "yyyy-MM-dd");
  
  // Check if today falls within any week
  const todayWeek = getWeekForDate(todayString);
  if (todayWeek) return todayWeek;
  
  // Otherwise, return the first available week
  return weeks[0];
}

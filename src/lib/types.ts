export interface Scripture {
  reference: string;
  url: string;
}

export interface Reference {
  display: string;
  url: string;
}

export interface Doctrine {
  doctrine: string;
  summary: string;
  explanation: string;
  references: Reference[];
  scriptures: Scripture[];
}

export interface ScripturePassage {
  reference: Scripture;
  text: string;
  context: string;
  historicalBackground: string;
  citations: Reference[];
}

export interface Question {
  scriptureReference: Scripture;
  lessonUrl: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  references: Reference[];
}

export interface Word {
  id: string;
  date: string;
  weekTitle: string;
  word: string;
  definition: string;
  context: string;
  scriptures: Scripture[];
}

export interface Day {
  id: string;
  date: string;
  doctrine: Doctrine | null;
  questions: Question[];
  scripturePassage: ScripturePassage|null;
  word: Word|null; 
}

export interface Person {
  name: string;
  role: string;
  description: string;
  scriptureReferences: Scripture[];
  citations: Reference[];
}


export type LocationType = "confirmed" | "probable" | "uncertain" | "symbolic";

export interface Place {
  name: string;
  modernLocation: string;
  locationType: LocationType;
  description: string;
  scriptureReferences: Scripture[];
  citations: Reference[];
}

export interface Week {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  lessonUrl: string;
  scriptures: Scripture[];
  days: Day[];
  places: Place[];
  people: Person[];
}

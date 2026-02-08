import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { weeksNested } from "@/data/weeksNested";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWeeks(): typeof weeksNested {
  return weeksNested;
}

export function getWeek(date: Date): typeof weeksNested[number] | undefined {
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);

  return getWeeks().find((week) => {
    const startDate = new Date(week.startDate);
    const endDate = new Date(week.endDate);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    return targetDate >= startDate && targetDate <= endDate;
  });
}

export function getDay(date: Date): typeof weeksNested[number]["days"][number] | undefined {
  const week = getWeek(date);
  if (!week) return undefined;

  const dateString = date.toISOString().split("T")[0];
  return week.days.find((day) => day.date === dateString);
}

export function getInitialWeek(): typeof weeksNested[number] | undefined {
  return weeksNested[0];
}

export function getDatesInWeek(selectedWeek: typeof weeksNested[number]): string[] {
  return selectedWeek.days.map((day) => day.date);
}




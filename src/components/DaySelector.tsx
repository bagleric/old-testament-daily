import { format, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DaySelectorProps {
  dates: string[]; // Array of YYYY-MM-DD dates in the week
  selectedDate: string;
  onDateChange: (date: string) => void;
}

export function DaySelector({ dates, selectedDate, onDateChange }: DaySelectorProps) {
  // Guard against empty dates or selectedDate
  if (!dates.length || !selectedDate) {
    return null;
  }

  const currentIndex = dates.indexOf(selectedDate);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < dates.length - 1;

  const navigateDate = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && canGoPrev) {
      onDateChange(dates[currentIndex - 1]);
    } else if (direction === 'next' && canGoNext) {
      onDateChange(dates[currentIndex + 1]);
    }
  };

  const selectedDateObj = parseISO(selectedDate);

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Day buttons for quick navigation */}
      <div className="flex items-center gap-1 flex-wrap justify-center">
        {dates.map((date) => {
          const dateObj = parseISO(date);
          const isSelected = date === selectedDate;
          const dayName = format(dateObj, "EEE");
          const dayNum = format(dateObj, "d");
          
          return (
            <Button
              key={date}
              variant={isSelected ? "default" : "ghost"}
              size="sm"
              onClick={() => onDateChange(date)}
              className={cn(
                "flex flex-col h-auto py-2 px-3 min-w-[60px]",
                isSelected && "bg-primary text-primary-foreground"
              )}
            >
              <span className="text-xs font-normal opacity-80">{dayName}</span>
              <span className="text-lg font-semibold">{dayNum}</span>
            </Button>
          );
        })}
      </div>

      {/* Arrow navigation for mobile */}
      <div className="flex items-center gap-4 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateDate('prev')}
          disabled={!canGoPrev}
          className="rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <span className="text-sm font-medium text-muted-foreground">
          {format(selectedDateObj, "EEEE, MMMM d")}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateDate('next')}
          disabled={!canGoNext}
          className="rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

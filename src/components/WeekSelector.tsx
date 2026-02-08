import { useState } from "react";
import { format, parseISO } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { cn, getWeek, getWeeks } from "@/lib/utils";
import { Week } from "@/lib/types";

interface WeekSelectorProps {
  selectedWeek: Week;
  onWeekChange: (week: Week) => void;
}

export function WeekSelector({ selectedWeek, onWeekChange }: WeekSelectorProps) {
  const [open, setOpen] = useState(false);
  const availableWeeks = getWeeks();

  const currentIndex = availableWeeks.findIndex(w => w.id === selectedWeek.id);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < availableWeeks.length - 1;

  const navigateWeek = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && canGoPrev) {
      onWeekChange(availableWeeks[currentIndex - 1]);
    } else if (direction === 'next' && canGoNext) {
      onWeekChange(availableWeeks[currentIndex + 1]);
    }
  };

  // Check if a date is the start of any week
  const isWeekStart = (date: Date) => {
    const dateString = format(date, "yyyy-MM-dd");
    return availableWeeks.some(w => w.startDate === dateString);
  };

  // Handle calendar selection
  const handleCalendarSelect = (date: Date | undefined) => {
    if (!date) return;
    
    const week = getWeek(date);
    if (week) {
      onWeekChange(week);
      setOpen(false);
    }
  };

  // Check if a date falls within any available week
  const isDateInAnyWeek = (date: Date) => {
    return !!getWeek(date);
  };

  const formatWeekRange = (week: Week) => {
    const start = parseISO(week.startDate);
    const end = parseISO(week.endDate);
    return `${format(start, "MMM d")} – ${format(end, "MMM d, yyyy")}`;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigateWeek('prev')}
        disabled={!canGoPrev}
        className="rounded-full"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "min-w-[240px] justify-center gap-2 rounded-full",
              "bg-background/50 backdrop-blur-sm border-border/50",
              "hover:bg-background/80"
            )}
          >
            <CalendarDays className="w-4 h-4 text-primary" />
            <span className="font-medium">
              {formatWeekRange(selectedWeek)}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            mode="single"
            selected={parseISO(selectedWeek.startDate)}
            onSelect={handleCalendarSelect}
            disabled={(date) => !isDateInAnyWeek(date)}
            modifiers={{
              weekStart: (date) => isWeekStart(date)
            }}
            modifiersClassNames={{
              weekStart: "bg-primary/20 font-bold"
            }}
            initialFocus
            className="pointer-events-auto"
          />
        </PopoverContent>
      </Popover>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigateWeek('next')}
        disabled={!canGoNext}
        className="rounded-full"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
}

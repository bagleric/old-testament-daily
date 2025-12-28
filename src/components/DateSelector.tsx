import { useState } from "react";
import { format, parseISO, isValid } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { getAvailableDates } from "@/data/questions";
import { cn } from "@/lib/utils";

interface DateSelectorProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export function DateSelector({ selectedDate, onDateChange }: DateSelectorProps) {
  const [open, setOpen] = useState(false);
  const availableDates = getAvailableDates();

  const isDateAvailable = (date: Date) => {
    const dateString = format(date, "yyyy-MM-dd");
    return availableDates.includes(dateString);
  };

  const navigateDate = (direction: 'prev' | 'next') => {
    const currentIndex = availableDates.indexOf(format(selectedDate, "yyyy-MM-dd"));
    if (direction === 'prev' && currentIndex > 0) {
      const newDate = parseISO(availableDates[currentIndex - 1]);
      if (isValid(newDate)) onDateChange(newDate);
    } else if (direction === 'next' && currentIndex < availableDates.length - 1) {
      const newDate = parseISO(availableDates[currentIndex + 1]);
      if (isValid(newDate)) onDateChange(newDate);
    }
  };

  const currentIndex = availableDates.indexOf(format(selectedDate, "yyyy-MM-dd"));
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < availableDates.length - 1;

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigateDate('prev')}
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
              "min-w-[200px] justify-center gap-2 rounded-full",
              "bg-background/50 backdrop-blur-sm border-border/50",
              "hover:bg-background/80"
            )}
          >
            <CalendarDays className="w-4 h-4 text-primary" />
            <span className="font-medium">
              {format(selectedDate, "MMMM d, yyyy")}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              if (date && isDateAvailable(date)) {
                onDateChange(date);
                setOpen(false);
              }
            }}
            disabled={(date) => !isDateAvailable(date)}
            initialFocus
            className="pointer-events-auto"
          />
        </PopoverContent>
      </Popover>

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
  );
}

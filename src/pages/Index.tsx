import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { QuizCard } from "@/components/QuizCard";
import { DateSelector } from "@/components/DateSelector";
import { getQuestionForDate, questions } from "@/data/questions";
import { BookOpen } from "lucide-react";

const Index = () => {
  // Find today's date or the closest available date
  const findInitialDate = () => {
    const today = new Date();
    const todayString = format(today, "yyyy-MM-dd");
    
    // Check if today has a question
    const todayQuestion = getQuestionForDate(todayString);
    if (todayQuestion) return today;
    
    // Otherwise, use the first available question date
    if (questions.length > 0) {
      return parseISO(questions[0].date);
    }
    
    return today;
  };

  const [selectedDate, setSelectedDate] = useState<Date>(findInitialDate);
  const [key, setKey] = useState(0);

  const question = getQuestionForDate(format(selectedDate, "yyyy-MM-dd"));

  // Reset quiz when date changes
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [selectedDate]);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="pt-8 pb-4 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground">
              Come, Follow Me
            </h1>
          </div>
          <p className="text-muted-foreground font-sans">
            Old Testament Daily Quiz • 2026
          </p>
        </div>
      </header>

      {/* Date Selector */}
      <div className="py-6 px-4">
        <DateSelector 
          selectedDate={selectedDate} 
          onDateChange={setSelectedDate} 
        />
      </div>

      {/* Main Content */}
      <main className="px-4 pb-12">
        {question ? (
          <QuizCard key={key} question={question} />
        ) : (
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <BookOpen className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h2 className="font-serif text-2xl text-foreground mb-2">
                No Question Available
              </h2>
              <p className="text-muted-foreground">
                There's no quiz question for this date. Try selecting a different day from the calendar.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border/50">
        <p className="text-center text-sm text-muted-foreground">
          Based on the Come, Follow Me curriculum for The Church of Jesus Christ of Latter-day Saints
        </p>
      </footer>
    </div>
  );
};

export default Index;

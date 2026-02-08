import { useState, useEffect } from "react";
import { format } from "date-fns";
import { BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuizCard } from "@/components/QuizCard";
import { WordCard } from "@/components/WordCard";
import { DoctrineCard } from "@/components/DoctrineCard";
import { ScriptureCard } from "@/components/ScriptureCard";
import { WeekSelector } from "@/components/WeekSelector";
import { DaySelector } from "@/components/DaySelector";
import { WeeklyHeader } from "@/components/WeeklyHeader";
import { getDatesInWeek, getDay, getInitialWeek, getWeek } from "@/lib/utils";
import { Week } from "@/lib/types";

const Index = () => {
  const [selectedWeek, setSelectedWeek] = useState<Week>(getWeek(new Date()) || getInitialWeek());
  const [datesInWeek, setDatesInWeek] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [quizKey, setQuizKey] = useState(0);

  // Update dates when week changes
  useEffect(() => {
    const dates = getDatesInWeek(selectedWeek);
    setDatesInWeek(dates);
    
    // Check if today is in this week, otherwise default to first date
    const today = format(new Date(), "yyyy-MM-dd");
    if (dates.includes(today)) {
      setSelectedDate(today);
    } else if (dates.length > 0) {
      setSelectedDate(dates[0]);
    }
  }, [selectedWeek]);

  // Reset quiz when date changes
  useEffect(() => {
    setQuizKey(prev => prev + 1);
  }, [selectedDate]);

  // Get nested day data for selected date (preferred)
  const day = getDay(new Date(selectedDate));
  const question = day?.questions?.[0];
  const doctrine = day?.doctrine || null;
  const scripture = day?.scripturePassage || null;
  const word = day?.word;
  
  // Weekly people/places are now nested on the `selectedWeek` object
  const people = selectedWeek.people || [];
  const places = selectedWeek.places || [];

  const EmptyState = ({ title }: { title: string }) => (
    <div className="text-center py-8">
      <div className="bg-muted/50 rounded-xl p-6">
        <BookOpen className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
        <h3 className="font-serif text-lg text-foreground mb-1">
          No {title} Available
        </h3>
        <p className="text-sm text-muted-foreground">
          Try selecting a different day.
        </p>
      </div>
    </div>
  );

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
            Old Testament Daily Study • 2026
          </p>
        </div>
      </header>

      {/* Week Selector */}
      <div className="py-4 px-4">
        <WeekSelector 
          selectedWeek={selectedWeek} 
          onWeekChange={setSelectedWeek} 
        />
      </div>

      {/* Main Content */}
      <main className="px-4 pb-12">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Weekly Header with topic, scriptures, people, places */}
          <WeeklyHeader 
            week={selectedWeek} 
            people={people} 
            places={places} 
          />

          {/* Day Selector */}
          <div className="py-4">
            <DaySelector
              dates={datesInWeek}
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
            />
          </div>

          {/* Daily Content Tabs */}
          <div className="bg-gradient-card rounded-2xl p-4 md:p-6 shadow-card">
            <Tabs defaultValue="scripture" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-4">
                <TabsTrigger value="scripture">Scripture</TabsTrigger>
                <TabsTrigger value="question">Question</TabsTrigger>
                <TabsTrigger value="doctrine">Doctrine</TabsTrigger>
                <TabsTrigger value="word">Word</TabsTrigger>
              </TabsList>
              
              <TabsContent value="scripture" className="mt-0">
                {scripture ? (
                  <ScriptureCard scripture={scripture} />
                ) : (
                  <EmptyState title="Scripture" />
                )}
              </TabsContent>
              
              <TabsContent value="question" className="mt-0">
                {question ? (
                  <QuizCard key={quizKey} question={question} />
                ) : (
                  <EmptyState title="Question" />
                )}
              </TabsContent>
              
              <TabsContent value="doctrine" className="mt-0">
                {doctrine ? (
                  <DoctrineCard doctrine={doctrine} />
                ) : (
                  <EmptyState title="Doctrine" />
                )}
              </TabsContent>
              
              <TabsContent value="word" className="mt-0">
                {word ? (
                  <WordCard word={word} />
                ) : (
                  <EmptyState title="Word" />
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
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

import { useState } from "react";
import { Question } from "@/data/questions";
import { cn } from "@/lib/utils";
import { Check, X, BookOpen } from "lucide-react";

interface QuizCardProps {
  question: Question;
  onAnswerSelected?: (correct: boolean) => void;
}

export function QuizCard({ question, onAnswerSelected }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    onAnswerSelected?.(index === question.correctAnswer);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-sm text-muted-foreground mb-4">
          <BookOpen className="w-4 h-4" />
          <span>{question.weekTitle}</span>
        </div>
        <p className="scripture-reference text-lg">
          {question.scriptureReference}
        </p>
      </div>

      {/* Question Card */}
      <div className={cn(
        "rounded-2xl p-8 shadow-card transition-all duration-500",
        showResult && isCorrect && "bg-gradient-correct",
        showResult && !isCorrect && "bg-gradient-incorrect",
        !showResult && "bg-gradient-card"
      )}>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === question.correctAnswer;
            
            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showResult}
                className={cn(
                  "w-full text-left p-4 rounded-xl border-2 transition-all duration-300",
                  "hover:shadow-soft hover:scale-[1.01] active:scale-[0.99]",
                  "disabled:cursor-default disabled:hover:scale-100",
                  !showResult && "border-border bg-background hover:border-primary/30",
                  showResult && isCorrectAnswer && "border-success bg-success/10",
                  showResult && isSelected && !isCorrectAnswer && "border-destructive bg-destructive/10",
                  showResult && !isSelected && !isCorrectAnswer && "border-border/50 opacity-50"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                    !showResult && "bg-secondary text-secondary-foreground",
                    showResult && isCorrectAnswer && "bg-success text-success-foreground",
                    showResult && isSelected && !isCorrectAnswer && "bg-destructive text-destructive-foreground"
                  )}>
                    {showResult && isCorrectAnswer ? (
                      <Check className="w-4 h-4" />
                    ) : showResult && isSelected && !isCorrectAnswer ? (
                      <X className="w-4 h-4" />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </div>
                  <span className={cn(
                    "flex-1 font-sans",
                    showResult && isCorrectAnswer && "font-medium"
                  )}>
                    {option}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className={cn(
            "mt-6 p-4 rounded-xl animate-fade-in",
            isCorrect ? "bg-success/10" : "bg-muted"
          )}>
            <p className="font-serif text-lg mb-2">
              {isCorrect ? "Correct!" : "Not quite..."}
            </p>
            <p className="text-muted-foreground">
              {question.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

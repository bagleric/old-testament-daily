import { Word } from "@/data/words";
import { BookOpenText, ExternalLink } from "lucide-react";

interface WordCardProps {
  word: Word;
}

export const WordCard = ({ word }: WordCardProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-card rounded-2xl p-6 md:p-8 shadow-card">
        {/* Week Title */}
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            {word.weekTitle}
          </span>
        </div>

        {/* Word */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <BookOpenText className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Word of the Day
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            {word.word}
          </h2>
        </div>

        {/* Definition */}
        <div className="mb-6">
          <h3 className="font-serif text-lg text-foreground mb-2">Definition</h3>
          <p className="text-muted-foreground leading-relaxed">
            {word.definition}
          </p>
        </div>

        {/* Context */}
        <div className="mb-6 bg-primary/5 rounded-xl p-4">
          <h3 className="font-serif text-lg text-foreground mb-2">In Context</h3>
          <p className="text-muted-foreground leading-relaxed italic">
            {word.context}
          </p>
        </div>

        {/* Related Scriptures */}
        <div>
          <h3 className="font-serif text-lg text-foreground mb-3">
            Related Scriptures
          </h3>
          <div className="space-y-2">
            {word.scriptures.map((scripture, index) => (
              <a
                key={index}
                href={scripture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-background/50 hover:bg-primary/5 rounded-lg transition-colors group"
              >
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {scripture.reference}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

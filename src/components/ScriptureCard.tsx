import { ExternalLink, BookOpen, History } from "lucide-react";
import { Scripture } from "@/data/scriptures";

interface ScriptureCardProps {
  scripture: Scripture;
}

export const ScriptureCard = ({ scripture }: ScriptureCardProps) => {
  return (
    <div className="bg-gradient-card rounded-2xl p-6 md:p-8 shadow-card">
      {/* Week Title */}
      <div className="text-sm text-primary font-medium mb-2">
        {scripture.weekTitle}
      </div>

      {/* Scripture Reference */}
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
        {scripture.reference}
      </h2>

      {/* Scripture Text */}
      <blockquote className="border-l-4 border-primary/30 pl-4 mb-6">
        <p className="text-foreground/90 italic text-lg leading-relaxed">
          "{scripture.text}"
        </p>
      </blockquote>

      {/* Context Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-4 h-4 text-primary" />
          <h3 className="font-semibold text-foreground">Context</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {scripture.context}
        </p>
      </div>

      {/* Historical Background Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <History className="w-4 h-4 text-primary" />
          <h3 className="font-semibold text-foreground">Historical Background</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {scripture.historicalBackground}
        </p>
      </div>

      {/* Scripture Link */}
      <a
        href={scripture.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
      >
        <span>Read in Gospel Library</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};

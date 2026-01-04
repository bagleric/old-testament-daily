import { Doctrine } from "@/data/doctrines";
import { BookHeart, ExternalLink } from "lucide-react";

interface DoctrineCardProps {
  doctrine: Doctrine;
}

export const DoctrineCard = ({ doctrine }: DoctrineCardProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-card rounded-2xl p-6 md:p-8 shadow-card">
        {/* Week Title */}
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            {doctrine.weekTitle}
          </span>
        </div>

        {/* Doctrine Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <BookHeart className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Doctrine of the Day
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
            {doctrine.doctrine}
          </h2>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h3 className="font-serif text-lg text-foreground mb-2">Summary</h3>
          <p className="text-muted-foreground leading-relaxed">
            {doctrine.summary}
          </p>
        </div>

        {/* Explanation */}
        <div className="mb-6 bg-primary/5 rounded-xl p-4">
          <h3 className="font-serif text-lg text-foreground mb-2">Explanation</h3>
          <p className="text-muted-foreground leading-relaxed">
            {doctrine.explanation}
          </p>
        </div>

        {/* References */}
        <div>
          <h3 className="font-serif text-lg text-foreground mb-3">
            References
          </h3>
          <div className="space-y-2">
            {doctrine.references.map((ref, index) => (
              <a
                key={index}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-background/50 hover:bg-primary/5 rounded-lg transition-colors group"
              >
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {ref.reference}
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

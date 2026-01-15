import { PeopleOfTheDay } from "@/data/people";
import { Users, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PeopleCardProps {
  peopleData: PeopleOfTheDay;
}

export const PeopleCard = ({ peopleData }: PeopleCardProps) => {
  return (
    <div className="bg-gradient-card rounded-2xl p-6 md:p-8 shadow-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Users className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="font-serif text-xl text-foreground">People of the Week</h2>
          <p className="text-sm text-muted-foreground">{peopleData.weekTitle}</p>
        </div>
      </div>

      <div className="space-y-6">
        {peopleData.people.map((person, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-serif text-lg text-foreground">{person.name}</h3>
              <Badge variant="secondary" className="text-xs">
                {person.role}
              </Badge>
            </div>
            
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
              {person.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {person.scriptureReferences.map((ref, refIndex) => (
                <span
                  key={refIndex}
                  className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                >
                  {ref}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border/50">
        <a
          href={peopleData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ExternalLink className="w-4 h-4" />
          View this week's lesson
        </a>
      </div>
    </div>
  );
};

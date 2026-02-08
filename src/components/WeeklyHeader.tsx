import { useState } from "react";
import { ExternalLink, BookOpen, Users, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import type { Person, Week,Place  } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface WeeklyHeaderProps {
  week: Week;
  people: Person[] | null;
  places: Place[] | null;
}

export function WeeklyHeader({ week, people, places }: WeeklyHeaderProps) {
  const [peopleOpen, setPeopleOpen] = useState(false);
  const [placesOpen, setPlacesOpen] = useState(false);

  return (
    <div className="bg-gradient-card rounded-2xl p-6 shadow-card space-y-6">
      {/* Week Title and Lesson Link */}
      <div className="text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
          {week.title}
        </h2>
        <a
          href={week.lessonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
        >
          <BookOpen className="w-4 h-4" />
          View Lesson
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Scriptures to Read */}
      <div className="flex flex-wrap justify-center gap-2">
        {week.scriptures.map((scripture, index) => (
          <a
            key={index}
            href={scripture.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-full text-sm font-medium text-primary transition-colors"
          >
            {scripture.reference}
            <ExternalLink className="w-3 h-3" />
          </a>
        ))}
      </div>

      {/* People and Places Expandable Cards */}
      <div className="grid grid-cols-1 gap-4">
        {/* People Card */}
        <Collapsible open={peopleOpen} onOpenChange={setPeopleOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between h-auto py-3 px-4"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-medium">People of the Week</span>
                {people && (
                  <Badge variant="secondary" className="text-xs">
                    {people.length}
                  </Badge>
                )}
              </div>
              {peopleOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3">
            {people ? (
              <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                {people.map((person, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-serif text-sm text-foreground">{person.name}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {person.role}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {person.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {person.scriptureReferences.map((ref, refIndex) => (
                        <span
                          key={refIndex}
                          className="text-xs bg-background px-1.5 py-0.5 rounded text-muted-foreground"
                        >
                          {ref.reference}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <a
                  href={week.lessonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  View lesson
                </a>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground p-4 text-center">
                No people data available for this week.
              </p>
            )}
          </CollapsibleContent>
        </Collapsible>

        {/* Places Card */}
        <Collapsible open={placesOpen} onOpenChange={setPlacesOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between h-auto py-3 px-4"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium">Places of the Week</span>
                {places && (
                  <Badge variant="secondary" className="text-xs">
                    {places.length}
                  </Badge>
                )}
              </div>
              {placesOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3">
            {places ? (
              <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                {places.map((place, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-serif text-sm text-foreground">{place.name}</h4>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          place.locationType === 'confirmed' ? 'bg-green-100 text-green-800' :
                          place.locationType === 'probable' ? 'bg-yellow-100 text-yellow-800' :
                          place.locationType === 'uncertain' ? 'bg-orange-100 text-orange-800' :
                          'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {place.locationType}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {place.description}
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-1 italic">
                      📍 {place.modernLocation}
                    </p>
                  </div>
                ))}
                <a
                  href={week.lessonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  View scriptures
                </a>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground p-4 text-center">
                No places data available for this week.
              </p>
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}

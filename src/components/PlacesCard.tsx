import { PlacesOfTheDay } from "@/data/places";
import { MapPin, ExternalLink, CheckCircle, HelpCircle, CircleDot, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PlacesCardProps {
  placesData: PlacesOfTheDay;
}

const getLocationTypeIcon = (type: string) => {
  switch (type) {
    case "confirmed":
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case "probable":
      return <CircleDot className="w-4 h-4 text-blue-600" />;
    case "uncertain":
      return <HelpCircle className="w-4 h-4 text-amber-600" />;
    case "symbolic":
      return <Sparkles className="w-4 h-4 text-purple-600" />;
    default:
      return <HelpCircle className="w-4 h-4 text-muted-foreground" />;
  }
};

const getLocationTypeBadge = (type: string) => {
  switch (type) {
    case "confirmed":
      return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Confirmed</Badge>;
    case "probable":
      return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Probable</Badge>;
    case "uncertain":
      return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Uncertain</Badge>;
    case "symbolic":
      return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Symbolic</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

export const PlacesCard = ({ placesData }: PlacesCardProps) => {
  return (
    <div className="bg-gradient-card rounded-2xl p-6 md:p-8 shadow-card">
      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-1">{placesData.weekTitle}</p>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <h2 className="font-serif text-2xl text-foreground">Places of the Day</h2>
        </div>
      </div>

      {/* Location Type Legend */}
      <div className="mb-6 p-4 bg-muted/30 rounded-lg">
        <p className="text-sm font-medium text-foreground mb-2">Location Certainty:</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-green-600" />
            <span className="text-muted-foreground">Confirmed</span>
          </div>
          <div className="flex items-center gap-1">
            <CircleDot className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-muted-foreground">Probable</span>
          </div>
          <div className="flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-muted-foreground">Uncertain</span>
          </div>
          <div className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-muted-foreground">Symbolic</span>
          </div>
        </div>
      </div>

      {/* Places List */}
      <div className="space-y-6">
        {placesData.places.map((place, index) => (
          <div 
            key={index} 
            className="border-l-4 border-primary/30 pl-4 py-2"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                {getLocationTypeIcon(place.locationType)}
                <h3 className="font-serif text-lg text-foreground">{place.name}</h3>
              </div>
              {getLocationTypeBadge(place.locationType)}
            </div>
            
            <div className="mb-3 p-3 bg-muted/20 rounded-lg">
              <p className="text-sm font-medium text-foreground mb-1">Modern Location:</p>
              <p className="text-sm text-muted-foreground">{place.modernLocation}</p>
            </div>
            
            <p className="text-muted-foreground text-sm mb-3">{place.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {place.scriptureReferences.map((ref, refIndex) => (
                <Badge key={refIndex} variant="secondary" className="text-xs">
                  {ref}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Further Study Citations */}
      {placesData.citations && placesData.citations.length > 0 && (
        <div className="mt-8 pt-6 border-t border-border/50">
          <h3 className="font-serif text-lg text-foreground mb-4">Further Study</h3>
          <div className="space-y-2">
            {placesData.citations.map((citation, index) => (
              <a
                key={index}
                href={citation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                {citation.title}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Read More Link */}
      <div className="mt-6 pt-4 border-t border-border/50">
        <a
          href={placesData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          Read the scriptures in Gospel Library
        </a>
      </div>
    </div>
  );
};

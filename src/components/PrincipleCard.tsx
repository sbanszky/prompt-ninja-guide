import { Principle } from "@/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PrincipleCardProps {
  principle: Principle;
}

const categoryColors: Record<string, string> = {
  "Clarity & Precision": "bg-blue-100 text-blue-800 border-blue-200",
  "Context & Constraints": "bg-purple-100 text-purple-800 border-purple-200",
  "Logic & Reasoning": "bg-green-100 text-green-800 border-green-200",
  "Creativity & Style": "bg-pink-100 text-pink-800 border-pink-200",
  "Iteration & Feedback": "bg-orange-100 text-orange-800 border-orange-200",
  "Code & Technical Tasks": "bg-indigo-100 text-indigo-800 border-indigo-200",
  "Efficiency & Control": "bg-teal-100 text-teal-800 border-teal-200",
  "Reliability & Accuracy": "bg-red-100 text-red-800 border-red-200"
};

export function PrincipleCard({ principle }: PrincipleCardProps) {
  return (
    <Card className="p-6 h-full transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 bg-card border border-border group">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <span className="text-2xl font-bold text-primary/80 group-hover:text-primary transition-colors">
            {principle.id}
          </span>
          <Badge 
            variant="secondary" 
            className={`text-xs font-medium ${categoryColors[principle.category] || 'bg-muted text-muted-foreground'}`}
          >
            {principle.category}
          </Badge>
        </div>
        <p className="text-foreground leading-relaxed flex-1 text-sm font-medium">
          {principle.title}
        </p>
      </div>
    </Card>
  );
}
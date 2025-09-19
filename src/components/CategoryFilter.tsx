import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/principles";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => onCategoryChange(null)}
        className="transition-all duration-200"
      >
        All Categories
        <Badge variant="secondary" className="ml-2">
          100
        </Badge>
      </Button>
      {categories.map((category) => (
        <Button
          key={category.name}
          variant={selectedCategory === category.name ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.name)}
          className="transition-all duration-200"
        >
          {category.name}
          <Badge variant="secondary" className="ml-2">
            {category.count}
          </Badge>
        </Button>
      ))}
    </div>
  );
}

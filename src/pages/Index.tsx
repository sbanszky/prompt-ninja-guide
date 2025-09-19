import { useState, useMemo } from "react";
import { principles } from "@/data/principles";
import { PrincipleCard } from "@/components/PrincipleCard";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AppSidebar } from "@/components/AppSidebar";
import { Brain, Sparkles, Menu } from "lucide-react";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPrinciples = useMemo(() => {
    return principles.filter((principle) => {
      const matchesSearch = principle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          principle.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === null || principle.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-subtle">
        <AppSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-40">
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center gap-3 mb-6">
                <SidebarTrigger className="p-2 hover:bg-muted rounded-lg transition-colors" />
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    100 Prompt Principles
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Master the art of AI prompting with these essential principles
                  </p>
                </div>
                <ThemeToggle />
              </div>
              
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                <SearchBar
                  value={searchTerm}
                  onChange={setSearchTerm}
                  placeholder="Search principles..."
                />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="h-4 w-4" />
                  <span>
                    {filteredPrinciples.length} of {principles.length} principles
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Mobile Category Filter (hidden on desktop) */}
          <section className="container mx-auto px-4 py-6 lg:hidden">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </section>

          {/* Principles Grid */}
          <main className="container mx-auto px-4 pb-12 flex-1">
            {filteredPrinciples.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-muted-foreground text-lg mb-2">No principles found</div>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your search terms or selecting a different category
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
                {filteredPrinciples.map((principle, index) => (
                  <div
                    key={principle.id}
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <PrincipleCard principle={principle} />
                  </div>
                ))}
              </div>
            )}
          </main>

          {/* Footer */}
          <footer className="border-t border-border/50 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center text-sm text-muted-foreground">
                <p>🧠 A comprehensive guide to effective AI prompting</p>
                <p className="mt-1">Organized into 8 categories with 100 actionable principles</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;

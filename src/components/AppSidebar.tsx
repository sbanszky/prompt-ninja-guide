import { 
  Brain, 
  Lightbulb, 
  Cog, 
  Palette, 
  RefreshCw, 
  Code, 
  Zap, 
  Shield,
  LayoutGrid 
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/principles";

const categoryIcons: Record<string, any> = {
  "Clarity & Precision": Lightbulb,
  "Context & Constraints": Cog,
  "Logic & Reasoning": Brain,
  "Creativity & Style": Palette,
  "Iteration & Feedback": RefreshCw,
  "Code & Technical Tasks": Code,
  "Efficiency & Control": Zap,
  "Reliability & Accuracy": Shield,
};

interface AppSidebarProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function AppSidebar({ selectedCategory, onCategoryChange }: AppSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const isActive = (categoryName: string | null) => selectedCategory === categoryName;

  const handleCategoryClick = (categoryName: string | null) => {
    onCategoryChange(categoryName);
  };

  return (
    <Sidebar variant="sidebar">
      <SidebarContent className="flex flex-col">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground px-2">
            Categories
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {/* All Categories */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => handleCategoryClick(null)}
                  className={`w-full justify-start transition-colors duration-200 ${
                    isActive(null) 
                      ? "bg-primary/10 text-primary border-l-2 border-primary" 
                      : "hover:bg-muted/50"
                  }`}
                >
                  <LayoutGrid className="h-4 w-4" />
                  {!isCollapsed && (
                    <>
                      <span className="flex-1 text-left">All Categories</span>
                      <Badge variant="secondary" className="ml-auto">
                        100
                      </Badge>
                    </>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Individual Categories */}
              {categories.map((category) => {
                const IconComponent = categoryIcons[category.name];
                return (
                  <SidebarMenuItem key={category.name}>
                    <SidebarMenuButton
                      onClick={() => handleCategoryClick(category.name)}
                      className={`w-full justify-start transition-colors duration-200 ${
                        isActive(category.name) 
                          ? "bg-primary/10 text-primary border-l-2 border-primary" 
                          : "hover:bg-muted/50"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      {!isCollapsed && (
                        <>
                          <span className="flex-1 text-left text-sm">
                            {category.name}
                          </span>
                          <Badge variant="secondary" className="ml-auto text-xs">
                            {category.count}
                          </Badge>
                        </>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Signature Image */}
        <div className="mt-auto p-4">
          <img
            src="https://images.watchermind.online/signature.png"
            alt="Signature"
            className="w-1/2 mx-auto rounded-lg opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

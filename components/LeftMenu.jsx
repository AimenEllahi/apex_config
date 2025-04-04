"use client";
import { cn } from "@/lib/utils";

const categories = [
  { id: "Type", name: "Type Options" },
  { id: "Size", name: "Size Options" },
];

export default function LeftMenu({ onCategoryClick, activeCategory }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        {categories.map((category, index) => (
          <div key={category.id} className="relative">
            <div
              className={cn(
                "relative cursor bg-black-pointer transition-all duration-300 ease-in-out",
                activeCategory === category.id
                  ? "bg-black/70 backdrop-blur-sm"
                  : "bg-black hover:bg-black/60 backdrop-blur-sm"
              )}
              onClick={() => onCategoryClick(category.id)}
            >
              {/* Blue vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>

              <div className="py-5 px-6 text-white font-medium">
                <div className="text-red-500 mb-1">{category.name}</div>
                {/* <div className="h-1 w-12 bg-white opacity-30 rounded-full"></div> */}
              </div>
            </div>

            {/* Add spacing between buttons except for the last one */}
            {index < categories.length - 1 && (
              <div className="h-2 bg-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

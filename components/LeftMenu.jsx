"use client";
import { cn } from "@/lib/utils";

const categories = [
  { id: "Type", name: "Tread Options" },
  { id: "Size", name: "Size Options" },
];

export default function LeftMenu({ onCategoryClick, activeCategory }) {
  return (
    <div className="flex flex-col h-fit w-60 ">
      <div className="flex-1 p-4">
        {categories.map((category, index) => (
          <div key={category.id} className="relative ">
            <div
              className={cn(
                "relative rounded-xl cursor bg-black-pointer transition-all duration-300 ease-in-out",
                activeCategory === category.id
                  ? "bg-[#ef4d28] backdrop-blur-sm"
                  : "bg-black hover:bg-black/60 backdrop-blur-sm"
              )}
              onClick={() => onCategoryClick(category.id)}
            >
              <div className="py-3 px-3 text-center text-white font-medium">
                <div className="text-white mb-1">{category.name}</div>
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

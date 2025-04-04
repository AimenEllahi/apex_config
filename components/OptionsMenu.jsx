"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronDown, ChevronUp, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const optionCategories = [
  {
    id: "tread",
    name: "Tread Options",
    options: [
      {
        id: "c-block",
        name: "C-BLOCK",
        image: "/placeholder.svg?height=100&width=150",
      },
      {
        id: "zig-zag",
        name: "ZIG-ZAG",
        image: "/placeholder.svg?height=100&width=150",
      },
      {
        id: "x-terrain",
        name: "X-TERRAIN",
        image: "/placeholder.svg?height=100&width=150",
      },
    ],
  },
  {
    id: "track-size",
    name: "Track Size",
    options: [
      { id: "small", name: 'Small (12")' },
      { id: "medium", name: 'Medium (14")' },
      { id: "large", name: 'Large (16")' },
    ],
  },
  {
    id: "attachments",
    name: "Attachments",
    options: [
      { id: "bucket", name: "Standard Bucket" },
      { id: "forks", name: "Pallet Forks" },
      { id: "auger", name: "Auger" },
      { id: "breaker", name: "Hydraulic Breaker" },
    ],
  },
  {
    id: "window-tint",
    name: "Window Tint",
    options: [
      { id: "none", name: "None" },
      { id: "light", name: "Light (20%)" },
      { id: "medium", name: "Medium (35%)" },
      { id: "dark", name: "Dark (50%)" },
    ],
  },
];

export default function OptionsMenu({ onClose }) {
  const [expandedCategory, setExpandedCategory] = useState("tread");
  const [selectedOptions, setSelectedOptions] = useState({
    tread: "c-block",
    "track-size": "medium",
    attachments: "bucket",
    "window-tint": "none",
  });

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const selectOption = (categoryId, optionId) => {
    setSelectedOptions({
      ...selectedOptions,
      [categoryId]: optionId,
    });
  };

  return (
    <div className="flex flex-col h-full bg-orange-100">
      <div className="flex items-center justify-between p-4 border-b bg-orange-200">
        <h2 className="font-semibold text-lg">Configuration Options</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="md:hidden"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        {optionCategories.map((category) => (
          <div key={category.id} className="border-b">
            <Button
              variant="ghost"
              className="w-full justify-between p-4 rounded-none h-auto"
              onClick={() => toggleCategory(category.id)}
            >
              <span className="font-medium">{category.name}</span>
              {expandedCategory === category.id ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </Button>

            {expandedCategory === category.id && (
              <div className="p-2 space-y-2">
                {category.options.map((option) => (
                  <div
                    key={option.id}
                    className={cn(
                      "p-2 rounded-md cursor-pointer hover:bg-muted flex items-center gap-3",
                      selectedOptions[category.id] === option.id && "bg-muted"
                    )}
                    onClick={() => selectOption(category.id, option.id)}
                  >
                    {option.image ? (
                      <div className="relative w-24 h-16 overflow-hidden rounded border">
                        <img
                          src={option.image || "/placeholder.svg"}
                          alt={option.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border flex items-center justify-center">
                        {selectedOptions[category.id] === option.id && (
                          <Check className="h-3 w-3" />
                        )}
                      </div>
                    )}
                    <span>{option.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-orange-200">
        <Button className="w-full bg-orange-600 hover:bg-orange-700">
          Apply Configuration
        </Button>
      </div>
    </div>
  );
}

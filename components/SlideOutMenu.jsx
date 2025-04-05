"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X, Plus, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const categoryOptions = {
  Type: [
    {
      id: "c-block",
      name: "C-BLOCK",
      image: "/type/C-BLOCK_TREAD_DESIGN.png",
      price: "$1,299.00",
    },
    {
      id: "x-terrain",
      name: "X-TERRAIN",
      image: "/type/XT_TREAD_DESIGN.png",
      price: "$1,499.00",
    },
    {
      id: "zig-zag",
      name: "ZIG-ZAG",
      image: "/type/ZIG-ZAG_TREAD_DESIGN.png",
      price: "$1,699.00",
    },
  ],
  Size: [
    {
      id: "13in-c-block",
      name: '13" - C-BLOCK',
      image: "/size/13in_C-Block.png",
      price: "$899.00",
    },
    {
      id: "13in-x-terrain",
      name: '13" - X-TERRAIN',
      image: "/size/13in_X-Terrain.png",
      price: "$949.00",
    },
    {
      id: "13in-zig-zag",
      name: '13" - ZIG-ZAG',
      image: "/size/13in_Zig-Zag.png",
      price: "$979.00",
    },
    {
      id: "16in-c-block",
      name: '16" - C-BLOCK',
      image: "/size/16in_C-Block.png",
      price: "$1,099.00",
    },
    {
      id: "16in-x-terrain",
      name: '16" - X-TERRAIN',
      image: "/size/16in_X-Terrain.png",
      price: "$1,149.00",
    },
    {
      id: "16in-zig-zag",
      name: '16" - ZIG-ZAG',
      image: "/size/16in_Zig-Zag.png",
      price: "$1,179.00",
    },
    {
      id: "18in-c-block",
      name: '18" - C-BLOCK',
      image: "/size/18in_C-Block.png",
      price: "$1,299.00",
    },
    {
      id: "18in-x-terrain",
      name: '18" - X-TERRAIN',
      image: "/size/18in_X-Terrain.png",
      price: "$1,349.00",
    },
    {
      id: "18in-zig-zag",
      name: '18" - ZIG-ZAG',
      image: "/size/18in_Zig-Zag.png",
      price: "$1,379.00",
    },
  ],
};

export default function SlideOutMenu({ isOpen, onClose, category }) {
  const [selectedOptions, setSelectedOptions] = useState({
    Type: "c-block",
    Size: "13-inch",
  });

  const menuRef = useRef(null);
  const [currentCategory, setCurrentCategory] = useState(category);

  // Update current category when the prop changes
  useEffect(() => {
    if (category) {
      setCurrentCategory(category);
    }
  }, [category]);

  if (!category) return null;

  const options = categoryOptions[category] || [];

  const selectOption = (optionId) => {
    setSelectedOptions({
      ...selectedOptions,
      [category]: optionId,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-0 left-full w-80 h-full bg-white shadow-lg z-50 overflow-hidden "
        >
          <div className="flex  flex-col h-full">
            <div className="flex items-center justify-between p-4 bg-black text-white">
              <h2 className="font-semibold text-lg">
                {getCategoryTitle(category)}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-gray-800 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="overflow-auto hide-scrollbar flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  {options.map((option, index) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        "border-b border-gray-200 cursor-pointer transition-all duration-200",
                        selectedOptions[category] === option.id
                          ? "bg-gray-100"
                          : "hover:bg-gray-50"
                      )}
                      onClick={() => selectOption(option.id)}
                    >
                      <div className="p-4">
                        <div className="relative mb-2 overflow-hidden rounded-md">
                          <img
                            src={option.image || "/placeholder.svg"}
                            alt={option.name}
                            className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2">
                            {option.name}
                          </div>
                          {selectedOptions[category] === option.id ? (
                            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-blue-600 shadow-md">
                              <Check className="h-5 w-5 text-blue-600" />
                            </div>
                          ) : (
                            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
                              <Plus className="h-5 w-5 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{option.name}</span>
                          <span className="text-gray-700">{option.price}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function getCategoryTitle(categoryId) {
  const titles = {
    tread: "Tread Options",
    "track-size": "Track Size",
    attachments: "Attachments",
    "window-tint": "Window Tint",
  };
  return titles[categoryId] || categoryId;
}

"use client";

import { useState } from "react";
import { chaptersData } from "@/data/chaptersData";
import ChapterCard from "./ChapterCard";
import ChapterModal from "./ChapterModal";
import type { Chapter } from "@/types";

// أسماء الـ Units اللي هتظهر في الأزرار
const unitsList = ["Unit A", "Unit B", "Unit C", "Unit D", "Unit E", "All"];

export default function ChaptersGrid() {
  // الحالة الافتراضية هي عرض "الكل"
  const [activeUnit, setActiveUnit] = useState(unitsList[0]);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  // تصفية الكورسات بناءً على الزرار اللي تم اختياره
  const filteredChapters =
    activeUnit === "All"
      ? chaptersData
      : chaptersData.filter((chapter) => chapter.unit === activeUnit);

  return (
    <section
      id="chapters"
      className="scroll-mt-20 py-16 px-4 md:px-8 max-w-7xl mx-auto w-full"
    >
      <div className="text-center mb-10">
        <h2 className="heading-animated text-3xl font-bold text-gray-900 mb-4 dark:text-white">
          LEARN IB PHYSICS — ONE CHAPTER AT A TIME
        </h2>
        {/* <p className="text-gray-600 dark:text-gray-400">
          Purchase individual chapters to focus exactly on what you need.
        </p> */}
      </div>

      {/* أزرار الفلتر */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-12">
        {unitsList.map((unit) => (
          <button
            key={unit}
            type="button"
            onClick={() => setActiveUnit(unit)}
            className={`relative z-10 cursor-pointer touch-manipulation select-none px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeUnit === unit
                ? "bg-indigo-600 text-white shadow-md transform -translate-y-0.5"
                : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
            }`}
          >
            {unit}
          </button>
        ))}
      </div>

      {/* شبكة الكورسات (Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredChapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            onBuy={() => setSelectedChapter(chapter)}
          />
        ))}
      </div>

      {/* رسالة في حالة عدم وجود كورسات (احتياطي) */}
      {filteredChapters.length === 0 && (
        <div className="text-center text-gray-500 mt-10 dark:text-gray-400">
          No chapters found for this unit.
        </div>
      )}

      {/* نافذة التفاصيل */}
      {selectedChapter && (
        <ChapterModal
          chapter={selectedChapter}
          onClose={() => setSelectedChapter(null)}
        />
      )}
    </section>
  );
}

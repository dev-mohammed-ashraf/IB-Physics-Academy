"use client";

import { useState } from "react";
import { chaptersData } from "@/data/chaptersData";
import ChapterCard from "./ChapterCard";
import ChapterModal from "./ChapterModal";
import type { Chapter, ModalIntent } from "@/types";

const unitsList = ["Unit A", "Unit B", "Unit C", "Unit D", "Unit E", "All"];

export default function ChaptersGrid() {
  const [activeUnit, setActiveUnit] = useState(unitsList[0]);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [modalIntent, setModalIntent] = useState<ModalIntent | null>(null);

  const closeModal = () => {
    setSelectedChapter(null);
    setModalIntent(null);
  };

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
        <h2 className="heading-animated text-3xl font-bold text-heading mb-4">
          Master IB Physics Chapter by Chapter
        </h2>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-12">
        {unitsList.map((unit) => (
          <button
            key={unit}
            type="button"
            onClick={() => setActiveUnit(unit)}
            className={`relative z-10 cursor-pointer touch-manipulation select-none px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeUnit === unit
                ? "bg-primary text-white shadow-md transform -translate-y-0.5"
                : "bg-card text-body-soft border border-line-card hover:border-accent-line-strong hover:text-accent"
            }`}
          >
            {unit}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredChapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            onEnroll={() => {
              setSelectedChapter(chapter);
              setModalIntent("enroll");
            }}
            onRequestSample={() => {
              setSelectedChapter(chapter);
              setModalIntent("sample");
            }}
          />
        ))}
      </div>

      {filteredChapters.length === 0 && (
        <div className="text-center text-faint mt-10">
          No chapters found for this unit.
        </div>
      )}

      {selectedChapter && modalIntent && (
        <ChapterModal
          chapter={selectedChapter}
          intent={modalIntent}
          onClose={closeModal}
        />
      )}
    </section>
  );
}

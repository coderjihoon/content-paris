"use client";

import { useState } from "react";
import { itinerary, accommodation } from "./data/itinerary";
import { AccommodationCard } from "./components/AccommodationCard";
import { DayTabs } from "./components/DayTabs";
import { Timeline } from "./components/Timeline";

export default function Home() {
  const [activeDay, setActiveDay] = useState(1);

  const currentDay = itinerary.find((d) => d.day === activeDay)!;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-20">
        <div className="max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🗼</span>
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-tight">
                파리 여행 일정
              </h1>
              <p className="text-xs text-gray-400">2박 3일 · 3월 10일–12일</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-4 space-y-4">
        {/* 숙소 정보 */}
        <AccommodationCard accommodation={accommodation} />

        {/* Day 탭 */}
        <DayTabs
          days={itinerary}
          activeDay={activeDay}
          onDayChange={setActiveDay}
        />

        {/* 타임라인 */}
        <Timeline day={currentDay} />
      </div>
    </main>
  );
}

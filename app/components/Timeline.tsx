"use client";

import { useState } from "react";
import {
  Camera,
  UtensilsCrossed,
  ShoppingBag,
  Coffee,
  Train,
  Clock,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";
import { DayPlan, EventType } from "../data/itinerary";

interface TimelineProps {
  day: DayPlan;
}

const typeConfig: Record<
  EventType,
  {
    label: string;
    icon: React.ReactNode;
    bg: string;
    text: string;
    dot: string;
  }
> = {
  sightseeing: {
    label: "관광",
    icon: <Camera className="w-3.5 h-3.5" />,
    bg: "bg-blue-50",
    text: "text-blue-600",
    dot: "bg-blue-400",
  },
  restaurant: {
    label: "식당",
    icon: <UtensilsCrossed className="w-3.5 h-3.5" />,
    bg: "bg-rose-50",
    text: "text-rose-600",
    dot: "bg-rose-400",
  },
  takeout: {
    label: "포장",
    icon: <ShoppingBag className="w-3.5 h-3.5" />,
    bg: "bg-amber-50",
    text: "text-amber-600",
    dot: "bg-amber-400",
  },
  rest: {
    label: "휴식",
    icon: <Coffee className="w-3.5 h-3.5" />,
    bg: "bg-green-50",
    text: "text-green-600",
    dot: "bg-green-400",
  },
  transport: {
    label: "이동",
    icon: <Train className="w-3.5 h-3.5" />,
    bg: "bg-gray-50",
    text: "text-gray-600",
    dot: "bg-gray-400",
  },
};

export function Timeline({ day }: TimelineProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggleCheck = (idx: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const toggleExpand = (idx: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const done = checked.size;
  const total = day.events.length;

  return (
    <div className="space-y-3 pb-8">
      <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-gray-500 font-medium">오늘 일정 진행도</p>
          <p className="text-xs font-bold text-indigo-600">
            {done}/{total}
          </p>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-400 rounded-full transition-all duration-500"
            style={{ width: `${(done / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-200" />

        <div className="space-y-3">
          {day.events.map((event, idx) => {
            const config = typeConfig[event.type];
            const isChecked = checked.has(idx);
            const isExpanded = expanded.has(idx);
            const hasNote = !!event.note;

            return (
              <div key={idx} className="flex gap-3">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <button
                    onClick={() => toggleCheck(idx)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 z-10 ${
                      isChecked
                        ? "bg-indigo-500 border-indigo-500"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    {isChecked ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${config.dot}`}
                      />
                    )}
                  </button>
                </div>

                <div
                  className={`flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-opacity duration-200 ${
                    isChecked ? "opacity-50" : ""
                  }`}
                >
                  <div
                    className="p-3 cursor-pointer"
                    onClick={() => hasNote && toggleExpand(idx)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Clock className="w-3 h-3 text-gray-400 flex-shrink-0" />
                          <span className="text-xs text-gray-400">
                            {event.time}
                          </span>
                          <span
                            className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${config.bg} ${config.text} flex items-center gap-0.5`}
                          >
                            {config.icon}
                            {config.label}
                          </span>
                        </div>
                        <p
                          className={`font-bold text-sm text-gray-900 leading-tight ${
                            isChecked
                              ? "line-through text-gray-400"
                              : ""
                          }`}
                        >
                          {event.title}
                        </p>
                        {event.subtitle && (
                          <p className="text-xs text-gray-400 mt-0.5">
                            {event.subtitle}
                          </p>
                        )}
                      </div>
                      <div className="flex-shrink-0 flex flex-col items-end gap-1">
                        <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">
                          {event.duration}
                        </span>
                        {hasNote && (
                          <span className="text-gray-300">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {hasNote && isExpanded && (
                    <div className="px-3 pb-3">
                      <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">
                        <p className="text-xs text-amber-700 leading-relaxed">
                          💡 {event.note}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

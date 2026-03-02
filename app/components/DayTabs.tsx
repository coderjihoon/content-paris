import { DayPlan } from "../data/itinerary";

interface DayTabsProps {
  days: DayPlan[];
  activeDay: number;
  onDayChange: (day: number) => void;
}

export function DayTabs({ days, activeDay, onDayChange }: DayTabsProps) {
  return (
    <div className="flex gap-2">
      {days.map((d) => (
        <button
          key={d.day}
          onClick={() => onDayChange(d.day)}
          className={`flex-1 rounded-xl py-3 px-2 text-center transition-all duration-200 ${
            activeDay === d.day
              ? "bg-white shadow-md border border-gray-100"
              : "bg-white/60 border border-transparent"
          }`}
        >
          <p
            className={`text-sm font-bold leading-tight ${
              activeDay === d.day ? "text-indigo-700" : "text-gray-400"
            }`}
          >
            {d.label}
          </p>
          <p
            className={`text-xs mt-0.5 leading-tight ${
              activeDay === d.day ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {d.date}
          </p>
          {activeDay === d.day && (
            <div className="w-4 h-0.5 bg-indigo-500 rounded-full mx-auto mt-1.5" />
          )}
        </button>
      ))}
    </div>
  );
}

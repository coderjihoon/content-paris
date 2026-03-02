import { Building2, Calendar, MapPin } from "lucide-react";

interface AccommodationProps {
  accommodation: {
    name: string;
    address: string;
    checkIn: string;
    checkOut: string;
  };
}

export function AccommodationCard({ accommodation }: AccommodationProps) {
  return (
    <div
      className="rounded-2xl p-4 text-white shadow-lg"
      style={{
        background:
          "linear-gradient(135deg, #991b1b 0%, #b91c1c 50%, #9f1239 100%)",
      }}
    >
      <div className="flex items-start gap-3">
        <div className="bg-white/10 rounded-xl p-2 flex-shrink-0">
          <Building2 className="w-5 h-5 text-amber-200" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-red-200 font-medium mb-0.5">숙소</p>
          <p className="text-sm font-bold text-white leading-tight">
            {accommodation.name}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3 text-red-200 flex-shrink-0" />
            <p className="text-xs text-red-200 truncate">
              {accommodation.address}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-3 pt-3 border-t border-white/10">
        <div className="flex items-center gap-1.5 flex-1">
          <Calendar className="w-3.5 h-3.5 text-amber-200" />
          <div>
            <p className="text-xs text-red-200">체크인</p>
            <p className="text-xs font-semibold text-white">
              {accommodation.checkIn}
            </p>
          </div>
        </div>
        <div className="w-px bg-white/10" />
        <div className="flex items-center gap-1.5 flex-1">
          <Calendar className="w-3.5 h-3.5 text-amber-200" />
          <div>
            <p className="text-xs text-red-200">체크아웃</p>
            <p className="text-xs font-semibold text-white">
              {accommodation.checkOut}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

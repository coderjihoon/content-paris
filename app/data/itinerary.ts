export type EventType = "sightseeing" | "restaurant" | "takeout" | "rest" | "transport";

export interface ItineraryEvent {
  time: string;
  title: string;
  subtitle?: string;
  type: EventType;
  duration: string;
  note?: string;
}

export interface DayPlan {
  day: number;
  date: string;
  label: string;
  events: ItineraryEvent[];
}

export const accommodation = {
  name: "Kopster Hotel Paris Porte de Versailles",
  address: "11 Rue Letellier, 75015 Paris",
  checkIn: "Day 1 (15:00~)",
  checkOut: "Day 3 (~11:00)",
};

export const itinerary: DayPlan[] = [
  {
    day: 1,
    date: "3월 10일 (화)",
    label: "Day 1",
    events: [
      {
        time: "10:00 - 10:30",
        title: "노트르담 대성당",
        subtitle: "Cathédrale Notre-Dame de Paris",
        type: "sightseeing",
        duration: "30분",
        note: "외관 감상 및 주변 산책",
      },
      {
        time: "11:00 - 12:30",
        title: "생트샤펠 성당",
        subtitle: "Sainte-Chapelle",
        type: "sightseeing",
        duration: "1시간 30분",
        note: "스테인드글라스 필수 관람",
      },
      {
        time: "13:00 - 14:00",
        title: "Le Petit Italien",
        subtitle: "이탈리안 레스토랑",
        type: "restaurant",
        duration: "1시간",
        note: "파스타 · 피자 추천",
      },
      {
        time: "14:30 - 17:00",
        title: "루브르 박물관",
        subtitle: "Musée du Louvre",
        type: "sightseeing",
        duration: "2시간 30분",
        note: "모나리자, 밀로의 비너스 필수",
      },
      {
        time: "17:30 - 18:30",
        title: "튈르리 정원 산책",
        subtitle: "Jardin des Tuileries",
        type: "rest",
        duration: "1시간",
      },
      {
        time: "19:30 - 20:30",
        title: "저녁 식사",
        subtitle: "Bouillon Chartier",
        type: "restaurant",
        duration: "1시간",
        note: "전통 프렌치 비스트로, 합리적인 가격",
      },
    ],
  },
  {
    day: 2,
    date: "3월 11일 (수)",
    label: "Day 2",
    events: [
      {
        time: "09:00 - 11:30",
        title: "에펠탑",
        subtitle: "Tour Eiffel",
        type: "sightseeing",
        duration: "2시간 30분",
        note: "2층 전망대 추천, 사전 예약 필수",
      },
      {
        time: "12:00 - 13:00",
        title: "점심 식사",
        subtitle: "Café du Marché",
        type: "restaurant",
        duration: "1시간",
        note: "크로크 무슈 · 크레페 추천",
      },
      {
        time: "13:30 - 15:30",
        title: "오르세 미술관",
        subtitle: "Musée d'Orsay",
        type: "sightseeing",
        duration: "2시간",
        note: "모네, 반 고흐 작품",
      },
      {
        time: "16:00 - 17:30",
        title: "샹젤리제 거리",
        subtitle: "Avenue des Champs-Élysées",
        type: "rest",
        duration: "1시간 30분",
        note: "쇼핑 및 구경",
      },
      {
        time: "17:30 - 18:00",
        title: "개선문",
        subtitle: "Arc de Triomphe",
        type: "sightseeing",
        duration: "30분",
        note: "외관 감상",
      },
      {
        time: "19:00 - 19:30",
        title: "마카롱 포장",
        subtitle: "Ladurée Champs-Élysées",
        type: "takeout",
        duration: "30분",
        note: "기념 선물용 추천",
      },
      {
        time: "20:00 - 21:00",
        title: "저녁 식사",
        subtitle: "Le Relais de l'Entrecôte",
        type: "restaurant",
        duration: "1시간",
        note: "스테이크 프리트 전문점",
      },
    ],
  },
  {
    day: 3,
    date: "3월 12일 (목)",
    label: "Day 3",
    events: [
      {
        time: "09:00 - 10:30",
        title: "몽마르트르 언덕",
        subtitle: "Montmartre",
        type: "sightseeing",
        duration: "1시간 30분",
        note: "골목 카페 구경 추천",
      },
      {
        time: "10:30 - 11:00",
        title: "사크레쾨르 성당",
        subtitle: "Basilique du Sacré-Cœur",
        type: "sightseeing",
        duration: "30분",
        note: "파리 전경 조망 포인트",
      },
      {
        time: "11:30 - 12:00",
        title: "크레페 포장",
        subtitle: "거리 크레페 가게",
        type: "takeout",
        duration: "30분",
        note: "누텔라 크레페 추천",
      },
      {
        time: "12:00 - 13:30",
        title: "마레 지구 자유 시간",
        subtitle: "Le Marais",
        type: "rest",
        duration: "1시간 30분",
        note: "빈티지 숍, 갤러리 구경",
      },
      {
        time: "14:00 - 15:00",
        title: "점심 & 카페",
        subtitle: "Café de Flore 근처",
        type: "restaurant",
        duration: "1시간",
        note: "파리지앵 스타일 점심",
      },
      {
        time: "16:00",
        title: "공항 이동",
        subtitle: "숙소 체크아웃 후 출발",
        type: "transport",
        duration: "~",
        note: "CDG 공항 기준 여유있게 출발",
      },
    ],
  },
];

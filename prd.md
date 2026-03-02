📄 PRD: Paris Travel Itinerary Viewer
1. 프로젝트 개요
목적: 사용자가 제공한 2박 3일 파리 여행 일정을 직관적이고 아름답게 보여주는 반응형 웹사이트 제작.

핵심 가치: 복잡한 텍스트 중심의 일정을 시간순/장소순으로 시각화하여 여행 중 한눈에 파악할 수 있도록 함.

대상 사용자: 파리 여행을 앞둔 사용자 (본인).

2. 사용자 스토리
"나는 내 여행 일정을 매번 텍스트 파일로 열어보기 번거로우니, 모바일에서도 보기 편한 대시보드 형태의 웹사이트를 갖고 싶다."

"각 일정마다 소요 시간과 식당 정보를 명확히 구분해서 보고 싶다."

3. 핵심 기능 (MVP)
3.1. 일차별 탭(Tab) 시스템
Day 1, Day 2, Day 3으로 구분된 인터페이스.

각 탭 클릭 시 해당 날짜의 타임라인 표시.

3.2. 타임라인 대시보드
시간별 카드: 각 일정(관광지, 식당)을 카드 형태로 시각화.

카테고리 태그: [관광], [식당], [포장], [휴식] 등 아이콘과 색상으로 구분.

소요 시간 표시: 제공된 데이터(30분, 1시간 등)를 강조하여 표시.

3.3. 숙소 고정 섹션
웹사이트 상단 또는 사이드바에 숙소 정보(Kopster Hotel Paris Porte de Versailles) 상시 노출.

3.4. 모바일 최적화 (Responsive)
여행 중 스마트폰으로 확인하기 편하도록 세로형 타임라인 레이아웃 적용.

4. 기술 스택 제안 (Cursor 권장)
Framework: Next.js 14 (App Router) 또는 React.

Styling: Tailwind CSS (빠른 UI 구축 및 반응형 지원).

Icons: Lucide-React (심플하고 깔끔한 아이콘 세트).

Components: Shadcn/ui (탭, 카드, 배지 UI용).

5. 데이터 구조 (참조용)
JSON
{
  "accommodation": "Kopster Hotel Paris Porte de Versailles",
  "itinerary": [
    {
      "day": 1,
      "events": [
        {"time": "10:00 - 10:30", "title": "노트르담 대성당", "type": "sightseeing", "duration": "30m"},
        {"time": "13:40 - 14:40", "title": "le petit italien", "type": "restaurant", "duration": "1h"}
      ]
    }
  ]
}
6. 디자인 가이드라인
컨셉: 'Parisian Chic' (화이트, 라이트 그레이 배경에 네이비 또는 골드 포인트 컬러).

폰트: 깔끔한 Sans-serif (Pretendard 또는 Inter).

상호작용: 방문 완료한 일정은 체크박스로 표시하거나 흐리게 처리하는 기능(선택 사항).
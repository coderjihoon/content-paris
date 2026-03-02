import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 같은 Wi‑Fi의 휴대폰 등에서 접속할 때 나오는 경고 방지
  allowedDevOrigins: ["http://172.29.104.29:3000", "http://localhost:3000"],
};

export default nextConfig;

import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // <--- Sửa thành tên miền báo lỗi đỏ
      },
      {
        protocol: 'https',
        hostname: 'example.com', 
      },
      // Nếu có thêm nguồn ảnh khác thì cứ phẩy rồi thêm block { ... } xuống dưới
    ],
  },
};

export default nextConfig;

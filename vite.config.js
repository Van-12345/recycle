import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Thêm plugin React
import mkcert from 'vite-plugin-mkcert'; // Plugin mkcert để hỗ trợ HTTPS

export default defineConfig({
  server: {
    https: true, // Kích hoạt HTTPS
    host: true, // Cho phép truy cập từ các địa chỉ IP khác trên mạng LAN
    port: 3000, // Thay đổi cổng mặc định nếu cần (tuỳ chọn)
    open: true, // Tự động mở trình duyệt sau khi khởi chạy
  },
  plugins: [
    react(), // Thêm plugin React
    mkcert(), // Plugin mkcert
  ],
});

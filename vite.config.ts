import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 서버 포트 변경
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // src 폴더를 절대경로 @로 지정
    },
  },
})

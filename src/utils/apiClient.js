import store from '@/store';
import axios from 'axios';

// 서버 URL 설정
export const SERVER_URL = import.meta.env.VITE_SERVER_HOST || 'http://localhost:8080';

// Axios 인스턴스 생성
const apiClient = axios.create({
    baseURL: `${SERVER_URL}/api`, // 기본 URL 설정
    headers: {
        'Content-Type': 'application/json', // 기본 헤더 설정
    },
});

// 요청 인터셉터 추가
apiClient.interceptors.request.use(
    config => {
        // 요청 url 로깅
        console.log(`[${config.method?.toUpperCase()}] ${config.url}`);

        // store에서 토큰을 가져와 헤더에 추가
        const state = store.getState();
        const token = state?.authReducer?.token;
        if (!!token) {
            config.headers['Authorization'] = `Bearer ${token}`; // 헤더에 토큰 추가
        }
        return config;
    },
    error => {
        // 요청 에러 처리 로직
        return Promise.reject(error);
    }
);

// 응답 인터셉터 추가
apiClient.interceptors.response.use(
    response => {
        // @TODO 응답 데이터를 처리하기 전에 수행할 로직
        return response;
    },
    error => {
        // 응답 에러 처리 로직
        if (error.response && error.response.status === 401) {
            // @TODO: 401 에러 시 로그인 페이지로 리다이렉트
        }
        return Promise.reject(error);
    }
);

// HTTP Method 별로 함수로 추출
export const GET = (url, params) => apiClient.get(url, { params });
export const POST = (url, data) => apiClient.post(url, data);
export const PUT = (url, data) => apiClient.put(url, data);
export const DELETE = (url, data) => apiClient.delete(url, data);
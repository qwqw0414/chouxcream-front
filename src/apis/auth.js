import { POST } from "@/utils/apiClient";

export const Auth = {
    login: async (email, password) => {
        return await POST('/auth/login', { email, password }).then((res) => res.data);
    },
    refreshToken: async (accessToken, refreshToken) => {
        return await POST('/auth/refresh-token',
            {
                access_token: accessToken,
                refresh_token: refreshToken,
            })
            .then((res) => res.data);
    },
    logout: async (refreshToken) => {
        return await POST('/auth/logout',
            {
                refresh_token: refreshToken
            })
            .then((res) => res.data);
    }
};
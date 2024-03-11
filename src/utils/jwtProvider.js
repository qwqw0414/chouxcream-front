import Cookies from 'js-cookie';

const REFRESH_TOKEN = 'refreshToken';

export const setRefreshToken = (token) => {
    Cookies.set(REFRESH_TOKEN, token, { expires: 14 });
}

export const getRefreshToken = () => {
    return Cookies.get(REFRESH_TOKEN);
}

export const removeRefreshToken = () => {
    Cookies.remove(REFRESH_TOKEN);
}
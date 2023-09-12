import Cookies from "universal-cookie";

const cookie = new Cookies();

export const ACCESS_TOKEN_COOKIE = 'metin-app-access-token';

export const setAccessTokenCookie = (token: string) => {
    cookie.set(ACCESS_TOKEN_COOKIE, token, {path: '/'})
}

export const removeAccessTokenCookie = () => {
    cookie.remove(ACCESS_TOKEN_COOKIE, {
        path: '/'
    })
}

export const getAccessTokenCookie = () => {
    return cookie.get(ACCESS_TOKEN_COOKIE)
}
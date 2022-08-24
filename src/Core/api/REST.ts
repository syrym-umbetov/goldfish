import axios from "axios";

const apiboardgame = "https://api.boardgameatlas.com";
export const api = axios.create({
  baseURL: apiboardgame,
});

export function gameDatas(url: string, obj: any) {
  return api.get(url, { params: { client_id: "ngb4FVYDi3", ...obj } });
}

api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  (err) => Promise.reject(err)
);

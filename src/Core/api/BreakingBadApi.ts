import axios from "axios";

const apiBreakingBad = "https://www.breakingbadapi.com/api/";
export const apibreakingbad = axios.create({
  baseURL: apiBreakingBad,
});

export function BreakingDatas(url: string, obj: any) {
  return apibreakingbad.get(url, { params: { ...obj } });
}

apibreakingbad.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  (err) => Promise.reject(err)
);

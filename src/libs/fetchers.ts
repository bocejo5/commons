import axios from "axios";
import urlJoin from "url-join";

export const getFetcher = (url: string) => {
    return axios
        .get(urlJoin(process.env.NEXT_PUBLIC_API_URL as string, url))
        .then((res) => {
            return typeof res.data == "string"
                ? JSON.parse(res.data)
                : res.data;
        });
};

export const getFetcherDownload = (url: string) => {
    return axios
        .get(urlJoin(process.env.NEXT_PUBLIC_API_URL as string, url), {
            responseType: "blob",
        })
        .then((res) => res.data);
};

export const postFetcher = (url?: string, body?: object) => {
    if (!url) return;
    return axios
        .post(urlJoin(process.env.NEXT_PUBLIC_API_URL as string, url), body, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            return typeof res.data == "string"
                ? JSON.parse(res.data)
                : res.data;
        })
        .catch((err) => {
            console.error(err);
            return {
                error: {
                    message: err.response
                        ? err.response.data.message
                        : err.message || "An unknown error occurred",
                },
            };
        });
};

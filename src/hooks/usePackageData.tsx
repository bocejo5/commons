import useSWR, { SWRConfiguration } from "swr";

const fetcher = (...args: [RequestInfo, RequestInit]) =>
    fetch(...args).then((res) => res.json());

export function usePackageData() {
    const resp = useSWR(
        `http://localhost:${process.env.NEXT_PUBLIC_PORT}/api/package`,
        fetcher,
        {} as SWRConfiguration
    );
    return { data: resp.data, error: resp.error };
}

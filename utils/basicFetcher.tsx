// Fetcher to be used in all fetch functions
export const fetcher = (url: string) => fetch(url).then((res) => res.json());

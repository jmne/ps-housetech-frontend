// Fetcher to be used in all fetch functions
export const fetcher = (url: string) => fetch(url).then(r => r.json().finally(() => console.log(`fetched ${url}`)))
import { ApiError } from "types/Error";

// Fetcher to be used in all fetch functions
export const fetcher = (url: string) =>
  fetch(url, { redirect: "error" }).then((res) => {
    if (!res.ok) {
      const error: ApiError = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      error.info = res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  });

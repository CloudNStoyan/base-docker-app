const SERVER_URL =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3344";

export type FetchStatus = "loading" | "succeeded" | "failed" | "idle";

export const testApi = async () => {
  const response = await fetch(`${SERVER_URL}/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  return response;
};

const liveHost = "https://us-central1-mealstogo-ba2ae.cloudfunctions.net";
const baseUrl = "https://50ae-223-24-93-95.ap.ngrok.io";
const localHost = `${baseUrl}/mealstogo-ba2ae/us-central1`

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
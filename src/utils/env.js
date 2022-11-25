const liveHost = "https://us-central1-mealstogo-ba2ae.cloudfunctions.net";
const baseUrl = "https://37a9-202-28-123-199.ap.ngrok.io";
const localHost = `${baseUrl}/mealstogo-ba2ae/us-central1`

export const isDevelopment = process.env.NODE_ENV === "development";

export const isMock = false;
export const host = isDevelopment ? localHost : liveHost;
//export const host = liveHost;
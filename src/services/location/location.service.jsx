import camelize from "camelize";

const host = "https://50ae-223-24-93-95.ap.ngrok.io";

export const locationRequest = (searchTerm) => {
  return fetch(`${host}/mealstogo-ba2ae/us-central1/geocode?city=${searchTerm}`)
    .then((res) => {
      return res.json();
    })
    .catch((e) => console.log(e));
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};

const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");

exports.helloWorld = functions.https.onRequest((request, response) => {
  geocodeRequest(request,response)
});

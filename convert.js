"use strict";
var airports = require("./airports.json");
var fs = require("fs");

class AirportFeature {
  constructor(aAirport) {
    const airport = aAirport[1];
    this.icao = airport.icao;
    this.iata = airport.iata;
    this.name = airport.name;
    this.city = airport.city;
    this.state = airport.state;
    this.country = airport.country;
    this.elevation = airport.elevation;
    this.lat = airport.lat;
    this.lon = airport.lon;
    this.tz = airport.tz;
  }
}

var features = [];

var collection = {
  type: "FeatureCollection",
  features: features,
};

var airportArray = [];

for (var i in airports) airportArray.push([i, airports[i]]);

airportArray.forEach((aAirport) => {
  const airport = new AirportFeature(aAirport);

  let feature = {
    type: "Feature",
    properties: {
      icao: airport.icao,
      iata: airport.iata,
      name: airport.name,
      city: airport.city,
      state: airport.state,
      country: airport.country,
      elevation: airport.elevation,
      tz: airport.tz,
    },
    geometry: {
      type: "Point",
      coordinates: [airport.lon, airport.lat],
    },
  };

  features.push(feature);
});

fs.writeFile("airports.geojson", JSON.stringify(collection), function (err) {
  if (err) return console.log(err);
  console.log("Created airports.geojson");
});

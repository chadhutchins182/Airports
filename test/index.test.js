const { airports, airportsGeo } = require("../index");

test("Is Airports a Valid Object", () => {
  expect(typeof airports() === "object").toBe(true);
});

test("Is Airports GeoJSON a Valid Object", () => {
  const geo = airportsGeo();
  expect(typeof geo === "object").toBe(true);
});

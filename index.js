/** @module airports */
var airportsData = require("./airports.json");
var fs = require("fs");
/**
 *
 *
 * @return Airports Dataset as a Object
 */
function airports() {
  return airportsData;
}

/**
 *
 *
 * @return Airports Dataset as GeoJSON
 */
async function airportsGeo() {
  fs.readFile("./airports.geojson", "utf8", function (err, data) {
    if (err) throw err;
    //console.log(data);
    const geo = JSON.parse(data);
    //console.log("type2: " + typeof geo);
    return geo;
  });
}

/** JSON Airport Object Dataset */
module.exports = {
  airports,
  airportsGeo,
};

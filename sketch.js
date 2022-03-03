let geodata;
let roads;

let bounds = {
  left: 8.20782,
  top: 47.094669,
  right: 8.365691,
  bottom: 47.024504,
};

function preload() {
  geodata = loadJSON("lucerne-roads.geojson");
}

function setup() {
  createCanvas(900, 650);

  roads = geodata.features;
  console.log(roads);

  frameRate(3);

  noLoop();
}

function draw() {
  background(0);
}

function calcSunDir(date, lon, lat) {
  var times = SunCalc.getTimes(date, lat, lon);
  var sunPos = SunCalc.getPosition(times.sunrise, lat, lon);
  let sunHdg = degrees(sunPos.azimuth);
  let sunDir = createVector(100, 0);
  sunDir.rotate(sunHdg - 90);

  return sunDir;
}

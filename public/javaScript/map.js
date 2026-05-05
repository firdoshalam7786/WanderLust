var myAPIKey = mapToken;

// Map initialize Delhi center
var map = L.map("my-map").setView([28.6139, 77.209], 12);

// Retina display check
var isRetina = L.Browser.retina;

// Geoapify basemap URLs
var baseUrl =
  "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
var retinaUrl =
  "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

// Tile layer add
L.tileLayer(isRetina ? retinaUrl : baseUrl, {
  attribution:
    'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | ' +
    '<a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a>',
  apiKey: myAPIKey,
  maxZoom: 20,
  id: "osm-bright",
}).addTo(map);

// Marker with popup
L.marker([28.6139, 77.209])
  .addTo(map)
  .bindPopup("Hello! This is Delhi.")
  .openPopup();

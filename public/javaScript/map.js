var myAPIKey = mapToken;

var coordinates = listing.geometry.coordinates;
var lat = coordinates[1];
var lng = coordinates[0];

var map = L.map("my-map").setView([lat, lng], 12);

var isRetina = L.Browser.retina;

// YAHAN apiKey URL mein directly daalo — {apiKey} placeholder mat use karo
var baseUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${myAPIKey}`;
var retinaUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=${myAPIKey}`;

L.tileLayer(isRetina ? retinaUrl : baseUrl, {
  attribution:
    'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | ' +
    '<a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a>',
  maxZoom: 20,
}).addTo(map);

L.marker([lat, lng])
  .addTo(map)
  .bindPopup(`<b>${listing.title}</b><br>${listing.location}, ${listing.country}`)
  .openPopup();
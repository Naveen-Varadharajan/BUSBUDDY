// Get busId from URL (?busId=101 for example)
const urlParams = new URLSearchParams(window.location.search);
const busId = urlParams.get('busId');

// Initialize map
const map = L.map('map').setView([11.0168, 76.9558], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Custom icons
const busLogoIcon = L.icon({
  iconUrl: 'circle.png',
  iconSize: [26, 26],
  iconAnchor: [13, 26],
  popupAnchor: [0, -26]
});

const stopIcon = L.icon({
  iconUrl: 'bus-stop.png',
  iconSize: [40, 40], 
  iconAnchor: [20, 40], 
  popupAnchor: [0, -40]
});

// Define routes for buses
const routes = {
  "1": [
    {name: "Gandhipuram", coords: [11.0171, 76.9679]},
    {name: "Lakshmi Mills Junction", coords: [11.012992, 76.986053]},
    {name: "PSG Tech", coords: [11.023717, 77.002929]},
    {name: "Airport", coords: [11.038157, 77.037459]},
    {name: "Nava India", coords: [11.020085, 76.992142]},
    {name: "FUN Mall", coords: [11.025104, 77.010499]}
  ],
  "2": [
    {name: "Tirupur Old BusStand", coords: [11.098775, 77.348867]},
    {name: "Tirupur Kumaran College", coords: [11.097377, 77.322470]},
    {name: "Kozhipannai", coords: [11.099989, 77.311381]},
    {name: "Mangalam Bus Stop", coords: [11.102441, 77.271199]},
    {name: "Pallapalayam Bus Stop", coords: [11.085243, 77.213729]},
    {name: "SamalaPuram", coords: [11.074130, 77.192606]},
    {name: "Somanur", coords: [11.088291, 77.184393]}
    
  ],
  "3":[
    { name: "Palladam", coords: [10.9916, 77.2862] },
    { name: "Karanampettai", coords: [11.0195, 77.1799] },
    { name: "Sulur", coords: [11.0248, 77.1250] }
  ]
};

// Choose correct route for bus
const stops = routes[busId] || [];

// Add bus marker
if (stops.length > 0) {
  L.marker(stops[0].coords, {icon: busLogoIcon})
    .addTo(map)
    .bindPopup(`Bus ${busId}`)
    .openPopup();
}

// Add stop markers
stops.forEach(stop => {
  L.marker(stop.coords, {icon: stopIcon}).addTo(map).bindPopup(stop.name);
});

// // Draw route line
// if (stops.length > 1) {
//   const routeCoords = stops.map(stop => stop.coords);
//   L.polyline(routeCoords, {color: 'blue', weight: 4, opacity: 0.7}).addTo(map);
// }

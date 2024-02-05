// pull from different sources
const api_url = "https://geo.ipify.org/api/v2?apiKey=at_D2SmDOVIsbseigGDuGmJTpMle90Da";
const apiKey = 'at_D2SmDOVIsbseigGDuGmJTpMle90Da';
let current_version = "v2";

// Form validation
const form = document.querySelector("#form");
const input = document.querySelector(".input");

// Display of the Ip address, location and timezone of the user
  const current_ip = document.querySelector('.ip-address');
  const location = document.querySelector('.location');
  const timezone = document.querySelector('.timezone');
  const isp = document.querySelector('.isp');
  // const map = document.querySelector('#map');

  // Form validation
  const entered_ip = document.querySelector('.input');
  const search_btn = document.querySelector('#search-btn');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

  });

const map = L.map('map', {
  center: [0, 0],
  zoom: 0,
  layers: [
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }),
  ],
});

// Function for the longitude and latitude when the user enters a location
// when the page loads this function shd create a map with the user's location
updateLoaction = (lat, lng) => {
  map.setView([lat, lng], 13);
  L.marker([lat, lng]).addTo(map);
};

// Function that shows the Ip address, location and timezone of the user
showLocation = (default_ip) => {
  if (default_ip === undefined) {
    let ip_url = `${api_url}${current_version}?apiKey=${apiKey}`;
  } else {
    let ip_url = `${api_url}${current_version}?apiKey=${apiKey}&ipAddress=${default_ip}`;
  }
}



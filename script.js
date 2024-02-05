// pull from different sources
const api_url = "https://geo.ipify.org/api/v2?apiKey=at_D2SmDOVIsbseigGDuGmJTpMle90Da";
const apiKey = 'at_D2SmDOVIsbseigGDuGmJTpMle90Da';
let current_version = "v2";

// Form validation
const form = document.querySelector("#form");
const input = document.querySelector(".input");

// Display of the Ip address, location and timezone of the user
  const current_ip = document.querySelector('.ip-address');
  const current_location = document.querySelector('.location');
  const timezone = document.querySelector('.timezone');
  const isp = document.querySelector('.isp');
  const entered_ip = document.querySelector('.input');
  const search_btn = document.querySelector('#search-btn');

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
  // fetch the data from the api
  fetch(ip_url)
    .then((response) => response.json())
    // display the data
    .then((data) => {
      current_ip.textContent = data.ip;
      current_location.textContent = `${data.location.country}, ${data.location.region},`
      timezone.textContent = `UTC ${data.location.timezone}`;
      isp.textContent = data.isp;

      // update the map with the user's location
      updateLoaction([data.location.lat, data.location.lng])
    })
    .catch((error) => console.log('Oops! Something went wrong', error));
}
// call the function that shows the Ip address, location and timezone of the user
showLocation();

// When the page loads, the map should show the user's location
document.addEventListener('DOMContentLoaded', updateLoaction(0, 0));

// Button to search for the location of the entered Ip address
search_btn.addEventListener('click', (e) => {
  e.preventDefault();
  showLocation(entered_ip.value);
  // if statement to check if the input is empty
  if (entered_ip.value ==! '' && entered_ip.value ==! null) {
    showLocation(entered_ip.value);
    return;
  }
  alert('Please enter a valid IP address');
  entered_ip.value = '';
});
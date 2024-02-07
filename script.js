// pull from different sources
const apiUrl = 'https://geo.ipify.org/api/v2?apiKey=at_D2SmDOVIsbseigGDuGmJTpMle90Da';
const apiKey = 'at_D2SmDOVIsbseigGDuGmJTpMle90Da';

// Display of the Ip address, location and timezone of the user
const currentIp = document.querySelector('#ip-address');
const currentLocation = document.querySelector('#ip-location');
const timeZone = document.querySelector('#ip-timezone');
const isp = document.querySelector('#ip-isp');
const enteredIp = document.querySelector('.input');
const searchBtn = document.querySelector('#search-btn');
const { L } = window;

const map = L.map('map', {
  center: [51.505, -0.09],
  zoom: 13,
  layers: [
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }),
  ],
});

// Makers, circles, and polygons

const marker = L.marker([51.5, -0.09]).addTo(map);

const circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

const polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(map);

// Function for the longitude and latitude when the user enters a location
// when the page loads this function shd create a map with the user's location
const updateLoaction = (lat, lng) => {
  map.setView([lat, lng], 19);
  L.marker([lat, lng]).addTo(map);
};

// Function that shows the Ip address, location and timezone of the user
const showLocation = (defaultIp) => {
  let ipUrl;
  if (defaultIp === undefined) {
    ipUrl = `${apiUrl}?apiKey=${apiKey}`;
  } else {
    ipUrl = `${apiUrl}?apiKey=${apiKey}&ipAddress=${defaultIp}`;
  }
  // fetch the data from the api
  fetch(ipUrl)
    .then((response) => response.json())
    // display the data
    .then((data) => {
      currentIp.innerHTML = data.ip;
      currentLocation.innerHTML = `${data.location.country}, ${data.location.region}`;
      timeZone.innerHTML = `UTC ${data.location.isp}`;
      isp.innerHTML = data.isp;

      // update the map with the user's location
      updateLoaction([data.location.lat, data.location.lng]);
    })
    .catch((error) => console.log('Oops! Something went wrong', error));

  circle();
  marker();
  polygon();
};
// call the function that shows the Ip address, location and timezone of the user
showLocation();

// When the page loads, the map should show the user's location
document.addEventListener('DOMContentLoaded', updateLoaction(0, 0));

// Button to search for the location of the entered Ip address
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showLocation(enteredIp.value);
  // if statement to check if the input is empty
  if (enteredIp.value !== '' && enteredIp.value !== null) {
    showLocation(enteredIp.value);
    return;
  }
  alert('Please enter a valid IP address');
  enteredIp.value = '';
});
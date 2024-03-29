// pull from different sources
const apiUrl = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_D2SmDOVIsbseigGDuGmJTpMle90Da&ipAddress=8.8.8.8';
const apiKey = 'at_D2SmDOVIsbseigGDuGmJTpMle90Da';

const currentIp = document.querySelector('#ip-address');
const currentLocation = document.querySelector('#ip-location');
const timeZone = document.querySelector('#ip-timezone');
const isp = document.querySelector('#ip-isp');
const enteredIp = document.querySelector('.input');
const searchBtn = document.querySelector('#search-btn');
const { L } = window;

// Leaflet Docs help us in creating a map
const map = L.map('map', {
  center: [0, 0],
  zoom: 13,
  layers: [
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }),
  ],
});

// Function for the longitude and latitude when the user enters a location
// when the page loads this function shd create a map with the user's location
const updateLoaction = (update_marker = [0, 0]) => {
  map.setView(update_marker, 13);
  L.marker(update_marker).addTo(map);

  L.circle(update_marker, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100,
  }).addTo(map);

  L.marker([0, 0], {
    color: 'black',
  }).addTo(map);
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
    .then((data) => {
      console.log(data);
      currentIp.innerHTML = data.ip;
      currentLocation.innerHTML = ` ${data.location.city}, ${data.location.region} ${data.location.country} ${data.location.postalCode}`;
      timeZone.innerHTML = `UTC ${data.location.timezone}`;
      isp.innerHTML = data.isp;

      // update the map with the user's location
      updateLoaction([data.location.lat, data.location.lng]);
    })
    .catch((error) => console.log('Oops!, Wrong IP address', error));
};
// call the function that shows the Ip address, location and timezone of the user
showLocation(enteredIp.value);

// When the page loads, the map should show the user's location
document.addEventListener('load', updateLoaction());

// Button to search for the location of the entered Ip address
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showLocation(enteredIp.value);
  enteredIp.value = '';
});
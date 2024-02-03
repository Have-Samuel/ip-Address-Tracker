// Form validation
const form = document.querySelector("#form");
const input = document.querySelector(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  console.log(inputValue);
  if (inputValue === "") {
    input.classList.add("error");
  } else {
    input.classList.remove("error");
    input.value = "";
    console.log(inputValue);
  }
});

// Display of the Ip address, location and timezone of the user
  const ip = document.querySelector('.ip');
  const location = document.querySelector('.location');
  const timezone = document.querySelector('.timezone');
  const isp = document.querySelector('.isp');
  const map = document.querySelector('.map');

  // Get the user's IP address
  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  
  .then(data => {
    console.log(data);
    ip.textContent = data.ip;
    // Get the user's location, timezone and ISP
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_4BzG1VWu3Q2Zw5z4C5z8j9e7z6z8z&ipAddress=${data.ip}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      location.textContent = `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`;
      timezone.textContent = `UTC ${data.location.timezone}`;
      isp.textContent = data.isp;
      // Display the map
      const mymap = L.map('map').setView([data.location.lat, data.location.lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(mymap);
      L.marker([data.location.lat, data.location.lng]).addTo(mymap);
    })
  })
// using the ipify API
// // using IP Geolocation API by IPify https://geo.ipify.org/
// // using LeafletJS https://leafletjs.com/


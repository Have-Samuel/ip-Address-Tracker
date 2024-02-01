// Form validation
const form = document.querySelector("#form");
const input = document.querySelector(".input");

form.addEventListener("submit", (e) => {
  // e.preventDefault(); // Prevents the form from submitting
  e.preventDefault();
});
// Display of the Ip address, location and timezone of the user
// using the ipify API
// // using IP Geolocation API by IPify https://geo.ipify.org/
// // using LeafletJS https://leafletjs.com/

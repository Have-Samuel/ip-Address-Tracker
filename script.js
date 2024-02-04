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
  }
  console.log(inputValue);
});

// Display of the Ip address, location and timezone of the user
  const ip = document.querySelector('.ip-address');
  const location = document.querySelector('.location');
  const timezone = document.querySelector('.timezone');
  const isp = document.querySelector('.isp');
  const map = document.querySelector('#map');

  
// using the ipify API
// // using IP Geolocation API by IPify https://geo.ipify.org/
// // using LeafletJS https://leafletjs.com/


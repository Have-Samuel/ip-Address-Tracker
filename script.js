// Form validation
const form = document.querySelector("#form");
const input = document.querySelector(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  // console.log(inputValue);
  // if (inputValue === "") {
  //   input.classList.add("error");
  // }
  // console.log(inputValue);
});

// Display of the Ip address, location and timezone of the user
  const ip = document.querySelector('.ip-address');
  const location = document.querySelector('.location');
  const timezone = document.querySelector('.timezone');
  const isp = document.querySelector('.isp');
  const map = document.querySelector('#map');

// using IP Geolocation API by IPify https://geo.ipify.org/
  const apiKey = 'at_9GwJ6y5hF8Zi1Q4Jg3tJfZ9o8Xy9p';


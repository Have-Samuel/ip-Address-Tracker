// pull from different sources
const api_url = "https://geo.ipify.org/api/v2?apiKey=at_D2SmDOVIsbseigGDuGmJTpMle90Da";
let current_version = "v2";

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
  const apiKey = 'at_D2SmDOVIsbseigGDuGmJTpMle90Da';


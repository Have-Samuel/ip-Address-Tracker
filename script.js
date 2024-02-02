// Form validation
const form = document.querySelector("#form");
const input = document.querySelector(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;

  if (inputValue === "") {
    input.classList.add("error");
  } else {
    input.classList.remove("error");
    input.value = "";
    console.log(inputValue);
  }
});

// Display of the Ip address, location and timezone of the user
// using the ipify API
// // using IP Geolocation API by IPify https://geo.ipify.org/
// // using LeafletJS https://leafletjs.com/

const url = "https://api.openweathermap.org/data/2.5/";
const apikey = "5a12f4483ea94040b4a566bd2eccd2a8";
const searchButton = document.getElementById("search-button");
const searchBar = document.getElementById("searchBar");
const listButton = document.getElementById("list-button");
const imgUrl = "https://openweathermap.org/img/wn";

let setCity = (e) => {
  if (e.key === "Enter") {
    getResult(searchBar.value);
    searchBar.value = "";
  }
};

window.addEventListener("load", () => {
  getResult("istanbul");
});

const getResult = (city) => {
  let query = `${url}weather?q=${city}&appid=${apikey}&units=metric&lang=en`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(Results);
};

const Results = (result) => {
  let city = document.querySelector("#city-name");
  let humidityRate = document.querySelector("#humidity-rate");
  let windSpeed = document.querySelector("#wind-speed");
  let description = document.querySelector("#description");
  let weatherIcons = document.querySelector("#weather-icon");
  temp.innerText = `${Math.round(result.main.temp)}°C `;
  city.innerText = `${result.name}`;
  humidityRate.innerText = `${result.main.humidity}`;
  windSpeed.innerText = `${result.wind.speed} km/h`;
  description.innerText = `${result.weather[0].description
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")}`;
  weatherIcons.src = `${imgUrl}/${result.weather[0].icon}@2x.png`;
};
searchBar.addEventListener("keypress", setCity);

const axios = require("axios").default;

function formatDateTime(event) {
  let newDate = new Date();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = weekdays[newDate.getDay()];
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  let currentDayTime = `${day} ${hour}:${minute}`;
  let todayTime = document.querySelector("#today-card-title");
  todayTime.innerHTML = `Today is ${currentDayTime}`;
}

function searchWeatherData(event) {
  let apiKey = "f9d6c217fdb897f27b6e330e8c371a9d";
  let searchCity = document.querySelector("#city-search-query");
  //searchCity = searchCity.toLowerCase();
  //searchCity = searchCity.capitalize();
  let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  let celUnit = "metric";
  let currentWeatherURL = `${apiURL}${searchCity.value}&units=${celUnit}&appid=${apiKey}`;
  axios.get(currentWeatherURL).then(currentCityWeather);
}

function handlePosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentCitySearch);
}
function currentCitySearch(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "f9d6c217fdb897f27b6e330e8c371a9d";
  let apiURL = "https://api.openweathermap.org/data/2.5/weather?";
  let celUnit = "metric";
  let currentWeatherURL = `${apiURL}lat=${lat}&lon=${lon}&units=${celUnit}&appid=${apiKey}`;
  console.log(currentWeatherURL);
  axios.get(currentWeatherURL).then(currentCityWeather2);
}

function currentCityWeather(response) {
  let cityTemp = Math.round(response.data.main.temp);
  let cityHumid = response.data.main.humidity;
  let cityDescription = response.data.weather[0].main;
  let cityWind = response.data.wind.speed;
  console.log(cityDescription);
  let todayDescription = document.querySelector("#today-weather-description");
  todayDescription.innerHTML = `${cityDescription}`;
  let todayTemp = document.querySelector("#today-temp");
  todayTemp.innerHTML = `${cityTemp}°C <br /> ${cityHumid}% Humidity <br /> ${cityWind} M/S Wind Speed`;
}
function currentCityWeather2(response) {
  let cityTemp = Math.round(response.data.main.temp);
  let cityHumid = response.data.main.humidity;
  let cityDescription = response.data.weather[0].main;
  let cityWind = response.data.wind.speed;
  let query = response.data.name;
  let newValue = document.querySelector("#perfect-match");
  newValue.innerHTML = `${query}`;
  let todayDescription = document.querySelector("#today-weather-description");
  todayDescription.innerHTML = `${cityDescription}`;
  let todayTemp = document.querySelector("#today-temp");
  todayTemp.innerHTML = `${cityTemp}°C <br /> ${cityHumid}% Humidity <br /> ${cityWind} M/S Wind Speed`;
}

function perfectMatchSearch(event) {
  event.preventDefault();
  let query = document.querySelector("#city-search-query");
  let newValue = document.querySelector("#perfect-match");
  newValue.innerHTML = `${query.value}`;
}

let cityTime = document.querySelector("#search-other-cities");
cityTime.addEventListener("submit", formatDateTime);

let apiCity = document.querySelector("#search-other-cities");
apiCity.addEventListener("submit", searchWeatherData);

let citySearch = document.querySelector("#search-other-cities");
citySearch.addEventListener("submit", perfectMatchSearch);

let buttonClick = document.querySelector("#current-city-button");
buttonClick.addEventListener("click", handlePosition);

let currentButtonClick = document.querySelector("#current-city-button");
currentButtonClick.addEventListener("click", formatDateTime);

//function convertCels(event) {
//let celTemp = document.querySelector("#temp");
//let celTempNum = celTemp.innerHTML;
//celTempNum = Number(celTemp);
//let farTemp = (celTemp * 9) / 5 + 32;
//let farFormat = document.querySelector("#temp-format");

//celTemp.innerHTML = `${farTemp}`;
//farFormat.innerHTML = `°F`;}

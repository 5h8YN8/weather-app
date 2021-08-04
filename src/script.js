let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let currentCity = prompt("Enter a City");
currentCity = currentCity.toLowerCase();

if (weather[currentCity] !== undefined) {
  let temperature = weather[currentCity].temp;
  let humidRate = weather[currentCity].humidity;
  let celcius = Math.round(temperature);
  let farenheit = Math.round((celcius * 9) / 5 + 32);
  alert(
    `It is currently ${celcius}°C (${farenheit}°F) in ${currentCity} with a humidity of ${humidRate}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${currentCity}`
  );
}

function formatDateTime(now)
{
 let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = weekdays[now.getDay()];
  let hour=now.getHours ();
  let minute = now.getMinutes ();
  hour = hour<10 ?'0'+hour : hour;
  minute = minute  < 10 ? '0'+minute : minute;
  let currentDayTime = `${day} ${hour}:${minute}`;
return currentDayTime;
}

let newDate= new Date();
let current = document.querySelector ("#current-day-time"); 
current.innerHTML = formatDateTime(newDate);

function perfectMatchSearch (event){
  event.preventDefault();
  let query = document.querySelector ("#city-search-query");
  let newValue = document.querySelector ("#perfect-match");
  newValue.innerHTML= `${query.value}`;
}

let citySearch = document.querySelector("#search-other-cities");
citySearch.addEventListener("submit", perfectMatchSearch);


function convertCels (event){
  let celTemp = document.querySelector("#temp");
  let celTempNum= Number(celTemp);
  let farTemp = (celTempNum * 9/5) + 32;
let farFormat = document.querySelector ("#temp-format");

celTemp.innerHTML=`${farTemp}`;
farFormat.innerHTML=`°F`;
}

let buttonClick = document.querySelector("#current-city-button");
buttonClick.addEventListener("click",convertCels);
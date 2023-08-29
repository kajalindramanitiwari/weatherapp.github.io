const APIKey = "0e6e684dabb8a1a0256ad714a420cfe4";
const APIUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon img");

async function checkWeather(city) {
  const response = await fetch(APIUrl + city + `&appid=${APIKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.feels_like + " %";
    document.querySelector(".wind-speed").innerHTML =
      data.wind.speed + " km/hr";
    document.querySelector(".min-temp").innerHTML = data.main.temp_min + " °C";
    document.querySelector(".max-temp").innerHTML = data.main.temp_max + " °C";

    if (data.weather[0].main == "Clouds") {
      WeatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      WeatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      WeatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      WeatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      WeatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      WeatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Haze") {
      WeatherIcon.src = "images/haze.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkWeather(searchBox.value);
});

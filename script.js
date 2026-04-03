async function weather(lat, lon) {
  try {
    const weatherAPI = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a81bd1fdeb2b2e1393e366cf5be977bd`,
    );
    if (!weatherAPI.ok) {
      console.log("API Error:", errData.message);
      return;
    }
    const weatherData = await weatherAPI.json();
 
    let currentTemp = weatherData.main["temp"];
    let description = weatherData.weather[0]["description"];
    let icon = weatherData.weather[0]["icon"];
    return [currentTemp, description, icon];
  } catch (error) {
    console.log("Fetch failed:", error.message);
  }
}
async function forecast(lat, lon) {
  try {
    const forecastAPI = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a81bd1fdeb2b2e1393e366cf5be977bd`,
    );
    forecastData = await forecastAPI.json();

   let day1temp = forecastData.list[8].main.temp;
    let day2temp = forecastData.list[16].main.temp;
    let day3temp = forecastData.list[24].main.temp;
    let day4temp = forecastData.list[32].main.temp;

    let icon1 = forecastData.list[8].weather[0].icon;
    let icon2 = forecastData.list[16].weather[0].icon;
    let icon3 = forecastData.list[24].weather[0].icon;
    let icon4 = forecastData.list[32].weather[0].icon;
    return [day1temp, day2temp, day3temp, day4temp, icon1,icon2,icon3,icon4];
  } catch (error) {
    console.log("Fetch failed:", error.message);
  }
}
function getTodayName() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const currentDay = today.getDay();

  let day1 = days[(currentDay + 1) % 7];
  let day2 = days[(currentDay + 2) % 7];
  let day3 = days[(currentDay + 3) % 7];
  let day4 = days[(currentDay + 4) % 7];

  return [day1, day2, day3, day4];
}

async function name(city) {
  try {
    geoAPI = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=a81bd1fdeb2b2e1393e366cf5be977bd`,
    );
    if (!geoAPI.ok) {
      console.log("API Error:", errData.message);
      return;
    }
    const geoData = await geoAPI.json();
    const lat = geoData[0].lat;
    const lon = geoData[0].lon;
    let weatherInfo = await weather(lat, lon);
    let forecastInfo = await forecast(lat, lon);
    let Information = {
      weatherInfo,
      forecastInfo,
    };
    return Information;
  } catch (error) {
    console.log("Fetch failed:", error.message);
  }
}

button = document.getElementById("searchBtn");

button.addEventListener("click", async () => {
  await updatepage();
});


async function updatepage() {
  let cityName = document.getElementById("name").value;
  const call = await name(cityName);
  const date = getTodayName();
  document.querySelector(".currentWeather").classList.add("show");

  document.getElementById("cityName").innerText = cityName;
  document.getElementById("icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${call.weatherInfo[2]}@2x.png">

`;
  document.getElementById("temp").innerHTML = `
    Temperature = ${call.weatherInfo[0]}K
          <br />
          ${call.weatherInfo[1]}`;
  document.getElementById("day1").innerHTML = ` 
    <img src="https://openweathermap.org/img/wn/${call.forecastInfo[4]}@2x.png">
    ${date[0]} <br /> <br/> ${call.forecastInfo[0]}k`;
  document.getElementById("day2").innerHTML =
    `  <img src="https://openweathermap.org/img/wn/${call.forecastInfo[5]}@2x.png"> ${date[1]} <br /> <br/>  ${call.forecastInfo[1]}K`;
  document.getElementById("day3").innerHTML =
    `  <img src="https://openweathermap.org/img/wn/${call.forecastInfo[6]}@2x.png">${date[2]} <br /> <br/>  ${call.forecastInfo[2]}k`;
  document.getElementById("day4").innerHTML =
    `  <img src="https://openweathermap.org/img/wn/${call.forecastInfo[7]}@2x.png">${date[3]} <br /> <br/>  ${call.forecastInfo[3]} K`;
}

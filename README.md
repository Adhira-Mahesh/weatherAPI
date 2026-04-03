# 🌦️ Weather Forecast App

A simple and elegant weather web application that allows users to search for any city and view the current weather along with a 4-day forecast.

---

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Displays current temperature and weather description
* 📅 Shows a 4-day weather forecast
* 🌤️ Weather icons for better visualization
* 🎨 Clean UI with a frosted glass (glassmorphism) design

---

## 🛠️ Tech Stack

* **HTML5** – Structure of the app
* **CSS3** – Styling and layout
* **JavaScript (Vanilla JS)** – Logic and API handling
* **OpenWeatherMap API** – Weather data

---

## 📂 Project Structure

```
📁 project-folder
│── index.html      # Main HTML file
│── style.css       # Styling file
│── script.js       # JavaScript logic
│── 📁 images       # Background images
```

---

## ⚙️ How It Works

1. User enters a city name
2. App fetches latitude & longitude using the Geocoding API
3. Fetches:

   * Current weather data
   * 5-day forecast data
4. Displays:

   * Current temperature and weather condition
   * Forecast for the next 4 days

---

## 🔧 Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
```

2. Navigate to the project folder:

```bash
cd weather-app
```

3. Open `index.html` in your browser.

---

## 🔑 API Key Setup

This app uses the **OpenWeatherMap API**.

⚠️ Your API key is currently exposed in the code. For safety:

* Go to https://openweathermap.org/api
* Generate your own API key
* Replace the existing key in `script.js`:

```javascript
const API_KEY = "your_api_key_here";
```

---

## 📸 Preview

* Current weather section appears after search
* Forecast cards show upcoming weather with icons

---

## ⚠️ Known Issues / Improvements

* Temperature is displayed in **Kelvin** (can be converted to Celsius)
* No error handling for invalid city names
* API key should be secured (use environment variables in production)
* UI can be improved for mobile responsiveness

---

## 💡 Future Enhancements

* 🌍 Auto-detect user location
* 🌡️ Toggle between Celsius / Fahrenheit
* 📱 Better responsive design
* ❌ Error messages for invalid input
* 🔄 Loading indicators

---

## 📄 License

This project is open-source and free to use.

---

## 🙌 Acknowledgements

* OpenWeatherMap for providing the weather API
* Inspiration from modern glassmorphism UI designs

---

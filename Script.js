const apiKey = '78a56761570fa6ebdd71146a93e27a73'; // Replace with your OpenWeatherMap API key

function getIndianWeather() {
  const city = document.getElementById("city").value.trim();
  const weatherDiv = document.getElementById("weather");

  if (city === "") {
    weatherDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found in India.");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const humidity = data.main.humidity;
      const wind = data.wind.speed;

      weatherDiv.innerHTML = `
        <h3>Weather in ${data.name}, India</h3>
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Condition:</strong> ${desc}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${wind} m/s</p>
      `;
    })
    .catch(error => {
      weatherDiv.innerHTML = `<p>${error.message}</p>`;
    });
}

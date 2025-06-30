const API_KEY = 'YOUR_API_KEY'; // Will be replaced securely in CI/CD

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    document.getElementById("weatherOutput").innerHTML =
      `<h3>${data.name}</h3>
       <p>${data.weather[0].description}</p>
       <p>🌡️ ${data.main.temp} °C</p>`;
  } catch (error) {
    document.getElementById("weatherOutput").innerHTML = "<p>City not found.</p>";
  }
}

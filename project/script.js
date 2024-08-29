const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "YOUR_API_KEY",
    "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
  },
};
async function getWeatherForecast() {
  try {
    let location = document.getElementById("inputCity").value;
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`;
    const response = await fetch(url, options);
    const result = await response.json();
    document.getElementById("wind").innerText = `${result.current_observation.wind.speed} km/hr`;
    document.getElementById("temp").innerText = `${((result.current_observation.condition.temperature - 32) * 5/9).toFixed(2)} °C`;
    document.getElementById("cloud").innerText = result.current_observation.condition.text;
    document.getElementById("humidity").innerText = result.current_observation.atmosphere.humidity;
  } catch (error) {
    console.error(error);
  }
}
document.getElementById("btn").addEventListener("click", getWeatherForecast);
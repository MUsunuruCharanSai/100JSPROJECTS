async function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    document.getElementById("error").innerText = "Please enter a city name";

    return;
  }

  try {
    const locationResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
    );

    const locationData = await locationResponse.json();

    if (!locationData.results) {
      document.getElementById("error").innerText = "City not found";

      return;
    }

    const latitude = locationData.results[0].latitude;
    const longitude = locationData.results[0].longitude;
    const cityName = locationData.results[0].name;

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`,
    );

    const weatherData = await weatherResponse.json();

    const temperature = weatherData.current.temperature_2m;

    document.getElementById("cityName").innerText = cityName;

    document.getElementById("temperature").innerText = temperature + "°C";

    document.getElementById("condition").innerText = "Current Temperature";

    document.getElementById("error").innerText = "";
  } catch (error) {
    document.getElementById("error").innerText = "Something went wrong";

    console.log(error);
  }
}

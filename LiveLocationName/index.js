async function getLocation() {
  navigator.geolocation.getCurrentPosition(async function (position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
    );
    let data = await response.json();
    document.getElementById("result").innerText = data.display_name;

    // Display map, Using google maps
    document.getElementById("map").src =
      `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
  });
}

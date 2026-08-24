let place = document.getElementById("place");
let button = document.getElementById("navigate");
let message = document.getElementById("message");

let map;
let currentLocation;
let destinationMarker;
let routeLine;

navigator.geolocation.getCurrentPosition(
  function (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    currentLocation = [latitude, longitude];

    map = L.map("map").setView(currentLocation, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker(currentLocation)
      .addTo(map)
      .bindPopup("📍 You are here")
      .openPopup();
  },
  function () {
    message.innerText = "Please allow location access.";
  },
);

button.addEventListener("click", navigate);

async function navigate() {
  let destination = place.value.trim();

  if (destination === "") {
    message.innerText = "Please enter a place name.";
    return;
  }

  if (!currentLocation) {
    message.innerText = "Getting your location...";
    return;
  }

  message.innerText = "Searching...";

  try {
    let response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(destination)}`,
    );

    let data = await response.json();

    if (data.length === 0) {
      message.innerText = "Place not found.";
      return;
    }

    let destinationLocation = [
      parseFloat(data[0].lat),
      parseFloat(data[0].lon),
    ];

    if (destinationMarker) {
      map.removeLayer(destinationMarker);
    }

    if (routeLine) {
      map.removeLayer(routeLine);
    }

    destinationMarker = L.marker(destinationLocation)
      .addTo(map)
      .bindPopup("📍 " + destination)
      .openPopup();

    routeLine = L.polyline([currentLocation, destinationLocation], {
      color: "blue",
      weight: 5,
    }).addTo(map);

    map.fitBounds(routeLine.getBounds(), {
      padding: [50, 50],
    });

    message.innerText = "Destination found!";
  } catch (error) {
    message.innerText = "Something went wrong.";
    console.log(error);
  }
}

function getLocation() {
  navigator.geolocation.watchPosition(function (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    document.getElementById("location").innerHTML = `
                    Latitude: ${latitude} <br>
                    Longitude: ${longitude} <br><br>
                    <a href="https://www.google.com/maps?q=${latitude},${longitude}" 
                       target="_blank">
                        Open in Google Maps
                    </a>
                `;
  });
}

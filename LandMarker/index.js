let map;

let currentLocationMarker = null;

let accuracyCircle = null;

let walkingLine = null;

let landPolygon = null;

let watchId = null;

let isWalking = false;

let isPaused = false;

let coordinates = [];

let totalDistance = 0;

let lastPosition = null;

const startBtn =
    document.getElementById("startBtn");

const pauseBtn =
    document.getElementById("pauseBtn");

const stopBtn =
    document.getElementById("stopBtn");

const clearBtn =
    document.getElementById("clearBtn");

const gpsStatus =
    document.getElementById("gpsStatus");

const gpsDot =
    document.getElementById("gpsDot");

const accuracyElement =
    document.getElementById("accuracy");

const pointsElement =
    document.getElementById("points");

const distanceElement =
    document.getElementById("distance");

const areaElement =
    document.getElementById("area");

const result =
    document.getElementById("result");

const areaM2Element =
    document.getElementById("areaM2");

const areaAcresElement =
    document.getElementById("areaAcres");

const areaHectaresElement =
    document.getElementById("areaHectares");

const message =
    document.getElementById("message");

map = L.map("map");


// OpenStreetMap tiles

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 22,

        attribution:
            '&copy; OpenStreetMap contributors'
    }
).addTo(map);

map.setView(
    [16.5062, 80.6480],
    15
);

function showMessage(text) {

    message.textContent = text;

    message.classList.add("show");

}

function hideMessage() {

    message.textContent = "";

    message.classList.remove("show");

}

startBtn.addEventListener(
    "click",
    startWalking
);


function startWalking() {

    if (!navigator.geolocation) {

        showMessage(
            "GPS is not supported by this browser."
        );

        return;
    }


    // Reset measurement

    coordinates = [];

    totalDistance = 0;

    lastPosition = null;


    // Remove previous drawing

    if (walkingLine) {

        map.removeLayer(walkingLine);

    }

    if (landPolygon) {

        map.removeLayer(landPolygon);

    }


    walkingLine =
        L.polyline(
            [],
            {
                weight: 4
            }
        ).addTo(map);


    result.classList.remove("show");

    areaElement.textContent = "--";


    isWalking = true;

    isPaused = false;


    // Button states

    startBtn.disabled = true;

    pauseBtn.disabled = false;

    stopBtn.disabled = false;


    gpsStatus.textContent =
        "Searching for GPS...";

    gpsDot.className = "";

    hideMessage();


    // Start watching GPS

    watchId =
        navigator.geolocation.watchPosition(

            handlePosition,

            handleGPSError,

            {
                enableHighAccuracy: true,

                maximumAge: 0,

                timeout: 10000
            }
        );

}


function handlePosition(position) {

    const latitude =
        position.coords.latitude;

    const longitude =
        position.coords.longitude;

    const accuracy =
        position.coords.accuracy;


    // Show accuracy

    accuracyElement.textContent =
        `±${accuracy.toFixed(1)} m`;


    updateGPSStatus(accuracy);

    updateCurrentLocation(
        latitude,
        longitude,
        accuracy
    );

    if (coordinates.length === 0) {

        map.setView(
            [latitude, longitude],
            19
        );

    }

    if (isPaused) {

        return;
    }

    if (accuracy > 25) {

        showMessage(
            `GPS accuracy is poor (±${accuracy.toFixed(1)} m). Move to an open area.`
        );

        return;
    }

    const newPoint = [
        latitude,
        longitude
    ];

    if (coordinates.length > 0) {

        const previousPoint =
            coordinates[
                coordinates.length - 1
            ];

        const distance =
            calculateDistance(
                previousPoint[0],
                previousPoint[1],
                latitude,
                longitude
            );


        if (distance < 2) {

            return;

        }
        if (distance > 50) {

            showMessage(
                "GPS jump detected. Ignoring this point."
            );

            return;

        }


        totalDistance += distance;
    }


    // Add point

    coordinates.push(newPoint);


    // Update walking line

    walkingLine.setLatLngs(
        coordinates
    );


    // Update UI

    pointsElement.textContent =
        coordinates.length;

    distanceElement.textContent =
        formatDistance(totalDistance);


    // Clear warning

    if (accuracy <= 10) {

        hideMessage();

    }

}

function updateGPSStatus(accuracy) {

    gpsDot.className = "active";


    if (accuracy <= 5) {

        gpsStatus.textContent =
            "GPS Excellent";

    } else if (accuracy <= 10) {

        gpsStatus.textContent =
            "GPS Good";

    } else if (accuracy <= 20) {

        gpsStatus.textContent =
            "GPS Moderate";

    } else {

        gpsDot.className = "warning";

        gpsStatus.textContent =
            "GPS Poor";

    }

}

function updateCurrentLocation(
    latitude,
    longitude,
    accuracy
) {

    const location =
        [latitude, longitude];


    // Marker

    if (!currentLocationMarker) {

        currentLocationMarker =
            L.circleMarker(
                location,
                {
                    radius: 7,

                    weight: 3
                }
            ).addTo(map);

    } else {

        currentLocationMarker
            .setLatLng(location);

    }


    // Accuracy circle

    if (!accuracyCircle) {

        accuracyCircle =
            L.circle(
                location,
                {
                    radius: accuracy,

                    weight: 1
                }
            ).addTo(map);

    } else {

        accuracyCircle
            .setLatLng(location);

        accuracyCircle
            .setRadius(accuracy);

    }

}

function handleGPSError(error) {

    gpsDot.className = "error";

    gpsStatus.textContent =
        "GPS Error";


    if (error.code === 1) {

        showMessage(
            "Location permission was denied. Please allow GPS access in your browser."
        );

    } else if (error.code === 2) {

        showMessage(
            "GPS position is currently unavailable."
        );

    } else if (error.code === 3) {

        showMessage(
            "GPS request timed out. Trying again..."
        );

    } else {

        showMessage(
            "Unable to get your GPS location."
        );

    }

}

pauseBtn.addEventListener(
    "click",
    function () {

        if (!isWalking) {

            return;
        }


        isPaused = !isPaused;


        if (isPaused) {

            pauseBtn.textContent =
                "▶ Resume";

            gpsStatus.textContent =
                "Measurement Paused";

        } else {

            pauseBtn.textContent =
                "⏸ Pause";

            gpsStatus.textContent =
                "GPS Active";

        }

    }
);

stopBtn.addEventListener(
    "click",
    stopWalking
);


function stopWalking() {

    if (!isWalking) {

        return;
    }


    isWalking = false;

    isPaused = false;


    // Stop GPS watcher

    if (watchId !== null) {

        navigator.geolocation.clearWatch(
            watchId
        );

        watchId = null;

    }

    startBtn.disabled = false;

    pauseBtn.disabled = true;

    stopBtn.disabled = true;

    pauseBtn.textContent =
        "⏸ Pause";


    if (coordinates.length < 3) {

        showMessage(
            "Not enough boundary points. Walk around the complete plot and try again."
        );

        return;

    }

    const closedCoordinates = [
        ...coordinates,
        coordinates[0]
    ];

    if (landPolygon) {

        map.removeLayer(landPolygon);

    }


    landPolygon =
        L.polygon(
            closedCoordinates,
            {
                weight: 3,

                fillOpacity: 0.25
            }
        ).addTo(map);

    const area =
        calculatePolygonArea(
            coordinates
        );


    displayArea(area);

    map.fitBounds(
        landPolygon.getBounds(),
        {
            padding: [30, 30]
        }
    );


    gpsStatus.textContent =
        "Measurement Complete";


    gpsDot.className =
        "active";

}

clearBtn.addEventListener(
    "click",
    clearMeasurement
);


function clearMeasurement() {

    if (watchId !== null) {

        navigator.geolocation.clearWatch(
            watchId
        );

        watchId = null;

    }


    isWalking = false;

    isPaused = false;

    coordinates = [];

    totalDistance = 0;

    lastPosition = null;


    if (walkingLine) {

        map.removeLayer(
            walkingLine
        );

        walkingLine = null;

    }
    if (landPolygon) {

        map.removeLayer(
            landPolygon
        );

        landPolygon = null;

    }

    pointsElement.textContent =
        "0";

    distanceElement.textContent =
        "0 m";

    accuracyElement.textContent =
        "--";

    areaElement.textContent =
        "--";


    result.classList.remove(
        "show"
    );


    startBtn.disabled = false;

    pauseBtn.disabled = true;

    stopBtn.disabled = true;

    pauseBtn.textContent =
        "⏸ Pause";


    gpsStatus.textContent =
        "GPS Not Started";

    gpsDot.className = "";


    hideMessage();

}

function calculateDistance(
    lat1,
    lon1,
    lat2,
    lon2
) {

    const R = 6371000;


    const lat1Rad =
        lat1 * Math.PI / 180;

    const lat2Rad =
        lat2 * Math.PI / 180;


    const deltaLat =
        (lat2 - lat1) *
        Math.PI / 180;

    const deltaLon =
        (lon2 - lon1) *
        Math.PI / 180;


    const a =
        Math.sin(deltaLat / 2) ** 2 +

        Math.cos(lat1Rad) *
        Math.cos(lat2Rad) *

        Math.sin(deltaLon / 2) ** 2;


    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );


    return R * c;

}

function calculatePolygonArea(
    points
) {

    if (points.length < 3) {

        return 0;

    }

    const earthRadius = 6378137;


    const centerLat =
        points.reduce(
            (sum, point) =>
                sum + point[0],
            0
        ) / points.length;


    const centerLon =
        points.reduce(
            (sum, point) =>
                sum + point[1],
            0
        ) / points.length;


    const centerLatRad =
        centerLat *
        Math.PI / 180;


    const projected = points.map(
        point => {

            const x =
                (point[1] - centerLon) *
                Math.PI / 180 *
                earthRadius *
                Math.cos(centerLatRad);


            const y =
                (point[0] - centerLat) *
                Math.PI / 180 *
                earthRadius;


            return [x, y];

        }
    );


    let area = 0;


    for (
        let i = 0;
        i < projected.length;
        i++
    ) {

        const j =
            (i + 1) %
            projected.length;


        area +=
            projected[i][0] *
            projected[j][1] -

            projected[j][0] *
            projected[i][1];

    }


    return Math.abs(area / 2);

}

function displayArea(
    squareMeters
) {

    const acres =
        squareMeters /
        4046.8564224;


    const hectares =
        squareMeters /
        10000;


    areaM2Element.textContent =
        `${squareMeters.toFixed(2)} m²`;


    areaAcresElement.textContent =
        `${acres.toFixed(4)} acres`;


    areaHectaresElement.textContent =
        `${hectares.toFixed(4)} ha`;


    areaElement.textContent =
        `${acres.toFixed(4)} acres`;


    result.classList.add(
        "show"
    );

}

function formatDistance(
    meters
) {

    if (meters < 1000) {

        return `${meters.toFixed(1)} m`;

    }


    return `${(
        meters / 1000
    ).toFixed(2)} km`;

}
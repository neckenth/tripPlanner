const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoibmVja2VudGgiLCJhIjoiY2ptaTY0a2QxMDFuMzN3bXZ1Nm53ajRwNSJ9.3AvkyUJwTfDB002CXdr-yQ';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
})

const mapMarker = document.createElement('mapMarker');
mapMarker.style.width = "32px";
mapMarker.style.height = "39px";
mapMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

//before copying and pasting exact coordinates array into setLngLat method, I passed map.center
//this threw an error saying that setLngLat expected an object, not an array
//then I created the obj below, and it failed saying that map.center[0] was undefined
//what happened here?

// const lngLatObj = {
//     lng: map.center[0],
//     lat: map.center[1]
// }

new mapboxgl.Marker(mapMarker).setLngLat([-74.009, 40.705]).addTo(map);

console.log('EVERYTHING IS WORKING CORRECTLY')
const mapboxgl = require('mapbox-gl');

const markerFunc = (type, coordinates) => {
    let link;
    if (type === 'hotel'){
        link =  'url(http://i.imgur.com/D9574Cu.png)';
    } else if (type === 'activity') {
        link =  'url(http://i.imgur.com/WbMOfMl.png)';
    } else if (type === 'restaurant') {
        link = 'url(http://i.imgur.com/cqR6pUI.png)';
    }
    const mapMarker = document.createElement('mapMarker');
    mapMarker.style.width = '32px';
    mapMarker.style.height = '39px';
    mapMarker.style.backgroundImage = link;
    const result = new mapboxgl.Marker(mapMarker).setLngLat(coordinates);
    return result;
}

module.exports = markerFunc;

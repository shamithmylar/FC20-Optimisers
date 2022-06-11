	mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyYWF6MTMiLCJhIjoiY2wzYjU3ZmZ2MGMzZzNqbnJqb2VocTNhZCJ9.Sr5mftthFsHKMfX_S3DJfg';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-285,16.63925],
zoom: 5
});
const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [76.652985,12.311827]
      },
      properties: {
        title: 'India',
        description: 'Mysore, Karnataka'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [88.363892,22.572645]
      },
      properties: {
        title: 'India',
        description: 'Kolkata, West Bengal'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [77.069710,28.679079,]
      },
      properties: {
        title: 'India',
        description: 'Delhi, New Delhi'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [72.877426,19.076090,]
      },
      properties: {
        title: 'India',
        description: 'Mumbai, Maharashtra'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [80.237617,13.067439,]
      },
      properties: {
        title: 'Mapbox',
        description: 'Chennai, Tamil Nadu'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [77.412613,23.259933,]
      },
      properties: {
        title: 'Mapbox',
        description: 'Chennai, Tamil Nadu'
      }
    }
  ]
};
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
        `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
      )
  ).addTo(map);
}
map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);
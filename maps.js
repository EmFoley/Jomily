function initialize() {
  var location = new google.maps.LatLng(40.7607793,-111.8910474);
  var mapOptions = {
    center: location,
    zoom: 6
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  markerMaker();
  travelLines();
};

google.maps.event.addDomListener(window, 'load', initialize);

var placesList = [
  ['West Hollywood, California', 34.090009, -118.361744],
  ['Long Beach, California', 33.770050, -118.193739],
  ['Zion National Park', 37.322817, -113.045716],
  ['Grand Canyon North Rim', 36.212424, -112.065255],
  ['Grand Canyon South Rim', 36.056198, -112.125202],
  ['Antelope Canyon', 36.861897, -111.374438],
  ['Silverton, Colorado', 37.811941, -107.664506],
  ['Salt Lake City', 40.7607793, -111.8910474],
  ['Glacier National Park', 48.759613, -113.787023],
  ['Cody, Wyoming', 44.526342, -109.056531],
  ['Yellowstone National Park', 44.427963, -110.588455],
  ['Jackson Hole, Wyoming', 43.479929, -110.762428],
  ['Spokane, Washington', 47.658780, -117.426047],
  ['San Juan Islands, Washington', 48.551367, -123.078106],
  ['Seattle, Washington', 47.606209, -122.332071],
  ['White Salmon River/Columbia River Gorge, Washington', 45.727619, -121.486462],
  ['Portland, Oregon', 45.523452, -122.676207],
  ['San Francisco, California', 37.774929, -122.419416]
]

var linesList = [];
function markerMaker() {
    for(i=0; i < placesList.length; i++) {
      var position = new google.maps.LatLng(placesList[i][1], placesList[i][2]);
      var marker = new google.maps.Marker({
          map:map,
          position: position,
          title: placesList[i][0],
          visible: true
      });
      marker.setMap(map);
      linesList.push(marker);
    };
    return linesList
  };

var test = [
  new google.maps.LatLng(45.523452, -122.676207),
  new google.maps.LatLng(37.774929, -122.419416),
  new google.maps.LatLng(45.727619, -121.486462),
  new google.maps.LatLng(47.606209, -122.332071),
  new google.maps.LatLng(48.551367, -123.078106),
  new google.maps.LatLng(47.658780, -117.426047),
  new google.maps.LatLng(43.479929, -110.762428),
  new google.maps.LatLng(44.427963, -110.588455),
  new google.maps.LatLng(44.526342, -109.056531),
  new google.maps.LatLng(48.759613, -113.787023),
  new google.maps.LatLng(40.7607793, -111.8910474),
  new google.maps.LatLng(37.811941, -107.664506),
  new google.maps.LatLng(36.861897, -111.374438),
  new google.maps.LatLng(36.056198, -112.125202),
  new google.maps.LatLng(36.212424, -112.065255),
  new google.maps.LatLng(37.322817, -113.045716),
  new google.maps.LatLng(33.770050, -118.193739),
  new google.maps.LatLng(34.090009, -118.361744)
]
function travelLines() {
  var travelPath = new google.maps.Polyline({
    path: test,
    geodesic: true,
    strokeColor: '#FFF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  travelPath.setMap(map);
};






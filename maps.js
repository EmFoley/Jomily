function initialize() {
  var location = new google.maps.LatLng(40.7607793,-111.8910474);
  var mapOptions = {
    center: location,
    zoom: 6
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  markerMaker();
};

google.maps.event.addDomListener(window, 'load', initialize);

var placesList = [
  ['Salt Lake City', 40.7607793, -111.8910474],
  ['Zion National Park', 37.322817, -113.045716]
]
// var bounds = new google.maps.LatLngBounds();


function markerMaker() {
    for(i=0; i < placesList.length; i++) {
      var position = new google.maps.LatLng(placesList[i][1], placesList[i][2]);
      // bounds.extend(position);
      var marker = new google.maps.Marker({
          map:map,
          position: position,
          title: placesList[i][0],
          visible: true
      });
      marker.setMap(map);
    };
  };







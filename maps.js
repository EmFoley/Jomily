function initialize() {
  var location = new google.maps.LatLng(40.7607793, -111.8910474)
  var mapOptions = {
    center: location,
    zoom: 6
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
 markerMaker();
};

google.maps.event.addDomListener(window, 'load', initialize);

function allThePlaces() {
  var placesList = [
    (40.7607793, -111.8910474),

  ]
}

function markerMaker() {
  var marker = new google.maps.Marker({
      position: location,
      map: map,
      title:"Salt Lake City!",
      visible: true
  });
  marker.setMap(map);
};






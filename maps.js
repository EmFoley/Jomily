function initialize() {
  var location = new google.maps.LatLng(40.7607793, -111.8910474)
  var mapOptions = {
    center: location,
    zoom: 6
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  var marker = new google.maps.Marker({
      position: location,
      map: map,
      title:"Salt Lake City!",
      visible: true
  });
  marker.setMap(map);
};

google.maps.event.addDomListener(window, 'load', initialize);









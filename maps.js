function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(40.7607793, -111.8910474),
    zoom: 6
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  var marker = new google.maps.Marker({
      position: center,
      map: map,
      title:"Salt Lake City!"
  });
  marker.setMap(map);
};

google.maps.event.addDomListener(window, 'load', initialize);








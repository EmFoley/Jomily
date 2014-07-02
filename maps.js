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


function markerMaker() {
  var placesList = [
    (40.7607793, -111.8910474),
    (40.7607793, -110.8910474)
  ]
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
    for(i=0, i < placesList.length, i++) {
      var marker = new google.maps.Marker({
          position: i,
          map: map,
          visible: true
      });
      marker.setMap(map);
    };
  };







var location = new google.maps.LatLng(40.7607793,-111.8910474);
var placesList = [
    [40.7607793, -111.8910474],
    [40.7607793, -110.8910474]
  ];
var map;

function initialize() {
  var mapOptions = {
    center: location,
    zoom: 6
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
 markerMaker();
};

google.maps.event.addDomListener(window, 'load', initialize);


function markerMaker() {
    for(i=0; i < placesList.length; i++) {
      var marker = new google.maps.Marker({
          map:map,
          position: new google.maps.LatLng(placesList[i].toString()),
          visible:true
      });
      marker.setMap(map);
    };
  };







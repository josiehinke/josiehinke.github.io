<!DOCTYPE html>
<html>
  <head>
    <style>
       #map {
        width: 100%;
        height: 400px;
      }
    </style>
  </head>
  <body>
    <h3>My Google Maps Demo</h3>
    <div id="map"></div>
    <script>
      function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 47.6062, lng: -122.3321},
            zoom: 8
        });
      }
    </script>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?AIzaSyBasQ54JleFu69ESwtLtdsTLYWReEFX8I4&callback=initMap">
    </script>
  </body>
</html>
console.log('Bootstrap custom theme');

$('#map').hide();
$('#home').show();

$(document).ready(function(){
  // $('#heading').click(function(){
  //   $(this).hide();
  // });
  $('#mapBtn').click(function(){
    $('#home').hide();
    $('#map').show();
    initMap();
  });
  $('#homeBtn').click(function(){
    $('#map').hide();
    $('#home').show();
  });



});

// var map;
function initMap() {
        // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
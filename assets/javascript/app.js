// get user input (city name)
// on click "search"

// get user input (date)
// datepicker or simple user entry

// MAP

// get user input (lodging name/address)
// on click map info window
// three options: add to lodging / add to activities / add to meals

// display user inputs
// three divs: info / activities / meals - added to html according to user differentiation
// info div:
// lodging name & address & $ / date
// cost: average of $ ratings from Yelp that updates as items are added (assign values 1-4 to the dollar signs, get average)
// maintain this info so user can then pick a new day to plan
// display new user inputs, same as above
// auto fill hotel info

// ability to remove individual items
// button [X] - on click, remove div
// update avg $

// totals div
// avg $ for lodging / meals / activities & total avg

// text to accompany cost averages (just for fun)









$(document).ready(function () {
  var map, infoWindow;

  function initMap() {
    map = new google.maps.Map(document.getElementById('responsive-gmap'), {
      center: {
        lat: 33.645076,
        lng: -117.834766
      },
      zoom: 12
    });


    infoWindow = new google.maps.InfoWindow;
    // how to handle errors in geolocations
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);

      $('#responsive-gmap').html('<h2>Please allow geolocation</h2>')

    }
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
        map.setZoom(15)
      }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }
  initMap()


  // init date picker ui from jquery ui
  $("#startdate").datepicker({format:'yyyy-mm-dd'})
  $("#enddate").datepicker({format:'yyyy-mm-dd'})
  // attaching click event to submission button
 $('#submitForm').on('click', function(e) {
    //select the startdate element and initialize datepicker function
e.preventDefault()
console.log('submitting form')
    var startUtcDate = moment.utc( $('#startdate').datepicker('getDate')).format()
    console.log('startUtcDate ==== \n',startUtcDate)
    var endUtcDate = moment.utc($('#enddate').datepicker('getDate')).format()
    console.log('endUtcDate ====== \n',endUtcDate)

 });






  // function makeMarke() {

  // }

  // function plotToGMap(obj) {
  //   var events = obj.events
  //   for (var i = 0; events.length; i++) {
  //     console.log(events[i])

  //   }
  // }

  // function getEvents(city, miles, start, end) {
  //   // ------------------------------- EVENT BRITE API ----------------------- //
  //   var token = 'DCPCQE6ZICHZYLNHXZNI'
  //   var eventBriteEndPoint = 'https://www.eventbriteapi.com/v3/events/search/'
  //   var query = '?location.address=' + city + '&location.within=' + miles + 'mi&start_date.range_start=' + start + '&start_date.range_end=' + end + '&token=' + token
  //   $.ajax({
  //     'url': eventBriteEndPoint + query
  //   }).done(function (results) {
  //     LOCAL_LOCATIONS = results;
  //     plotToGMap(LOCAL_LOCATIONS)
  //   })

  // }
  // getEvents('irvine', '30', '2018-03-12T13%3A41%3A45Z', '2018-06-22T13%3A41%3A48Z')

});
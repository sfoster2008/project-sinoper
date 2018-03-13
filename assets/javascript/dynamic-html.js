var eventCount = 0

$(".submitBtn").on( "click" , function ( ) {

  eventCount++

  // Creating a container div to hold the selected eventlisting
  var containerfluidDiv = $("<div class='container-fluid number-"+eventCount+"'>")
  $(".eventListings").prepend(containerfluidDiv)
  var rowDiv = $("<div class='row'>")
  containerfluidDiv.append(rowDiv)

  // Retrieving the URL for the image
  var imgURL = 
  'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F40967174%2F140232393130%2F1%2Foriginal.jpg?w=800&rect=0%2C64%2C4000%2C2000&s=034562b724cc7523d5ea3ef583d2f63c'
  
  // Creating a left div to hold the event image to the left    
  var leftDiv = $("<div class='col-sm-12 col-lg-8 left'>")
  rowDiv.append(leftDiv)
  var sheet = document.createElement('style')
  sheet.innerHTML = ".left {background: url("+imgURL+"); background-repeat: no-repeat; background-size: cover; background-position: center; height: 300px;}"
  document.body.appendChild(sheet)

  // Creating a right div to hold the selected eventlisting  
  var rightDiv = $("<div class='col-sm-12 col-lg-4 right'>")
  rowDiv.append(rightDiv)
        
  // Creating an element to have the Event Name displayed
  var eventName = $("<h4><a href='URL' target='_blank'>Event Name</a></h4>")
  // Displaying the Event Name
  rightDiv.append(eventName)
        
  // Creating an element to have the Organization displayed
  // var pOne = $("<p>Event Organizer</p>")
  // Displaying the Organization
  // rightDiv.append(pOne)
  
  // Creating an element to hold the time
  var pTwo = $("<p>Date & Time</p>")
  // Displaying the Date and Time
  rightDiv.append(pTwo);

  // Creating an element to hold the location
  var pThree = $("<p>Location</p>")
  // Appending the location
  rightDiv.append(pThree)

  // Retrieving the URL for the price
  // Cost paragraph
  // var pFour = $("<p>Cost</p>")
  // Appending the cost
  // rightDiv.append(pFour);

  var btnRemove = $("<button type='button' class='btn btn-danger'>Remove</button>")
  rightDiv.append(btnRemove)

  $(".btn-danger").on( "click" , function( ) {
    $(".number-"+eventCount+"").empty( )
    console.log("click")
  })
})

// Object Locations:

// imgURL: events[i].logo.original.url

// Event Name: events[i].name.text
// URL for link to event: events[i].url

// Scrap Organizer (Not in API Object except as ID #)

// Date & Time: events[i].start.local
// May need to format

// Location: "+events[i].venue.address.address_1+", "+events[i].venue.address.address_2+", "+events[i].venue.address.city+", "+events[i].venue.address.region+", "+events[i].venue.address.postal_code+"

// Scrap Cost (Not in API Object)
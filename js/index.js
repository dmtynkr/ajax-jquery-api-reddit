// reddit api:
// https://www.reddit.com/dev/api#GET_search
// Using .click(), .append(), and .ajax()
// Attach a button listener to the button
$('.btn').click(function() {
/*  alert('Hello!');*/
  $('.text').text('loading...');
  // On click on the button, make an AJAX request to reddit for results of cute puppies
  $.ajax({
    type: "GET",
    data: {
      q: "puppies",
      restrict_sr: "true"
    },
    // http://api.meetup.com/2/cities
    // http://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true
    url: "http://www.reddit.com/r/aww/search.json",
    // data.children[i].data.thumbnail.children
    success: function(response) {
      $('.text').html('');
      // For each of the elements in data.children, append a new <img> element to .text 
      // with the src as the child.data.thumbnail
      // var children = JSON.stringify(response.data.children);
      var children = response.data.children;
      /*$('.text').text(children);*/
      for(var i=0; i<children.length; i++) {
        /*$('.text').append('<img src="' + children[i].data.thumbnail + '" />');*/
        if(children[i].data.thumbnail !== "self" && children[i].data.thumbnail !== "default") {
           $('.text').append('<img src="' + children[i].data.thumbnail + '" />');
        }
      }
    },
/*    dataType: 'jsonp'*/
  });
  
});
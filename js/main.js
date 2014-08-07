(function() {


$( "form#geoname" ).on( "submit", function( event ) {
  event.preventDefault();
  var formContents = $( this ).serialize();
  var ajaxGeoname;

  console.log(formContents);
  if (formContents !== undefined) {
    var iterateResults = function (index, value) {
      /* a little scary for XSS */
      console.log(value);
      $("#left-sidebar #results").append("<li><strong>"+value.countryName+"</strong> " + value.name + "</li>");
    };

    ajaxGeoname = $.ajax("http://api.geonames.org/search?formatted=true&lang=en&username=aiddata&fuzzy=0&maxRows=5&startRow=0&orderby=relevance&type=json&"+formContents);

    $.when(ajaxGeoname).then( function(result) {
      var topThreePlaces = result.geonames.slice(0,3);
      $.each(topThreePlaces, iterateResults);

    }).done();


  }

});

}());

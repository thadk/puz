(function() {


$( "form#geoname" ).on( "submit", function( event ) {
  event.preventDefault();
  var formContents = $( this ).serialize();
  var ajaxGeoname;

  console.log(formContents);
  if (formContents !== undefined) {
    ajaxGeoname = $.ajax("http://api.geonames.org/search?formatted=true&lang=en&username=aiddata&fuzzy=0&maxRows=5&startRow=0&orderby=relevance&type=json&"+formContents);

    $.when(ajaxGeoname).then( function(result) {
      console.log(result.geonames.slice(0,3));
    }).done();

  }

});

}());

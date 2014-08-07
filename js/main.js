(function() {


$( "form#geoname" ).on( "submit", function( event ) {
  event.preventDefault();
  var formContents = $( this ).serialize();
  var ajaxGeoname;

  /* console.log(formContents); */

  if (formContents !== undefined) {
    var iterateResults = function (index, value) {
      /* a little scary for XSS */
      console.log(value);
      $("#left-sidebar #results").append("<li><strong>"+value.countryName+"</strong> " + value.name + "</li>");
    };

    ajaxGeoname = $.ajax("http://api.geonames.org/search?formatted=true&lang=en&username=aiddata&fuzzy=0&maxRows=5&startRow=0&orderby=relevance&type=json&"+formContents);
    $.when(ajaxGeoname).then( function(result) {
      var topThreePlaces = result.geonames.slice(0,3);
      $("#left-sidebar #results").text("");
      $.each(topThreePlaces, iterateResults);

    }).fail( function (result) {
     $("#left-sidebar #results").html("<li>Could not contact API</li>");
    }).done();

  }

});

$("div#main-container > div > p").click(function (event) {
  $(this).text($(this.parentNode).find("img").attr('data-uid'));
});

}());

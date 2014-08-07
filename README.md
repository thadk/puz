interview-puzzle
================

A html challenge for interview candidates.

  Using: CSS and jQuery
  No Backbone, No other plugins or libs. (In our real code we strongly believe in working with Backbone, but for this challenge we want to test your foundation in JS / jQuery)


Only add code to main.css, index.html, and main.js
Feel free to edit alter, rename, or delete any of the code currently in index.html or other files.
Don't stress 'prettiness' of the page, that is what bootstrap and a design team is for.


TODO:
-----

1. Alter the CSS so the layout behaves as described in plan.png

2. In the sidebar add a search box and button that will search the geonames API, and return a list of top 3 matches.

  Link to API docs: http://www.geonames.org/export/geonames-search.html

  Sample call, the ```name``` parameter is the only one you will need to alter/provide:
  http://api.geonames.org/search?formatted=true&lang=en&username=aiddata&fuzzy=0&maxRows=5&startRow=0&orderby=relevance&type=json&name=cairo

3. Add code so that if a user clicks on any of the image's "Hi" caption changes into the image's data uid.

# Our week 3 project

## Project description and user stories

## File structure

- index.html
- style.css
- js
  - logic.js (logic processes with API response)
  - api.js (request functions)
  - dom.js (DOM manipulation functions)
- test
  - test-logic.js
  - test-logic.html
  - test-api.html
  - test-api.js
  - test-dom.html
  - test-dom.js

  meteoropathy

  user story

    1. the user types one location; obtains current weather; requires API key
    2. the site returns the weather and a list of 10 songs that can describe it, using musixmatch; requires API key.
    3. DOM shows the artwork (album coverart property of the object) of the songs.
    4. by clicking on the artwork, the song is played with youtube; does not require KEY.
    5. STRETCH GOAL: the user can select an option to select only songs in local language, to feel in the city he/she has chosen - this may require translating the weather description with wordreference


  ## APIs doc

  ### youtube
  https://developers.google.com/youtube/v3/docs/search/list

# Our week 3 project : A 'MusicMetheoropathetic' App

**The purpose of this App is to provide videos of songs related to the actual weather in a place.  
It uses _Open Weather Map_  and _Youtube_ APIs.**

## User stories

As a user, I want to watch video clips of song related to the actual meteo in the place I am, or any another place in the world.

## Statement process

1. The user types a location in a form.
2. A request is sent to get the weather 'keyword' in that place.
3. A second request is sent to get videos related to this 'keyword'.
5. Requests' responses are processed.
4. The page content is actualised with a gallery of these videos, each one with a link to its Youtube page.


## File structure

Italic labels are directories, others are files.

- index.html
- style.css
- _images_
- _js_
  - api.js
  - logic.js
  - dom.js
- _test_
  - test-api.html
  - test-api.js
  - test-logic.html
  - test-logic.js
  - test-dom.html
  - test-dom.js
  - weatherObj.js
  - youtubeObj.js

## API

**Open weather**
- https://openweathermap.org/api

**Youtube**
- https://developers.google.com/youtube/v3/

## Stech goal and app improvement

- The default page would provide videos with automatic geolocation of the user.
- The form would have and option to get only songs in local language of the place, making the user to feel in the city he/she has chosen.

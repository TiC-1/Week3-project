// ***** GENERIC REQUEST FUNCTION *****
// Also parses the returned object

function request(cb, url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // Request is completed
      if (xhr.status === 200) { // Request succeeded
        var responseObj = JSON.parse(xhr.responseText); // ok?
        cb(null, responseObj);
      } else { // Error in request
        var errorMessage = xhr.responseText;
        cb("Error " + url + " " + errorMessage);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

// ***** GENERIC PROCESS FUNCTION *****
// Calls getMeteo and getVideos functions

function updateStateFromCity(cb, city) {
  MUSICMETEO.city = city;
  getWeather(function(state) {
    getVideos(cb, state);
  }, MUSICMETEO);
}

// ***** 'WEATHER' FUNCTIONS *****
// Calls request and parse functions

function getWeather(cb, state) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + state.city + "&APPID=5d8d83f7d25d47c3249949b56a91d910"; // completare
  request(function(err, obj) {
    MUSICMETEO = parseWeather(err, obj);
    cb(MUSICMETEO);
  }, url);
}

function parseWeather(err, obj) {
  if (err) {
    return err;
  }
  MUSICMETEO.city = obj.name;
  MUSICMETEO.weather = obj.weather[0].main;
  return MUSICMETEO;
}

// ***** 'VIDEOS' FUNCTIONS *****
// Calls request and parse function

function getVideos(cb, state) {
  var url = "https://www.googleapis.com/youtube/v3/search?q=" + state.weather + "+song&part=snippet&maxResults=10&type=video&key=AIzaSyAYKTQjmWZ-aglVhBOEa9tCWLYrRV2jeLU";
  request(function(err, obj) {
    MUSICMETEO = parseVideos(err, obj);
    cb(MUSICMETEO);
  }, url);
}

function parseVideos(err, obj) {
  if (err) {
    return err;
  }
  var YoutubeVideosList = obj.items;
  var videosList = [];
  for (var i = 0; i < YoutubeVideosList.length; i++) {
    var videoItem = {};
    videoItem.id = YoutubeVideosList[i].id.videoId;
    videoItem.title = YoutubeVideosList[i].snippet.title;
    videoItem.description = YoutubeVideosList[i].snippet.description;
    videoItem.thumbnail = YoutubeVideosList[i].snippet.thumbnails.high.url;
    videosList.push(videoItem);
  }
  MUSICMETEO.video = videosList;
  return MUSICMETEO;
}
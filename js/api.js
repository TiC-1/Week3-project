/* generic request function, can be recycled over and over! */

function request(cb, url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var responseObj = JSON.parse(xhr.responseText); // ok?
        cb(null, responseObj);

      } else {
        // if the API returns an error, pass the error into the callback as the first argument
        var errorMessage = xhr.responseText;
        cb("Error " + url + " " + errorMessage);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function updateStateFromCity(cb, city) {
  MUSICMETEO.city = city;
  getWeather(function(err, state) {
    getVideos(cb, state);
  }, MUSICMETEO);
}

function getWeather(cb, state) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + state.city + "&APPID=5d8d83f7d25d47c3249949b56a91d910"; // completare
  request(function(err, obj) {
    if(err) {
      cb(err);
    }
    MUSICMETEO = parseWeather(obj);
    cb(null, MUSICMETEO);
  }, url);
}

function parseWeather(obj) {
  MUSICMETEO.city = obj.name;
  MUSICMETEO.weather = obj.weather[0].main;
  return MUSICMETEO;
}

function getVideos(cb, state) {
  var url = "https://www.googleapis.com/youtube/v3/search?q=" + state.weather + "&part=snippet&maxResults=10&type=video&key=AIzaSyAYKTQjmWZ-aglVhBOEa9tCWLYrRV2jeLU";
  request(function(err, obj) {
    if(err) {
      cb(err);
    }
    MUSICMETEO = parseVideos(obj);
    cb(null, MUSICMETEO);
  }, url);
}

function parseVideos(obj) {
  var YoutubeVideoList = obj.items;
  var videosList = [];

  for (var i = 0; i < YoutubeVideoList.length; i++) {
    var videoItem = {};
    videoItem.id = YoutubeVideoList[i].id.videoId;
    videoItem.title = YoutubeVideoList[i].snippet.title;
    videoItem.description = YoutubeVideoList[i].snippet.description;
    videoItem.thumbnail = YoutubeVideoList[i].snippet.thumbnails.high.url;
    videosList.push(videoItem);
  }
  MUSICMETEO.video = videosList;
  return MUSICMETEO;
}

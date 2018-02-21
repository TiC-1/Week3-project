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

function getWeather(cb, getSongs, city) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=5d8d83f7d25d47c3249949b56a91d910"; // completare
  request(function(err, obj) {
    parseWeather(err, obj);
    // console.log(obj, MUSICMETEO);
    getVideos(cb, MUSICMETEO); // -> aggiornamento DOM
  }, url);
}

function parseWeather(err, obj) {
  if (err) {
    return err;
  }
  MUSICMETEO.city = obj.name;
  MUSICMETEO.weather = obj.weather[0].main;
  var weather = MUSICMETEO.weather;
  return MUSICMETEO;

}



function getVideos(cb, weather) {
  var url = "https://www.googleapis.com/youtube/v3/search?q=" + weather + "&part=snippet&maxResults=10&key=AIzaSyAYKTQjmWZ-aglVhBOEa9tCWLYrRV2jeLU";
  request(function(err, obj) {
    console.log(obj);
    parseVideos(err, obj);
  }, url);
}

function parseVideos(err, obj) {
  if (err) {
    return err;
  }
  MUSICMETEO.city = obj.name;
  MUSICMETEO.weatherName = obj.weather[0].main;
  var weatherName = MUSICMETEO.weatherName;
  return MUSICMETEO;

}
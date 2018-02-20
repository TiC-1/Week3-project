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

function getWeather (cb, city) {
  var url = "http://samples.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=5d8d83f7d25d47c3249949b56a91d910"; // completare
  request (function (err, obj) {
    parseWeather(err, obj);
    cb ();
  }, url);
}

function parseWeather (err, obj) {
  if (err) {
    return err;
  } MUSICMETEO.city = obj.main;
}



function getSongs (main) {
  var url = link + main; // completare
  request(cb, url);
}

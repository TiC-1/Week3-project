// API request TEST **************************************

test("Api Test", function(assert) {
  function assertTestApiReq (err, obj) {
    assert.ok(obj.hasOwnProperty("kind"), "Request Obj");
    
  }
  var url = "https://www.googleapis.com/youtube/v3/search?q=google&part=snippet&maxResults=10&type=video&key=AIzaSyAYKTQjmWZ-aglVhBOEa9tCWLYrRV2jeLU";
  request (assertTestApiReq, url);
  
  
  assert.ok(true, "Empty test to wait for AJAX call");

});

// WEATHER TEST *****************************************

test("Weather API Test", function(assert) {

  function assertRequestApi(obj) {
    assert.equal(obj.city, "London", "Weather AJAX call updated");

  }

  getWeather(assertRequestApi, {city: "London"});

  assert.ok(true, "Empty test to wait for AJAX call");

});



test("Weather Parsing Test", function(assert) {

  var parsed = parseWeather(null, weatherObj);
  assert.equal(parsed.weather, "Drizzle", "Weather parsed");

});

// YOUTUBE TEST *****************************************

test("Videos API test", function(assert) {

  function assertRequestApi(obj) {
    assert.ok(obj.hasOwnProperty("video"), "Songs AJAX call updated");
  }

  getVideos(assertRequestApi, {weather: "haze"});

  assert.ok(true, "Empty test to wait for AJAX call");
});


test("Videos Parsing Test", function(assert) {
  // create obj js e aggiungere html test
  var parsed = parseVideos(null, youtubeObj);

  assert.ok(parsed.video[1].title.includes("Episode"), "Weather parsed");
});


// GLOBAL **********************************************

test("Global", function (assert) {
  function assertRequestApi(obj) {
    assert.ok(obj.hasOwnProperty("video"), "Prop Video");
    assert.equal(obj.city, "Paris", "City");
    assert.equal(obj.video.length, 10, "10 Videos");
  }
  updateStateFromCity(assertRequestApi, "Paris")
    assert.ok(true, "Empty test to wait for AJAX call");

});

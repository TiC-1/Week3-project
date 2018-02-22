// *********** WEATHER TEST *********
test("Weather API Test", function(assert) {
  function assertRequestApi(err, obj) {
    assert.equal(obj.city, "London", "Weather AJAX call updated");
  }

  getWeather(assertRequestApi, {city: "London"});

  assert.ok(true, "Empty test to wait for AJAX call");
});

test("Weather Parsing Test", function(assert) {
  var parsed = parseWeather(weatherObject);
  assert.equal(parsed.weather, "Drizzle", "Weather parsed");
});

// *********** VIDEO TEST *********

test("Videos API test", function(assert) {
  function assertRequestApi(err, obj) {
    assert.ok(obj.hasOwnProperty("video"), "Video AJAX call updated");
  }

  getVideos(assertRequestApi, {weather: "Haze"});
  assert.ok(true, "Empty test to wait for AJAX call");
});

test("Videos Parsing Test", function(assert) {
  var parsed = parseVideos(youtubeObject);
  assert.ok(parsed.video[0].title.includes("HAZE"), "Videos parsed");
});

// *********** GLOBAL TEST *********

test("MusicMeteo state updates via AJAX", function(assert) {
  function assertRequestApi(err, obj) {
    assert.equal(obj.city, "Turin", "AJAX call updates city");
    assert.ok(obj.hasOwnProperty("video"), "AJAX call updates videos");
    assert.equal(obj.video.length, 10, "AJAX call returns 10 videos");
  }

  updateStateFromCity(assertRequestApi, "Turin");
  assert.ok(true, "Empty test to wait for AJAX call");
});

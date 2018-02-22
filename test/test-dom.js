test("DOM Test", function(assert) {
  updateDOM(MUSICMETEO);

  assert.equal(
    document.querySelector(".introduction").textContent,
    "In Torino the weather is Sunny",
    "Updates location and weather");

  assert.equal(
    document.querySelectorAll("#search-results li").length,
    10,
    "Inserts 10 videos");
});

test("DOM Test", function(assert) {
  var state = {
    city: "Test city",
    weather: "Test weather",
    video: [
      {title: "HA HA"}
    ]
  };
  updateDOM(state);

  assert.equal(
    document.querySelector(".introduction").textContent,
    "In Test city the weather is Test weather",
    "Updates location and weather");

  assert.equal(
    document.querySelectorAll("#search-results li").length,
    1,
    "Inserts 1 video");
});
//
test("VideoNode Test", function(assert) {
  var video = {
    id: "ubvYQxTXO3U",
    title: "Bobby Hebb - Sunny",
    description: "1966 USA # 2",
    thumbnail: "https://i.ytimg.com/vi/xPr14A_r30M/hqdefault.jpg",
  };
  var videoNode = createVideoNode(video);

  assert.ok(videoNode.querySelector("a").href.includes("youtube.com"), "Video node has YouTube link");
  assert.ok(videoNode.querySelector("img"), "Video node has picture");
  assert.ok(videoNode.textContent.includes("Sunny"), "Video node title");
});

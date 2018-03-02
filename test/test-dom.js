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
  
  //
    test("Songnode Test", function(assert) {
      var video = {
        id: "ubvYQxTXO3U",
        title: "Bobby Hebb - Sunny",
        description: "1966 USA # 2",
        thumbnail: "https://i.ytimg.com/vi/xPr14A_r30M/hqdefault.jpg",
      };
      var songNode = createSongNode(video);
      console.log(songNode);
    
      assert.ok(songNode.querySelector("a").href.includes("youtube.com"), "Video node has YouTube link");
      assert.ok(songNode.querySelector("img"), "Video node has picture");
      assert.ok(songNode.textContent.includes("Sunny"), "Video node title");
    });
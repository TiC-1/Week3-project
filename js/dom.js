var container = document.getElementById('search-results');

document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var location = event.target.querySelector("input").value;
  //da fare il link tra MUSICMETEO e location (starà nelle API)
  getWeather(updateDOM, getVideos, location);
  // window.MUSICMETEO
});

var createVideoNode = function(video) {
  var videoNode = document.createElement("li");

  //added some classes for the style in the DOM
  videoNode.setAttribute('class', 'li_dom');
  videoNode.dataset.id = video.id;

  videoText = document.createElement("p");
  videoText.setAttribute('class', 'a_dom');
  videoText.textContent = video.title;
  videoText.target = "_blank";
  videoLink = document.createElement('a');
  videoCover = document.createElement('img');
  videoLink.href = "https://www.youtube.com/watch?v=" + video.id;
  videoCover.src = video.thumbnail;
  videoNode.appendChild(videoText);
  videoLink.appendChild(videoCover)
  videoNode.appendChild(videoLink);
  return videoNode;
};

var introduction = function(city, weatherLocation) {
  var intro = document.querySelector(".introduction");
  var label = document.createElement("h2");
  label.setAttribute('class', 'h2_dom');
  label.innerText = "In " + city + " the weather is " + weatherLocation;
  intro.replaceChild(label, intro.firstChild);
};

var updateDOM = function(MUSICMETEO) {
  introduction(MUSICMETEO.city, MUSICMETEO.weather);

  var videoListNode = document.createElement('ul');
  MUSICMETEO.video.forEach(function(v) {
    videoListNode.appendChild(createVideoNode(v));
  });
  container.replaceChild(videoListNode, container.firstChild);
};

var container = document.getElementById('search-results');


document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var location = event.target.querySelector("input").value;
  //da fare il link tra MUSICMETEO e location (starà nelle API)
  getWeather(updateDOM, getVideos, location);
  // window.MUSICMETEO
});

var createSongNode = function(song) {
  console.log(song);
  var songNode = document.createElement("li");

  //added some classes for the style in the DOM
  songNode.setAttribute('class','li_dom');

  songText = document.createElement("a");
  songText.setAttribute('class','a_dom');

  songNode.dataset.id = song.id;
  songText.textContent = song.title;

  songCover = document.createElement('img');
  songCover.src = song.thumbnail;
    songNode.appendChild(songText);
  songNode.appendChild(songCover);


  return songNode;
};

var introduction = function (city, weatherLocation) {
  var intro = document.querySelector(".introduction");
  var label = document.createElement("h2");
  label.innerText = "In " + city + " the weather is " + weatherLocation;
  intro.appendChild(label);
  console.log(intro);
};

var renderState = function(state) {
  introduction(MUSICMETEO.city, MUSICMETEO.weather);
  var songListNode = document.createElement('ul');
  state.forEach(function(s) {
    songListNode.appendChild(createSongNode(s));
  });
  container.replaceChild(songListNode, container.firstChild);
};

function updateDOM() {
  // 1. crea un nodo con createSongNode
  // 2. inserisce titolo e cover della canzone
  var songs = MUSICMETEO.video;
  console.log(MUSICMETEO);
  if (container) renderState(songs);

} //fine della funzione updateDOM

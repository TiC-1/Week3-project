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
  songNode.setAttribute('class', 'li_dom');
  songNode.dataset.id = song.id;

  songText = document.createElement("p");
  songText.setAttribute('class', 'a_dom');
  songText.textContent = song.title;
  songText.target = "_blank";
  songLink = document.createElement('a');
  songCover = document.createElement('img');
  songLink.href = "https://www.youtube.com/watch?v=" + song.id;
  songCover.src = song.thumbnail;
  songNode.appendChild(songText);
  songLink.appendChild(songCover)

  songNode.appendChild(songLink);


  // songNode.appendChild(songCover);


  return songNode;
};

var introduction = function(city, weatherLocation) {
  var intro = document.querySelector(".introduction");
  var label = document.createElement("h2");
  label.setAttribute('class', 'h2_dom');
  label.innerText = "In " + city + " the weather is " + weatherLocation;
  intro.replaceChild(label, intro.firstChild);
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

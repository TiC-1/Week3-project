var container = document.getElementById('search-results');


document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var location = event.target.querySelector("input").value;

  console.log(location + " siamo qui");
  // var getWeather = function() {
  //     updateDOM(MUSICMETEO);
  //   },

  //da fare il link tra MUSICMETEO e location (statà nelle API)
  console.log(MUSICMETEO);
  updateDOM(MUSICMETEO);
  // window.MUSICMETEO

});

var createSongNode = function(song) {
  //qui sotto creo ogni elemento li
  console.log(song);
  var songNode = document.createElement("li");
  //songNode.className = "track";
  //songNode.dataset.id = song.cover;
  //var songButtonNode = document.createElement('button');
  songNode.textContent = song.title;
  //songNode.appendChild(songButtonNode);
  //var songDescription = document.createTextNode("This is a song form the album" + state[i].album);
  //songNode.appendChild(songDescription);
  console.log(songNode);
  return songNode;
};


var renderState = function(state) {
  var songListNode = document.createElement('ul');
  state.forEach(function(s) {
    songListNode.appendChild(createSongNode(s));
  });

  // you may want to add a class for css
  container.replaceChild(songListNode, container.firstChild);
};

function updateDOM() {
  // 1. creare un nodo
  // 2. inserirci le proprietà della canzone
  var songs = MUSICMETEO.songs;
  console.log(MUSICMETEO + " MUSICMETEO");
  console.log(songs);
  //var song=MUSICMETEO.songs[i];
  if (container) renderState(songs);

} //fine della funzione updateDOM
document.getElementById("query-search").addEventListener("submit", function (event) {
  event.preventDefault();
  getWeather( function () {
    updateDOM(MUSICMETEO);
  }, event.target.querySelector("input").value);
});

function updateDOM (obj) {

};

var getGif = function(textForm) {
  var xhr = new XMLHttpRequest();
  var url = "http://api.giphy.com/v1/gifs/search?q=" + textForm + "&api_key=dc6zaTOxFJmzC";

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var giphyObj = JSON.parse(xhr.responseText);
      var newImage;
      var gallery = document.getElementById("gallery");
      gallery.innerHTML = "";
      for (var i = 0; i < giphyObj.data.length; i++) {
        newImage = document.createElement("img");
        newImage.src = giphyObj.data[i].images.downsized_medium.url;
        gallery.appendChild(newImage);
      }
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}

document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var inputField = event.target.querySelector("input");
  getGif(inputField.value);
  inputField.value = "";
});

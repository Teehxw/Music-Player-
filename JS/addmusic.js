//Add music to array

//Variables to store HTML Elements
let libraryBtn = document.getElementById("gobackBtn");
let addSongBtn = document.getElementById("addSong");


//Event Listeners
libraryBtn.addEventListener("click", library);
addSongBtn.addEventListener("click", addMusic);


//Functions
function library(){
    window.location.href= "music.html"
}

fetch('music.json')
  .then(response => response.json())
  .then(musicArray => {
    // Modify the array by adding new objects
    musicArray.push({
      "title": "Song 4",
      "artist": "Artist 4",
      "file": "path/to/song4.mp3"
    });
    musicArray.push({
      "title": "Song 5",
      "artist": "Artist 5",
      "file": "path/to/song5.mp3"
    });

    // Convert the object back into a JSON string
    let jsonString = JSON.stringify(musicArray);

    // Send the PUT request to the server
    return fetch('music.json', {
      method: 'PUT',
      body: jsonString
    });
  });







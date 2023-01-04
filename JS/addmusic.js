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

function addMusic(){
    
    let musicTitle = document.getElementById("musicTitle").value;
    let musicArtist = document.getElementById("musicArtist").value;
    let musicUrl = document.getElementById("musicUrl").value;
    musicArray.push(musicTitle, musicArtist);


}


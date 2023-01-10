//Add music to array

//Variables to store HTML Elements
let libraryBtn = document.getElementById("gobackBtn");
let addSongBtn = document.getElementById("addSong");
let newOutput = document.getElementById("outputNew");



//Event Listeners
libraryBtn.addEventListener("click", library);
addSongBtn.addEventListener("click", addMusic);



//Functions
function library() {
    window.location.href = "music.html"
}

//New music Array
let newMusicArray = []

//Add Music 
function addMusic() {
    let musicTitleEl = document.getElementById("musicTitle").value;
    let musicArtistEl = document.getElementById("musicArtist").value;
    //let musicUrlEl = document.getElementById("musicUrl");
    newMusicArray.push(newMusic(musicTitleEl, musicArtistEl));



}

function newMusic(title, artist) {
    return {
        musicTitle: title,
        musicArtist: artist,
        // musicUrlEl: url,
        completed: ""
    }

}



function displayNewArray(){
    alert("it worked")
    let newoutputStr = '';
    for (let i = 0; i < newMusicArray.length; i++) {
      newoutputStr += getNewHTMLString(newMusicArray[i], i);
    }
    newOutput.innerHTML = newoutputStr;
}

function getNewHTMLString(musicInfo){
    return `
    <div>
     <h2> ${musicInfo.musicTitle} </h2>
     <p> By ${musicInfo.musicArtist} </p>
     </div>
    <br>
    `
    }







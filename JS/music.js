//Music Player and Arrays

//Variables for HTML Elements
let searchBtn = document.getElementById("SearchBtn");

let outputEl = document.getElementById("output");
let newOutput = document.getElementById("outputNew");
let addSongBtn = document.getElementById("addBtn");
let displayBtn = document.getElementById("displayBtn");
let newMusicBtn = document.getElementById("displayNewBtn");
let removeBtn = document.getElementById("remove");

//Event Listener
searchBtn.addEventListener("click", searchMusic);
addSongBtn.addEventListener("click", addMusic);
displayBtn.addEventListener("click", display)
newMusicBtn.addEventListener('click', displayNewArray)





let newMusicArray = loadnewMusicArray();

//Functions 

function addMusic() {
  let musicTitle = prompt("Enter Song Title: ")
  let musicArtist = prompt("Enter Song Artist(s): ")
  // let musicUrl = prompt("Enter the URL of the song(has to be an mp3 file): ");
  newMusicArray.push(newMusic(musicTitle, musicArtist));
  saveNewMusic();
}

function displayNewArray() {
  newOutput.innerHTML = '';
  for (let i = 0; i < newMusicArray.length; i++) {
    newOutput.appendChild(getNewHTMLString(newMusicArray[i], i));
  }

}

function display() {
  displayAll();
}

function searchMusic() {
  let musicInputEl = document.getElementById("musicFind").value;
  let divStr = "";
  for (let i = 0; i < musicArray.length; i++) {
    if (musicArray[i].title.includes(musicInputEl)) {
      divStr += `
        <div>
        <h2> ${musicArray[i].title} </h2>
        <p> By ${musicArray[i].artist} </p>
        </div>
        <br>
        `
    }
    if (musicArray[i].artist.includes(musicInputEl)) {
      divStr += `
        <div>
        <h2> ${musicArray[i].title} </h2>
        <p> By ${musicArray[i].artist} </p>
        </div>
        <br>
        `
    }
  }
  outputEl.innerHTML = divStr;
}

function display() {
  displayAll();
}

//Helper functions
function displayAll() {
  let outputStr = '';
  for (let i = 0; i < musicArray.length; i++) {
    outputStr += getHTMLString(musicArray[i], i);
  }
  outputEl.innerHTML = outputStr;
}


function getHTMLString(musicInfo) {
    return `
  <div>
   <h2> ${musicInfo.title}  </h2>
   <p> By ${musicInfo.artist} </p>
   </div>
  <br>
  `

}


function newMusic(title, artist, url) {
  return {
    musicTitle: title,
    musicArtist: artist,
    // musicUrl: url,
    completed: ""
  }

}



function getNewHTMLString(musicInfo,index) {


  let titleSpanEl = document.createElement("span");
  titleSpanEl.innerHTML = musicInfo.musicTitle;
 let artistSpanEl= document.createElement("span");
 artistSpanEl.innerHTML = musicInfo.musicArtist;

 

  // Remove Button
  let buttonEl = document.createElement("button");
  buttonEl.innerHTML = "Remove";
  buttonEl.dataset.index = index;
  buttonEl.addEventListener("click", removeBtnHandler);

  // Add everything to a div element
  let divEl = document.createElement("div");
  
 
  divEl.appendChild(titleSpanEl)
  divEl.appendChild(artistSpanEl)
  divEl.appendChild(buttonEl)


 

  return divEl;
}

function removeBtnHandler(e){
  let musicIndex = +e.target.dataset.index;
  newMusicArray.splice(musicIndex, 1);
  saveNewMusic();
  displayNewArray();
}

// function playMusic(){
//  let audio = new Audio()
  
//  for (let i = 0; i < newMusicArray.length; i++){
//   audio.src = newMusicArray[i].musicUrl
//   audio.play()
//  }
//  audio.play()
 
// }

function saveNewMusic() {
  localStorage.setItem('newMusicArray', JSON.stringify(newMusicArray));
}

function loadnewMusicArray() {
  let newMusicArrayStr = localStorage.getItem('newMusicArray');
  return JSON.parse(newMusicArrayStr) ?? [];
}


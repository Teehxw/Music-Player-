//Music Player and Arrays

//Variables for HTML Elements
let searchBtn = document.getElementById("SearchBtn");

let outputEl = document.getElementById("output");
let addBtn = document.getElementById("addBtn");
let displayBtn = document.getElementById("displayBtn");


//Event Listener
searchBtn.addEventListener("click", searchMusic);
addBtn.addEventListener("click", addMusic);
displayBtn.addEventListener("click", display)

//Array
let musicArray;

// Fetch JSON file
fetch("music.json")
  .then((rawData) => rawData.json())
  .then((data) => (musicArray = data));

//Functions 

function searchMusic (){
  let musicInputEl = document.getElementById("musicFind").value;
  let divStr = "";
  for(let i=0; i < musicArray.length; i++){
    if(musicArray[i].title.includes(musicInputEl)){
        divStr +=  `
        <div>
        <h2>${i+1}. ${musicArray[i].title} </h2>
        <p> By ${musicArray[i].artist} </p>
        </div>
        <br>
        `
    }
    if(musicArray[i].artist.includes(musicInputEl)){
        divStr +=  `
        <div>
        <h2>${i+1}. ${musicArray[i].title} </h2>
        <p> By ${musicArray[i].artist} </p>
        </div>
        <br>
        `
    }
  }
  outputEl.innerHTML = divStr;
}

function display(){
    displayAll();
}

function addMusic(){
    window.location.href = "addmusic.html"
}

function goBackLibrary(){
    window.location.href = "music.html";
}


//Helper functions
function displayAll() {
    let outputStr = '';
    for (let i = 0; i < musicArray.length; i++) {
      outputStr += getHTMLString(musicArray[i], i);
    }
    outputEl.innerHTML = outputStr;
}


function getHTMLString(musicInfo,i){
return `
<div>
 <h2>${i+1}. ${musicInfo.title} </h2>
 <p> By ${musicInfo.artist} </p>
 </div>
<br>
`
}


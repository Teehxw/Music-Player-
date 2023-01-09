//Music Player and Arrays

//Variables for HTML Elements
let searchBtn = document.getElementById("SearchBtn");

let outputEl = document.getElementById("output");
let addBtn = document.getElementById("addBtn");
let displayBtn = document.getElementById("displayBtn");
let removeBtn = document.getElementById("removeBtm");
  


//Event Listener
searchBtn.addEventListener("click", searchMusic);
addBtn.addEventListener("click", addMusic);
displayBtn.addEventListener("click", display);
removeBtn.addEventListener("click", removeMusic);

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

function removeMusic(){

  for (let i = 0; i < musicArray.length; i++){
    musicArray.splice(i,1)
    displayAll();
  }
}


//Helper functions
function displayAll() {
    let outputStr = '';
    for (let i = 0; i < musicArray.length; i++) {
      outputStr += getHTMLString(musicArray[i], i);
    }
    outputEl.innerHTML = outputStr;
}


function getHTMLString(musicInfo,index){
return `
<div>
 <h2>${index+1}. ${musicInfo.title} <button id= "removeBtn">Remove</button> </h2>
 <p> By ${musicInfo.artist}  </p>
 </div>
<br>
`
}


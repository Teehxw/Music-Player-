// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn')


//Array
let member = loadMember();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let membUser = document.getElementById('user').value;
  let membPass = document.getElementById('pass').value;
  let confirmInput = document.getElementById('confpass').value;
  checkPass(confirmInput,membPass);
  checkUser(membUser, membPass);

  saveMember();
  
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let memberUserLog = document.getElementById('username').value;
  let memberPassLog = document.getElementById('password').value;
  for (let i=0; i< member.length; i++){
    if(memberUserLog === member[i].membUser && memberPassLog === member[i].membPass){
      alert("Login Successful");
      window.location.href = "music.html" 
      return -1;
    }
  } alert("Invalid Username or Password")
}


function saveMember(){
  localStorage.setItem('member', JSON.stringify(member));
}

function loadMember(){
  let memberStr = localStorage.getItem('member');
  return JSON.parse(memberStr) ?? [];
}
  
function newMember(memberUser, memberPass ) {
  return {
    membUser: memberUser,
    membPass: memberPass, 
  }
}

function checkUser(user,pass){
  for(let i=0; i < member.length; i++){
    if(user === member[i].membUser){
      alert("Username already in use");
      return i
     
    }
  }
  member.push(newMember(user, pass));
  alert("Sign Up Successful")
  return -1
}

function checkPass(confirm,pass){
  if(confirm !== pass ){
    alert("Passwords do not match")
  }
}
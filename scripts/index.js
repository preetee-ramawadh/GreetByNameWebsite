"use strict";

// Let the window's onload know there is a function called init
window.onload = init;    // Do not put () after init!
                         // This isn't calling init now -- it 
                         // saying call the init function when
                         // the window finishes loading

// The init function connect the button to the code that
// should run when the button is clicked
function init() {
   // Find the greetUserBtn
   const greetUserBtn = document.getElementById("greetUserBtn");

   // Let greetUserBtn's onclick know there is a function
   // called onGreetUserBtnClicked that should be called when the button is clicked
   greetUserBtn.onclick = onGreetUserBtnClicked;
}

// This function is called when greetUserBtn is clicked
function onGreetUserBtnClicked() {

    //find the text field
    let nameField = document.getElementById("nameField");

    //extract name from nameField
    let userName = nameField.value;

   // Find the messageDiv
   let messageDiv = document.getElementById("messageDiv");


   // Set the contents of the div
   messageDiv.innerHTML = `Hello ${userName}`;
}

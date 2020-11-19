"use strict";

/*
   7-1: Challenge: Matching Game

   Author: Aiden Eyre
   Date:   12 November 2020

   Filename: game.js
   
   -- Functions here --
   
*/

// Call checkInput() when the start button is clicked
document.getElementById("startButton").onclick = checkInput;

// gets the chosen number of symbols and sends the value to generateBoard()
function checkInput() {
   // Initialize variable with inputted value
   let numSymbols = document.getElementById("numSymbols").value;

   // Forces value to be between two and eight
   if (numSymbols < 2) generateBoard(2);
   else if (numSymbols > 8) generateBoard(8);
   else generateBoard(numSymbols);

   // Changes the css visibility property of the form to hidden
   document.getElementById("startForm").style.visibility = "hidden";
}

function generateBoard(numSymbols) {
   console.log(numSymbols);
}
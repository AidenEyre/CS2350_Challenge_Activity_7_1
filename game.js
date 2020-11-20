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

// Generates a gameboard based off of the number of symbols chosen
function generateBoard(numSymbols) {
  numSymbols = numSymbols * 2;   // We need two cards for each symbol!
  let rows = 0;   // Variable to keep track of rows in our table
  let index = 1;  // Variable to give each table cell an id
  let gameBoard = document.createElement("TABLE"); // Variable to hold the game board

  // Use if statements to keep the board square as possible
  if (numSymbols == 12) {
    rows = 3;
  } else if (numSymbols == 16) {
    rows = 4;
  } else {
    rows = 2;
  }

  // Loop through row variable while creating new rows and adding them to
  // game board each iteration
  for (let i = 1; i <= rows; i++) {
    let tr = document.createElement("tr");   // Create new table row

    // Loop through the columns for each table row and add them to the row
    for (let j = 1; j <= numSymbols / rows; j++) {
      let card = document.createElement("td");  // Create table cell
      card.id = "card" + index;  // Give the cell its corresponding index
      card.style.backgroundColor = "red"; // Style the block red
      card.style.display = "inline-block";   //  Display an inline-block

      // Width and head set to 5em with 0.1em margins
      card.style.width = "5em";
      card.style.height = "5em";
      card.style.margin = "0.1em";
      tr.appendChild(card);   // Add the table cell to the table row 
      index++; // Up the index to give the next card an id
    }

    gameBoard.appendChild(tr);   // Append the table row to the game board
  }
  
  // Addd the table to our game div
  document.getElementById("game").appendChild(gameBoard);
  gameBoard.style.display = "block";   // Display the gameboard as block
  gameBoard.style.width = "100%";      // Give the gameboard 100% width

  assignCards(numSymbols);
}

function assignCards(numSymbols) {
}

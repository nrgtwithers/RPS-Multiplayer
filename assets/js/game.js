// Viewing purposes JS

// Directions -Collapsible
$(document).ready(function () {
    $('.collapsible').collapsible();
});
//For Text Messages
$('#textarea1').val('New Text');
M.textareaAutoResize($('#textarea1'));

// Initialize connection to Firebase

var config = {
    apiKey: "AIzaSyAaSPvGSdh8VxsaIQYU2_iL8AruQRUkhHs",
    authDomain: "distributed-eye-226422.firebaseapp.com",
    databaseURL: "https://distributed-eye-226422.firebaseio.com",
    projectId: "distributed-eye-226422",
    storageBucket: "distributed-eye-226422.appspot.com",
    messagingSenderId: "439695275055"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// Variables (Players - 2 only, Score - Wins and Losses + Ties)
var wins = 0;
var loses = 0;
var ties = 0;
var numOfPlayers = 2; // Allow only Two Users to play at the same time.

var player1;
var player2;


// Provide the ability to choose Rock paper Scissors at the same time (On-click, Make sure its both at the same time.)
// Players 1 & 2 (Wins and Loses)
// Provide capability for players to speak to each other.




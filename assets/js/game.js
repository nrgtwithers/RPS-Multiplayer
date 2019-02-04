// Initialize connection to Firebase
var config = {
	apiKey: "AIzaSyAaSPvGSdh8VxsaIQYU2_iL8AruQRUkhHs",
	authDomain: "",
	databaseURL: "",
	storageBucket: "",
};

firebase.initializeApp(config);

var database = firebase.database();

// Variables (Players - 2 only, Score - Wins and Losses)
// Allow only Two Users to play at the same time.
// Provide the ability to choose Rock paper Scissors at the same time (On-click, Make sure its both at the same time.)
// Players 1 & 2 (Wins and Loses)
// Provide capability for players to speak to each other.

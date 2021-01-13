/* Initially, the player can only see how many letters and words make up the full word or phrase.
The player begins by guessing letters.
 Each correct guess reveals every location where the letter exists in the word or phrase.
Each incorrect guess results in another piece of the man getting added to the gallows.
If he thinks he knows it, the player is also allowed to guess the entire word or phrase.
The player wins if he successfully guess the word or phrase.
 He loses if he completes the picture of the condemned man, resulting in his grim demise.
*/ 

const words = [
  "abruptly",
  "absurd",
  "abyss",
  "affix",
  "askew",
  "avenue",
  "awkward",
  "Pinocchio",
  "Fantasia",
  "Dumbo",
  "Bambi",
  "Rascal",
  "Candle",
  "Country",
  "Splash",
  "Country",
  "Cheetah",
  "Beaches",
  "Blaze",
  "Stellar",
  "Shipwrecked",
  "Run",
  "Arachnophobia",
  "Run",
  "Passed",
  "Hocus"
];

let str = "abcdefghijklmnopqrstuvwxyz"
let res = str.split('');
let x = document.createElement("BUTTON");
let t = document.createTextNode(res);




function genbtns () {
  // document.getElementById("keyboard");
 //loop through res and create btn for each str 
 


   x.appendChild(t);
  document.body.appendChild(x);

};


var newarray = str.map(genbtns);






let answer = "";

let maxWrong = 6;
let mistakes = 0;
let guessed = [];

function randomWord () {

answer = words[Math.floor(Math.random() * words.length)];


console.log(answer)

}


randomWord()
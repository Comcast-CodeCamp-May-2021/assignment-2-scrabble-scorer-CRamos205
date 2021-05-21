// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let usersWord = input.question("Let's play some scrabble! Enter a word to score: ");
   

   return usersWord;
  
};


 function simpleScore(word){
  let simpleWord = word.toUpperCase();
  let letterPoints = 0;
  for(let i = 0; i < word.length; i++){
  letterPoints += 1;

  }
  return letterPoints;
}

function vowelBonusScore(word){
  word = word.toUpperCase();
  let letterPoints = 0;
  let vowels = ["A", "E", "I","O", "U"];

  for(let i = 0; i < word.length; i++){
   
      if(word[i].length === vowels[i].length)
      {
        letterPoints += 3;
      }
        else{
          letterPoints += 1;
        }

  }
return letterPoints;
}

// ** let scrabbleScore = {name : "Scrabble Score", description: "Traditional scoring", scoringFunction: annonymous function that matches what you've tested so far.  }

function scrabbleScore(word){
  let letterPoints = 0;
  word = word.toUpperCase();
  for(let i = 0; i < word.length; i++){
    for (const pointValue in newPointStructure)
    if(pointValue.includes(word[i])){
      letterPoints += Number(newPointStructure[pointValue]);
    }
    
  }
return letterPoints;
}

// ** the array holds the 3 scoring objects
const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each Letter is worth 1 point each",
    scoringFunction: simpleScore
  },
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },
  {
    name: "Scrabble Score",
    description:"The Traditional scoring Algorithm",
    scoringFunction: scrabbleScore
  }
];


function scorerPrompt(word) {
 // `${scoringAlgorithms[i].name}, - ${scoringAlgorithms[i].description}`
  console.log("Which scoring Algorithms would you like to use?");
  for(let i = 0; i < scoringAlgorithms.length; i++){
    console.log(` ${i} - ${scoringAlgorithms[i].name} - ${scoringAlgorithms[i].description}`);
  }

  let userChoice = Number(input.question("Enter 0, 1, or 2: "));

  console.log(`Your score is for ${word}: ` + scoringAlgorithms[userChoice].scoringFunction(word));


}

function transform (letters){
  //have empty object to hold new keys:values 
  let object = {};

    for (let key in letters){
      // console.log(key);// number
      // console.log(letters[key]);// array of letters
      for(let i = 0; i < letters[key].length; i++){
        // console.log(letters[key][i]);// each letter
        object[letters[key][i]] = Number(key)

      }
    }
  return object;
  }




 let newPointStructure = transform(oldPointStructure);

function runProgram() {
  console.clear();
  let start = initialPrompt();
  scorerPrompt(start); 
  // console.log(oldScrabbleScorer("hello"));
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

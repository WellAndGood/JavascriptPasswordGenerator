// DOM elements

// const results = document.getElementById("results");

const passwordResult = document.getElementById("password"); // references 
const passLength = document.getElementById("passLength"); // references the length of the number input
const lowerButton = document.getElementById("lowerButton"); // references the checkbox input for lower characters
const upperButton = document.getElementById("upperButton"); // references the checkbox input for upper characters
const numberButton = document.getElementById("numberButton"); // references the checkbox input for numbers
const characterButton = document.getElementById("characterButton"); // references the checkbox input for characters
const generate = document.getElementById("generate"); // selects the 'Generate password' button


// Assignment Code // #generate associated to the Password Generator button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password"); //original code
  var lengthPass = passLength.value; //my input; checks character length
  var upperChecked = upperButton.checked; //true if checked is selected
  var lowerChecked = lowerButton.checked; //false if checked is not selected
  var numberChecked = numberButton.checked; //etc.
  var charChecked = characterButton.checked; //etc.

  passwordText.value = password; 

  console.log(lowerChecked, upperChecked, numberChecked, charChecked) //returns the checked boxes as 'true'
  //ex: true true false false

  passwordResult.innerText = createPassword(lowerChecked, upperChecked, numberChecked, charChecked, lengthPass) //
};

const allCharacterFunctions = {
  lower: produceLower,
  upper: produceUpper,
  number: produceNumber,
  symbol: produceSpecialCase,
} // a dictionary containing the four functions to gather characters



function createPassword(produceLower, produceUpper, produceNumber, produceSpecialCase, passLength) {

  let passwordString = '';
  const totalTypes = produceLower + produceUpper + produceNumber + produceSpecialCase;

  console.log('totalTypes: ', totalTypes); // logs the total number of checked (i.e. true) boxes and produces a total

  var checkedOff = true;

  const totalTypesList = [{produceLower}, {produceUpper}, {produceNumber}, {produceSpecialCase}].filter(
    item => Object.values(item)[0]); // shortens the array by removing false booleans 

    console.log('totalTypesList: ', totalTypesList); // logs these 'true' values in an ordered array.

    if (totalTypes === 0) {
      return ''; 
    } // in the case that no boxes are checked

    for (let i = 0; i < passLength; i += typesCount) {
      totalTypesList.forEach(type => {
        const funcName = Object.keys(type)[0];

        console.log('funcName: ', funcName);

        passwordString += allCharacterFunctions[funcName](); //code comes from Traversy Media
      });
    }

  // for (i = 0 ; i < totalTypesList.length ; i++) {
  //   if (i === checkedOff) {
  //     console.log(totalTypesList[i]);
  //   } 
  // }

  };


// Using Math.floor, Math.random, and String.fromCharCode, we can reference the ASCII/UTF characters
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// UTF #33 to #47 and #58 to 64 = characters - function that returns a random character
function produceSpecialCase() {
  return String.fromCharCode(Math.floor(Math.random() * 15 + 33))
}

// UTF #48 to #57 = digits - function that returns a random digit
function produceNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
}

// UTF #65 to #90 = uppercase characters - function that returns a random uppercase
function produceUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}

// UTF #97 to #122 = lowercase characters - function that returns a random lowercase 
function produceLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}

// HTML Character Sets: https://www.w3schools.com/html/html_charset.asp
// UTF #33 to #47 and #58 to 64 = characters
// UTF #48 to #57 = digits
// UTF #65 to #90 = uppercase characters
// UTF #97 to #122 = lowercase characters

// // console.log(String.fromCharCode(33)); // logs '!'
// // console.log(String.fromCharCode(47)); // logs '/'

// // console.log(String.fromCharCode(48)); // logs '0'
// // console.log(String.fromCharCode(57)); // logs '9'

// // console.log(String.fromCharCode(65)); // logs '!'
// // console.log(String.fromCharCode(90)); // logs '/'

// // console.log(String.fromCharCode(97)); // logs 'a'
// // console.log(String.fromCharCode(122)); // logs 'z'

// Math random: https://www.w3schools.com/js/js_random.asp
// Use this to generate a random number between 0 and 1
// Multiply by a number (X) to increase the range between 0 and X
// Add a number to Math.floor to increase the minimum limit; the top number of the range acts as the upper limit.

// // console.log(Math.random() * 100);
// // console.log(Math.floor(Math.random() * 100 + 50));

// Math floor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor



// Tests for the above functions
// // console.log(produceLower());
// // console.log(produceUpper());
// // console.log(produceSpecialCase());
// // console.log(produceNumber());






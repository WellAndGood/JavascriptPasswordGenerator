// DOM elements

// const results = document.getElementById("results");

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

  console.log(typeof lengthPass)
}

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






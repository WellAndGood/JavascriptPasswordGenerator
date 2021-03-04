// Functions to return random characters

// UTF #33 to #47
function produceSpecialCase() { 
    var specialCase = String.fromCharCode(Math.floor(Math.random() * 15 + 33))
    return specialCase
  } 
  
  // UTF #48 to #57
  function produceNumber() {  
    var charCase = String.fromCharCode(Math.floor(Math.random() * 10 + 48))
    return charCase
  }

  // UTF #65 to #90
  function produceUpper() {   
    var upperCase = String.fromCharCode(Math.floor(Math.random() * 26 + 65))
    return upperCase
  }
  
  // UTF #97 to #122
  function produceLower() { 
    var lowerCase = String.fromCharCode(Math.floor(Math.random() * 26 + 97))
    return lowerCase
  }

// Functions to create variables based on ID/DOM

var finalPassword = document.getElementById("password")
var cardBody = document.querySelector(".card-body")
var passwordLength = document.getElementById("passLength")
var generate = document.getElementById("generate")
var lowerButton = document.getElementById("lowerButton")
var upperButton = document.getElementById("upperButton")
var numberButton = document.getElementById("numberButton")
var characterButton = document.getElementById("characterButton")


// Assignment Code // #generate associated to the Password Generator button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password"); //original code
  var passwordCharTypes = [];
  var lengthPass = passLength.value; //my input; checks character length
  var upperChecked = upperButton.checked; //true if checked is selected
  var lowerChecked = lowerButton.checked; //false if checked is not selected
  var numberChecked = numberButton.checked; //etc.
  var charChecked = characterButton.checked; //etc.

  //console.log(lowerChecked, upperChecked, numberChecked, charChecked) //returns the checked boxes as 'true', ex: true true false false

  if (upperChecked) {
    passwordCharTypes.push(produceUpper)
  }
  if (lowerChecked) {
    passwordCharTypes.push(produceLower)
  }
  if (numberChecked) {
    passwordCharTypes.push(produceNumber)
  }
  if (charChecked) {
    passwordCharTypes.push(produceSpecialCase)
  }
  //console.log(passwordCharTypes)

  var initialPasswordText = "";
  var finalPasswordText = ""
  if (passwordCharTypes === []) {
    return initialPasswordText
  }
  if (passwordCharTypes != []) {

    //console.log("minimum number of characters is " + passwordLength.min)
    var minimumPassLength = passwordLength.min // set at 8 (as per project requirements)
    //console.log(minimumPassLength, "minimum of ")
    for (i = 1 ; i < minimumPassLength ; i) {
      if (passwordCharTypes[0]){
        //console.log(passwordCharTypes[0]())
        let character = passwordCharTypes[0]()
        //console.log(finalPasswordText + character)
        finalPasswordText += character;
        i++
      }
      if (passwordCharTypes[1]) {
        //console.log(passwordCharTypes[1]())
        let character = passwordCharTypes[1]()
        //console.log(finalPasswordText + character)
        finalPasswordText += character;
        i++
      }
      if (passwordCharTypes[2]){
        //console.log(passwordCharTypes[2]())
        let character = passwordCharTypes[2]()
        //console.log(finalPasswordText + character)
        finalPasswordText += character;
        i++
      }
      if (passwordCharTypes[3]) {
        //console.log(passwordCharTypes[3]())
        let character = passwordCharTypes[3]()
        //console.log(finalPasswordText + character)
        finalPasswordText += character;
        i++
      }
    }

    //console.log(finalPasswordText)

    if (passwordLength.value > 8) {
      for (i = 8; i < passwordLength.value; i++) {
        //console.log(i)
        var arrayLength = passwordCharTypes.length
        var randomizer = Math.floor(Math.random() * arrayLength)
        var randomInput = passwordCharTypes[randomizer]()
        finalPasswordText += randomInput
        //console.log(randomInput)
      }
    }

    console.log(finalPasswordText);
    cardBody.innerText = finalPasswordText;
  
  }
}

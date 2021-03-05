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
var getStarted = document.getElementById("get-started")
var passwordGenerateDiv = document.getElementById("password-Generator-Div")

// Makes Criteria Visible
getStarted.addEventListener("click", function() {
  passwordGenerateDiv.style.display = "block";
  getStarted.style.display = "none";
})

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

  var initialPasswordText = "";
  var finalPasswordText = ""
  if (passwordCharTypes === []) {
    return initialPasswordText
  }
  if (passwordCharTypes != []) {

    console.log("Password length requested: " + passwordLength.value)

    // If/else if perform hard blocks if password length is < 8 or > 128. 

    if (passwordLength.value < 8) {

      console.log("Please enter a number of at least 8.");
      cardBody.innerText = "Please enter a number of at least 8."; // code not executing

    } else if (passwordLength.value > 128) {

      console.log("Please enter a number no greater than 128.");
      cardBody.innerText = "Please enter a number no greater than 128."; // code not executing

    } else if (passwordLength.value <= 128 || passwordLength.value >= 8) {
        
      // Creates a string longer than the initial 8 characters by looping through the "Accepted functions" array and guaranteeing all approved types of characters, then slices down to 8.
  
        for (i = 1 ; i < 10 ; i++) {
          if (passwordCharTypes[0]){
            let character = passwordCharTypes[0]()
            finalPasswordText += character;
          }
          if (passwordCharTypes[1]) {
            let character = passwordCharTypes[1]()
            finalPasswordText += character;
          }
          if (passwordCharTypes[2]){
            let character = passwordCharTypes[2]()
            finalPasswordText += character;
          }
          if (passwordCharTypes[3]) {
            let character = passwordCharTypes[3]()
            finalPasswordText += character;
          }
        }
    
        var finalPasswordText = finalPasswordText.slice(0,8)


        if (passwordLength.value > 8) {
          for (i = 8; i < passwordLength.value; i++) {
            var arrayLength = passwordCharTypes.length
            if (arrayLength > 0) {
              var randomizer = Math.floor(Math.random() * arrayLength)
              var randomInput = passwordCharTypes[randomizer]()
              finalPasswordText += randomInput
            }
          }
        }
    
        console.log("The original string is: " + finalPasswordText + " and is " + finalPasswordText.length + " characters long."); 
    
        // This code works only if the hard-blocking "if else" statements are not in place.
        // if (finalPasswordText.length > 128) {
        //   var clippedContent = finalPasswordText.slice(128, finalPasswordText.length)
        //   var finalPasswordText = finalPasswordText.slice(0, 128)
        //   console.log("The following content was excluded due to exceeding 128 characters: " + clippedContent)
        }
    
        console.log("The final string is " + finalPasswordText.length + " characters long.");
        cardBody.innerText = finalPasswordText;
      
        if (passwordCharTypes.length < 1) {
          cardBody.innerText = "Invalid entry. Please check one of the boxes below to select at least one character type. "
        }
    }
  
  console.log("===============")
  
}

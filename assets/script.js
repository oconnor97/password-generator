// Assignment Code
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// My code

function writePassword() {
  var charCount = prompt('How many charachters would you like your password to contain? (Between 8 and 128!');
  
  if(charCount !>= 8 || charCount !<= 128) {
    alert("Your password must have at least 8 and no more than 128 characters, try again!");
  } 

  if(charCount >= 8 && charCount <= 128) {
    var upperCase = confirm("Would you like to include uppercase letters?");
    var lowerCase = confirm("Would you like to include lowercase letters?");
    var numChoice = confirm("Would you like to include numbers?");
    var specialChar = confirm("Would you like to include special characters?");
  }

  if(upperCase != ture && lowerCase != ture && numChoice != true && specialChar != true) {
    alert("You must choose one option, please try again!")
  }











}








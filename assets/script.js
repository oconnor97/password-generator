// Assignment Code
var generateBtn = document.querySelector('#generate');
var upperCase

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to  the generate password button
generateBtn.addEventListener('click', writePassword);

// My code

function writePassword() {
  var charCount = prompt('How many charachters would you like your password to contain? (Between 8 and 128!');
  
  if(charCount < 8 || charCount > 128) {
    alert("Your password must have at least 8 and no more than 128 characters, try again!");
  };

  if(charCount >= 8 && charCount <= 128) {
    var selectUpper = confirm("Would you like to include uppercase letters?");
    var selectLower = confirm("Would you like to include lowercase letters?");
    var selectNum = confirm("Would you like to include numbers?");
    var selectSpecial = confirm("Would you like to include special characters?");
  };

  if(selectUpper == false && selectLower == false && selectNum == false && selectSpecial == false) {
    alert("You must choose one option, please try again!");
  } else 


  


}










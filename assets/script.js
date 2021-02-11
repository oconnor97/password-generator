// Assignment Code
var generateBtn = document.querySelector('#generate');
//Possible variable values.
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numChoice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "=", "/", "?"];
var assignedChars = [];
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
  //Lets the user set the total characters to inclde in the password
  var charCount = prompt('How many charachters would you like your password to contain? (Between 8 and 128!');
  
  if(charCount < 8 || charCount > 128) {
    alert("Your password must have at least 8 and no more than 128 characters, try again!");
  };

  if(charCount >= 8 && charCount <= 128) {
    //Asks the user to confirm or deny password criteria
    var selectUpper = confirm("Would you like to include uppercase letters?");
    var selectLower = confirm("Would you like to include lowercase letters?");
    var selectNum = confirm("Would you like to include numbers?");
    var selectSpecial = confirm("Would you like to include special characters?");
  };

  if(selectUpper == false && selectLower == false && selectNum == false && selectSpecial == false) {
    alert("You must choose one option, please try again!");
  } 
  //When all 4 options are selected
  else if (selectUpper && selectLower && selectNum && selectSpecial) {
    assignedChars = upperCase.concat(lowercase, numChoice, specialChar);
  }
  //When 3 selections are made
  else if (selectUpper && selectLower && selectNum) {
    assignedChars = upperCase.concat(lowercase, numChoice);
  }
  else if (selectUpper && selectLower && selectSpecial) {
    assignedChars = upperCase.concat(lowercase, specialChar);
  }
  else if (selectUpper && selectLower && selectSpecial) {
    assignedChars = upperCase.concat(numChoice, specialChar);
  }
  else if (selectLower && selectNum && selectSpecial); {
    assignedChars = lowercase.concat(numChoice, specialChar);
  }
  //When 2 selections are made
  else if (selectUpper && selectLower) {
    assignedChars = upperCase.concat(lowercase);
  }
  else if (selectUpper && selectNum) {
    assignedChars = upperCase.concat(numChoice);
  }
  else if (selectUpper && selectSpecial) {
    assignedChars = upperCase.concat(specialChar);
  }
  else if (selectLower && selectNum) {
    assignedChars = lowercase.concat(numChoice);
  }
  else if (selectLower && selectSpecial) {
    assignedChars = lowercase.concat(specialChar);
  }
  else if (selectNum && selectSpecial) {
    assignedChars = numChoice.concat(specialChar);
  }
//When only 1 selection is made
  else if (selectUpper) {
    assignedChars = upperCase;
  }
  else if (selectLower) {
    assignedChars = lowercase;
  }
  else if (selectNum) {
    assignedChars = numChoice;
  }
  else if (selectSpecial) {
    assignedChars = specialChar;
  }

}










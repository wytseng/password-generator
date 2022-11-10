// Arrays of special characters, numerical numbers, lowercase and uppercase characters 
const specialCharaters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');
const numbers = "0123456789".split('');
const lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split('');
const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

// Gets a random element from a given array.
function randomChar(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Generates the password following the inputed critera
function generatePassword() {

  // Prompt user for password length
  var pwdLength = parseInt(window.prompt("How many characters would you like your pass"));

  // Gives warning and exists if input value is not a number, more than 128, or less than 8
  if (isNaN(pwdLength)) {
    window.alert("Password length must be provided as a number.");
    return null;
  } else if (pwdLength > 128) {
    window.alert("Password length must be less than 129 characters.");
    return null;
  } else if (pwdLength < 8 ) {
    window.alert("Password length must be at least 8 characters.");
    return null;
  } else { 
    // Initiate empty array to store all possible character types.
    var possibleChar = [];
    // Check if special characters should be included, append to array if true
    if (window.confirm("Click OK to confirm including speical characters.")) {
      possibleChar =possibleChar.concat(specialCharaters);
    }
    // Check if numeric characters should be included, append to array if true
    if (window.confirm("Click OK to confirm including numeric characters.")) {
      possibleChar = possibleChar.concat(numbers);
    }
    // Check if lowercase characters should be included, append to array if true
    if (window.confirm("Click OK to confirm including lowercase characters.")) {
      possibleChar = possibleChar.concat(lowercaseChar);
    }
    // Check if uppercase characters should be included, append to array if true
    if (window.confirm("Click OK to confirm including uppercase characters.")) {
      possibleChar = possibleChar.concat(uppercaseChar);
    }

    console.log(possibleChar);
    if (possibleChar.length === 0) {
      window.alert("Must select at least one character type.");
      return null;
    }
    // let password = generatePassword();
    // return password;
    var password = "";
    for (let i = 0; i < pwdLength; i++) {
      password += randomChar(possibleChar);
    }
    return password;
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

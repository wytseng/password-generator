// Arrays of special characters, numerical numbers, lowercase and uppercase characters 
const specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');
const numericalChar = "0123456789".split('');
const lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split('');
const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

// Gets a random element from a given array.
function randomChar(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Generates the password following the inputed critera
function generatePassword() {

  // Prompt user for password length
  var pwdLength = parseInt(window.prompt("How many characters would you like your password to contain?"));

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
    // Initiate empty string for the generated password
    var password = "";

    // Initiate empty array to store all possible character types.
    var possibleChar = [];

    // Initiate an empty array for gauranteed characters, ensuring at least one of each character type is in the password.
    var gauranteedChar = [];

    // Check if special characters should be included, append to both arrays if true
    if (window.confirm("Click OK to confirm including speical characters.")) {
      possibleChar =possibleChar.concat(specialChar);
      gauranteedChar.push(randomChar(specialChar));
    }
    // Check if numeric characters should be included, append to both arrays if true
    if (window.confirm("Click OK to confirm including numeric characters.")) {
      possibleChar = possibleChar.concat(numericalChar);
      gauranteedChar.push(randomChar(numericalChar));
    }
    // Check if lowercase characters should be included, append to both arrays if true
    if (window.confirm("Click OK to confirm including lowercase characters.")) {
      possibleChar = possibleChar.concat(lowercaseChar);
      gauranteedChar.push(randomChar(lowercaseChar));
    }
    // Check if uppercase characters should be included, append to both arrays if true
    if (window.confirm("Click OK to confirm including uppercase characters.")) {
      possibleChar = possibleChar.concat(uppercaseChar);
      gauranteedChar.push(randomChar(uppercaseChar));
    }
    // Check if any character type is selected, exit if none is selected
    if (gauranteedChar.length === 0) {
      window.alert("Must select at least one character type.");
      return null;
    }

    // Add the gauranteed characters to the beginning of the password
    password += gauranteedChar.join("");

    // Ramdomize the rest of the password
    for (let i = 0; i < (pwdLength - gauranteedChar.length); i++) {
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

// Arrays of special characters, numerical numbers, lowercase and uppercase characters 
const specialCharaters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');
const numbers = "0123456789".split('');
const lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split('');
const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

// Generates the password following the inputed critera
function generatePassword() {

  let pwdLength = window.prompt("How many characters would you like your pass");
  if (pwdLength < 8 ) {
    window.alert("Password length must be at least 8 characters.");
    return;
  } else if (pwdLength > 128) {
    window.alert("Password length must be less than 129 characters.");
    return;
  } else { 
    var charTypes = [];
    if (window.confirm("Click OK to confirm including speical characters.")) {
      charTypes =charTypes.concat(specialCharaters);
    }
    if (window.confirm("Click OK to confirm including numeric characters.")) {
      charTypes = charTypes.concat(numbers);
    }
    if (window.confirm("Click OK to confirm including lowercase characters.")) {
      charTypes = charTypes.concat(lowercaseChar);
    }
    if (window.confirm("Click OK to confirm including uppercase characters.")) {
      charTypes = charTypes.concat(uppercaseChar);
    }
    console.log(charTypes);
    if (charTypes.length === 0) {
      window.alert("Must select at least one character type.");
      return;
    }
    // let password = generatePassword();
    // return password;
    let password = "";
    for (let i = 0; i < pwdLength; i++) {
      var randomNum = Math.floor(Math.random()*charTypes.length);
      password += charTypes[randomNum];
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

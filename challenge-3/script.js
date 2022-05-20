// Assignment code here
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*_+-=";
const range = (8,128)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatePassword
function generatePassword() {
  
  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
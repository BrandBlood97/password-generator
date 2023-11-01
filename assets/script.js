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

// Generate password based on user choices
function generatePassword() {
  //Setting base values for variables used in the function
  var passwordLength = 0;
  var lowercaseChars = false;
  var uppercaseChars = false;
  var numericChars = false;
  var specialChars = false;
  var password = "";

  // Prompt user for password length
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = parseInt(prompt("How long would you like your password? \nPlease enter a number! (8-128 characters)"));
    //If not a number, alert user
    if (isNaN(passwordLength)) {
      alert("Please enter a number!");
      passwordLength = 0;
    }
    //If number is not between 8 and 128, alert user
    else if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must be between 8 and 128 characters!");
    }
  }

  // Prompt user for character types
  while (!lowercaseChars && !uppercaseChars && !numericChars && !specialChars) {
    lowercaseChars = confirm("Would you like lowercase letters?");
    if (lowercaseChars) {
      confirm("Your password will contain lowercase letters.");
    }
    uppercaseChars = confirm("Would you like uppercase letters?");
    if (uppercaseChars) {
      confirm("Your password will contain uppercase letters.");
    }
    numericChars = confirm("Would you like numeric characters?");
    if (numericChars) {
      confirm("Your password will contain numeric characters.");
    }
    specialChars = confirm("Would you like special characters?");
    if (specialChars) {
      confirm("Your password will contain special characters.");
    }
    // If no character types are selected, alert user (I think i could have used an else statement here)
    if (!lowercaseChars && !uppercaseChars && !numericChars && !specialChars) {
      alert("Please select at least one type!");
    }
  }

  // Generate password based on selected criteria
  function getRandomIndex(length) {
    //Generates random index with given length
    return Math.floor(Math.random() * length);
  }
  
  //For loop to run the legnth of the password set by the first prompt
  for (var i = 0; i < passwordLength; i++) {
    var charType = "";
    if (lowercaseChars) {
      charType += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercaseChars) {
      charType += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numericChars) {
      charType += "0123456789";
    }
    if (specialChars) {
      charType += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }
    //Generates random character from charType string
    var randomChar = charType.charAt(getRandomIndex(charType.length));
    password += randomChar;
  }

  return password;
}
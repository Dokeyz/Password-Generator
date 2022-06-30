// Password Generator


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {

  //Adding prompt to inquire length of password between 8 and 128 digits
  var promptLength = window.prompt('How many characters should be in this password? (enter a number greater than 7 and less than 129')

    //convert string into number for if statement
    promptLength = Number(promptLength);

  //Adding if statement incase password is less than 8 characters or greater than 128 characters
  if (promptLength < 8 || promptLength > 128) {
    window.alert('Your password must be greater than 7 characters and less than 129 characters, please enter a valid number!');
    return;
  }

  var confirmLowercase = window.confirm('Would you like lowercase letters in your password? (Click "Ok" for yes or "Cancel" for no')

  if (confirmLowercase)
    

      


  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


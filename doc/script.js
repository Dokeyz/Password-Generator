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

    //displays that the user must import a number greater than or equal to 8 and less than or equal to 128
    window.alert('Your password must be greater than 7 characters and less than 129 characters, please enter a valid number!');

    //ends the inquiry if an invalid number is given:
    return;
  }
  
  
  const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const numeric = ['0','1','2','3','4','5','6','7','8','9'];
  const special = ['"',' ','!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~',']'];
  
  function askQuestions() {

    var options = []

    //window asks if the user would like lowercase letters randomized into the password
    var confirmLowercase = window.confirm('Would you like lowercase letters randomized into your password? (Click "Ok" for yes or "Cancel" for no')

    //if the user clicks "OK" then it adds a constant array of lowercase strings to the variable "options" to be used in the password
    if (confirmLowercase) {
      options=options.concat(uppercase)
    }


    //window asks if the user would like UPPERCASE letters randomized into the password
    var confirmUppercase = window.confirm('Would you like UPPERCASE letters randomized into your password? (Click "Ok" for yes or "Cancel" for no')

    //if the user clicks "OK" then it adds a constant array of uppercase strings to the variable "options" to be used in the password
    if (confirmUppercase) {
     
    }
      


  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


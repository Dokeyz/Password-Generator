// Password Generator


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function generatePassword() {

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
  
    //below is a set of constants that contain arrays of strings for the randomizer
    
    const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    const numeric = ['0','1','2','3','4','5','6','7','8','9'];

    const special = ['"',' ','!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~',']'];
    


    //create empty box to add options into
    var options = []

    //window asks if the user would like lowercase letters randomized into the password
    var confirmLowercase = window.confirm('Would you like lowercase letters randomized into your password? (Click "Ok" for yes or "Cancel" for no')

    //if the user clicks "OK" then it adds a constant array of lowercase strings to the variable "options" to be used in the password
    if (confirmLowercase) {
      //options now uses the concat command to combine the array of characters, if the user chooses to add these specific lowercase characters
      options=options.concat(lowercase)
      //added a log for lowercase letters being added to keep track of what is happening
      console.log('lowercase letters added');
    }

    //window asks if the user would like UPPERCASE letters randomized into the password
    var confirmUppercase = window.confirm('Would you like UPPERCASE letters randomized into your password? (Click "Ok" for yes or "Cancel" for no')

    //if the user clicks "OK" then it adds a constant array of uppercase strings to the variable "options" to be used in the password
    if (confirmUppercase) {
      options=options.concat(uppercase)
      console.log('uppercase letters added');
    }
      
    //window asks if the user would like numbers randomized into the password
    var confirmNumeric = window.confirm('Would you like numbers randomized into your password? (Click "Ok" for yes or "Cancel" for no')
    //if the user clicks "OK" then it adds a constant array of uppercase strings to the variable "options" to be used in the password
    if (confirmNumeric) {
      options=options.concat(numeric)
      console.log('numbers letters added');
    }
    
    //window asks if the user would like special characters randomized into the password
    var confirmSpecial = window.confirm('Would you like special characters randomized into your password? (Click "Ok" for yes or "Cancel" for no')
    //if the user clicks "OK" then it adds a constant array of uppercase strings to the variable "options" to be used in the password
    if (confirmSpecial == true) {
      options=options.concat(special)
      console.log('special characters added');
    }
    
    if (confirmLowercase == false && confirmUppercase == false && confirmNumeric == false && confirmSpecial == false) {
      window.alert('You must select at least one group of characters to be randomized into the password!');
  
      return;
    }
    
    //prints array of possible options to randomize into the console for clarity, with a maximum of 94 options
    console.log(options);
    

    //created function for randomizing password
    function password() {

      var text = "";
      //added all possible characters that the password could potentially be
      var potential = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 !"#$%&()*+,-./:;<=>?@[\]^_`{|}~'
      //created for loop that runs for the length of the chosen password length
      for (var i = 0; i < promptLength; i++)
        //used the mathrandom function and charAt function to randomize characters in the array
        text += potential.charAt(Math.floor(Math.random() * potential.length));
      
      return text;
    }
    //console logs randomized password
    console.log(password());
  }
  
  generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", password);


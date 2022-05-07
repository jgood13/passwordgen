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

function generatePassword(){


  var length = Number(prompt("Number of characters in password. Enter: 8-128."));

  var number = [0,1,2,3,4,5,6,7,8,9];
  var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var special = ['!','@','#','$','%','^','&','*','(',')'];
  var userChars = [];
  var userPassword = [];
  var atleastone = [];
  var criteria = [];
    
  if (length >= 8 && length <= 128){
    var numberPrompt = window.confirm("do you want to include numbers?");
    var lowercasePrompt = window.confirm("do you want to include lowercase letters?");
    var uppercasePrompt = window.confirm("do you want to include uppercase letters?");
    var specialPrompt = window.confirm("do you want to add special characters?");
  } else {
    alert( "password must be between 8-128")
  }

  if (numberPrompt === true){
    userChars = userChars.concat(number)
  } 
  if (lowercasePrompt === true) {
    userChars = userChars.concat(lowercase)
  } 
  if (uppercasePrompt === true) {
    userChars = userChars.concat(uppercase)
  } 
  if (specialPrompt === true) {
    userChars = userChars.concat(special)
  }

  if (numberPrompt === false && lowercasePrompt === false && uppercasePrompt === false && specialPrompt === false) {
    alert(" Must include at least one character type")
  }

  for (i= 0; i < length; i++) {
    userPassword.push(userChars[Math.floor(Math.random() * userChars.length)]);
  }
  // var randomGroup = function(arr, num){
  //   const shuffle = [...arr].sort(() => 0.5 - Math.random());
  //   return shuffle.splice(0,num);
  // }

  // userPassword = randomGroup(userChars, length);

  // var splicePassword = userPassword.splice(0,3);

  // var finalPassword = userPassword + atleastone;

  

  userpasswordstring = userPassword.join("");

  return userpasswordstring;
}

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const special = "!@#$%^&*()+?-=[]{}.<>=_`|~";


function generatePassword() {
  let selectedArray = "";
  const passwordLength = getPasswordLength();

  const lowerCase = getChoice("lowercase");
  const upperCase = getChoice("uppercase");
  const numericCharacters = getChoice("numeric");
  const specialCharacters = getChoice("special");

  if (lowerCase) selectedArray = selectedArray + lowerCase;
  if (upperCase) selectedArray =selectedArray+ upperCase;
  if (numericCharacters) selectedArray = selectedArray + number;
  if (specialCharacters) selectedArray = selectedArray + special;

  if (!selectedArray) {
    alert("You must include at least one character type.");
    return "";
  }

  let passwordString = "";
  for (let i = 0; i < passwordLength; i++) {
    passwordString += selectedArray.charAt( Math.floor(Math.random() * selectedArray.length));
     
  }

  return passwordString;

}


function getPasswordLength() {
  let userChoice;
  do {
    userChoice = parseInt(
      prompt("Enter the number of characters between 8 and 128: ")
    );
  } while (isNaN(userChoice) || userChoice < 8 || userChoice > 128);
  return userChoice;
}

function getChoice(currentOption) {
  let userChoice;
  do {
    userChoice = prompt(`Would you like ${currentOption} characters? (y/n)` ).toLowerCase();
     } while (userChoice !== "y" && userChoice !== "n");

  return userChoice === "y";
}

const generateBtn = document.querySelector("#generate");


function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);


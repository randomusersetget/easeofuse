const passwordLength = window.prompt("Enter length of password:");
const passwordLabel = document.getElementById("password");
const upperCase = true;
const lowerCase = true;
const specialChars = true;
const numbers = true;
let passwordGen = "";
let assembledPassword;
let randomIndex;
const upperCaseString = "LOKESHDUKHANDE";
const lowerCaseString = "lokeshdukhande";
const specialCharsString = "!@#$%^&*";
const numbersString = "0123456789";
function passwordGenerator() {
    if (upperCase) {
        assembledPassword = assembledPassword + upperCaseString;
    }
    else{
        "";
    }
    if (lowerCase) {
        assembledPassword = assembledPassword + lowerCaseString;
    }
    else{
        "";
    }
    if (specialChars) {
        assembledPassword = assembledPassword + specialCharsString;
    }
    else{
        "";
    }
    if (numbers) {
        assembledPassword = assembledPassword + numbersString;
    }
    else{
       "";
    }
    for (let i = 0; i < passwordLength; i++) {
        randomIndex = Math.floor(Math.random() * assembledPassword.length) + 1;
        passwordGen = passwordGen + assembledPassword.charAt(randomIndex);
    }
    passwordLabel.textContent = `Password is: ${passwordGen}`;
}
passwordGenerator();

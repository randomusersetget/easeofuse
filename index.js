/*
window.alert("Hello");
console.log("Jaad");


document.getElementById(`myH1`).textContent = "This is Header";
document.getElementById("myP1").textContent = `This is Paragraph`;


let age = 25;
console.log(`Your age is ${age}`);
let firstName = "Lokesh";
console.log(`Your name is ${firstName}`);
let forSale = false;
console.log(`is this car for sale ${forSale}`);
let fullName = "Loksha";
let age = 35;
let school = false;


document.getElementById("fullName").textContent = fullName;
document.getElementById("age").textContent = age;
document.getElementById("school").textContent = school;


//number, string, boolean, null, undefined, bigint, symbol, (nonprimitive) object


//arithmetic operators
let students = 30;
students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 2;
1et extraStudents = students % 3;
students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;
students++;
students--;
console.log(student);


//operator precedence
1. parenthesis ()
2. exponents
3. multiplication & division & modulo
4. addition & subtraction
let result = 6 / 2**(2+5);
console.log(result);


document.getElementById("submit").onclick = function () {
    let username = document.getElementById("textBox").value;
    // document.getElementById("header").textContent = `Hello ${username = document.getElementById("textBox").value}`;
    console.log(username);
    document.getElementById("header").textContent = `Hello ${username}`;
}


// type conversion = change the datatype of a value to another (Strings, numbers, booleans)


let age = window.prompt("How old are you?");
age = Number(age);
age+=1;
console.log(age);


let x = "pizza";
let y = "pizza";
let z = "pizza";


x = Number(x);
y = String(y);
z = Boolean(z);


console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


let num1, num2, num3;
document.getElementById("submit").onclick = function(){
    num1 = parseInt(document.getElementById("no_1").value);
    num2 = parseInt(document.getElementById("no_2").value);
    num3 = num1 + num2;
    console.log(num3);
    document.getElementById("answer").textContent = `Addition is: ${num3}`;
}


const PI = 3.14159;
let r, c;
document.getElementById("radSubmit").onclick = function(){
    r = document.getElementById("rad").value;
    r = Number(r);
    c = 2 * PI * r;
    document.getElementById("circum").textContent = `Circumference is : ${c}`;
}


const countNum = document.getElementById("countNum");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
let count = 0;


decreaseBtn.onclick = function() {
    count--;
    countNum.textContent = count;
}
increaseBtn.onclick = function() {
    count++;
    countNum.textContent = count;
}
resetBtn.onclick = function() {
    count=0;
    countNum.textContent = count;
}


//MATH Properties and methods
console.log(Math.PI);
console.log(Math.E);
z = Math.round(x), floor, ceil, trunc, pow(x, y), sqrt, log, sin, cos, tan, abs, sign, min(x, y, z), max(x, y, z);


//let randomNum = Math.floor(Math.random() * 6) + 1;
let min = 50;
let max = 100;
let randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum);


if
else if
else


const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;


myButton.onclick = function(){
    let randomNum1 = Math.floor(Math.random()*max) + min;
    let randomNum2 = Math.floor(Math.random()*max) + min;
    let randomNum3 = Math.floor(Math.random()*max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}


const sub = document.getElementById("sub");
const visa = document.getElementById("visa");
const masterCard = document.getElementById("masterCard");
const payPal = document.getElementById("payPal");
const submit = document.getElementById("submit");
const subsResult = document.getElementById("subsResult");
const payMethodResult = document.getElementById("payMethodResult");
submit.onclick = function() {
    if (sub.checked) {
        subsResult.textContent = `You are subscribed.`;
    }
    else {
        subsResult.textContent = `You are not subscribed.`;
    }
    if (visa.checked) {
        payMethodResult.textContent = `Paying via Visa.`;
    }
    else if (masterCard.checked) {
        payMethodResult.textContent = `Paying via MasterCard.`;
    }
    else if (payPal.checked) {
        payMethodResult.textContent = `Paying via PayPal.`;
    }
    else {
        payMethodResult.textContent = `You have not selected payment method.`;
    }
}


let purchaseAmt = 125;
let discount = purchaseAmt>=100 ? 10 : 0;
console.log (`your total is $${purchaseAmt - purchaseAmt * (discount / 100)}`);


let day = 'hello';
switch (day) {
    case 1:
        console.log(`It's Monday!`);
        break;
    case 2:
        console.log(`It's Tuesday!`);
        break;
    case 3:
        console.log(`It's Wednesday!`);
        break;
    case 4:
        console.log(`It's Thirsday!`);
        break;
    case 5:
        console.log(`It's Friday!`);
        break;
    case 6:
        console.log(`It's Saturday!`);
        break;
    case 7:
        console.log(`It's Sunday!`);
        break;
    default:
        console.log(`It's not a day!`);
        break;
}
const testScore = 60;
let grade;
switch (true) {
    case testScore >= 90:
        grade = `A`;
        break;
    case testScore >= 70:
        grade = `B`;
        break;
    case testScore >= 50:
        grade = `C`;
        break;
    case testScore >= 30:
        grade = `D`;
        break;
    default:
        grade = `F`;
        break;
}
console.log(`Your grade is ${grade}`);


let username = "hap Py";
let phoneNo = "123-456-7890";
console.log(username.charAt(3));
console.log(username.indexOf("h"));
console.log(username.lastIndexOf("p"));
console.log(username.length);
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.repeat(2));
console.log(username.startsWith("h"));
console.log(username.endsWith("y"));
console.log(username.startsWith("h")?"Username cannot begin with h."
                                    :"Does not begin with h.");
console.log(username.includes(" "));
console.log(phoneNo.replaceAll("-", ""));
console.log(phoneNo.padStart(15,"0"));
console.log(phoneNo.padEnd(15,"0"));



const fullName = "Lokesh Dukhande";
let firstName = fullName.slice(0,6);
let lastName = fullName.slice(7,15);
let lastName = fullName.slice(-8);
let lastName = fullName.slice(fullName.indexOf("D"));
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log(firstName);
console.log(lastName);



let un = window.prompt("Enter un:");
un = un.trim().charAt(0).toUpperCase() + un.trim().slice(1).toLowerCase();
console.log(un);



// && || ! Operators



// = assignment op
// == comparison (equals) op
// === strict equality op (compare value as well as datatype)
// != inequality op
// !== strict inequality op
const PI = 3.14;
if(PI == "3.14"){
    console.log("comparison operator");
}
else{
    console.log(" blank");
}
if(PI === 3.14){
    console.log("Strict Equality operator");
}
else{
    console.log(" blank");
}



let loggedIn = false;
let username;
let password;
while(!loggedIn){
    username = window.prompt(`Enter Username `);
    password = window.prompt(`Enter Password `);
    if(username === "lokesh" && password === "dukhande"){
        loggedIn = true;
        console.log (`Hello ${username}`);
    }
    else{
        console.log("Credentials did not matched. ");
    }
}




let loggedIn = false;
let username;
let password;
do{
    username = window.prompt(`Enter Username `);
    password = window.prompt(`Enter Password `);
    if(username === "lokesh" && password === "dukhande"){
        loggedIn = true;
        console.log (`Hello ${username}`);
    }
    else{
        console.log("Credentials did not matched. ");
    }
}while(!loggedIn)



for(i = 0; i <= 10; i++){
    if (i == 3){
        continue;
    }
    else{
        console.log(i);
    }
}


let min = 50;
let max = 100;
let answer = Math.floor(Math.random() * (max - min + 1) + min);
let guess;
let attempt=0;
let running = true;
while(running){
    guess = window.prompt(`Enter any number from ${min} to ${max} (Answer: ${answer}):`);
    guess = Number(guess);
    //console.log(typeof guess);
    if(isNaN(guess)){
        window.alert(`Please enter a valid number.`);
    }
    else if(guess < min || guess > max){
        window.alert(`Please enter a valid number within ${min} to ${max}.`);
    }
    else{
        attempt++;
        if(guess > answer){
            window.alert('Too High');
        }
        else if(guess < answer){
            window.alert('Too Low');
        }
        else{
            window.alert(`Attempts: ${attempt}, Guess: ${guess}, Answer: ${answer}`);
            running = false;
        }
    }
}



function happyBday(name){
    console.log(`Happy birthday! ${name}`);
}
happyBday("Lokesh");


let num = window.prompt("Enter any number: ");
num = Number(num);
function isEven(x){
    if(x % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
window.alert(isEven(num));
//lokesh
function isEven(x){
    return x % 2 === 0 ? true : false;
}
window.alert(isEven(Number(window.prompt("Enter any number:"))));

function isvalidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
console.log(isvalidEmail('lokesh@gmail.com'));
function one() {
    let x = 1;
    console.log(y);
}
one();


function convert() {
    const textBox = document.getElementById("textBox");
    const toFahrenheit = document.getElementById("toFahrenheit");
    const toCelsius = document.getElementById("toCelsius");
    const result = document.getElementById("result");
    let temp;
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        result.textContent = (temp * 9 / 5 + 32).toFixed(1) + "°F";
    }
    else if (toCelsius.checked) {
        temp = Number(textBox.value);
        result.textContent = ((temp - 32) * 5 / 9).toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a unit.";
    }
}

Arrays--------
let fruits = ["apple", "orange", "banana"];
fruits.push("mango");
fruits.pop();
fruits.unshift("coconut");
fruits.shift();
let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");
console.log(index);
//Inorder and inreverse array---------------------
function listFruits () {
    for(let i = 0; i <= fruits.length-1; i++) {
        console.log(fruits[i]);
    }
    console.log("---");
}
function inOrder() {
    listFruits();
}
function inReverse() {
    fruits.reverse();
    listFruits();
    fruits.reverse();
}
//same as above---------------------
let fruits = ["apple", "orange", "banana"];
fruits.sort();
for(let fruit of fruits.reverse()){
    console.log(fruit);
    let isReversed = 0;
    isReversed++;
    if (isReversed>=1) {
        fruits.reverse();
    }
}
console.log(fruits);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(typeof numbers);
console.log(... numbers);
let max = Math.max(...numbers);
console.log(max);
let min = Math.min(...numbers);
console.log(min);
console.log("--------");
let username = "Lokesh Dukhande";
console.log(username);
let userarray = [...username].join("-");
console.log(userarray);
console.log(typeof userarray);

let fruits = ["mango", "apple", "orange"];
let vegetables = ["potato", "ladyfinger", "eggplant", "drumstick", "elephant leg"];
let foods = [... fruits, ...vegetables, "eggs"];
console.log(foods);


function fridge(...lunch){
    console.log(lunch);
}

const food1 = "Pizza";
const food2 = "Franky";
const food3 = "Sandwich";
const food4 = "Vadapav";
const food5 = "Samosa pav";

fridge(food1, food2, food3, food4, food5);


function sum(...numbers){
    let result = 0;
    for(number of numbers){
        result = result + number;
    }
    return result;
}

const total = sum(1,2,3,4,5);
console.log(`Your result is $${total}`);



function getAverage(...numbers){
    let result = 0;
    for(number of numbers){
        result = result + number;
    }
    return result / numbers.length;
}
const averageOf = getAverage(75, 100, 85, 90, 50);
console.log(averageOf);



const fullName = combinestrings("Mr.", "Lokesh", "Dukhande", "1111");
function combinestrings(...strings){
    return strings.join(" ");
}
console.log(fullName);


function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");
    const result = [];
    const image = [];
    for(let i=0; i < numOfDice; i++){
        let num = Math.floor(Math.random()* 6) + 1;
        result.push(num);
        image.push(`<img src="dice_images/${num}.png" alt="${num}">`);
    }
    diceResult.textContent = result.join(", ");
    diceImg.innerHTML = image.join(" ");
}



const passwordLength = window.prompt("Enter length of password:");
//const passwordLength = 8;
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
        console.log("Upper selected.");
    }
    if (lowerCase) {
        assembledPassword = assembledPassword + lowerCaseString;
    }
    else{
        console.log("Lower selected.");
    }
    if (specialChars) {
        assembledPassword = assembledPassword + specialCharsString;
    }
    else{
        console.log("Special not selected.");
    }
    if (numbers) {
        assembledPassword = assembledPassword + numbersString;
    }
    else{
        console.log("Numbers not selected.");
    }
    for (let i = 0; i < passwordLength; i++) {
        randomIndex = Math.floor(Math.random() * assembledPassword.length) + 1;
        passwordGen = passwordGen + assembledPassword.charAt(randomIndex);
    }
    console.log(`Password is: ${passwordGen}`);
}
passwordGenerator();
*/


const passwordLength = window.prompt("Enter length of password:");
//const passwordLength = 8;
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
        console.log("Upper selected.");
    }
    if (lowerCase) {
        assembledPassword = assembledPassword + lowerCaseString;
    }
    else{
        console.log("Lower selected.");
    }
    if (specialChars) {
        assembledPassword = assembledPassword + specialCharsString;
    }
    else{
        console.log("Special not selected.");
    }
    if (numbers) {
        assembledPassword = assembledPassword + numbersString;
    }
    else{
        console.log("Numbers not selected.");
    }
    for (let i = 0; i < passwordLength; i++) {
        randomIndex = Math.floor(Math.random() * assembledPassword.length) + 1;
        passwordGen = passwordGen + assembledPassword.charAt(randomIndex);
    }
    console.log(`Password is: ${passwordGen}`);
}
passwordGenerator();
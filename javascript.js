var lowerCaseChar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]
var upperCaseChar = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "x",
    "Y",
    "Z",
]
var numberChar = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
]
var specialChar = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "(",
    ")",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "{",
    "|",
    "}",
    "~",
]

var pwLength = prompt("Please specify how many characters long you want the password to be.");
pwLength = parseInt(pwLength);

var userInputLowerCaseChar = confirm("Would you like lower case characters in your password?");

var userInputUpperCaseChar = confirm("Would you like upper case characters in your password?");

var userInputSpecialChar = confirm("Would you like special characters in your password?");

var userInputNumberChar = confirm("Would you like lower case characters in your password?");

var childArray = [] //this is the variable for the array of the pw thats been concatinated

var passwordArray = []

if (userInputLowerCaseChar) {
    childArray = childArray.concat(lowerCaseChar);
}
if (userInputUpperCaseChar) {
    childArray = childArray.concat(upperCaseChar);
}
if (userInputNumberChar) {
    childArray = childArray.concat(numberChar);
}
if (userInputSpecialChar) {
    childArray = childArray.concat(specialChar);
}

function pwGenerator(){
    var char = Math.floor(Math.random() * childArray.length)
    console.log(childArray[char])
    passwordArray.push(childArray[char])
}

for (var i = 0; i < pwLength; i++){
    pwGenerator()
}

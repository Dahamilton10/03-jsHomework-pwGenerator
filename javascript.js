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

var generateElement = document.querySelector("#generate");
var copyElement = document.querySelector("#copy");

generateElement.addEventListener("click", function(){
    var pwLength = prompt("Please specify how many characters long you want the password to be. It must be over 8 characters.");
    pwLength = parseInt(pwLength);
    while (isNaN(pwLength)){
        //the isNaN() function just determines whether the value is NaN (not a number) or not as a boolean value. I pulled it from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
        confirm("You need to put in a number. I can't make a password some letter characters long.")
        pwLength = prompt("Please specify how many characters long you want the password to be.");
    }
    
    while (7 > pwLength){
        var userPwLengthTooShort = confirm("You need to make your password ATLEAST 8 characters long.")
        pwLength = prompt("Please specify how many characters long you want the password to be.");
    }
    
    var userInputLowerCaseChar = confirm("Would you like lower case characters in your password?"); 
        
    var userInputUpperCaseChar = confirm("Would you like upper case characters in your password?"); 
        
    var userInputSpecialChar = confirm("Would you like special characters in your password?");
    
    var userInputNumberChar = confirm("Would you like number characters in your password?");
    
    while (userInputLowerCaseChar == false && userInputUpperCaseChar == false && userInputSpecialChar == false && userInputNumberChar == false) {
        confirm("Hey you need to pick atleast one of these for the password to be generated.")
    
        userInputLowerCaseChar = confirm("Would you like lower case characters in your password?");
    
        userInputUpperCaseChar = confirm("Would you like upper case characters in your password?");
    
        userInputSpecialChar = confirm("Would you like special characters in your password?");
    
        userInputNumberChar = confirm("Would you like number characters in your password?");
    }
    
    var childArray = [] //this is the variable for the array of the pw characters pool thats been concatinated
    
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
    
    function pwGenerator() {
        var char = Math.floor(Math.random() * childArray.length)
        passwordArray.push(childArray[char])    
    }
    
    for (var i = 0; i < pwLength; i++) {
        pwGenerator()
    }
    if (userInputLowerCaseChar){
        var haslowercase = false;
        for (var i = 0; i < lowerCaseChar; i++)
            if (passwordArray.includes(lowerCaseChar[i])){
                haslowercase = true;
            }
    }
    if (userInputLowerCaseChar){
        var x = Math.floor(Math.random() * lowerCaseChar.length)
        passwordArray.pop();
        passwordArray.unshift(lowerCaseChar[x])
        console.log(passwordArray)
    }
    if (userInputUpperCaseChar){
        var x = Math.floor(Math.random() * upperCaseChar.length)
        passwordArray.pop();
        passwordArray.unshift(upperCaseChar[x])
        console.log(passwordArray)
    }
    if (userInputNumberChar){
        var x = Math.floor(Math.random() * numberChar.length)
        passwordArray.pop();
        passwordArray.unshift(numberChar[x])
        console.log(passwordArray)
    }
    if (userInputSpecialChar){
        var x = Math.floor(Math.random() * specialChar.length)
        passwordArray.pop();
        passwordArray.unshift(specialChar[x])
        console.log(passwordArray)
    }
    passwordArray = passwordArray.join('');
    // Join will just take the contents of this array and smoosh them all together. You can pass in something to seperate the elements of the array but I've chosen to not have a seperator.
    document.body.children[2].append(passwordArray);
});
copyElement.addEventListener("click", function(){
    // added an event listener to the copy button
    var copyPassword = document.body.children[2];
    // made a variable thats just equal to the space where the password gets put
    copyPassword.select();
    // selects the password
    document.execCommand("copy");
    // the execCommand just lets us change the current editable area. In this case we're just copying that area.
});
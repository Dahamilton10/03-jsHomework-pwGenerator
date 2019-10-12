# 03-jsHomework-pwGenerator
a password generator using js

## What this mess is
This bad boy is a TOP OF THE LINE password generator. It can do anything. Generate a password with no numbers? easy. No letters? easy.
Basically what this does is it gets the user input about what types of characters to use in a password and how long the password should be. 
Those characters already exist as an array, and if the user approved them then they get concatinted into childArray.
After childArray is formed with all the possible characters the pwGenerator function will do itterations equal to the number of times of whatever the user wanted in the begining.
pwGenerator just generates a random value that exists in childArray.
The pwGenerator function then pushes the result every itteration to an array called passwordArray.
Then I have some if statements to pop the last part of the passwordArray then unshift a random value from lowerCaseChar if it was approved by the user. Repeat this for upperCaseChar, numberChar, and specialChar.
Once passwordArray is finished we append that to the page for the user to see.

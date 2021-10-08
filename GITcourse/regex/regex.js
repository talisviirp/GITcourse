console.log("welcome to regex!");

// a sequence of characters that forms a pattern.
// /pattern/modifiers

// let re = /good/

//characters 
// ^ - represents the beginning of our string
let upperCaretRe = /^there/

// $ - presents the end of the string
let endRe = /good$/

let re = /e/


//modifiers
let iModRe = /good/i // i - Perform case-insensitive matching

let gModRe = /e/g // g - globar character

//Characters

// Any characters (.)
let anyRe = /g./g

// + character - one or more of that character in the string
let plusRe = /er+/g

// ? character - zero or one character (Optional)
let quesRe = /a?/



// * character zero or more occurrences
let astRe = /goo*/g

// Character set [ ]
let digitsRe = /[0-9]+/

let alphaRe = /[a-z]+/

let uppCarRe = /[^0-9]/

let lenRe = /[0-9]{5}/ // {n} - amount of characters
lenRe = /[0-9]{2}$/
lenRe = /^[0-9]{2}$/



let sentence = "Hello World";

let upperLowerRe = /[a-zA-Z0-9]{3,10}/

// \ - helps to escape some certain characters in our Regular expressions.


// Classes helps us to build re character set in a short way.
re = /\d/ // \d == [0-9]
re = /\w/ // \w == [a-zA-z0-9_]

re = /\D/ // === [^0-9]
re = /\W/ // ==== [^a-zA-Z0-9_]

let result = sentence.search(/o+/g)
result = sentence.replace(/world/i, "people")

// Build a regular expression to validate an email - michaelking123@gmail.com
let email = "michealking@gmai.com"
let emailRe = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{3}$/i

// \s - any white space, \n new line, \t tabspace
// Build a regular expression to validate an american phone number (123) 123 1234 

let phone = "(888) 734 3456"
let phoneRe = /^[\(][0-9]{3}[\)]\s[0-9]{3}\s[0-9]{4}/

console.log(result);
// console.log(sentence.match(plusRe))
console.log(phoneRe.test(phone))

//write a js funtion to count the number of vowels in a given string

const vowelCount = (str) => {
    let re = /[aeiou]/ig
    let result = str.match(re)
    console.log(result);
    return result.length
}

vowelCount("The lady in white is pretty")

//write a function to count the number of digits in a string
const countNum = (str) => {
    let re = /[0-9]/g
    let result = str.match(re)
    console.log(result);
}

countNum("asdfgh123456789")

// write a function to count the number of words in a given string.
const wordCount = (str) => {
    let re = /[ ]{2,}/ig
    str = str.replace(re, " ")
    console.log(str);
    return str.split(" ").length;
}
console.log(wordCount("this world     is a small place"));




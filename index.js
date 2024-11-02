// 1. Capitalize the first letter of a given string.
// Example: "hello" → "Hello"
let text = "hello"
console.log(text.replace("h","H"))

// 2. Check if a string contains a specific substring.
let text2 = "Hello World"
console.log(text2.includes("World"))

// 3. Repeat a given string 'n' times.
let text3 = "abc"
console.log(text3.repeat(3))

// 4. Replace all occurrences of a specific word in a string with another word.
let text4= "I love apples"
console.log(text4.replace("apples","oranges"))

// 5. Count the number of words in a sentence.
// Example: "Hello World!" → 2
console.log(text2.length)

// 6. Reverse the characters in a given string.
// Example: "hello" → "olleh"
const arr = text.split("").reverse()
let str = ""
for (let index = 0; index < arr.length; index++) {
    str = str.concat(arr[index])
}
console.log(str)

// 7. Extract the text between two characters.
// Example: "Hello [World]", characters "[" and "]" → "World"
let text5 = "Hello [World]"
console.log(text5.slice(7,12))

// 8. Convert a string to snake_case format.
// Example: "Hello World" → "hello_world"
console.log(text2.toLowerCase().replace(" ","_"))

// 9. Remove leading, trailing, and extra spaces in a string.
// Example: "   Hello    World   " → "Hello World"
let text6 = "   Hello    World   "
let textt = text6.trim()
console.log(textt.replace(/ +/g," "))

// 10. Identify the longest word in a given sentence.
// Example: "I love programming" → "programming"
let text7 = "I love programming"
console.log(text7.slice(-11))


// Number Method Tasks

// 1. Convert a string to a number and handle invalid cases.
// Example: "123" → 123, "abc" → NaN
let a = "123"
let b = "abc"
console.log(Number(a))
console.log(Number(b))

// 2. Round a decimal number to two decimal places.
// Example: 3.14159 → 3.14
let num = 3.14159
console.log(num.toFixed(2))

// 3. Write a function that returns the square root of a given number.
// Example: 5 → 25

function square(params) {
    return params*params
}

console.log(square(5))

// 4. Write a function that converts a string to a floating-point number.
// Example: "2.454" → 2.454
let num1 = "2.454"
console.log(parseFloat(num1))

// 5. Parse a string to an integer
// Example: "55" → 55
let num2 = "55"
console.log(parseInt(num2))

// 6. Write a function that checks if a given value is NaN (Not-a-Number)
// Example: "ereferf" → true, "23" → false
function check(params) {
    return Number.isNaN(Number(params))
}

console.log(check("eadadfda"))
console.log(check("23"))

// 7. Calculate the sum of the digits of a given number.
// Example: 123 → 6
let num3 = 123
let numArr = num3.toString().split("")
let cavab = 0
for (let index = 0; index <= numArr.length; index++) {
    cavab += index
}
console.log(cavab)

// 8. Find the number of digits in a given number.
// Example: 1234 → 4
let num4 = 1234
let numArr1 = num4.toString().split("")
console.log(numArr1[numArr1.length - 1])

// 9. Find the sum of array items
// Example: [1, 3, "5"] → 9
let numArr2 = [1, 3, "5"]
let cavab1 = 0
let cavab2 = 0
for (let index = 0; index < numArr2.length; index++) {
    cavab2 = Number(numArr2[index])
    cavab1 +=cavab2
}
console.log(cavab1)

// 10. Write a function that rounds a given decimal number to the nearest integer.
// Example: 3.12 → 3
let num5 = 3.12
console.log(num5.toFixed(0))
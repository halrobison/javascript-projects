//example of a function that prints arrays

let names = ["Lena", "James", "Julio"];

function printArray(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

printArray(["Lena", "James", "Julio"]);
console.log("---");
printArray(["orange", "apple", "pear"]);

//example of calling a function
function sayHello() {
    console.log("Hello, World!");
}

sayHello();

//boolean function 
function isEven(n) {
    if (n % 2 === 0) {
        return true;
    }
    return false;
}

//test
function plusTwo(num) {
    return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
    a = plusTwo(a);
}

console.log(a);

//test
function repeater(str) {
    let repeated = str + str;
    console.log(repeated);
}

repeater('Bob');
console.log(repeater("Hal"));

//test

let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));
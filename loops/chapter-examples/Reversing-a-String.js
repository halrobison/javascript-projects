let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
    // note that using reversed += str[i] wouldn't work!
    // that would print the string in the same order, since we're moving "front to back" through the string while reading
}

console.log(reversed);
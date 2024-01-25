function makeLine(size) {
    let line = ""
    for (let i = 0; i < size; i++) {
        line += "#";
    }
    return line;
}

console.log(makeLine(5));

function makeSquare(size) {
    return makeRectangle(size, size);  
}

console.log(makeSquare(5)); 

function makeRectangle(width, height) {
    let rectangle = "";
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width)) + '\n'; 
    }
    return rectangle.slice(0, -1); 
}

console.log(makeRectangle(10, 5));

function makeDownwardStairs(height) {
    let downwardStairs = "";
    for (let i = 0; i < height; i++) {
        downwardStairs += (makeLine(i+1) + "\n"); 
    }
    return downwardStairs.slice(0, -1);
}

console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = ""; 
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += " ";
    }
    for (let i = 0; i < numChars; i++) {
        spaceLine += "#";
    }
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += " ";
    }
    return spaceLine;
}

console.log(makeSpaceLine(3, 5))

function makeIsoscelesTriangle(height) {
    let triangle = "";
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height-i-1, 2*i+1) + '\n');
    }
    return triangle.slice(0, -1);
}

console.log(makeIsoscelesTriangle(4)); 

function reverse(str) {
    return str.split('').reverse().join('');
}

function makeDiamond(height) {
    let diamond = "";
    diamond += makeIsoscelesTriangle(height); 
    diamond += "\n" + reverse(diamond); 
    return diamond;
}

console.log(makeDiamond(5));

/**
 * var,let and const variables in javascript
 */

var globalVar = "I'm a global variable";
let globallet = "I'm also global but global with let";
const gllobalconst = "I'm a global constant";

console.log(globalVar);
console.log(globallet);
console.log(gllobalconst);

{
    //block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";

    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
}


function show() {
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError


// For the above code, when you view the output in the console, you will again see a ReferenceError for var, let, and const.
 //To see the output, you need to add the // before the codes as shown below.

console.log(blockVar);
console.log(blockLet);
// After putting // in front of above code it will look like as shown below.

// 1
// 2
// // console.log(blockVar);
// // console.log(blockLet);
// Copied!

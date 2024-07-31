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

// // console.log(blockVar);
// // console.log(blockLet);
// Copied!


/**
 * Control flow in javascript
 */

// Declare variable named userRole and initialize it with the string value "admin" in control_flow.js file. Also, declare one more variable named accessLevel but do not assign a value to it yet.
// 1
// 2
// let userRole = "admin";
// let accessLevel;
// Copied!
// Now, execute the if…else block by assigning different roles in the if…else condition to check if userRole is equal to "admin"or not. Include the following code in the control_flow.js file after the previous code:

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
// Now, the above code will check if userRole is "admin" or something else.

// If userRole is "admin", the code with assign accessLevel as "Full access granted".
// If not, it will proceed to check if userRole is "manager".
// If userRole is "manager", it will assign accessLevel as "Limited access granted".
// If userRole is neither "admin" nor "manager", the code will assign accessLevel as "No access granted".
// Based on the value of userRole, the accessLevel variable will be set to one of the following:

// "Full access granted" if userRole === "admin"
// "Limited access granted" if userRole === "manager"
// "No access granted" for any other value of userRole
// You will be able to see the output using this code:

console.log("Access Level:", accessLevel);


let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}


console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

let isAuthenticated = true;


let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);



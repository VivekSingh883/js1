const num1 = 10;
const num2 = 3;

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
const modulus = num1 % num2;

console.log(`Addition: ${addition}`);           
console.log(`Subtraction: ${subtraction}`);  
console.log(`Multiplication: ${multiplication}`);
console.log(`Division: ${division}`);           
console.log(`Modulus: ${modulus}`);               

// 2. Compare two numbers
const a = 5;
const b = '5';

console.log(`Equality (==): ${a == b}`); 
console.log(`Strict Equality (===): ${a === b}`); 

// 3. Increment and decrement
let counter = 5;

console.log(`Before Increment: ${counter}`);
counter++;
console.log(`After Increment: ${counter}`);

console.log(`Before Decrement: ${counter}`);
counter--;
console.log(`After Decrement: ${counter}`);

// 4. Check if a number is greater than or equal to 10
const number = 10;
const isGreaterOrEqual = number >= 10;

console.log(`Is ${number} >= 10? ${isGreaterOrEqual}`);

// 5. Combine boolean expressions
const expr1 = true;
const expr2 = false;

const combinedAnd = expr1 && expr2;
const combinedOr = expr1 || expr2;

console.log(`Combined AND: ${combinedAnd}`);
console.log(`Combined OR: ${combinedOr}`);

// 6. Check if a number is even or odd
const checkNumber = 7;

if (checkNumber % 2 === 0) {
    console.log(`${checkNumber} is Even`);
} else {
    console.log(`${checkNumber} is Odd`);
}

// 7. Use NOT operator
const boolValue = true;
const negatedValue = !boolValue;

console.log(`NOT ${boolValue} is ${negatedValue}`);

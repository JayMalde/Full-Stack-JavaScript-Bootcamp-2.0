7 // integer
2.5 // float
// But in javascript both will be treated as number

"jay"
'jay'
// Both are treated as string

true => 1
false => 0
//Boolean Values (boolean comes from Geroge Boolean)

null
undefined
// Empty values

// All of above are called as Primitive Values/Data Types -  One value

// Arrays & Objects

[1,2,"jay",true,'malde']
 0 1   2     3     4   //Index

{
    fname:jay,
    lname:malde
}

// Non-primitive data types - more than one value

// Variables => Place Holder for value
// 3 Different - var,let const

var x = 25; // Never use var - Something to do with memory
let y = 25;
const x = 25; // constant

let firstname = "jay";
let lastname = "malde";
const mobileno = 9000198765;

console.log('My First Name is', firstname);
console.log(lastname);
console.log(mobileno);

console.log(firstname, lastname, mobileno);

//Template Literal
console.log(`My Current firstname is ${firstname} ${lastname} ${mobileno}`);


// History
// Basic pillar of any programming language
// Values
// Data Types
// Difference Between Primitive & Non-Primitive DataTypes
// Console.log => tow to print something in terminal
// Declaring variables
// Template literals

//Operators

let x = 10;
let y = 10;

// Arithmetic Operators
// +, -, *, /, % => Remainder
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// Comparison Operators
let abc = 100;
let Xyz = 200;

console.log(abc > xyz);
console.log(abc <= xyz);
console.log(abc >= xyz);

// == or ===
let abc1 = 100;
let Xyz1 = '100';
console.log(abc == xyz); // compares values not data types

let abc1 = 100;
let Xyz1 = '100';
console.log(abc === xyz); // compares values & data types

let y;
console.log(y); //Returns undefined

const accno;
accno = "637352835241"; // Gives error as it is not initialized

// Desisions / Conditions

let age=16;

if(age>=18){
    console.log('You are allowed inside the park');
}else{
    console.log('Out of the park');
}

let standard=16;

if(standard == 1){
    console.log('Room One');
}else if(standard == 2){
    console.log('Room Two');
}else if(standard == 3){
    console.log('Room Three');
}else{
    console.log('You are principal');
}

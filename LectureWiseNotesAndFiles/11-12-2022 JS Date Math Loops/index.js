// Conditions

// If Else
// Switch case
// Ternary Operator / Ternary Coniditions

// Rating Mini App

// If Else Conditions
let rating = 5;
if(rating == 5){
    console.log('5 Stars');
}else if(rating == 4){
    console.log('5 Stars');
}else if(rating == 3){
    console.log('5 Stars');
}else if(rating == 2){
    console.log('5 Stars');
}else if(rating == 1){
    console.log('5 Stars');
}

// Switch Case Conditions
let user = 'Admin';
switch (user) {
    case 'Admin':
        console.log('Redirect Him/Her to the Admin Page');
        break;
    case 'Mentor':
        console.log('Redirect Him/Her to the Mentor Dashboard');
        break;
    default:
        console.log('I am a Simple User')
}

//Ternary Operator / Condition
// Condition?true:false;

let raining = true;
raining ? console.log('It is raining'): console.log('It is not raining');

// Array 
let name = ["Jay","Sumit","Santosh","Hitest"];
console.log(name);
console.log(name[3]);

// Object
let bankAccount = {
    firstName:'Jay',
    lastName:'Malde',
    mobileNo:435262425,
    balance:10000
}
console.log(bankAccount);
console.log(bankAccount.balance);

// Date & Math
const now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getTime());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// Math
const PI = Math.PI;
console.log(PI);

console.log(Math.round(PI));
console.log(Math.round(9.4));
console.log(Math.floor(9.5));
console.log(Math.ceil(9.5));

//Min & Max
console.log(Math.min(10,1,2,3,5,7));
console.log(Math.max(10,1,2,3,5,7));

//Random
console.log(Math.random()); // 0-0.9999999
console.log(Math.random() * 10); // Random num from 0-9

console.log(Math.pow(3,3));
console.log(Math.log(2));
console.log(Math.sin(90));

// Loops

// Do-While
let i=0;
do{
    console.log('Value is i',i);
    i++;
}while(i<=5);

// While Loop
let j=0;
while(j<=5){
    console.log('Value is j',j);
    j++;
}

// For Loop
for(let k=0;k<5;k++){
    console.log('Value is k',k);
}

// Table of 5
for(let l=0;l<10;l++){
    console.log('Value is l', 5*l );
}
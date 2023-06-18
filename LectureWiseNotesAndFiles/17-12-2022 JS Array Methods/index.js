let names = ["Hitesh Sir","Anurag Sir","Jay","Sumit","Ninad"];
console.log(names);
console.log(names.length); // Length of Array

console.log(names[2]);
console.log(names[names.length-1]); // Get Last Element

// Change value at a particular location
names[4] = 'Vinay';
console.log(names);

let names = new Array('Name1','Name2'); // A way to declare a Array // Not Recommended

// Push => Insert new value at the End
names.push('VYOM');
console.log(names);

// Slice => get values from start index - end index
console.log(names.slice(1,3));

// Splice => 
let apples = ['Apple','Bada Apple','Chota Apple','Double Apple'];
apples.splice(2,0,'Kharab Apple','Acha Apple'); // start index, remove 
console.log(apples);

// Concatenation
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = [9,10];

console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2,arr3));

// Fill - Homework - Add/fill 'Jay' from 2-4 Index
let arr4 = [1,2,3,4,5,6,7,8,9];
arr4.fill('Jay',2,4);
console.log(arr4);

// include => Find number 7 at index 6
let num = [1,2,3,4,5,6,7,8];
console.log(num.includes(7,6));

// indexOf
let num1 = [1,2,3,4,5,6,'Jay',7,8];
console.log(num1.indexOf('Jay'));

//isArray
let num = [1,2,3,'Jay',4,5,6];
let num1 = 'Jay';
console.log(Array.isArray(num));
console.log(Array.isArray(num1));

// Join
let Arr1 = [1,2,3,4,5,6];
let var1 = Arr1.join(' 1 ');
console.log(Arr1);
console.log(var1);

// Keys
// For Of Loop

// Last Index Of => Gives the index of last
let num = [1,2,3,'Jay',4,5,6,'Jay','Jay'];
console.log(num.indexOf('Jay'));
console.log(num.lastIndexOf('Jay'));

// Map => Perform Operations on each element
let maths = [1,4,9,16,25];
console.log(maths.map(Math.sqrt));

// Pop => Pops/Removes elements from end
console.log(maths.pop());

// Reverse => reverse the array
console.log(maths.reverse());

// Shift => Removes the element from start
console.log(maths.shift());

// Sort => sorts the array
let names = ["Hitesh Sir","Anurag Sir","Jay","Sumit","Ninad"];
console.log(names.sort());
console.log(names.reverse(names.sort()));

// Unshift => Shifts/Adds the array from start
let apples = ['Apple','Bada Apple','Chota Apple','Double Apple'];
apples.unshift('Apple 1','Apple 2');
console.log(apples);

// Convert to Array
let name = 'Jay';
let array1 = name.split('');
console.log(array1);

// For Of Loop
let apples = ['Apple','Bada Apple','Chota Apple','Double Apple'];
let UpperFruit = [];

for(const letter of apples){
    UpperFruit.push(letter.toUpperCase());
}
console.log(UpperFruit);

// Break
for (let i = 0; i <= 5; i++) {
    if(i==3)
        break; // Terminate everything come out of loop
    console.log(i);
}

for (let i = 0; i <= 5; i++) {
    if(i==3)
        continue; // Skip/Omit
    console.log(i);
}

// Homework
// Array Methods in JavaScript and Write a Blog on it
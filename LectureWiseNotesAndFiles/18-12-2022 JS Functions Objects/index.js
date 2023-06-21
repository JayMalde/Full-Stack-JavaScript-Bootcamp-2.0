// Topic: Function
function sum(value1, value2) // Definition of Function
{
    // let num1 = 10;
    // let num2 = 11;
    console.log('Addition of Two numbers are:', value1 + value2);
}

sum(11,33); // Calling of Function
sum(52,61);

// Normal Function
// Function with Parameters

// Function with return Type
function sum(num1, num2) // Definition of Function
{
    let result = num1 + num2;
    return result;
}

let add = sum(10,25);
console.log(add);

// Calculator Homework
function sum(num1, num2)
{
    return num1 + num2;
}
function sub(num1, num2)
{
    return num1 - num2;
}
function mul(num1, num2)
{
    return num1 * num2;
}
function div(num1, num2)
{
    return num1 / num2;
}
function mod(num1, num2)
{
    return num1 % num2;
}
console.log(sum(10,25));
console.log(sub(10,25));
console.log(mul(10,25));
console.log(div(10,25));
console.log(mod(10,25));

// Create a URL
function URL(url, domain){
    let con = 'https://';
    let result = con + url + domain;
    return result;
}
let jayMe = URL('jaymalde','.me');
console.log(jayMe);

// Pass multiple Parameters
function sum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}
let array = [1,2,3,4,5,6];
let sumOfArray = sum(array);
console.log(sumOfArray);

function sum1(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++)
    {
        sum = sum + arguments[i];
    }
    return sum;
}
let sumOfArray1 = sum1(1,2,3,4,5,6);
console.log(sumOfArray1);

let arrowFunction = () => {
    console.log('Arrow Function');
}
arrowFunction();

let userObject = {
    firstName: 'Jay',
    lastName: 'Malde',
    role: 'Student',
    loginCount: 25,
}
console.log(userObject);
console.log(userObject.role);
console.log(userObject['role']); // Not Recommended

//Update value
userObject.loginCount = 100;

console.log(userObject);

// For in Loop
for(let x in userObject)
{
    console.log('Key-'+x+': Value-'+userObject[x]);
}
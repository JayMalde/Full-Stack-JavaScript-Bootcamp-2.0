// HOF & Callback
// Rest & Spread
// Try Catch
// Promises and at the end a small MCQ Games

// Spread
// Sending data ...spread
// Using data ...rest

function sum1(x,y){
    return x+y;
}
let vari = [5,7];
console.log(sum1(...vari)); // Spread

// Rest
function sum2(...args) // Rest operator
{
    let sum=0;
    for(const x of args){
        sum = sum+x;
    }
    return sum;
}
console.log(sum2(1,2,3,4,5,6,7,8,9));

// Try Catch
try{
    let firstName="Jay";
    console.log(firstName + " " + lastName);
}catch(err){
    console.log("Variable name missing");
}

// Throw - Explore

// Different types of Error
// 1. Reference Error
// 2, Syntax Error
// 3. Type Error

// Promise
// Event Loop

// const userOne = () => {
//     console.log("hello one00");
// }
// const userTwo = () => {
//     setTimeout(() => {
//         console.log("Hello I am inside");
//     }, 3000);
//     console.log("hello Two");
// }
// const userThree = () => {
//     console.log("hello Three");
// }

// Promise Example

const loginPage = () => {
    console.log("Login Page");
}

const verify = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Credentials Correct")
        },3000);
    })
}

const redirection = () => {
    console.log("redirect to home page");
};

const callMe = async () => {
    loginPage();
    let response = await verify();
    console.log(response);
    redirection();
}
callMe();
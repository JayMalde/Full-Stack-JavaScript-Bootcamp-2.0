// Var-Global & Let,const - Local
// Hoisting
// Execution Context
// Call Stack
// Closure

// Hoisting
add(1,2);
sub(3,4);

add(var1,var2)
{
    return var1+var2;
}
sub(var1,var2)
{
    return var1-var2;
}

// Lexical Scope/ Scope Chaining/ Closure
// Lexicography - with someone
// Lexical Environment

// Honework
// How normal & anonymous function works in call stack

// HOF - other function as parameter or return a function
// Callback - which can be passed as parameter to other function

// function A(a){} // HOF
// function a(){} // Callback

setTimeout(()=>{
    console.log("Hello Duniya");
},3000);
// Here setTimout is HOF & ()=>{} is callback

// Functional Programming
// So that we dont have to write regular loop and function

// Foreach
const arr = ['num1','num2','num3','num4'];
arr.forEach((ele)=>{
    console.log(ele);
});

// Important map,filter,reduce
const number = [1,2,3,4,5,6,7,8];
const res1 = number.map((num)=>num*3.14);
console.log(res1);

const country = ['India','USA','Canada','UAE','Finland','Greenland','Ireland'];
const res2 = country.filter((c)=>c.includes('land'));
console.log(res2);

const num = [1,2,3,4,5,6,7];
const sum = num.reduce((acc,cur)=>acc+cur,0);
console.log(sum);
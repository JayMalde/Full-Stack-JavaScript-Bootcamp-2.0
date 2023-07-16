// HOF - Higher Order Function or Callback
// function calling a function

// Definition
// Higher order functions are functions which take other function as a parameter or return a function as a value.
// The function passed as parameter is called as callback.

// function a(){
//     console.log('I was calling a function');
// }

// function b(){
//     a();
// }

// b();

// Mini Program
// const callback = (n) => {
//     return n**2;
// }

// function cube(callback,n){
//     return callback(n) * n;
// }

// console.log(cube(callback,2));

// const arr = ["element1","element2","element3","element4","element5","element6",];
// arr.forEach(logElement(element));
// function logElement(element){
//     console.log('Element is'+element);
// }

// ForEach is HOF & ()=>{} is a callback

// arr.forEach((element)=>{
//     console.log('Element is'+element);
// });

// SetTimeout
// setTimeout(()=>{
//     console.log('Timeout Text');
// },3000);

// Old way
// setTimeout(Jay,3000);
// function Jay(){
//     console.log('Timeout Text');
// }

// setInterval(()=>{
//     console.log("`🤩`")
// },1000);

// ForEach
// map
// filter
// reduce
// find
// every
// some
// sort

// Map
// let arr=[1,2,3,4,5,6,7];
// const arrSquare = arr.map((num)=>num*num);
// console.log(arrSquare);

// Filter
// const country = ["India","Pakistan","USA","Japan","South Korea"];
// const filtered=country.filter((val)=>val.includes("an"));
// console.log(filtered);

// Reduce
// const num = [1,2,3,4,5,6,7];
// const sum = num.reduce((acc,cur)=>acc+cur,0);
// console.log(sum);

// Sort
// const country = ["India","Pakistan","USA","Japan","South Korea"];
// const sorted=country.sort();
// const r_sorted=country.sort().reverse();
// console.log(sorted);

// Destructuring and Spread & Rest
// const sci = [2.72, 3.14, 9.81, 37, 100];
// let [e, pi, grav, bodyTemp, boiltemp] = sci;
// console.log(e, pi, grav, bodyTemp, boiltemp);

// Skip a position
// const arr1 = [1,2,3];
// let [var1,,var3] = arr1;
// console.log(var1,var3);

// Rest
// const arr1 = [1,2,3,4,5,6,7];
// let [var1,var2,...rest] = arr1;
// console.log(var1,var2);
// console.log(rest);
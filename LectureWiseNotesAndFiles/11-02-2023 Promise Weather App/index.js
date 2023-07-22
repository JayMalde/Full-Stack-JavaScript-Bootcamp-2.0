// Map, Reduce, Filter
// Promise and Fetch API
// Weather App

// map => iterate over array and perform an action
// filter => iterate over array and filter out the element
// reduce => single value

const numbers = [1,2,3,4,5,6,7,8,9];
const table10 = numbers.map((num)=>num*10);
console.log(table10);

const country = ['India','USA','Canada','UAE','Finland','Greenland','Ireland'];
const res2 = country.filter((c)=>c.includes('land'));
console.log(res2);

// Reduce => accumulator,current, start
const sum = numbers.reduce((acc,cur)=>acc+cur,0);
console.log(sum);

const makePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const arr = ["HTML","CSS","JavaScript"];
        if(arr.length > 0)
            resolve("Completed");
        else
            reject("Incomplete");
    },3000);
});

makePromise.then((result)=>{
    console.log(result);
}).catch((result)=>{
    console.log(result);
});

// Fetch API
const url = "https://restcountries.com/v2/all";
fetch(url).then((response)=>response.json()).then((data)=>console.log(data)).catch((error)=>console.log(error));
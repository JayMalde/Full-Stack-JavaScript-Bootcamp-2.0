// HOF - Higher Order Function or Callback
// function calling a function

// Definition
// Higher order functions are functions which take other function as a parameter or return a function as a value.
// The function passed as parameter is called as callback.

function a(){
    console.log('I was calling a function');
}

function b(){
    a();
}

b();

// Mini Program
const callback = (n) => {
    return n**2;
}

function cube(callback,n){
    return callback(n) * n;
}

console.log(cube(callback,c));
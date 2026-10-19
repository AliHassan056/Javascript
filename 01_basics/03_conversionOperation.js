let age = 33;

console.log(typeof age); // number
console.log(typeof age);



let score = "45";
console.log(typeof score); // String
let converted_score = Number(score);
console.log(typeof converted_score);

let number = "33abc";
let converted_number = Number(number);
console.log(converted_number);
console.log(typeof converted_number) // It will return NaN (Not a Number)


let something = null;
console.log(something);
console.log(typeof something); // object
console.log(Number(something)); // Null will be converted to 0
console.log(typeof Number(something)); // number



let undefine = undefined;
console.log(undefine)
console.log(typeof undefine)
console.log(Number(undefine))
console.log(typeof Number(undefine))


// bool

let boolean_val = true;
console.log(boolean_val);
console.log(typeof boolean_val);
console.log(Number(boolean_val)); // this will return 1 
console.log(typeof Number(boolean_val));


let isLogged = 1 // => true
console.log(Boolean(isLogged))
isLogged = "hassan" // => true
console.log(Boolean(isLogged))
isLogged = 0 // => false   
console.log(Boolean(isLogged))
isLogged = "" // => false
console.log(Boolean(isLogged))


/*

"33" => number
"33abc" => NaN (not a number)
null => 0
true => 1 ; fasle => 0
undefined => NaN

*/
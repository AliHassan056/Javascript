

const myArr = [0, 1, 2, 3, 4, 5, 6, true, "Hassan"];


console.log(myArr[0]); // First element
console.log(myArr[8]); // Last element



// Adds elements to the end of the Array
myArr.push("Moira");
myArr.push("Ben");

console.log(myArr);



// Removes the last element from the Array
myArr.pop();

console.log(myArr);



// Adds an element at the beginning of the Array
myArr.unshift("Ali");

console.log(myArr);



// Removes the first element from the Array
myArr.shift();
myArr.shift();

console.log(myArr);



console.log(myArr.includes(9)); // Checks if 9 exists
console.log(myArr.indexOf(4));  // Returns the index of 4

// Converting an Array into a String Using join()
const newArr = myArr.join();

console.log(newArr);


// Slicing : returns array without modifying original one
console.log("Original Array:", myArr);

const slicedArray = myArr.slice(1, 3);

console.log("Sliced Array:", slicedArray);
console.log("Array After slice():", myArr);


// Slicing : returns array with  modifying original one
const splicedArray = myArr.splice(1, 3);

console.log("Spliced Elements:", splicedArray);
console.log("Array After splice():", myArr);

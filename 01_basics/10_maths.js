console.log(Math)
console.log(Math.abs(-4)) 
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.sqrt(25))
console.log(Math.pow(2 , 3))
console.log(Math.min(12 , 34 ,33 ,122))
console.log(Math.max(12 , 34 ,33 ,122))


// Math.random

const random_number = Math.random()
console.log(random_number)
console.log(Math.floor(random_number))
console.log(Math.floor(random_number  * 10 ))

let max = 10
let min = 5
console.log(Math.floor(random_number * (max-min+1) + min))
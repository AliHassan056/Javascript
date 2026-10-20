let batsmen = ['Babar Azam'  ,'Ben Stokes' , 'Maxwell']
let bowlers = ['Jofra Archer' , 'Jasprit Bumrah' , 'Robinson']

console.log('Batsmans : ' , batsmen)
console.log('Bowlers : ' , bowlers)

// push an array into another array as element

// batsmen .push(bowlers)
// console.log(batsmans)


// concat

const AllCricketers = batsmen.concat(bowlers)
console.log("All Cricketers : " , AllCricketers)

// spread
const AllCricketrs2 = [...batsmen , ...bowlers];
console.log(AllCricketrs2)


const numbers = [1 , [2 , 3 , 4 , [5 , 6  , [7 , 8 , 9,  10]]]]
console.log('Numbers : ' , numbers);
console.log('Flattened  Array : ' , numbers.flat(Infinity))


console.log(Array.isArray('Ali Hassan'))


const set = new Set([10 , 20 , 30])
console.log(typeof set)
console.log(Array.from(set))
console.log(Array.from('Hassan'))


let score1 = 20
let score2 = 40
let score3 = 560
console.log(Array.of(score1 , score2 , score3))
console.log(Array.of('Ali hassan' , true , false , null , 23, 199));

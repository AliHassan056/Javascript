let batsmans = ['Babar Azam'  ,'Ben Stokes' , 'Maxwell']
let bowlers = ['Jofra Archer' , 'Jasprit Bumrah' , 'Robinson']

console.log('Batsmans : ' , batsmans)
console.log('Bowlers : ' , bowlers)

// push an array into another array as element

// batsmans.push(bowlers)
// console.log(batsmans)


// concat

const AllCricketers = batsmans.concat(bowlers)
console.log("All Cricketers : " , AllCricketers)

// spread
const AllCricketrs2 = [...batsmans , ...bowlers];
console.log(AllCricketrs2)


const numbers = [1 , [2 , 3 , 4 , [5 , 6  , [7 , 8 , 9,  10]]]]
console.log('Numbers : ' , numbers);
console.log('Flattened  Array : ' , numbers.flat(Infinity))

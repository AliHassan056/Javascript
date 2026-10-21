const app = {}
app.name = 'SomethingCoool'
app.founder = {
    founder_name : 'Ali Hassan',
    founder_age : 16
}

const obj1 = {0:'a' , 1:'b'}
const obj2 = {2:'c' , 3:'d'}
const obj3=  Object.assign({},obj1 , obj2)
const obj4 = {...obj1 , ...obj2}
console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj4)

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))



console.log(obj1.hasOwnProperty('isLogged'))
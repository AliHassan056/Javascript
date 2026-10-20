

const mySymbol = Symbol('Id')

const user = {
    [mySymbol] : '1',
    "full name": 'Hassan',
    age : 16       ,
    email : 'itshassanx@gmail.com',
    isLoggedIn : true,
    isActive : false,
    last_seen : new Date('2023-10-5').toLocaleDateString()
}

user.greeting = function(){
    console.log('Hello! How are you ?')
}

user.greetingName = function(){
    console.log(`Hello how are you ${this["full name"]}`)
}
console.log(user)
console.log(user.email)
console.log(user['email'])
console.log(user["full name"])
console.log(user[mySymbol])
console.log(typeof user[mySymbol])

user.email = 'i.am.ali.hassan.ah@gmail.com';
Object.freeze(user) // Dont allow changes
user.email = 'itsalihassanx@gmail.com'
console.log(user)
user.greeting()
user.greetingName()
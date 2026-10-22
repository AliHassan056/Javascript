// Global & Local Scope

let name = 'Hassan';

function greet(){
    // Local Scope :
    let age = 16;
    console.log(`Name : ${name}`);
    console.log(`Age : ${age}`)
}

console.log(name)
// console.log(age) => This will raise error becasue it is declared inside the function
greet()



// Nested Scope 

function one(){
    let username = 'Hassan';

    function two(){
        let age = 16;
        console.log(`Age : ${age}`)
        console.log(`Username : ${username}`)
    }

    // console.log(`Age : ${age}`) This will raise error

    two()
}

one()
function sayMyName(name){
    console.log(`Your name is : ${name}`)
}

sayMyName('Zahid')
sayMyName('Mushtaq')
sayMyName('Zohaib')


function addTwoNumbers(number1 , number2){
    console.log(`First entered number is : ${number1}`)
    console.log(`First entered number is : ${number2}`)
    let result = number1 + number2
    return result
}

result = addTwoNumbers(12 , 15)
console.log(`The Output of addTwoNumbers is :  ${result}`)

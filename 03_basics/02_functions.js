function CalculateCartPrice(...price){
    return price
}

let price = CalculateCartPrice(10 , 20 , 30 , 40 , 50)


function getUserNames(admin , manager , ...users){
    console.log(admin)
    console.log(manager)
    console.log(users)
}

getUserNames('Ali Hassan' , 'Ahmed Faraz' , 'Zahid' , 'Mehmood' , 'Riza' , 'Rizwan' , 'Elips' , 'Newton' , 'Issac' , 'Noman')


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}. Password is ${anyobject.password}`)
}


handleObject({
    username:'Ali Hassan',
    password: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
})


function LoginUser(name = 'Guest'){
    if (name=='Guest'){
        return 'You are in Guest Mode';
    }

    return `You aren't in guest mode. Your name is ${name}`;
    
    }


console.log(LoginUser())
console.log(LoginUser('M.Shahbaz'))
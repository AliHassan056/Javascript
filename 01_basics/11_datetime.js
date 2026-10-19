let date = new Date()
// console.log(date)
// console.log(date.toString())
// console.log(date.toLocaleDateString())
// console.log(date.toDateString())
// console.log(date.toISOString())


let specific_date = new Date(2026 , 9 , 19, 6 , 10)
console.log(specific_date.toLocaleString())

let specific_date2 = new Date('2026-10-19')
let specific_date3 = new Date('01-15-2026')
console.log(specific_date2.toDateString())
console.log(specific_date3.toDateString())



console.log(new Date('2023-03-15').toLocaleString('default',  {
    weekday : "narrow",
    day :  "2-digit",
    year :"2-digit"
}))

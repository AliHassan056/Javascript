const name = 'hassan';
const age = 16;
const benchmark = new String('Benchmark'); // This returns key value pair for each letter of the word

console.log(benchmark[0]) // => this will return B
console.log(benchmark[1]) // => this will return +
console.log(benchmark.length)
console.log(benchmark.toLowerCase())
console.log(benchmark.toUpperCase())
console.log(benchmark.charAt(2))
console.log(benchmark.indexOf('n'))
const substring = benchmark.substring(1 , 4)
const negsubstring = benchmark.slice(-8 , 4)
console.log(substring)
console.log(negsubstring)

console.log(`My name is ${name}. I am ${age} years old.`);

let new_name = '     ali hassan        '
console.log(new_name)
console.log(new_name.trim())


const url = 'https://ali-hassan.dev'
console.log(url)
console.log(url.replace('-' , ''))
console.log(url.includes('hassan'))

const sentence = 'The quick brown fox jumps over the lazy dog.'
const words = sentence.split(' ')
console.log(words[0])
console.log(words[1])

console.log(new_name.trim().repeat(3))
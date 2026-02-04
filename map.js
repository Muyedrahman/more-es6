const numbers = [4,8,2,3,5];

// const doubled = []
// for (const num  of numbers) {
//     const result = num * 2;
//     doubled.push(result);
// }


// const doubledIt = x => x * 2;
// const doubled = numbers.map(doubledIt)

const doubled = numbers.map(x => x * 2);

const friends = [ 'Zaved' ,'Pavel', 'Nobelt', 'kodbelt' ];
const nameLengths = friends.map(name => name.length);
const firstLetters = friends.map(name => name[0].toLocaleLowerCase())

console.log(firstLetters)
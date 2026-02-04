// var let const
const tax = 5000;
let eta = 5;
eta = 2;

const student = {name: 'nayeem', marks: 50}
const friends =[ 'abul', 'babul', 'cabuk']

// default parameter
function add (num1, num2=0){
    
}

// template string
const dynamicText = `My Tac: ${tax} and marks ${student.marks*1.2} has friend: ${friends[1]}`

// arrow function
const add2 = (num1, num2 = 0) => num1 + num2;
// spreac 


// destructuring
// const {marks, age=0} = student;
// console.log(marks, age)

// const [firstFriend] = friends;
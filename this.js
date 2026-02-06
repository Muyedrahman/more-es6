class Vehicle{
    #tin;
    constructor(type,brand ,price){
        this.type = type;
        this.brand = brand;
        this.price = price;
        this.#tin = '12435Q2SASOG'
    }
    getThis(){
        console.log(this)
    }
    getTin(){
        return this.#tin;
    }
    getPrice (){
        return this.price
    }
}
const car1 = new Vehicle('car','Honda',500000);
const car2 = new Vehicle("car", "Toyota", 400000);
car1.getThis();
console.log(car1)
// car2.getPrice();

console.log(car2.getPrice())
console.log(car1.getPrice())

const student = {
    name: 'Rahul dravid',
    score: 10000,
    getScore: function(){
        console.log(this)
    },
    getScoreArrow: ()=>{
        console.log(this)
    }
}
student.getScore();
student.getScoreArrow();
console.log('ultimate thix', this)
// 11
const person = {
  name: "Muyeed",
  sayName() {
    console.log(this.name);
  },
};

person.sayName();

const fn = person.sayName;
fn();

// 12
const user = {
  name: "Rahul",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

user.greet();

/**
 * class --> template
 * properties
 * method (a special type of function insode a class without hte function keyword)
 * object
 * 
 **/ 

class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh'
        console.log('calling the constructor method', name)
    }
    goal(){
        console.log('score a goal')
    }
    getTeamName(){
        return 'Borsa'
    }

}
const player1 = new Player('Tom Brady', 35)
const player2 = new Player('O Shanto', 25)
console.log(player1);
console.log(player2);
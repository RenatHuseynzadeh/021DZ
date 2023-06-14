
// 1 задание
class user {
    constructor(){
       this.name = "Renat"
       this.age = 11
    }
}

console.log(user);


// 2 задание
class stoto {
    constructor(name, id){
       this.name = name
       this.age = id
    }
}

let user3 = new stoto("Renatik", 11)

console.log(user3);


// 3 задание
let user1 = new user()
let user2 = new user()

console.log(user1);
console.log(user2);


// 4 задание
class stotot {
    constructor(name, id){
       this.name = name
       this.age = id
    }

    tolk() {
        console.log("I can tolk");
    }
} 



let a = new stotot("renat", 10)
a.tolk()
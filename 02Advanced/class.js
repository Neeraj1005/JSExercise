class User {
    constructor(firstname, lastname, credit) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }
    
    getFullName(){
        // let fullname = `${this.firstname} ${this.lastname} is my full name`;
        // return fullname;
        return `${this.firstname} ${this.lastname} is my full name`;
    }
    editName(newname){
        const myname = newname.split(" ");
        this.firstname = myname[0];
        this.lastname = myname[1];
        //middle name ?
    }
}
class Teacher extends User {
    constructor (firstname,lastname,credit,subject){
        super(firstname,lastname,credit);
        this.subject = subject;
    }
    getFullName(){
        let fullname = `${this.firstname} ${this.lastname} is my full name and I teach ${this.subject}`;
        return fullname;
    }
    favDrink(name){
        console.log(`My fav drink is ${name}`);
    }
}
const john = new Teacher("John", "Anderson", 34,"python");
//const john = new User("John", "Anderson", 34);
// console.log(john);
console.log(john.getFullName());
john.editName("Johny Anderson");
console.log(john.getFullName());
john.favDrink("Water");
// const sammy = new User();
// console.log(sammy);


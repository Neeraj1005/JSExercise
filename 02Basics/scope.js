// let and var keyword difference

/*
let iAmGlobal = 'someValue'

if (true) {
    let iamLocal = 'someMoreValue' //change let -> var and run and check
    iAmGlobal = 'superman'
    console.log(iAmGlobal);
    console.log(iamLocal);
}
console.log(iamLocal);
console.log(iAmGlobal);
*/

//Kings problem
//let king = 'John'
if (true) {
    // let king = 'Sam'

    if (true){
        let king = 'Ram'
        console.log(king);
    }
}
if (true) {
    console.log("I am second part :" + king);
}
/* //SImple function 
let myFirstNameFunction = function(fName, lName){
    console.log("Welcome to LCO");
    console.log(`Welcome ${fName} ${lName}`);
}
myFirstNameFunction('Neeraj','Singh');*/

/*//Addition using function

let addNum = function(num1, num2){
    let addition = num1 + num2
    return addition
}
console.log(`THe addition is equal to ${addNum(4,6)}`);*/
/*//Multiple simple using return line of code is short 
let mulNum = function(num1, num2){
    return num1 * num2
}
console.log(`THe addition is equal to ${mulNum(4,6)}`);*/

//For default parameter set value like this
let mulNum = function(name = 'undefined', count = 0){
    return 'Hello ' + name + ' count is ' + count
}
console.log(mulNum());

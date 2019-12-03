let jsCourse = {
    name: 'NodeJS',
    price: 100,
    description: 'New JS Node JS'
}
//console.log(`Hey there is new course ${jsCourse.name} by Nick at a price ${jsCourse.price} and has a ${jsCourse.description}`);

let jsCourseOne = {
    name: 'VueJS',
    price: 50,
    description: 'New JS VueJS'
}

//function
let changePrice = function(myobject){
    return {
        formatOne: `Price of this course is ${myobject.price + 10}`,
        formatTwo: `Price of this course is ${myobject.price + 20}`
    }
}

let addOne = changePrice(jsCourse)
console.log(addOne.formatTwo)
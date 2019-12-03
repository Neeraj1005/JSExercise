// const sayHello = function(name){
//     return "Hey there, " + name + "!"
// }
// console.log(sayHello('Nick'));

const sayHello = (name)=> `Hey ${name}`
console.log(sayHello('nick'));



const todos = [{
    title: 'Buy Bread',
    isDone: true
},{
    title: 'Go to Market',
    isDone: true
},{
    title: 'Record vid',
    isDone: true
},{
    title: 'New Task4',
    isDone: false
},{
    title: 'New Task5',
    isDone: false
},{
    title: 'New Task6',
    isDone: false
}
]

//simpler loc
// const thingsDone = todos.filter((todo)=> todo.isDone === true)
//console.log(thingsDone);

//long loc
//  const thingsDone = todos.filter((todo)=> {
//      return todo.isDone === true
//  })

//Assingment
const thingsDone = todos.filter((todo)=> todo.isDone === false)
thingsDone.filter((checkTask)=> console.log(checkTask.title))

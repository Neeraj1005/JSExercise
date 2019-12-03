const Todos = []
Todos.unshift('Five')
Todos.unshift('Four')
Todos.unshift('Three')
Todos.unshift('Two')
Todos.unshift('One')

for(let index=0; index < Todos.length; index++){
    console.log(`Start count ${Todos[index]}`);
}
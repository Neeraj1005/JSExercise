/* //create next node
// var h = document.createElement('h6')//h6 here tag header
// var myValue = document.createTextNode('Hello Todo!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h);
*/
/* //while example 
var val = 5;

while (val > 0) {
    console.log(val);
    val--;    
} */

var ul = document.getElementById('list');
var li;

//for add button
var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);
//for remove button
var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem)

//Reset
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetItem)
//Reset function
function resetItem(){      
        ul.remove();        
}

//function for addItem
function addItem(){
    var input =  document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)
    
    if (item === '') {
        return false;
        
        let p = document.getElementById('pa')
        let val = 'please enter node'
        let label = document.createTextNode(val)
        p.appendChild(label)

    } else{
        //create li
        li = document.createElement('li');
        
        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
        
        //create label
        var label = document.createElement('label');
        label.setAttribute('for','item')//optional
        
        //add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout(() => {
            li.className = 'visual';
        }, 2);
        input.value = '';
    }
}


//function for remove Item
function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while ( li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }        
    }
}
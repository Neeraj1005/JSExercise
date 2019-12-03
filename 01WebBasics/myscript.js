// alert('this is web alert')
//documentURI will return onl url in console
// console.log(document.documentURI)
// const myElement = document.querySelectorAll('.classone')//like css
// console.log(myElement[0]);

//const myPElements = document.querySelector('p')
//myPElements.textContent = 'I am changed using JS'

const myPElements = document.querySelectorAll('p')
myPElements.forEach(function(p){
    p.textContent = 'I am changed using JS'
})


const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'
document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click', (event) => {
    event.target.textContent = 'pause'
})

//track input

document.querySelector('#myform').addEventListener('input', (event)=>{
    console.log(event.target.value);
})
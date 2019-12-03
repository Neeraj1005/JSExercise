function myValidation(){
     let myValue = document.getElementById('myform').value;

    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        console.log("Not a valid input");
        myValue.value = "not iokk"
    } else {
        console.log("this input is ok");
    }
}

// if(isNaN(myValue) || myValue < 1 || myValue > 20){
//     let valid = document.querySelector('#myform')
//     valid.textContent = 'not a valid input'
// } else {
//     let valid = document.querySelector('#myform')
//     valid.textContent = 'this input is ok'
// }


//form validation
document.querySelector('.myform').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = '';
    event.target.realname.value = '';

})
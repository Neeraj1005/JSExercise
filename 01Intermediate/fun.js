let Grade = function(marks,total){
    
    var per = (marks * 100)/total

    myGrade = ''
    
    if (per >= 90){
        myGrade = 'A'
    }
    else if(per >=70 || per < 90){
        myGrade = 'B'
    }
    else if(per >=60 || per < 70){
        myGrade = 'C'
    }
    else{
        myGrade = 'F'
    }

    return `your grade is: ${myGrade} and you've got ${per} percentage`
}

let Result = Grade(373,500)
console.log(Result)
let myTodos= {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        //console.log(this);
        this.meetings = this.meetings + num
    },

    summary: function(){
        return `you have ${this.meetings} meetings today!`
    }
}
/*
let myTodos1= {
    day: 'Tuseday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(){
        console.log(this);
    }
}*/
myTodos.addMeeting(4)
console.log(myTodos.summary());
//myTodos1.addMeeting()


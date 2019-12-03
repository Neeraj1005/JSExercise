const cameras = {
    price: 600,
    weight: 2000,
    // myDes: function (){
    //     return `Price of camera is ${this.price}`
    // }
    myDes(){//another way to write function
            return `Price of camera is ${this.price}`
        }
}

console.log(cameras.myDes())
const user ={
    username : "hitesh",
    price: 999,

    welcomwMessage: function() {

        console.log(`${this.username} ,welcome to website`);
        console.log(this);
        

    }
       
}

// user.welcomwMessage()
// user.username = 'sam'
// user.welcomwMessage()


// console.log(this);


// function chai() {
//     let username = "hitesh"
//     console.log(this.username);
    
    
// }


// chai()



// const chai = function () {
//     let username = "manish"
//     console.log(this.username);

    
// // }
// const chai =  () => {
//     let username = "manish"
//     console.log(this);

    
// }

// chai()

// 

 //explecit return main return lagana padta hai
// const addTwo = (num1,num2) => {
//     return num1 + num2

// }


//implecit return main return nahi lagana padta hai 


// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)


const addTwo = (num1,num2) => ({username: "hitesh"})

console.log(addTwo(3,4))



// const myArray  =[2,5,2,4,6]

// myArray.forEach()
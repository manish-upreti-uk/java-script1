


function sayMyname() {

    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}


// sayMyname()



// function addTwoNumbers(num1,num2) {
//    console.log( num1+ num2);
 
// }



function addTwoNumbers(num1,num2) {
//    let result = num1 + num2;
//    return result;
   return num1+num2
 
}


const result = addTwoNumbers(12,24)
// console.log("Result:",result);

function loginUserMessage(username="sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged In`
}

// console.log(loginUserMessage("manish"))
// console.log(loginUserMessage("kalu"))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500));


const user ={
    username:"hitesh",
    price:199

}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"sam",
    price: 122
})

const myNewArray = [200,400,600,566]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,54,433]));


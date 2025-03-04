


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
console.log(loginUserMessage("kalu"))





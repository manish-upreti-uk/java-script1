const userEmail = []

if (userEmail){
    console.log("got user email");

    
}else {
    console.log("donts haver usern email");
    
}



// falsy value 

// false, 0, -0 ,BigINt 0n, "", null, undefined, nan

// all value are truthy

  // "0", "false", " ", [], {}, function(){}



// if (userEmail.length ===0){
//     console.log("array are empty");
    
// }

// const obj = {}

// if (Object.keys(obj).length ===0)
// {
//     console.log("object is empty");
    
// }


// false == 0 are true

// false == "" are true 

// 0 == '' are true




// Nullish Coalescing OPerater (??): null undefined

let val ;
// val1 = 5 ?? 10
// val1 = null  ?? 10

// val1 = undefined ?? 15 

val1 = null ?? 10 ?? 20

console.log(val1);



// TERNIARY     Operator

// condition ? true : false

const iceTeaPrice =100

iceTeaPrice>=80 ? console.log("less than 80"): console.log("more than 80");


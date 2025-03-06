//if

// const isUserloggedIn = true

// const temperature =41

// if(temperature<50){
//     console.log("less than 50");
    

// }
// console.log("temperature is grater than 50");


// < , >, <=, >= ,==, != , ===, !==



// const score = 200

// if (score> 100){
//     const power ="fly"
//     console.log(`User power:${power}`);
    

// }
// console.log(`User power:${power}`);


// const balance = 499

// if(balance>500) console.log("test"),

// console.log("test2");


// if (balance < 500) {
//     console.log("less than");
    
// }else if (balance<750){
//     console.log("less than 750");
// }else if (balance<1000){
//     console.log("less than 1000");
// }else{
//     console.log("grater than  1000");
// }





const isUserloggedIn = true 
const debitcard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (isUserloggedIn && debitcard) {
    console.log("allow to buy cource ");
    
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in ");
    
}



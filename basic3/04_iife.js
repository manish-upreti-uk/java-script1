// Immediately Invocked Function Expression

(function chai (){
    //namwe iife
    console.log(`DB CONNECTED`);
    
}) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('manish')
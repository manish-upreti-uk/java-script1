let myDate = new Date()
console.log(myDate.toLocaleDateString());


console.log(typeof myDate);


// let myCreteDate = new Date(2027,11,23)
// let myCreteDate = new Date(2027,11,23,5,3)
// let myCreteDate = new Date("2023-01-14")
 let myCreteDate = new Date("1-14-2023")
// console.log(myCreteDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log( myTimeStamp);
// console.log(myCreteDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

// let con=`${newDate.getDay()}and the time is `
// console.log(con);

newDate.toLocaleString('default',{
weekday: "long",
})

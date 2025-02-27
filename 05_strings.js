// const name = "hitesh"
// const reCount =50

// console.log(name + reCount + "value");


// console.log(`hello my name is ${name} and my repo count is ${reCount}`);


 const gameName  = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('e'));



const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   hitesh     " 
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitest.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hoioi'))

console.log(gameName.split('-'));




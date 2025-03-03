// singleton  from constrater

// Object.create

// object literals


const mySym = Symbol("key1") 

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh chaudhary",
    [mySym]:"mykey1",
    age: 19,
    location: "delhi",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]


}

// console.log(JsUser.name)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])



// JsUser.email= "manish@chat.com"
// Object.freeze(JsUser)
// JsUser.email= "manish@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
    
}

JsUser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

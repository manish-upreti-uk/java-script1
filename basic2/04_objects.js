// const tinderUser = new Object()

const tinderUser ={}

 tinderUser.id = "123abc"
 tinderUser.name ="sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "somename.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}


// console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"c",6:"d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)


const obj3 = {...obj1,...obj2}
// console.log(obj3); 


//database main se value

const users = [
    {
       id:1,
       email: "h@gmail.com", 
    },
    {
        id:2,
        email: "h@gmail.com", 
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const cource = {
    courcename: "js in hindi",
    price: "999",
    courceInstructor: "hitesh"
}

//  cource.courceInstructor


// const {courceInstructor} = cource
const {courceInstructor: instructer} = cource

console.log(instructer);


//  {
   
//     "name": "hitesh",
//     "courcename": "js in hindi",
//     "price": "free"
//  }

 
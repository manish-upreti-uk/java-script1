// const coding = ["js","ruby","java","python","cpp"]


// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
    

// })

// console.log(values);
// for each value return nahi karta hai



const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//    return  num >4
// })

// const newNums = []

// myNums.forEach((num) =>{
//     if (num>4) {
//         newNums.push(num)
        
//     }
// })



// console.log(newNums);



const books =[
    {title:'Book One',genre:'Fiction',publish:1981,edition:2008},
    {title:'Book two',genre:'history',publish:1984,edition:2004},
    {title:'Book three',genre:'geography',publish:1681,edition:2084},
    {title:'Book four',genre:'non.fiction',publish:1881,edition:2604},
    {title:'Book five',genre:'science',publish:1971,edition:2004},
    {title:'Book six',genre:'Fiction',publish:1989,edition:2006},
    {title:'Book seven',genre:'history',publish:2041,edition:2007},
    {title:'Book eight',genre:'economix',publish:1081,edition:2002},
    {title:'Book nine',genre:'Fiction',publish:1941,edition:2005},
];

// const userBooks = books.filter( (bk) =>bk.genre==='history') 

let userBooks = books.filter( (bk) => { 
    return bk.publish>= 1980 && bk.genre=== "history"
    
})
console.log(userBooks);

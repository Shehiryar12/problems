//  Write a JavaScript for loop that prints the current time (in HH:MM:SS format) every 
// second for 5 seconds.

// 💡 Hint:
// Use setTimeout inside a for loop to delay execution.
 
 
// const time=new Date;
// console.log(time)

const now=new Date()
const time=now.toTimeString().slice("0,8")
console.log(time)

// for(let i=0;i<time; i++ ){
//      console.log(time)
// }
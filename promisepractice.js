
// //Write a Promise in JavaScript that resolves with the message "Success!" after 2 seconds, and logs the message to the console.

// const available=true;
//  const toss=new Promise((resolve,reject)=>{

//       if(available){
//            resolve("success")
//       }
//       else{
//            reject("no success")
//       }
//  }
// )
// //console.log('@@@ NAME',toss)
// toss.then(output=>console.log(output))
// .catch(output=>console.log(output))


// ---------------------------------------------------------------------------------


/* Write a Promise that simulates a coin toss:

  After 1 second, it randomly resolves with "Heads" or rejects with "Tails".

 Use .then() to log the result if it’s heads, and .catch() to log if it’s tails.
*/ 

// const cricket=true;
// const toss=new Promise((resolve,reject)=>{

//     if(cricket){
//          resolve("success"),2000
//     }
//     else{
//         reject("false")
//     }
// }
// );
// toss.then=(output=>console.log('nj',output))
// toss.catch=(output=>console.log(output))



//-----------------------------------------------------------------------------------

// Create a Promise that checks if a given number is positive or negative after 1.5 seconds:

// If positive, resolve with "Number is positive."

// If negative or zero, reject with "Number is not positive."

// Handle the result using .then() and .catch().

// const positive=true;
// const promise =new Promise((resolve,reject)=>{
// if(positive){
//      resolve("Number is positive"),15000
// }
// else{
//     reject("Number is not positive")
// }
// })
// promise.then=(output=>console.log(output)).catch=(output=>console.log(output))

//-------------------------------------------------------------------------------------------------------------------------

// const cricket = true;

// const toss = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (cricket) {
//       resolve("success");
//     } else {
//       reject("false");
//     }
//   }, 9000); // 2 second delay
// });

// toss.then(output => console.log('nj', output))
//     .catch(error => console.log(error));

//------------------------------------------------------------------------------------------------------------------------------------

// const cricket = true;

// const toss = new Promise((resolve, reject) => {
//   if (cricket) {
//     resolve("success")
//   } else {
//     reject("false");
//   }
// });

// toss.then(output => console.log('nj', output))
//     .catch(error => console.log(error));



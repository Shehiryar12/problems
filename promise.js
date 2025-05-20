 /*
 
 let name=new Promise((resolve,reject)=>{

  let number=4;
  if(number%2===0) resolve("the number is even");
  else(reject("the number is add"))
 });

 name.then((print)=>console.log(print))
 name.catch((notprint)=>console.log(notprint))


 // resolve tab chalta hai jab ap ka program successfully run ho jaye.
 // reject tab chalta hai jab ap ka program successfully run na ho

 */

 const count=true;
 const a=new Promise((resolve,reject)=>{
  if(count){
     resolve("counting is complete")
  }
  else{
    reject("counting is not complete")
  }
 }
)
a.then((print)=>console.log(print))
a.catch((notprint)=>console.log(notprint))
// print only first object
//  const arr=[
//     {
//         name:"shehiryar",
//         age:22,
//         rollno:1
//     },
//     {
//        name:"ahmed",
//        age:22,
//        rollno:1 
//     },
//     {
//        name:"ali",
//        age:22,
//        rollno:1
//     }
//  ]
//  const first=arr.map((item,index)=>{
//     if(index===0){
//          console.log(item)
//     }
//  })

//--------------------------------------------------------------------------------------------------

//print al item name object
//  const arr=[
//     {
//         name:"shehiryar",
//         age:15,
//         rollno:1
//     },
//     {
//        name:"ali",
//        age:30,
//        rollno:2 
//     },
//     {
//        name:"ahmed",
//        age:20,
//        rollno:2
//     }
//  ]
  
//  const arrtwo=arr.map((item)=>console.log(item.name))

//--------------------------------------------------------------------------------------------------

//print object 3 name
 const arr=[
    {
        name:"shehiryar",
        age:15,
        rollno:1
    },
    {
       name:"ali",
       age:30,
       rollno:2 
    },
    {
       name:"ahmed",
       age:20,
       rollno:2
    }
 ]
 const arrtwo=arr.map((item,index)=>{
   {
      if(index===2){
         console.log(item.name)
      }
   }
 })

 //------------------------------------------------------------------------------------------------------
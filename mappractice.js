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
//  const arrtwo=arr.map((item,index)=>{
//    {
//       if(index===2){
//          console.log(item.name)
//       }
//    }
//  })

 //------------------------------------------------------------------------------------------------------

//  const number=[10,20,30,40,50,60,70,80,90,100]      
//  const maps=number.map(item=>item*2)                //it create new array by applying a function on each array element
//  console.log(maps)

// -----------------------------------------------------------------------------------------------------

// const player=["babar","azam","muhammad","rizwan","shaheen",'afridi']
// const more=player.map(item=>item.toUpperCase())
// console.log(more)

// ---------------------------------------------------------------------------------------------------

// const user= [

//   {name: 'ali', age: 25,class: '1year'},             //it print only object
// ]

// const card=user.map(item=>item.name)
// console.log(card)

// ---------------------------------------------------------------------------------------------------

// const student=[
//    {name:"Ali", class:10, age:22 },
//    {name:"Azhar", class:5, age:13},
//    {name:"huzaifa", class:7, age:16}
// ];

// const more=student.map((item,index)=>{
//    if(index===0){
//       // console.log(item.class)      //it print item class.
//       // console.log(item.name)       //it print first name.
//       // console.log(item.age)       //it print age. 
//       console.log(item)             //it print first object.

//    }

// })

// --------------------------------------------------------------------------------------------------

// const CNIC=[
//    {name:"Ali", class:10, age:22 },
//    {name:"Azhar", class:5, age:13},
//    {name:"huzaifa", class:7, age:16}
//  ];

// const two=CNIC.map(item=>console.log(item.name)) 
// const three=CNIC.map(item=>console.log(item.class));

// --------------------------------------------------------------------------------------------------
// Use .map() to loop through the array and return a string for each student.

// const students = [
//   { id: "Aman", score: 45 },
//   { id: "Neha", score: 78 },
//   { id: "Raj", score: 62 },
//   { id: "Priya", score: 90 }
// ];

// const more=students.map((item)=>{
//    return item.id +" " + "has scored" + " " +item.score
// })
// console.log(more)

// --------------------------------------------------------------------------------------------------


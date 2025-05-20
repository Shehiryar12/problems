//  const arr=[
//     {
//      name:"ali",
//      age:25,
//      roll:2,
//      price:3000
//  },
//   {
//      name:"ahmed",
//      age:27,
//      roll:1,
//     price:2000

//  },
//   {
//      name:"haroon",
//      age:3,
//      roll:1000,
//      price:2000

//  }
// ]

// added items:-
// const num=arr.map((item)=>console.log(item.price*item.roll))
// const val=arr.map((item)=>console.log(item.price + item.roll))


// only print one line object:-

// const num=arr.map((item)=>console.log(item.age*2))
// console.log(item)
// {
//       if(index===2){
//         console.log(item.age*2)
//       }
// },
    




//print name,age and roll using map function

// const num=arr.map((item)=>console.log(item))        //print all objects
// const num=arr.map((item)=>console.log(item.name))   //print all names
// const num=arr.map((item)=>console.log(item.age))    //print all ages
//const num=arr.map((item)=>console.log(item.roll))      //print all roll


// const num=arr.map((item,index)=>
// {
//     if(index===1){
//             console.log(item.name)
//     }
// }

    
// console.log(

const arr=[

    {
     name:"razim",
     rollno:5,
     age:22
    },
    {
     name:"adeel",
     rollno:1,
     age:30   
    },
    {
        name:"danish",
        rollno:9,
        age:18
    },
]
// const data=arr.map((item)=>console.log(item))         //it print all object using map function

// const data=arr.map((item,index)=>
// {
//     if(index===2){
//       console.log(item)      
// }
// }
// )
// //it print item 2 object using map function with if statement


//it print all names of object
// const name=arr.map((item)=>console.log(item.name))

//it print all age of object
// const age=arr.map((item)=>console.log(item.age))

//print only first object
 const data=arr.map((item,index)=>{
    if(index===0){
        console.log(item.name)
    }
 })

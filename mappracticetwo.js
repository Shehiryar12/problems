// //it print only first object
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
//        if(index===0){
//                console.log(item)
//        }
//  })

// //---------------------------------------------------------------------------------------------------------
// //print all item name object
//  const arrtwo=[
//     {
//         name:"haroon",
//         age:32,
//         rollno:5
//     },
//     {
//        name:"waleed",
//        age:29,
//        rollno:3 
//     },
//     {
//        name:"razim",
//        age:27,
//        rollno:10
//     }
//  ]
//  const second=arrtwo.map((item)=>console.log(item.name))

//---------------------------------------------------------------------------------------------------------

//it print item.age and mutiply it with anynumber
//

const arrthree=[
    {
        name:"imtiaz",
        age:15,
        rollno:5
    },
    {
       name:"sarmad",
       age:10,
       rollno:1 
    },
    {
       name:"razim",
       age:27,
       rollno:10
    }
 ]

//const number=arrthree.map((items)=>console.log(items.age*5))
// const number=arrthree.map((item)=>console.log(item.age+item.rollno))

const val=arrthree.map((item,index)=>{
    {
        if(index===2){
               console.log(item.rollno)
        }
    }
})

//------------------------------------------------------------------------------------------------------------------
 const idcard=[
    {
        name:"Ali",
        rollno:3,
        price:3000
    },
     {
        name:"ahmed",
        rollno:5,
        price:5000
    },
     {
        name:"haroon",
        rollno:3,
        price:7000
    }

 ]
// const num=idcard.map((item)=>console.log(item.rollno*item.price))

const num=idcard.map((item,index)=>
    {

   if(index===0){
        console.log(item.rollno + item.price)
   }

})

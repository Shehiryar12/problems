 //Async is a keyword, you donot need to use resolve and reject inside an async

 async function test(value){

    if(value>0){
        return "i am fine";
    }
    else{
        return "i am not fine"
    }

 }
 
test(5).then(console.log).catch(console.log) 

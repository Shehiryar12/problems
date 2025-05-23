// the js evaluate a expression and execute block of code based on matching each case
//syntax:-

//  switch (expression){
//     case value:
//     case value:
//     case value:

// default;    
//  }

//Switch statment is evaluated once.
//The value of expression compare with the value of each case.
//if there is a match the associate block of code is executed
//if there is no match, the deafult code of block executed

// NOTE: code block to be execute if expression value match
// code to be executed if no value match

// let player=4;

// switch (player) {
//     case 1:
//            player="babar azam";
//         break;
//     case 2:
//            player="kohli";
//         break;  
//     case 3:
//            player="rizwan";
//         break; 
//     case 4:
//            player="shaheen"; 
//         break;  
//     case 5:
//            player="haris";        

//     default:
//            player="nawaz"
          
//         break;
// }

// console.log(player)

//-------------------------------------------------------------------------------------------------------------

// problem:-

// let grade="c";
// let result;

// switch (grade) {
//     case 'A': 
//         result= 'grade of student ali';
//         break;

//     case 'b': 
//         result= 'grade of student ahmed';
//         break;
    
//     case 'c':    
//         result='grade of student faizan';
//         break;
    
//     case 'd':
//         result='grade of student junaid'; 
//         break;
    
//     case 'e':
//         result='grade of student raza';
//         break;

//     default:
//        result="results of student";   
//        break;  
// }
// console.log(result);


//---------------------------------------------------------------------------------------------------------------------------------

//problems:-

// Write a JavaScript program using a switch statement that takes a number from 1 to 3 and prints the corresponding
//  day of the week (1 = Monday, 2 = Tuesday, 3 = Wednesday).
// If the number is not between 1 and 3, print "Invalid day"\

// let day=1;
// let result;
// switch (day) {
//     case 1:
       
//     result="Monday";
//         break;
//     case 2:
        
//     result="Tuesday";
//         break;    
//     case 3:
        
//     result="Wednesday";   
//     break;    

//     default:
//     result="invalid day";    
//         break;
// }

// console.log(result);

// --------------------------------------------------------------------------------------------------------------------------

// Create a simple calculator using a switch statement. The program should take two numbers and an operator (+, -, *, /) 
// and print the result.

// let result 
// let firstNumber = 2
// let secondNumber = 5
// let operator = '*'


// switch (operator) {

//     case  '+':   
//     result = firstNumber + secondNumber
    
//         break;
//     case  '/':   
//     result = firstNumber / secondNumber
    
//         break;
//     case  '-':   
//     result = firstNumber - secondNumber
    
//         break;
//     case  '*':   
//     result = firstNumber * secondNumber
    
//         break;

//     default:
//         break;
// }

// console.log(result)


// Create a JavaScript program using a switch statement that takes a month number (1–12) and prints the number of days in that month.
//  Handle February as "28 or 29 days".

let month=3;
let days;
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days=31;
      break;

    case 2:
    days="28 or 29 days"
        break;

    case 4: case 6: case 9: case 10: case 11:
    days=30
        break;    
        
    case 10:
    days=30     
        break;   

    default:
        break;
}
console.log(days)


/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
 
// if (num1 >num2){
//     var result = num1 * 2;
// }
// else{
//     var result = sum;
// }
// console.log(result);

let result = (num1 > num2) ? num1 * 2 : sum;
console.log(result);
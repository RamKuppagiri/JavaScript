/**
 * 
 * create an array which is having all the months in it, and should be in order.
 * 1)print length of the array
 * 2)do pop twice
 * 3)push november
 * 4) remove the first element of the array
 * 5) insert january to the beginning of array
 * 6) print from february to october using slice.//
 * //** */

const month = ["January","Febrauary","March","April","May","June","July","August","September","October","November","December"];

let size = month.length; //length of array //
console.log(size)

let sizes = month.pop()+month.pop()
console.log(sizes); //pop twice//

month.push("November")

console.log("month",month) //push november//

month.shift("January")
console.log("month",month)  //shift --remove 1st element //

month.unshift ("January")
console.log ("month",month) //unshift //

const modifymonth = month.slice(1,10)

console.log("modifymonth",modifymonth) //slice 


// take a array which is having 1-10 elements sum ,multiplication 
/**
 * [1,2,3,4,5,6,7,8,9,10]
 * 
 * -> sum, multiplication in single lane
 * //*** */
 
 const sumarray = [1,2,3,4,5,6,7,8,9,10];
const sum = sumarray.reduce((total,item) =>total+item); 
console.log(sum);



 /* task 2:
 * ['mango', 'apple', 'monks', 'homes', 'house'];
 * 
 *  try to find the array method which will derive wether all the elements in the above array is having length 5.(single line)
 * 
 * [10, 12, 15, 17, 19]
 * 
 * if one of the array elemenbnt is greater than 20, return true else false(single lane)
 *
 * 
 *
take an array (5 elements ) of 5strings ,each string length 5 .
single line code */


/**
 * 
 * 06/15/2023
 * 
 * const numbers = [12,16,18,20,21];
 * 
 * return all the elements which is divisible  by 3
 * 
 * 
 * const names = ['Bhavani', 'Ram', 'Prabha', 'Thanee'];
 * 
 * return the names whose length is divisible by 2;
 * 
 * 
 * const stringArr = ['bhavani', 'lives', 'in', 'usa'];
 * 
 * print them by joining them  together with a space.
 * 
 * 
 * const mulArr = [1,3,5,7,9];
 * 
 * return array which is having each value multiplied by 5;
 * 
 * const newArr = [11,23,45,66];
 * 
 * return true if one of the values in the above array is divisible by 11
 * 
 * 
 */





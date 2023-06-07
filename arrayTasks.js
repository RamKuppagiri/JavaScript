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

month.push ("November")

console.log ("month",month) //push november//

month.shift ("January")
console.log ("month",month)  //shift --remove 1st element //

month.unshift ("January")
console.log ("month",month) //unshift //

const modifymonth = month .slice (1,10)

console.log("modifymonth",modifymonth) //slice 







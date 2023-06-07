/**
 * switch statement with passing month as parameter
 * month should be in between 1 to 12
 * default case : invalid value
 * 1 -> jan
 * 2 -> feb **/

const month = 12;
switch(month) {
    case 1:
      console.log("January")
      break;
    case 2:
      console.log("Febravury")
      break;
    case 3:
      console.log("March")
      break;
    case 4:
      console.log("April")
      break;
    case 5:
      console.log("May")
      break;
    case 6:
      console.log("June")
      break;
    case 7:
      console.log("July")
      break;
    case 8:
      console.log("August")
      break;
    case 9:
      console.log("September")
      break;
    case 10:
      console.log("October")
      break;
    case 11:
      console.log("November")
      break;
    case 12:
      console.log ("December")
      break;
    default: console.log('invalid value');
  }

   /** 
   * for loop
   * take number range from 1 to 100 
   * if number divided by 3 => console.log('multiple of 3', number);
   * number % 3 === 0
   * **/


   for(let i= 1;i<=100;i++){
    if(i%3===0)
     console.log('multiple of 3', i)
   }


   const months= ["January","Febrauary","March","April","May","June","July","August","September","October","November","December"];
console.log ("months")





  
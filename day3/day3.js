/**
 * task
 * create two variables a, b. a will be having value 10.
 * b will be having value 15.
 * 
 * create an arrow function which add a and b.
 * 
 * create second arrow function which gives b - a.
 */

// normal import
const commonFunctions = require('../commonFunctions');

//named import

const { addition, substraction} = require('../commonFunctions');

// normal import
const multiplicataion & division = require('../multiplication & division');

//named import

const { multiplicataion , division } = require('../multiplication & division');


// arrow functions


  //let, const
const a = 10;// define a=10
const b = 15;// define b=15

  
  // parameter names that we pass in function call and function definition need not to be same
  addition(a,b);


  //subtraction  function definitaion 
  substraction (a,b);

  multiplicataion (a,b);
  division (a,b);


  // how to use normal import ???
  //commonFunctions.addition(a,b);commonFunctions.substraction(a,b);
 // multiplicataion & division.multiplicataion(a*b);
 // multiplicataion & division.division(a%b)



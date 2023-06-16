//JavaScript Array length -The length property returns the length (size) of an array://

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)


const fruits2 = ["grapes", "avocado", "jems", "space"];
// join is useful to convert an array of elements into a string. joins elements with the delimiter that we pass.
const fruits2ToString = fruits2.join(' &&&& ');  //# delimiter
console.log('fruits2ToString', fruits2ToString);
// toString converts array into string, joins elements by ','.
console.log('toString()',fruits2.toString());
console.log('join', fruits.join(','));

// split is used to covert a string into an array
const stringA = 'Ram is a boy';
const stringAToArray = stringA.split(' ');
console.log('stringAToArray', stringAToArray);
console.log('stringAToArray length', stringAToArray.length);
const fruits2StringToArray = fruits2ToString.split(',');
//console.log('fruits2StringToArray',fruits2StringToArray);

// string -> "bhavani is a good girl"

const a = ['Bhavani'];
// push 
a.push('Ram');
console.log('a', a);

// unshift adds an elemnent to the begining index of an array
a.unshift('Kuppagiri');
console.log('a', a);
// shift removes first element from an array;
const removedElement = a.shift();
console.log('removedElement', removedElement);
console.log('a', a);

// pop
const removedElementFromLast = a.pop();
console.log('a', a);
console.log('removedElementFromLast', removedElementFromLast);

const fruits3 = ["RS", "AS", "QY", "QX"];
let fruit = fruits.pop();
// pop removes the last element of an array


//slice
const vegetables = ['tomato', 'eggplant', 'bellpepper', 'okra', 'chilli'];

/**
 * slice never changes the original array
 * instead returns a copy
 */

const startingTwo = vegetables.slice(-2);

console.log('startingTwo', startingTwo);


// direct assignment
vegetables[2] = 'redPepper';

// indexOf
console.log(vegetables.indexOf('okra'));

// push
vegetables.push('okra', 'okra', 
'yellowPepper');

console.log('vegatables', vegetables);


for(let i =0 ; i<vegetables.length;i++){
    if(vegetables[i] === 'okra'){
        vegetables[i] = 'bottleguard';
    }
}

console.log('veggies', vegetables);

// slice insertion

const colors = ['yellow', 'red', 'white', 'pink', 'brown'];

/**
 * task -> to insert black in between red and white
 * 
 * steps:
 * 1. slice until red
 * 2. slice from white to the end of array
 * 3. insert black in between two slices
 */

const firstHalf = colors.slice(0,2);
const secondHalf = colors.slice(2);
// spread operator
const newColors = [...firstHalf, 'black', ...secondHalf];
console.log('newColors', newColors);


const testArr = ['1', '2', '3', '4', '5']
const newAddElements = ['a', 'b', 'c', 'd'];
const deletedElements = testArr.splice(1, 2, ...newAddElements);
console.log(testArr, '....', deletedElements);

// array copy
/**
 * wrong way of copying array
  const arr1 = [1,2,3];

let arr2;

arr2 = arr1;
console.log('&&&&&&&&&&&&&&&&&&&&');
console.log('arr1', arr1, 'arr2', arr2);

arr1.pop();

console.log('arr1', arr1, 'arr2', arr2);
 */

// copy array

const firstArray = [10,20,30];
const secondArr = [...firstArray];

firstArray.push(40);

console.log(firstArray, secondArr);


// forEach-- calls a functiin for each element in an array . it doesn't executed for empty elements. foeach method executes a provided function once for each array elemengt //

const house = ["singlefamily","townhouse","condos","airbnb","1","-10","a1$"];
house.forEach(house =>console.log (house));  

const adds = [];
adds.forEach(adds=>console.log(adds)); 
// map-- map method creates a new array populated with results of calling a provided function on every element in the calling array //

const array = [1,2,3,4,5,6,7,8,9,10]
const map1 = array.map(x=>x-1)
console.log(map1)
// filter-- filter method creates a shallow copy of portion of a given array ,filterred down to just elements from given array that pass test implemented by provided function.//

const weeks =["sunday","monday","tuesday","wednesday","thursday","friday","saturday","even","odd"];
const result =weeks.filter(weeks=>weeks.length>3);
console.log(result)

// reduce-- reduce () method executes a reducer function on each element of array and returns a single output value //

const indwords =["javascript","is","very","easy","to","learn","yes","absolutely","123","4567890123"];
let togetherwords = indwords.reduce(function(total,amount) {

    return total +amount 
}

);
console.log(togetherwords);


const task1 = [1,2,3,4,5,6,7,8,9,10];
   // const summ = task1.reduce((total,item) =>total+item); 
    console.log(task1.reduce((total,item) =>total+item)); //sum of 1-10 elements in single line 


    const task2 = [1,2,3,4,5,6,7,8,9,10];
   // const summ = task1.reduce((total,item) =>total+item); 
    console.log(task2.reduce((total,item) =>total*item)); //multiplication  of 1-10 elements in single line 

 let lengthsingleline =['mango', 'apple', 'monks', 'homes', 'house']
  console.log('every method result', lengthsingleline.every((e)=>e.length === 5));


const greater = [10, 12, 15, 17, 19]
  //
  //if one of the array elemenbnt is greater than 20, return true else false(single lane)//



console.log(greater.some((element) => element>20));


    

const sumarray = [1,5,7,9,3,2,18,17];
const sum = sumarray.reduce((total,item) =>total+item); 
console.log(sum);

// some--some() method tests whether at least one element in array passes test implemented by provide function//

const arraysrt =[11,12,13,14,15,16,17,18,19,20,21,22]

// Checks whether an element is even
const even = (element) => element % 25 === 0;

console.log(arraysrt.some(even));
// Expected output: true





//every-- every () method executes a function for each array element.this method returns true if function returns true for all elemnts. it returns false if function returns false if function returns false for one element.it does not execute function for empty elements. it does not changes original array.

const ages = [32, 33, 16, 40];
// Checks whether an element is even
const evens = (element) => element % 0 === 0;

console.log(array.some(evens));
// Expected output: true


const favfood = ["Veg","vegan","meat","juice"]
console.log(...favfood) //spread operator//


const cars = ["audi","bmw","benz"];
const findcar = cars.includes("audi");
console.log(findcar); // includes--method is used to check if a specific string exists in a collection and returns true or false . it is case sensitive //


//06/15 tasks//
//Task1//
const numbers = [12,16,18,20,21]
console.log([12,16,18,20,21].filter(function(a){return a%3===0;}));//return all elements can divided by 3 //

//Task2//

const names = ['Bhavani','Ram','Prabha','Thanee']

//console.log('divided by two', names.every((e)=>e.length%3));//

let sizee = names.length%2;
console.log(size)


//Task3//

const stringArr = ['bhavani','lives','in','usa']
console.log( stringArr.join(' '));

//Task4//
const mulArr = [1,3,5,7,9]
console.log(mulArr.map(x=> x * 5))

//Task5//
const newArr = [11,23,45,66];

console.log(newArr.some((element) => element%11)); 
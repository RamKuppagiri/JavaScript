// array
const names = ['Bhavani', 'Bhanu', 'Ramarao', 'Prabha', 'Ram'];

// array length

const arrLength = names.length;

console.log('array length:', names.length);

// traditional for loop
console.log('numbers less than 10')
for(let i = 0; i<10 ; i++){
    console.log(i);
}
console.log('even numbers less than 20');
for(let i = 2; i<=20 ;i = i+2){
console.log(i);
}

// for loop on array

/***
 * 
 * 
 *    ['Bhavani', 'Bhanu', 'Ramarao', 'Prabha', 'Ram']
 *       0          1        2          3         4
 *
 *       
 * 
 * 
 */

console.log('names in the array');
for( let index = 0; index<arrLength; index++){
    console.log(names[index]);
}
console.log('reverse order');
// print names in reverse order
for(let index = arrLength-1; index>=0;index = index--){
    console.log(names[index]);
}










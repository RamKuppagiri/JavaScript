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
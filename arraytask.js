const array = [1,2,3,4,5,6,7,8,9,10]

console.log('addition of each number');

const arrayLength =array.length
let consecutiveSum = 0

for(let i = 0; i<=arrayLength-1; i = i+1){
//console.log(array[i]);//print every elemnet in array//

//sum = array[i]+array[i+1] // adding two consecutive numbers// 

consecutiveSum = consecutiveSum+array[i] //main logic//
console.log(consecutiveSum)



}
//String concatenation//
//concatenate (or join) two or more strings using the concatenation operator, +. //

let x= 'When candles are out,';
let y= 'all cats are grey.';
let z= x + ' ' + y;
console.log(z);



let text = "Hello world, welcome to the universe";
let result = text.includes("world")
console.log(result)  // includes () method 

let text1 = "Hello world, welcome to the universe";
let result1 = text1.includes("world", 12)
console.log(result1)


let str ="java script is great" ;
console.log('includes',str.includes("extend"))
console.log('length',str.length)
console.log('charAt',str.charAt(5))
console.log('charCodeAt',str.charCodeAt(0))
console.log('concat',str = str.concat('. Now iam learning it, it is interesting.'))
console.log('endsWith',str.endsWith('it'));
console.log('includes 2',str.includes('interesting'))
console.log('indexOf',str.indexOf('great'))
console.log('lastIndexOf',str.lastIndexOf('is'))

// ===
console.log('===', '111' === 111);
console.log('==', '111' == 111);
console.log('typeof', typeof('111'));

console.log(`template literal ${'111' == 111}`)

console.log('includes',str.includes("extend"))

console.log(`includes ${str.includes("extend")}`)

//template literals//


console.log(`includes ${str.includes("extend")}`)





console.log('$length',str.length)
console.log('$charAt',str.charAt(5))
console.log('$charCodeAt',str.charCodeAt(0))
console.log('$concat',str = str.concat('. Now iam learning it, it is interesting.'))
console.log('$endsWith',str.endsWith('it'));
console.log('$includes 2',str.includes('interesting'))
console.log('$indexOf',str.indexOf('great'))
console.log('$lastIndexOf',str.lastIndexOf('is'))

// ===
console.log('$===', '111' === 111);
console.log('$==', '111' == 111);
console.log('$typeof', typeof('111'));

console.log(`$template literal ${'111' == 111}`)

console.log('$includes',str.includes("extend"))

console.log(`$includes ${str.includes("extend")}`)
/** 
 * 
 * 1)re write all of the above statemnets using template literals
 * 
 * 2) c onst stringArr = ['Bhavani-Developer', 'Ram-Developer', 'Bhanu-Devops', 'Madhavi-QA'];
 * 
 * iterate through the array and printout the people who are developers
 * 
 * print the count of the developers
 * 
 * 
 * 
 * 
 
 * 
*/



const stringArr = ['Bhavani-Developer', 'Ram-Developer', 'Bhanu-Devops', 'Madhavi-QA'];
let count = 0;
    for(let i=0;i<stringArr.length;i++){
        // if condition
        if(stringArr[i].includes('Developer')){
            const names = stringArr[i].split('-')
            //console.log('names')

            //const stringArr1 =stringArr.split ('')//
        // break it with - split()//
        // store the result in names
        console.log(names[0])

         count = count + 1;
        }
    }
console.log('number of developers', count);







/**
 * functions
 * -> definition
 * -> call
 */


const dogA = {
    name: 'skipper',
    color: 'white',
    sound: 'bow, bow, bow'
}

const catA = {
    name: 'kitty',
    color: 'white',
    sound: 'meow, meow'
}


// function definition  
function getSound(animal){
console.log(animal.sound);
}

// function call
getSound(dogA);
getSound(catA);

// function def
function simple(){
    console.log('no parametrs');
}

// function call
simple();

// function definition as a variable/constant

const simpleFunctionTwo = function () {
  console.log('simpleFunctionTwo');
};


simpleFunctionTwo();


// arrow functions

const simpleFunctionThree = () => {
    console.log('simpleFunctionThree');
  };

  simpleFunctionThree();

  // simple way of writing arrowfunctions , only allowed when we only have one line of code in the def


  const simpleFunctionFour = () => console.log('simpleFunctionFour');
  

  simpleFunctionFour();

  
  
  











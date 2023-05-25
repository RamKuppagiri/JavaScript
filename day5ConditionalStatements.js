// if condition
let age = 10;
if(age < 18){
    console.log('Minor');
}
age = 20;
if(age >= 18){
    console.log('Major');
}

// if else

if(age < 18){
    console.log('Minor');
}else{
    console.log('Major');
}

// if else ladder

if(age<=12){
    console.log('Kiddo');
}else if(age <= 18){
    console.log('Teenager');
}else if(age <= 30){
    console.log('Youth');
}else if(age<=60){
console.log('Adult');
}else{
    console.log('Senior citizen');
}


// switch
age = -1;
switch(age){
case age > 0 && age<=12 : console.log('Kiddo')
               break;
case age<=18 : console.log('Teenager');
               break;
case age<=30 : console.log('Youth');
               break;
case age<=60: console.log('Adult');
               break;
case age <=200: console.log('Senior citizen');
                break;
default: console.log('invalid value');
}



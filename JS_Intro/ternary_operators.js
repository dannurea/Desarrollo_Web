//FUNCTION
//Para comentar todo Alt+Shift+A

const condition = false;
const value1 = 1;
const value2 = 2;

/* let result;
if(condition){
    result = 3;
}else{
    result = 0;
} */

//OPERADORES TERNARIOS
let result = condition ? 3 : 0;
console.log('result',result)

//Multiple Conditions
const age = 18
let message = ( age<3 ) ? 'Hello there you small one':
    ( age<18 ) ? 'Hello' :
    ( age<100 ) ? 'Ohh woow' :
    'Error not valid age';
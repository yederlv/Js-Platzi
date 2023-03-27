// variables
var a;      //declarando
var b = 'b'; // declarando / asignando
b = 'bb'; // reasignación
var a = 'aa' // redeclaración

// global scopes
var fruit = 'Apple' // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function  countries() {
    country = 'Peru'; // global
    console.log(country);
}

countries();
console.log(country);
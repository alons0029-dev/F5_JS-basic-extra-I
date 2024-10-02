/* Ejercicios básicos en JS (Parte 3) - NÚMEROS */

// Escribe una función que tome dos números como argumentos y devuelva su suma
function numberSum() {
    let firstNumSum = prompt("Escribe el primer número");
    let secondNumSum = prompt("Escribe el segundo número");
    let answerSum = (parseInt(firstNumSum) + parseInt(secondNumSum));
    console.log(answerSum);
};

// Escribe una función que tome dos números como argumentos y devuelva su resta
function numberSubtract() {
    let firstNumSubtract = prompt("Escribe el primer número");
    let secondNumSubtract = prompt("Escribe el segundo número");
    let answerSubtract = (parseInt(firstNumSubtract) - parseInt(secondNumSubtract));
    console.log(answerSubtract);
};

// Escribe una función que tome dos números como argumentos y devuelva su producto
function numberProd() {
    let firstNumProd = prompt("Escribe el primer número");
    let secondNumProd = prompt("Escribe el segundo número");
    let answerProd = (parseInt(firstNumProd) * parseInt(secondNumProd));
    console.log(answerProd);
};

// Escribe una función que tome dos números como argumentos y devuelva su división
function numberDiv() {
    let firstNumDiv = prompt("Escribe el primer número");
    let secondNumDiv = prompt("Escribe el segundo número");
    let answerDiv = (parseInt(firstNumDiv) / parseInt(secondNumDiv));
    console.log(answerDiv);
};

// Escribe una función que tome un número base y un exponente, y devuelva el resultado de elevar el número base a la potencia dada
function numberPot() {
    let basePotNum = prompt("Escribe el número BASE");
    let exponentPotNum = prompt("Escribe el número EXPONENTE");
    let answerPot = (parseInt(basePotNum) ** parseInt(exponentPotNum));
    console.log(answerPot);
};

// Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo
function numberRest() {
    let firstNumRest = prompt("Escribe el primer número");
    let secondNumRest = prompt("Escribe el segundo número");
    let answerRest = (parseInt(firstNumRest) % parseInt(secondNumRest));
    console.log(answerRest);
};

// Escribe una función que tome un número como argumento y devuelva su raíz cuadrada
function squareRoot() {
    let squareRootNum = prompt("Escribe el número a calcular");
    let answerSquareRoot = (parseInt(Math.sqrt(squareRootNum)));
    console.log(answerSquareRoot);
};
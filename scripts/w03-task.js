/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add ( number1, number2){
    return number1 + number2;
    
}

function addNUmbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

}

document.querySelector('#sum').value = add(addNumber1, addNumber2);

document.querySelector('#sum').value = add(addNumber1, addNumber2);


document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

// Parte 2: Expressão de Função (Subtração)
// Função para subtração
const subtract = (number1, number2) => number1 - number2;

// Função para subtrair números de controles de formulário HTML
const subtractNumbers = () => {
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);

  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);



/* Arrow Function - Multiply Numbers */
// Parte 3: Funções de Seta (Multiplicação)
// Função para multiplicação
const multiply = (number1, number2) => number1 * number2;

// Função para multiplicar números de controles de formulário HTML
const multiplyNumbers = () => {
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);

  document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */
// Parte 4: Sua Escolha (Divisão)
// Função para divisão
function divide(number1, number2) {
    return number1 / number2;
  }
  
  // Função para dividir números de controles de formulário HTML
  function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
  
    document.querySelector('#quotient').value = divide(dividend, divisor);
  }
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
// Parte 6: Métodos de Array - Programação Funcional
// Array de números de 1 a 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Atribuir o valor da variável de array ao elemento HTML com ID 'array'
document.querySelector('#array').innerHTML = numbersArray;

// Filtrar números ímpares e atribuir ao elemento HTML com ID 'odds'
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);

// Filtrar números pares e atribuir ao elemento HTML com ID 'evens'
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

// Reduzir a soma dos elementos do array e atribuir ao elemento HTML com ID 'sumOfArray'
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

// Multiplicar cada elemento por 2 e atribuir ao elemento HTML com ID 'multiplied'
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

// Somar elementos após multiplicar por dois e atribuir ao elemento HTML com ID 'sumOfMultiplied'
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);

/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */

// Parte 1: Declaração de Função (Adição)
function add(number1, number2) {
    return number1 + number2;
  }
  
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  
  // Parte 2: Expressão de Função (Subtração)
  const subtract = (number1, number2) => number1 - number2;
  
  const subtractNumbers = () => {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  
  // Parte 3: Funções de Seta (Multiplicação)
  const multiply = (number1, number2) => number1 * number2;
  
  const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
  };
  
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
  
  // Parte 4: Sua Escolha (Divisão)
  function divide(number1, number2) {
    return number1 / number2;
  }
  
  function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
  }
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  
  // Parte 5: Estruturas de Seleção
  document.querySelector('#getTotal').addEventListener('click', () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let applyDiscount = document.querySelector('#member').checked;
  
    if (applyDiscount) {
      subtotal *= 0.85; // Aplicar desconto de 15%
    }
  
    let totalDue = subtotal.toFixed(2);
    document.querySelector('#total').innerHTML = `Total Devido: $${totalDue}`;
  });
  
  // Parte 6: Métodos de Array - Programação Funcional
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
  document.querySelector('#array').innerHTML = numbersArray;
  document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);
  document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
  document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
  document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);
  document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
  
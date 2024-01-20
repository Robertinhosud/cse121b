/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Roberto Soares'

var currentYear = new Date().getFullYear();

var profilePicture = 'images/IMG_7997.png';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name') 

const foodElement = document.getElementById('food') 

const yearElement =  document.querySelector('#year') 

const imageElement = document.querySelector('#home picture img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

/* Step 5 - Array */

const favoriteFoods = ["Pizza", "Chocolate", "Ice Cream", "Burger"];

foodElement.innerHTML = favoriteFoods.join();

const newFavoriteFood = "Pasta";

favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods.join()}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods.join()}`;

favoriteFoods.pop();
 
foodElement.innerHTML += `<br>${favoriteFoods.join()}`;

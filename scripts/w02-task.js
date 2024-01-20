/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Roberto Soares'

var currentYear = new Date().getFullYear();

var profilePicture = 'images\IMG_7997.png';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name') 

const foodElement = document.getElementById('food') 

const yearElement =  document.querySelector('#year') 

const imageElement = document.querySelector("#profileImage"); 

/* Step 4 - Adding Content */

nameElement.innerHTML = '<strong>${fullName}</strong>';

nameElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

const altText = `Profile image of ${nameElement.textContent}`;

imageElement.setAttribute("alt", altText);

/* Step 5 - Array */

const favoriteFoods = ["Pizza", "Chocolate", "Ice Cream", "Burger"];

foodElement.innerHTML = favoriteFoods.join("<br>");

const newFavoriteFood = "Pasta";

favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;

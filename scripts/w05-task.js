/* W05: Programming Tasks */


const templesElement = document.querySelector('#temples'); // Selecionando o elemento div onde os templos serão exibidos
let templeList = []; // Array para armazenar os templos

/* Declare and initialize global variables */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // Criar elementos HTML
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');

        // Adicionar propriedades do templo aos elementos HTML
        h3.textContent = temple.templeName;
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Anexar elementos ao article
        article.appendChild(h3);
        article.appendChild(img);

        // Anexar article ao elemento global templesElement
        templesElement.appendChild(article);
    });
};



/* async displayTemples Function */

const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        templeList = await response.json(); // Convertendo a resposta em um objeto JavaScript
        displayTemples(templeList); // Chamando a função displayTemples para exibir os templos
    } catch (error) {
        console.error('Erro ao obter os templos:', error);
    }
};


/* async getTemples Function using fetch()*/

const reset = () => {
    templesElement.innerHTML = ''; // Limpar o conteúdo do elemento templesElement
};


/* reset Function */

const filterTemples = (temples) => {
    reset(); // Limpar a lista de templos exibida
    const filter = document.querySelector("#filtered").value; // Obter o valor selecionado do elemento select

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });


/* filterTemples Function */



getTemples();

/* Event Listener */

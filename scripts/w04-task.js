/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Roberto Soares",
    photo: "images/IMG_7997.png", // substitua pelo caminho real da imagem
    favoriteFoods: [
      'Rice',
      'Beans',
      'Beef',
      'Potato',
      'Ice Cream'
    ],
    hobbies: ['to play Soccer', 'Hiking', 'Coding'], // substitua com seus hobbies reais
    placesLived: [
      {
        place: 'Bauru, SP, Brazil',
        length: '22 year'
      },
      {
        place: 'Birigui, SP, Brazil',
        length: '10 year'
      },
      // Adicione outros lugares onde você morou
      // { place: 'Outro Lugar', length: 'X anos' }
    ]
  };
  
  // Manipulação do DOM:
  
  // Atribua o valor da name propriedade ao elemento HTML com um ID de 'name'
  document.querySelector('#name').textContent = myProfile.name;
  
  // Atribua o valor da photo propriedade como o src atributo do HTML <img> com um ID de 'photo'
  document.querySelector('#photo').src = myProfile.photo;
  
  // Atribua o valor da name propriedade como o alt atributo do HTML <img> com um ID de 'photo'
  document.querySelector('#photo').alt = myProfile.name;
  
  // Para cada comida preferida, crie um elemento <li> e anexe-o ao <ul> com um ID de 'favorite-foods'
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  // Para cada hobby, crie um elemento <li> e anexe-o ao <ul> com um ID de 'hobbies'
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  // Para cada objeto em placesLived, crie elementos <dt> e <dd> e anexe-os ao <dl> com um ID de 'places-lived'
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });

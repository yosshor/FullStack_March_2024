"use strict";

var random = function random() {
  return Math.round(Math.random() * 60);
};

var randomPosition = function randomPosition() {
  return {
    top: random() + "vh",
    left: random() + "vw"
  };
};

var dragon = {
  name: 'dragon',
  age: 12,
  id: 'dragonId',
  src: 'https://cdn.mos.cms.futurecdn.net/JYEXpJURGks76oHVBc5cik-650-80.jpg.webp',
  position: randomPosition(),
  description: 'A dragon is a magical legendary creature that appears in the folklore of multiple cultures worldwide',
  price: 12.34
};
var parrot = {
  name: 'parrot',
  age: 5,
  id: 'parrotId',
  src: 'https://allergycosmos.co.uk/cdn/shop/articles/Dealing_with_Parrot_Dander.jpg?v=1604673878',
  position: randomPosition(),
  description: 'Parrots are beautiful birds that can be great pets',
  price: 11.23
};
var dog = {
  name: 'dog',
  age: 3,
  id: 'dogId',
  src: 'https://t3.ftcdn.net/jpg/06/10/71/64/240_F_610716498_li6BIgt75TXw8B4W89pbf3VtKgHNQkXo.jpg',
  position: randomPosition(),
  description: 'intense gaze of a rottweiler via AI',
  price: 8.98
};
var cat = {
  name: 'cat',
  age: 3,
  id: 'catId',
  src: 'https://as1.ftcdn.net/v2/jpg/02/36/99/22/1000_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg',
  position: randomPosition(),
  description: 'Portrait of a beautiful gray striped cat close up',
  price: 5.64
};
var hippo = {
  name: 'hippo',
  age: 3,
  id: 'hippoId',
  src: 'https://as2.ftcdn.net/v2/jpg/02/41/05/65/1000_F_241056565_7K2QKofpi76cSB5f9P0Uu1U0YVhWRADP.jpg',
  position: randomPosition(),
  description: 'hippopotamus, or hippo in the zoo',
  price: 34.98
};
var animalsArray = [dragon, parrot, dog, cat, hippo];

function getDomElementAsStr(animal) {
  var _a, _b;

  return "<div class='animals__animal' style='top:" + ((_a = animal.position) === null || _a === void 0 ? void 0 : _a.top) + ";left:" + ((_b = animal.position) === null || _b === void 0 ? void 0 : _b.left) + "'; onclick=handleImgClick('" + animal.id + "')>\n                <div class='animal-img'><img src='" + animal.src + "' alt='" + animal.description + "'></img>\n            </div> \n            <div class='animal-info'>\n                <p><strong>Name:</strong>" + animal.name + "</p>\n                <p><strong>Description:</strong>" + animal.description + "</p>\n                <p><strong>Price:</strong>" + animal.price + "</p>\n            </div></div>";
}

function getBoomElement(animal) {
  var _a, _b;

  return "<div class='animals__animal' \n                 style='top:" + ((_a = animal.position) === null || _a === void 0 ? void 0 : _a.top) + ";\n                        left:" + ((_b = animal.position) === null || _b === void 0 ? void 0 : _b.left) + "'\u05E3\n                        width:100%;height:100%>\n                <img src='" + animal.src + "'></img>\n            </div>";
}

function writeAnimalsToDom(insertBoomImg) {
  try {
    var html = '';
    var animals = document.getElementById('animals');

    if (insertBoomImg === null || insertBoomImg === '') {
      animalsArray.forEach(function (animal) {
        html += getDomElementAsStr(animal);
      });
    } else {
      html += insertBoomImg;
    }

    animals.innerHTML = html;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

writeAnimalsToDom();

var findElementById = function findElementById(id) {
  return animalsArray.find(function (e) {
    return e.id == id;
  });
};

var findIndexElementById = function findIndexElementById(id) {
  return animalsArray.findIndex(function (e) {
    return e.id === id;
  });
};

function handleImgClick(id) {
  try {
    var findDivElement = findElementById(id);
    var findElement = findIndexElementById(id);
    animalsArray.splice(findElement, 1);
    writeAnimalsToDom();
    findDivElement.src = './img/boom.gif';
    console.log(findDivElement);
    var ele = getBoomElement(findDivElement);
    console.log(ele);
    writeAnimalsToDom(ele);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
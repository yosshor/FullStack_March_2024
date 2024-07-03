"use strict";

;
var positions = [{
  top: '5vh',
  left: '40vw',
  bottom: null,
  right: null
}, {
  top: null,
  left: null,
  bottom: '15vh',
  right: '10vw'
}, {
  top: '26vh',
  left: '25vw',
  bottom: null,
  right: null
}, {
  top: null,
  left: null,
  bottom: '35vh',
  right: '68vw'
}, {
  top: '8vh',
  left: null,
  bottom: null,
  right: '8vw'
}, {
  top: '58vh',
  left: null,
  bottom: null,
  right: '28vw'
}, {
  top: '48vh',
  left: null,
  bottom: null,
  right: '58vw'
}, {
  top: '38vh',
  left: null,
  bottom: null,
  right: '48vw'
}, {
  top: '28vh',
  left: null,
  bottom: null,
  right: '38vw'
}, {
  top: '18vh',
  left: null,
  bottom: null,
  right: '28vw'
}, {
  top: '28vh',
  left: '28vw',
  bottom: null,
  right: null
}];

function getRandomLocation() {
  var loc = {
    top: Math.round(Math.random() * 75) + "vh",
    left: Math.round(Math.random() * 90) + "%",
    bottom: null,
    right: null
  };
  return loc;
} // const getRandomLocation: Positions[] = () => {
// }
// Sample data


var creatures = [{
  name: 'Dragon',
  imgUrl: './img/fantasy/dragon.jpeg',
  position: getRandomLocation(),
  description: 'A fierce and powerful creature that breathes fire.',
  habitat: 'Mountain caves',
  dangerLevel: 10
}, {
  name: 'Unicorn',
  imgUrl: './img/fantasy/unicorn.jpeg',
  position: getRandomLocation(),
  description: 'A mystical horse with a single horn on its forehead.',
  habitat: 'Enchanted forests',
  dangerLevel: 2
}, {
  name: 'Phoenix',
  imgUrl: './img/fantasy/phoenix.jpeg',
  position: getRandomLocation(),
  description: 'A legendary bird that regenerates from its ashes.',
  habitat: 'Deserts and remote mountains',
  dangerLevel: 6
}, {
  name: 'Griffin',
  imgUrl: './img/fantasy/griffin.jpeg',
  position: getRandomLocation(),
  description: 'A majestic creature with the body of a lion and the head and wings of an eagle.',
  habitat: 'High cliffs and mountainous regions',
  dangerLevel: 7
}, {
  name: 'animalavatar',
  imgUrl: './img/fantasy/animal avatar.jpeg',
  position: getRandomLocation(),
  description: 'A mythical being with the upper body of a human and the tail of a fish.',
  habitat: 'Oceans and seas',
  dangerLevel: 3
}, {
  name: 'Mermaid1',
  imgUrl: './img/fantasy/mermaid.jpeg',
  position: getRandomLocation(),
  description: 'A mythical being with the upper body of a human and the tail of a fish.',
  habitat: 'Oceans and seas',
  dangerLevel: 3
}, {
  name: 'cartoon',
  imgUrl: './img/fantasy/cartoon.jpeg',
  position: getRandomLocation(),
  description: 'A mythical being with the upper body of a human and the tail of a fish.',
  habitat: 'Oceans and seas',
  dangerLevel: 3
}, {
  name: 'Mermaid',
  imgUrl: './img/fantasy/panda.jpeg',
  position: getRandomLocation(),
  description: 'A mythical being with the upper body of a human and the tail of a fish.',
  habitat: 'Oceans and seas',
  dangerLevel: 3
}, {
  name: 'frog',
  imgUrl: './img/fantasy/frog.jpeg',
  position: getRandomLocation(),
  description: 'A mythical being with the upper body of a human and the tail of a fish.',
  habitat: 'Oceans and seas',
  dangerLevel: 3
}, {
  name: 'creature1',
  imgUrl: './img/fantasy/creature1.jpeg',
  position: getRandomLocation(),
  description: 'A mythical being with the upper body of a human and the tail of a fish.',
  habitat: 'Oceans and seas',
  dangerLevel: 3
}];

function getDivElementForCreature(creature) {
  try {
    if (!creature) throw new Error("You must insert a valid input"); // Create the outer div

    var div = document.createElement('div');
    div.className = 'creature';
    div.style.position = 'absolute';
    div.style.width = '6.2vw';
    div.style.height = '6.2vw';

    div.onclick = function () {
      return disappear(creature.name.trim() + 'Id', event);
    };

    div.id = creature.name.trim() + 'Id'; // div.style.position = getRandomLocation();

    if (creature.position.top != null) div.style.top = creature.position.top;
    if (creature.position.right != null) div.style.right = creature.position.right;
    if (creature.position.left != null) div.style.left = creature.position.left;
    if (creature.position.bottom != null) div.style.bottom = creature.position.bottom; // Create the img element

    var img = document.createElement('img');
    img.style.cursor = 'pointer';
    img.style.position = 'absolute';
    img.style.width = '8vw';
    img.style.height = '8vh';
    img.src = creature.imgUrl;
    img === null || img === void 0 ? void 0 : img.alt = creature.description; // img?.id = creature.name.trim() + 'ImgId';
    // img.onclick = () => img.remove()//style.display = 'none'
    // Create the p element

    var p = document.createElement('p');
    p.style.position = 'absolute';
    p.style.display = 'flex';
    p.style.padding = '0';
    p.style.margin = '0';
    p.style.width = '0.6em';
    p.style.height = '0.6em';
    p.style.maxHeight = 'fit-content';
    p.style.maxWidth = '1rem';
    p.textContent = creature.name; // Append img and p to div

    div.appendChild(img);
    div.appendChild(p);
    return div;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function initialLoading() {
  try {
    var fantasyId_1 = document.getElementById('fantasyId');
    console.dir(fantasyId_1);

    if (fantasyId_1) {
      fantasyId_1.childNodes.forEach(function (node) {
        node.remove();
      });
      fantasyId_1.innerHTML = '';
      console.log('All child elements have been removed.');
    } else {
      console.warn('Element with id "fantasyId" not found.');
    }

    var creaturesModel = creatures;
    console.log(creaturesModel);
    creaturesModel.forEach(function (e) {
      e.position = getRandomLocation();
      var divBuilder = getDivElementForCreature(e);
      console.log(divBuilder);
      fantasyId_1 === null || fantasyId_1 === void 0 ? void 0 : fantasyId_1.append(divBuilder);
    });
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function WriteBoomGifToDom(x, y, id) {
  try {
    var addDiv = document.createElement('div');
    addDiv.style.width = '10px';
    addDiv.style.height = '10px';
    addDiv.style.top = y + "px";
    addDiv.style.left = x + "px";
    addDiv.style.position = 'fixed';
    addDiv.style.display = 'relative';
    addDiv.style.transform = 'translate(-3vw, -5vh)'; // Create the img element

    var img_1 = document.createElement('img');
    img_1.style.cursor = 'pointer';
    img_1.style.position = 'absolute';
    img_1.style.width = '8vw';
    img_1.style.height = '8vh';
    img_1.src = './img/boom.gif';
    img_1 === null || img_1 === void 0 ? void 0 : img_1.alt = 'some boom effect';
    addDiv.append(img_1);
    fantasyId === null || fantasyId === void 0 ? void 0 : fantasyId.appendChild(addDiv);
    setInterval(function () {
      img_1.style.display = 'none';
    }, 980);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function disappear(imgId, event) {
  try {
    event.preventDefault();
    var element = document.querySelector("#" + imgId);
    console.log(event);

    if (element) {
      element.remove();
      console.log('Element has been hidden:', element);
      WriteBoomGifToDom(event.x, event.y, imgId);
      console.log(getRandomLocation());
    } else {
      console.warn("Element with id \"" + element + "\" not found.");
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function disappearOption2(id) {
  try {
    var element = document.getElementById(id); //HTMLImageElement

    if (element) {
      element.style.display = 'none';
      element.innerHTML = '<div></div>';
      element.remove();
      console.log('Element has been hidden:', element);
    } else {
      console.warn("Element with id \"" + element + "\" not found.");
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
} // option two to get str and write it into dom


function getDivElementForCreature2(creature) {
  try {
    if (!creature) throw new Error("you must insert a valid input");
    var divBuilder = "<div class=\"creature\" \n\n                                style='\n                                    position: absolute;\n                                    width: 6.2vw;\n                                    height: 6.2vw;\n                                    top:" + (creature.position.top != null ? creature.position.top : null) + ";\n                                    right:" + (creature.position.right != null ? creature.position.right : null) + ";\n                                    left:" + (creature.position.left != null ? creature.position.left : null) + ";\n                                bottom:" + (creature.position.bottom != null ? creature.position.bottom : null) + ";'>\n                            <img \n                                onclick=\"disappear('" + creature.name.trim() + "Id')\";\n                                id=\"" + creature.name.trim() + "Id\"; \n                                style='\n                                cursor: pointer;\n                                position: absolute; \n                                width: 6vw; \n                                height: 6vh;'\n                                src='" + creature.imgUrl + "' alt='" + creature.description + "'>\n                            <p style='\n                                position:absolute;\n                                display:flex;\n                                padding: 0;\n                                margin: 0;\n                                width: 0.6em;\n                                height: 0.6em;  \n                                max-height: fit-content;\n                                max-width: 1rem;'>" + creature.name + "</p>\n                            </div>";
    return divBuilder;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
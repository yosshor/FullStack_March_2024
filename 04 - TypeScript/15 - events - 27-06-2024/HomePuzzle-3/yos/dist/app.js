var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var random = function () { return Math.round(Math.random() * 70); };
var randomPosition = function () { return { top: random() + 4 + "vh", left: random() + "vw" }; };
function getAnimalsArray() {
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
    var dragon1 = {
        name: 'dragon',
        age: 12,
        id: 'dragon1Id',
        src: 'https://t4.ftcdn.net/jpg/05/63/96/77/360_F_563967731_wwGn0f1iz8l5Z9eHdZbjJUoaeatXmcbp.jpg',
        position: randomPosition(),
        description: 'A dragon is a magical legendary creature that appears in the folklore of multiple cultures worldwide',
        price: 12.34
    };
    var parrot1 = {
        name: 'parrot',
        age: 5,
        id: 'parrot1Id',
        src: 'https://t3.ftcdn.net/jpg/05/44/49/54/360_F_544495402_Y1IPsOFjNUL7HrDChNFCLHBxrzxLNQ5b.jpg',
        position: randomPosition(),
        description: 'Parrots are beautiful birds that can be great pets',
        price: 11.23
    };
    var dog1 = {
        name: 'dog',
        age: 3,
        id: 'dog1Id',
        src: 'https://t4.ftcdn.net/jpg/06/02/74/39/360_F_602743936_qbTuk7bb34cSYBgSDbsirlmJSbxRBUFM.jpg',
        position: randomPosition(),
        description: 'intense gaze of a rottweiler via AI',
        price: 8.98
    };
    var cat1 = {
        name: 'cat',
        age: 3,
        id: 'cat1Id',
        src: 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
        position: randomPosition(),
        description: 'Portrait of a beautiful gray striped cat close up',
        price: 5.64
    };
    var hippo1 = {
        name: 'hippo',
        age: 3,
        id: 'hippo1Id',
        src: 'https://t3.ftcdn.net/jpg/02/29/19/62/360_F_229196276_TfDtP9bhp6wdbHNr4rb7FiTmJ58XoPb7.jpg',
        position: randomPosition(),
        description: 'hippopotamus, or hippo in the zoo',
        price: 34.98
    };
    var animalsArray = [dragon, parrot, dog, cat, hippo, dragon1, parrot1, dog1, cat1, hippo1];
    return animalsArray;
}
// const animalsArray = [dragon, parrot, dog, cat, hippo, dragon1, parrot1, dog1, cat1, hippo1]
var animalsArray = getAnimalsArray();
// [dragon, parrot, dog, cat, hippo, dragon1, parrot1, dog1, cat1, hippo1]
// const getAnimalsArray = (): Animals[] => {
//     return [dragon, parrot, dog, cat, hippo, dragon1, parrot1, dog1, cat1, hippo1];
// }
//handleImgClick
function getDomElementAsStr(animal, removeAnimation) {
    var _a, _b;
    var remove = removeAnimation === null || removeAnimation === undefined ? null : removeAnimation;
    return "<div class='animals__animal' id='" + animal.id + "' style='top:" + ((_a = animal.position) === null || _a === void 0 ? void 0 : _a.top) + ";\n                left:" + ((_b = animal.position) === null || _b === void 0 ? void 0 : _b.left) + ";" + remove + "';\n                 onclick=handlePetClick('" + animal.id + "')>\n                <div class='animal-img'><img src='" + animal.src + "' alt='" + animal.description + "'></img>\n            </div> \n            <div class='animal-info'>\n                <p><strong>Name:</strong>" + animal.name + "</p>\n                <p><strong>Description:</strong>" + animal.description + "</p>\n                <p><strong>Price:</strong>" + animal.price + "</p>\n            </div></div>";
}
function writeAnimalsToDom(arr) {
    try {
        var html = '';
        var animals = document.getElementById('animals');
        if (arr !== undefined) {
            arr.forEach(function (animal) {
                html += getDomElementAsStr(animal);
            });
        }
        else {
            animalsArray.forEach(function (animal) {
                html += getDomElementAsStr(animal);
            });
        }
        animals.innerHTML = html;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
writeAnimalsToDom(undefined);
function findElementByIdOrName(id, name) {
    try {
        if (id)
            return animalsArray.find(function (e) { return e.id == id; });
        if (name) {
            var petsByName = [];
            for (var _i = 0, animalsArray_1 = animalsArray; _i < animalsArray_1.length; _i++) {
                var ele = animalsArray_1[_i];
                if (ele.name === name)
                    petsByName.push(ele);
            }
            return petsByName;
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var findIndexElementById = function (id) { return animalsArray.findIndex(function (e) { return e.id === id; }); };
function handleImgClick(id, arr) {
    try {
        setTimeout(function () {
            var findElement = findIndexElementById(id);
            if (arr === undefined) {
                animalsArray.splice(findElement, 1);
                writeAnimalsToDom();
            }
            else {
                var findElementInArr = arr.findIndex(function (e) { return e.id === id; });
                console.log(arr, findElementInArr);
                arr.splice(findElementInArr, 1);
                animalsArray.splice(findElement, 1);
                writeAnimalsToDom(arr);
            }
        }, 1000);
        var findDivElement = findElementByIdOrName(id);
        findDivElement.src = './img/boom.gif';
        writeAnimalsToDom(arr !== undefined ? arr : undefined);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function handlePetClick(id) {
    var _a;
    try {
        var pets = (_a = document === null || document === void 0 ? void 0 : document.getElementById('petSelect')) === null || _a === void 0 ? void 0 : _a.value;
        var petsArray = findElementByIdOrName(undefined, pets);
        console.log(id);
        if (pets === 'all' && id == undefined) {
            animalsArray = getAnimalsArray();
            writeAnimalsToDom(animalsArray);
        }
        else if (pets === 'all' && id !== undefined) {
            handleImgClick(id);
        }
        else if (pets !== 'all' && id !== undefined) {
            handleImgClick(id, petsArray);
        }
        else {
            console.log(pets, petsArray);
            writeAnimalsToDom(petsArray);
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function sortPetByPrice() {
    try {
        var sort = __spreadArrays(animalsArray).sort(function (a, b) { return a.price - b.price; }).reverse();
        console.log(sort);
        var animals = document.getElementById('animals');
        var html = '';
        var top = 6;
        sort.forEach(function (animal) {
            var _a, _b;
            (_a = animal.position) === null || _a === void 0 ? void 0 : _a.top = top + "vh";
            (_b = animal.position) === null || _b === void 0 ? void 0 : _b.left = '50%';
            top += 10;
            html += getDomElementAsStr(animal, 'animation:none;');
        });
        animals.innerHTML = html;
        return sort;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}

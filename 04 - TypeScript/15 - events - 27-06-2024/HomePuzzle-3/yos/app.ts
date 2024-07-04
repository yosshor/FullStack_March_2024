const random = () => Math.round(Math.random() * 70)
const randomPosition = (): Position => { return { top: `${random() + 4}vh`, left: `${random()}vw` } }



interface Animals {
    name: string;
    age: number;
    id: string;
    src: string;
    description?: string;
    position?: Position;
    price: number;
}

interface Position {
    top: string | null;
    left: string | null;
}
function getAnimalsArray(): Animals[] {


    var dragon: Animals = {
        name: 'dragon',
        age: 12,
        id: 'dragonId',
        src: 'https://cdn.mos.cms.futurecdn.net/JYEXpJURGks76oHVBc5cik-650-80.jpg.webp',
        position: randomPosition(),
        description: 'A dragon is a magical legendary creature that appears in the folklore of multiple cultures worldwide',
        price: 12.34

    }
    var parrot: Animals = {
        name: 'parrot',
        age: 5,
        id: 'parrotId',
        src: 'https://allergycosmos.co.uk/cdn/shop/articles/Dealing_with_Parrot_Dander.jpg?v=1604673878',
        position: randomPosition(),
        description: 'Parrots are beautiful birds that can be great pets',
        price: 11.23
    }

    var dog: Animals = {
        name: 'dog',
        age: 3,
        id: 'dogId',
        src: 'https://t3.ftcdn.net/jpg/06/10/71/64/240_F_610716498_li6BIgt75TXw8B4W89pbf3VtKgHNQkXo.jpg',
        position: randomPosition(),
        description: 'intense gaze of a rottweiler via AI',
        price: 8.98
    }

    var cat: Animals = {
        name: 'cat',
        age: 3,
        id: 'catId',
        src: 'https://as1.ftcdn.net/v2/jpg/02/36/99/22/1000_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg',
        position: randomPosition(),
        description: 'Portrait of a beautiful gray striped cat close up',
        price: 5.64
    }
    var hippo: Animals = {
        name: 'hippo',
        age: 3,
        id: 'hippoId',
        src: 'https://as2.ftcdn.net/v2/jpg/02/41/05/65/1000_F_241056565_7K2QKofpi76cSB5f9P0Uu1U0YVhWRADP.jpg',
        position: randomPosition(),
        description: 'hippopotamus, or hippo in the zoo',
        price: 34.98
    }


    var dragon1: Animals = {
        name: 'dragon',
        age: 12,
        id: 'dragon1Id',
        src: 'https://t4.ftcdn.net/jpg/05/63/96/77/360_F_563967731_wwGn0f1iz8l5Z9eHdZbjJUoaeatXmcbp.jpg',
        position: randomPosition(),
        description: 'A dragon is a magical legendary creature that appears in the folklore of multiple cultures worldwide',
        price: 12.34

    }
    var parrot1: Animals = {
        name: 'parrot',
        age: 5,
        id: 'parrot1Id',
        src: 'https://t3.ftcdn.net/jpg/05/44/49/54/360_F_544495402_Y1IPsOFjNUL7HrDChNFCLHBxrzxLNQ5b.jpg',
        position: randomPosition(),
        description: 'Parrots are beautiful birds that can be great pets',
        price: 11.23
    }

    var dog1: Animals = {
        name: 'dog',
        age: 3,
        id: 'dog1Id',
        src: 'https://t4.ftcdn.net/jpg/06/02/74/39/360_F_602743936_qbTuk7bb34cSYBgSDbsirlmJSbxRBUFM.jpg',
        position: randomPosition(),
        description: 'intense gaze of a rottweiler via AI',
        price: 8.98
    }

    var cat1: Animals = {
        name: 'cat',
        age: 3,
        id: 'cat1Id',
        src: 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
        position: randomPosition(),
        description: 'Portrait of a beautiful gray striped cat close up',
        price: 5.64
    }
    var hippo1: Animals = {
        name: 'hippo',
        age: 3,
        id: 'hippo1Id',
        src: 'https://t3.ftcdn.net/jpg/02/29/19/62/360_F_229196276_TfDtP9bhp6wdbHNr4rb7FiTmJ58XoPb7.jpg',
        position: randomPosition(),
        description: 'hippopotamus, or hippo in the zoo',
        price: 34.98
    }
    const animalsArray = [dragon, parrot, dog, cat, hippo, dragon1, parrot1, dog1, cat1, hippo1]
    return animalsArray;
}
// const animalsArray = [dragon, parrot, dog, cat, hippo, dragon1, parrot1, dog1, cat1, hippo1]
const animalsArray = getAnimalsArray();
// [dragon, parrot, dog, cat, hippo, dragon1, parrot1, dog1, cat1, hippo1]

// const getAnimalsArray = (): Animals[] => {
//     return [dragon, parrot, dog, cat, hippo, dragon1, parrot1, dog1, cat1, hippo1];
// }

//handleImgClick
function getDomElementAsStr(animal: Animals, removeAnimation?:string) {
    const remove = removeAnimation === null || removeAnimation === undefined ? null : removeAnimation;

    return `<div class='animals__animal' id='${animal.id}' style='top:${animal.position?.top};
                left:${animal.position?.left};${remove}';
                 onclick=handlePetClick('${animal.id}')>
                <div class='animal-img'><img src='${animal.src}' alt='${animal.description}'></img>
            </div> 
            <div class='animal-info'>
                <p><strong>Name:</strong>${animal.name}</p>
                <p><strong>Description:</strong>${animal.description}</p>
                <p><strong>Price:</strong>${animal.price}</p>
            </div></div>`
}

function writeAnimalsToDom(arr?: Animals[]): void | undefined {
    try {
        var html = '';
        const animals = document.getElementById('animals') as HTMLDivElement;
        if (arr !== undefined) {
            arr!.forEach(animal => {
                html += getDomElementAsStr(animal)
            })
        }
        else {

            animalsArray.forEach(animal => {
                html += getDomElementAsStr(animal)
            })
        }
        animals.innerHTML = html;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

writeAnimalsToDom(undefined)


function findElementByIdOrName(id?: string, name?: string): Animals | Animals[] | void | undefined {
    try {
        if (id) return animalsArray.find(e => e.id == id)
        if (name) {
            const petsByName: Animals[] = []
            for (var ele of animalsArray) {
                if (ele.name === name) petsByName.push(ele)
            }
            return petsByName
        }
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

const findIndexElementById = (id: string): number => animalsArray.findIndex(e => e.id === id)

function handleImgClick(id: string, arr: Animals[]): void | undefined {
    try {
        setTimeout(() => {
            const findElement: number = findIndexElementById(id);

            if (arr === undefined) {
                animalsArray.splice(findElement, 1)
                writeAnimalsToDom()
            }
            else {
                const findElementInArr: number = arr.findIndex(e => e.id === id);
                console.log(arr, findElementInArr)
                arr.splice(findElementInArr, 1)
                animalsArray.splice(findElement, 1)
                writeAnimalsToDom(arr)

            }
        }, 1000)

        const findDivElement = findElementByIdOrName(id);
        findDivElement.src = './img/boom.gif'
        writeAnimalsToDom(arr !== undefined ? arr : undefined)

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

function handlePetClick(id?: string): undefined {
    try {
        const pets: string = document?.getElementById('petSelect')?.value
        const petsArray: Animals[] = findElementByIdOrName(undefined!, pets)

        console.log(id)
        if (pets === 'all' && id == undefined) {
            animalsArray = getAnimalsArray();
            writeAnimalsToDom(animalsArray)
        }
        else if (pets === 'all' && id !== undefined) {
            handleImgClick(id);
        }
        else if (pets !== 'all' && id !== undefined) {
            handleImgClick(id, petsArray);
        }
        else {
            console.log(pets, petsArray)
            writeAnimalsToDom(petsArray)
        }
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

function sortPetByPrice(): Animals[] | undefined {
    try {
        const sort = [...animalsArray].sort((a, b) => a.price - b.price).reverse()
        console.log(sort)
        const animals = document.getElementById('animals') as HTMLDivElement;

        var html = '';
        var top = 6;
        sort.forEach(animal => {
            animal.position?.top = `${top}vh`;
            animal.position?.left = '50%';
            top += 10
            html += getDomElementAsStr(animal,'animation:none;')
        })
        animals.innerHTML = html;
        return sort;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
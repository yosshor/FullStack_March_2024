
interface Creatures {
    name: string;
    imgUrl: string;
    position: Positions;
    description: null | string;
    habitat?: string;
    dangerLevel?: number;
}

interface Positions {
    top: null | string,
    left: null | string,
    bottom: null | string,
    right: null | string
};


const positions: Positions[] = [
    {
        top: '5vh',
        left: '40vw',
        bottom: null,
        right: null
    },
    {
        top: null,
        left: null,
        bottom: '15vh',
        right: '10vw'
    },
    {
        top: '26vh',
        left: '25vw',
        bottom: null,
        right: null
    }
    ,
    {
        top: null,
        left: null,
        bottom: '35vh',
        right: '68vw'
    },
    {
        top: '8vh',
        left: null,
        bottom: null,
        right: '8vw'
    },
    {
        top: '58vh',
        left: null,
        bottom: null,
        right: '28vw'
    },
    {
        top: '48vh',
        left: null,
        bottom: null,
        right: '58vw'
    },
    {
        top: '38vh',
        left: null,
        bottom: null,
        right: '48vw'
    },
    {
        top: '28vh',
        left: null,
        bottom: null,
        right: '38vw'
    },
    {
        top: '18vh',
        left: null,
        bottom: null,
        right: '28vw'
    },
    {
        top: '28vh',
        left: '28vw',
        bottom: null,
        right: null
    }
];

function getRandomLocation(): Positions {

    const loc: Positions = {
        top: `${Math.round(Math.random() * 75)}vh`,
        left: `${Math.round(Math.random() * 90)}%`,
        bottom: null,
        right: null
    }
    return loc;

}

// const getRandomLocation: Positions[] = () => {

// }

// Sample data
var creatures: Creatures[] = [
    {
        name: 'Dragon',
        imgUrl: './img/fantasy/dragon.jpeg',
        position: getRandomLocation(), //positions[0],
        description: 'A fierce and powerful creature that breathes fire.',
        habitat: 'Mountain caves',
        dangerLevel: 10
    },
    {
        name: 'Unicorn',
        imgUrl: './img/fantasy/unicorn.jpeg',
        position: getRandomLocation(), //positions[1],
        description: 'A mystical horse with a single horn on its forehead.',
        habitat: 'Enchanted forests',
        dangerLevel: 2
    },
    {
        name: 'Phoenix',
        imgUrl: './img/fantasy/phoenix.jpeg',
        position: getRandomLocation(), //positions[2],
        description: 'A legendary bird that regenerates from its ashes.',
        habitat: 'Deserts and remote mountains',
        dangerLevel: 6
    },
    {
        name: 'Griffin',
        imgUrl: './img/fantasy/griffin.jpeg',
        position: getRandomLocation(), //positions[3],
        description: 'A majestic creature with the body of a lion and the head and wings of an eagle.',
        habitat: 'High cliffs and mountainous regions',
        dangerLevel: 7
    },
    {
        name: 'animalavatar',
        imgUrl: './img/fantasy/animal avatar.jpeg',
        position: getRandomLocation(), //positions[4],
        description: 'A mythical being with the upper body of a human and the tail of a fish.',
        habitat: 'Oceans and seas',
        dangerLevel: 3
    },
    {
        name: 'Mermaid1',
        imgUrl: './img/fantasy/mermaid.jpeg',
        position: getRandomLocation(), //positions[5],
        description: 'A mythical being with the upper body of a human and the tail of a fish.',
        habitat: 'Oceans and seas',
        dangerLevel: 3
    },
    {
        name: 'cartoon',
        imgUrl: './img/fantasy/cartoon.jpeg',
        position: getRandomLocation(), // positions[6],
        description: 'A mythical being with the upper body of a human and the tail of a fish.',
        habitat: 'Oceans and seas',
        dangerLevel: 3
    },
    {
        name: 'Mermaid',
        imgUrl: './img/fantasy/panda.jpeg',
        position: getRandomLocation(), //positions[7],
        description: 'A mythical being with the upper body of a human and the tail of a fish.',
        habitat: 'Oceans and seas',
        dangerLevel: 3
    },
    {
        name: 'frog',
        imgUrl: './img/fantasy/frog.jpeg',
        position: getRandomLocation(), //positions[8],
        description: 'A mythical being with the upper body of a human and the tail of a fish.',
        habitat: 'Oceans and seas',
        dangerLevel: 3
    },
    {
        name: 'creature1',
        imgUrl: './img/fantasy/creature1.jpeg',
        position: getRandomLocation(), //positions[9],
        description: 'A mythical being with the upper body of a human and the tail of a fish.',
        habitat: 'Oceans and seas',
        dangerLevel: 3
    }
];



function getDivElementForCreature(creature: Creatures): HTMLDivElement | undefined {
    try {
        if (!creature) throw new Error("You must insert a valid input");

        // Create the outer div
        const div = document.createElement('div');
        div.className = 'creature';
        div.style.position = 'absolute';
        div.style.width = '6.2vw';
        div.style.height = '6.2vw';
        div.onclick = () => disappear(creature.name.trim() + 'Id', event);
        div.id = creature.name.trim() + 'Id';

        // div.style.position = getRandomLocation();

        if (creature.position.top != null) div.style.top = creature.position.top;
        if (creature.position.right != null) div.style.right = creature.position.right;
        if (creature.position.left != null) div.style.left = creature.position.left;
        if (creature.position.bottom != null) div.style.bottom = creature.position.bottom;

        // Create the img element
        const img = document.createElement('img');

        img.style.cursor = 'pointer';
        img.style.position = 'absolute';
        img.style.width = '8vw';
        img.style.height = '8vh';
        img.src = creature.imgUrl;
        img?.alt = creature.description;
        // img?.id = creature.name.trim() + 'ImgId';
        // img.onclick = () => img.remove()//style.display = 'none'

        // Create the p element
        const p = document.createElement('p');
        p.style.position = 'absolute';
        p.style.display = 'flex';
        p.style.padding = '0';
        p.style.margin = '0';
        p.style.width = '0.6em';
        p.style.height = '0.6em';
        p.style.maxHeight = 'fit-content';
        p.style.maxWidth = '1rem';
        p.textContent = creature.name;

        // Append img and p to div
        div.appendChild(img);
        div.appendChild(p);

        return div;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}




function initialLoading(): void | undefined {
    try {
        const fantasyId = document.getElementById('fantasyId') as HTMLDivElement
        console.dir(fantasyId);

        if (fantasyId) {
            fantasyId.childNodes.forEach(node => {
                node.remove()
            });
            fantasyId.innerHTML = '';
            console.log('All child elements have been removed.');
        } else {
            console.warn('Element with id "fantasyId" not found.');
        }


        const creaturesModel = creatures;

        creaturesModel.forEach(e => {
            e.position = getRandomLocation();
            const divBuilder = getDivElementForCreature(e);
            fantasyId?.append(divBuilder!)
        })
    } catch (error) {
        console.error(error);
        return undefined;
    }
}



function WriteBoomGifToDom(x: number, y: number, id: string): HTMLDivElement | undefined {
    try {
        const addDiv = document.createElement('div');
        addDiv.style.width = '10px';
        addDiv.style.height = '10px';
        addDiv.style.top = `${y}px`;
        addDiv.style.left = `${x}px`;
        addDiv.style.position = 'fixed';
        addDiv.style.display = 'relative';
        addDiv.style.transform = 'translate(-3vw, -5vh)';

        // Create the img element
        const img = document.createElement('img');
        img.style.cursor = 'pointer';
        img.style.position = 'absolute';
        img.style.width = '8vw';
        img.style.height = '8vh';
        img.src = './img/boom.gif';
        img?.alt = 'some boom effect';
        addDiv.append(img)

        fantasyId?.appendChild(addDiv)


        setInterval(() => {
            img.style.display = 'none'
        }, 980)

    } catch (error) {
        console.error(error);
        return undefined
    }
}

const levelId = document.getElementById('level');
const scoreId = document.getElementById('scoreId');
var score = 0
var level = 1
console.log(levelId?.innerHTML)
console.log(scoreId?.innerHTML)




function disappear(imgId: string, event) {
    try {
        event.preventDefault();
        const element = document.querySelector<HTMLElement>(`#${imgId}`) as HTMLDivElement
        console.log(event)
        if (element) {
            element.remove();
            score += 1;
            scoreId?.innerHTML = `Score:${score}`;
            if (score % 10 == 0) level += 1;
            levelId?.innerHTML = `Level:${level}`;

            console.log(scoreId?.innerHTML)

            console.log('Element has been hidden:', element);
            WriteBoomGifToDom(event.x, event.y, imgId)

        } else {
            console.warn(`Element with id "${element}" not found.`);
        }

    } catch (error) {
        console.error(error);
        return undefined;
    }
}



function disappearOption2(id: string) {
    try {
        const element = document.getElementById(id) as HTMLDivElement //HTMLImageElement
        if (element) {
            element.style.display = 'none'
            element.innerHTML = '<div></div>';
            element.remove();
            console.log('Element has been hidden:', element);
        } else {
            console.warn(`Element with id "${element}" not found.`);
        }

    } catch (error) {
        console.error(error);
        return undefined;
    }
}


// option two to get str and write it into dom
function getDivElementForCreature2(creature: Creatures): string | undefined {
    try {
        if (!creature) throw new Error("you must insert a valid input");
        const divBuilder = `<div class="creature" 

                                style='
                                    position: absolute;
                                    width: 6.2vw;
                                    height: 6.2vw;
                                    top:${creature.position.top != null ? creature.position.top : null};
                                    right:${creature.position.right != null ? creature.position.right : null};
                                    left:${creature.position.left != null ? creature.position.left : null};
                                bottom:${creature.position.bottom != null ? creature.position.bottom : null};'>
                            <img 
                                onclick="disappear('${creature.name.trim()}Id')";
                                id="${creature.name.trim()}Id"; 
                                style='
                                cursor: pointer;
                                position: absolute; 
                                width: 6vw; 
                                height: 6vh;'
                                src='${creature.imgUrl}' alt='${creature.description}'>
                            <p style='
                                position:absolute;
                                display:flex;
                                padding: 0;
                                margin: 0;
                                width: 0.6em;
                                height: 0.6em;  
                                max-height: fit-content;
                                max-width: 1rem;'>${creature.name}</p>
                            </div>`
        return divBuilder;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}
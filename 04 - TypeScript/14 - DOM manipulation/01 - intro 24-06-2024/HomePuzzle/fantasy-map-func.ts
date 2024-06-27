
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
    }
];

// Sample data
const creatures: Creatures[] = [
    {
        name: 'Dragon',
        imgUrl: './img/fantasy/dragon.jpeg',
        position: positions[0],
        description: 'A fierce and powerful creature that breathes fire.',
        habitat: 'Mountain caves',
        dangerLevel: 10
    },
    {
        name: 'Unicorn',
        imgUrl: './img/fantasy/unicorn.jpeg',
        position: positions[1],
        description: 'A mystical horse with a single horn on its forehead.',
        habitat: 'Enchanted forests',
        dangerLevel: 2
    },
    {
        name: 'Phoenix',
        imgUrl: './img/fantasy/phoenix.jpeg',
        position: positions[2],
        description: 'A legendary bird that regenerates from its ashes.',
        habitat: 'Deserts and remote mountains',
        dangerLevel: 6
    },
    {
        name: 'Griffin',
        imgUrl: './img/fantasy/griffin.jpeg',
        position: positions[3],
        description: 'A majestic creature with the body of a lion and the head and wings of an eagle.',
        habitat: 'High cliffs and mountainous regions',
        dangerLevel: 7
    },
    {
        name: 'Mermaid',
        imgUrl: './img/fantasy/mermaid.jpeg',
        position: positions[4],
        description: 'A mythical being with the upper body of a human and the tail of a fish.',
        habitat: 'Oceans and seas',
        dangerLevel: 3
    }
];


// 
function getDivElementForCreature(creature: Creatures): string | undefined {
    try {
        if (!creature) throw new Error("you must insert a valid input");
        const divBuilder = `<div class="creature" style='
                                position: absolute;
                                width: 6.2vw;
                                height: 6.2vw;
                                top:${creature.position.top != null ? creature.position.top : null};
                                right:${creature.position.right != null ? creature.position.right : null};
                                left:${creature.position.left != null ? creature.position.left : null};
                                bottom:${creature.position.bottom != null ? creature.position.bottom : null};'>
                            <img style='
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
        return divBuilder
            ;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}


const fantasyId = document.getElementById('fantasyId') as HTMLDivElement
console.dir(fantasyId);


const creaturesModel = creatures;
creaturesModel.forEach(e => {
    const divBuilder = getDivElementForCreature(e);
    console.log(divBuilder)
    fantasyId.innerHTML += divBuilder;
})

function changePosition() {
    try {
        console.dir(fantasyId);

        creaturesModel.forEach(e => {
            const randomNumber = Math.floor(Math.random() * 5);
            console.log(randomNumber);
            const tempCreature: Creatures = e;
            tempCreature.position = positions[randomNumber];
            const divBuilder = getDivElementForCreature(tempCreature);
            fantasyId.innerHTML += divBuilder;
        })
    } catch (error) {
        console.error(error);
        return undefined
    }
}
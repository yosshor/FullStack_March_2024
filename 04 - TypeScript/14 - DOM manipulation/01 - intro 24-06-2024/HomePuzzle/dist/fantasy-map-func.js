;
var positions = [
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
    },
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
var creatures = [
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
function getDivElementForCreature(creature) {
    try {
        if (!creature)
            throw new Error("you must insert a valid input");
        var divBuilder = "<div class=\"creature\" style='\n                                position: absolute;\n                                width: 6.2vw;\n                                height: 6.2vw;\n                                top:" + (creature.position.top != null ? creature.position.top : null) + ";\n                                right:" + (creature.position.right != null ? creature.position.right : null) + ";\n                                left:" + (creature.position.left != null ? creature.position.left : null) + ";\n                                bottom:" + (creature.position.bottom != null ? creature.position.bottom : null) + ";'>\n                            <img style='\n                                cursor: pointer;\n                                position: absolute; \n                                width: 6vw; \n                                height: 6vh;'\n                                src='" + creature.imgUrl + "' alt='" + creature.description + "'>\n                            <p style='\n                                position:absolute;\n                                display:flex;\n                                padding: 0;\n                                margin: 0;\n                                width: 0.6em;\n                                height: 0.6em;  \n                                max-height: fit-content;\n                                max-width: 1rem;'>" + creature.name + "</p>\n                            </div>";
        return divBuilder;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var fantasyId = document.getElementById('fantasyId');
console.dir(fantasyId);
var creaturesModel = creatures;
creaturesModel.forEach(function (e) {
    var divBuilder = getDivElementForCreature(e);
    console.log(divBuilder);
    fantasyId.innerHTML += divBuilder;
});
function changePosition() {
    try {
        console.dir(fantasyId);
        creaturesModel.forEach(function (e) {
            var randomNumber = Math.floor(Math.random() * 5);
            console.log(randomNumber);
            var tempCreature = e;
            tempCreature.position = positions[randomNumber];
            var divBuilder = getDivElementForCreature(tempCreature);
            fantasyId.innerHTML += divBuilder;
        });
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}

// Challenge 1: Array Spread and Destructuring
// Given these arrays of superhero teams:
const avengers = ['Iron Man', 'Captain America', 'Thor'];
const guardians = ['Star-Lord', 'Gamora', 'Rocket'];

// TODO:
// 1. Create a new array 'allHeroes' that combines both teams using spread operator
const allHeroes = [...avengers, ...guardians];
console.log(allHeroes);

// 2. Destructure the first two Avengers into variables 'leader' and 'deputy'
const [leader, deputy] = allHeroes;
console.log(leader, deputy);

// 3. Get all remaining heroes using rest parameter 
const [first, second, ...restHeroes] = allHeroes;
console.log(restHeroes);

// Challenge 2: Object Spread and Destructuring
// Given these hero profile objects:

const ironMan = {
    name: 'Tony Stark',
    power: 'Genius intellect',
    suit: 'Mark 85',
    company: 'Stark Industries'
};

const extraInfo = {
    location: 'New York',
    suit: 'Mark 86',
    partner: 'War Machine'
};

// TODO:
// 1. Create a new object 'completeProfile' that combines both objects using spread
//    (notice how suit property conflicts are handled)
const completeProfile = {
    ...ironMan,
    ...extraInfo
};
const completeProfile1 = {
    ...ironMan,
    suit: `${ironMan.suit}`,
    ...extraInfo,
    suit1: `${extraInfo.suit}`
};

console.log(completeProfile);
console.log(completeProfile1);

// 2. Destructure 'name' and 'power', and collect remaining properties in 'other'
const {
    name,
    power,
    ...other
} = ironMan;
console.log(name, power, other);

// 3. Destructure 'location' with a default value of 'Unknown'
const {
    location: location1 = 'Unknown'
} = extraInfo;
console.log(location1);

// Challenge 3: Combining Both
// Create a function that takes a hero object and an array of allies
// Return a new hero object with the allies included


// is should look like this:
const thor = {
    name: 'Thor',
    power: 'Thunder',
    team: ['Valkyrie']
};


const addAllies = (hero, allies) => {
    try {
        return {
            ...hero,
            team: [...allies]
        };
    } catch (err) {
        console.log(err);
    }
}

const newHero = addAllies(thor, ['Hulk', 'Loki', 'Odin'])
console.log(newHero);
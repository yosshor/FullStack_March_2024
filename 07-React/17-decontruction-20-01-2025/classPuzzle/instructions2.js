// Challenge 1: Array Spread and Destructuring
// Given these arrays of superhero teams:
const avengers = ['Iron Man', 'Captain America', 'Thor'];
const guardians = ['Star-Lord', 'Gamora', 'Rocket'];

// TODO:
// 1. Create a new array 'allHeroes' that combines both teams using spread operator
const allHeroes = [...avengers, ...guardians];

// 2. Destructure the first two Avengers into variables 'leader' and 'deputy'
const [leader, deputy] = avengers;

// 3. Get all remaining heroes using rest parameter 
const [first, second, ...restHeroes] = allHeroes;

// Challenge 2: Object Spread and Destructuring
// Given these hero profile objects:

const ironMan = {
    name: 'Tony Stark',
    power: 'Genius intellect',
    suit: 'Mark 85',
    company: 'Stark Industries'
};

const extraInfo = {
    locations: 'New York',
    suit: 'Mark 86',
    partner: 'War Machine',
    calling: () => {
        return 'I am a function new';
    }
};

// TODO:
// 1. Create a new object 'completeProfile' that combines both objects using spread
//    (notice how suit property conflicts are handled)
const completeProfile = {
    ...ironMan,
    ...extraInfo
};
console.log(completeProfile.calling());

// const completeProfile1 = {
//     ...ironMan,
//     suit: `${ironMan.suit}`,
//     ...extraInfo,
//     suit1: `${extraInfo.suit}`
// };

// console.log(completeProfile);
// console.log(completeProfile1);

// // 2. Destructure 'name' and 'power', and collect remaining properties in 'other'
const {name, power, ...other} = ironMan;
console.log(name, power, other);
// const {
//     name,
//     power,
//     ...other
// } = ironMan;
// console.log(name, power, other);

// // 3. Destructure 'location' with a default value of 'Unknown'
const {locations: locations= "unknown"} = extraInfo;

console.log(locations);
// const {
//     location: location1 = 'Unknown'
// } = extraInfo;
// console.log(location1);

// // Challenge 3: Combining Both
// // Create a function that takes a hero object and an array of allies
// // Return a new hero object with the allies included
const addTeamIntoHero = (hero, allies) => {
    return {
        ...hero,
        team:[...allies]
    }
}
console.log(addTeamIntoHero(ironMan, ['Thor','Unkonwn']))
// // is should look like this:
// const thor = {
//     name: 'Thor',
//     power: 'Thunder',
//     team: ['Valkyrie']
// };


// const addAllies = (hero, allies) => {
//     try {
//         return {
//             ...hero,
//             team: [...allies]
//         };
//     } catch (err) {
//         console.log(err);
//     }
// }

// const newHero = addAllies(thor, ['Hulk', 'Loki', 'Odin'])
// console.log(newHero);
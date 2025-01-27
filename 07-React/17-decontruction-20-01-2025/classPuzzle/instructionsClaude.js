// Challenge 1: Array Spread and Destructuring
// Given these arrays of superhero teams:
const avengers = ['Iron Man', 'Captain America', 'Thor'];
const guardians = ['Star-Lord', 'Gamora', 'Rocket'];

// TODO:
// 1. Create a new array 'allHeroes' that combines both teams using spread operator
// 2. Destructure the first two Avengers into variables 'leader' and 'deputy'
// 3. Get all remaining heroes using rest parameter

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
// 2. Destructure 'name' and 'power', and collect remaining properties in 'other'
// 3. Destructure 'location' with a default value of 'Unknown'


// Challenge 3: Combining Both
// Create a function that takes a hero object and an array of allies
// Return a new hero object with the allies included

// is should look like this:
const thor = {
    name: 'Thor',
    power: 'Thunder',
    team: ['Valkyrie']
};


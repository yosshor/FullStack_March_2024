//primitive variables
//number, string, boolean, null, undefined, symbol

//reference variables
//object, array, function

//set -> collection of unique elements

let set = new Set();
set.add(1);
set.add(2);
set.add(1);
set.add("hello");
set.add("hello");

console.log(set); //Set { 1, 2 }

console.log(set.has(1)); //true


// enum is a type that defines a set of named constants

const enum Direction {
    up = 'UP',
    down = 'DOWN',
    left = 'LEFT',
    right = 'RIGHT'
}

console.log(Direction.left); // UP


function sayDirection(direction: Direction) {
    console.log(direction);
}

sayDirection(Direction.rightup); // type error
let aa = 45;
aa = 50;

const b = Math.random() * 100;
// b = 50; // Error: Cannot assign to 'b' because it is a constant or a read-only property.

if(aa = 70){
    console.log("a equal 70");
}

console.log("a:", a);
console.log("b:", b);


if (b === 70) {
    console.log("b equal 70");
}

console.log("b:", b);
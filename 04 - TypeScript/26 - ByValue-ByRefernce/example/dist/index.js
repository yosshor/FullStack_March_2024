var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var student = { name: 'John', age: 25 };
// shallow copy
var david = __assign({}, student); //deconstructing by value
david.name = 'David';
david.age = 20;
var orly = __assign({}, student);
orly.name = 'Orly';
orly.age = 30;
var micahel = Object.assign({}, student);
micahel.name = 'Michael';
micahel.age = 35;
var olga = new Object(student);
olga.name = 'Olga';
olga.age = 30;
console.log('david', david);
console.log('orly', orly);
console.log('micahel', micahel);
console.log('olga', olga);

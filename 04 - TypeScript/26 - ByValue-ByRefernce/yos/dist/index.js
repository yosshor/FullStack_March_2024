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
var a = 12;
var b = a;
a = 123;
console.log(b, a); // value by value
var obj = {
    name: 'Yossi',
    age: 12,
    title: 'developer'
};
var obj2 = obj;
obj.name = 'david';
console.log(obj2, obj); // object by reference
//if i want to copy object value
var obj3 = __assign({}, obj);
obj3.name = 'shalom';
console.log(obj3, obj); // object by value
//another way
var obj4 = Object.assign({}, obj);
obj.name = 'yakov';
console.log(obj4, obj); // object by value

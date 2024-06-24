var yos = {
    name: 'yos',
    age: 23,
    getAge: getAge
};
function getAge() {
    return this.age * 2;
}
console.log(yos.getAge());

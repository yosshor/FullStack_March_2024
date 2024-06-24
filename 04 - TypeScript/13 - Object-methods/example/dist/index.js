var lior = {
    name: 'Lior',
    yearOfBirth: 1998,
    getAge: getAge
};
var israel = {
    name: 'Israel',
    yearOfBirth: 1994,
    getAge: getAge
};
function getAge() {
    return new Date().getFullYear() - this.yearOfBirth;
}
console.log(lior.getAge());
console.log(lior.getAge());
console.log(israel.getAge());

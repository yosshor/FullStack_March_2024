
class Coin {
    value: number;
    name: string;

    constructor(value, name) {
        this.value = value;
        this.name = name;
    }
}

const coins: Coin[] = [
    new Coin(0.01, 'penny'),
    new Coin(0.05, 'nickel'),
    new Coin(0.1, 'dime'),
    new Coin(0.25, 'quarter'),
    new Coin(1, 'loonie'),
    new Coin(2, 'toonie')
];

const lessThanOne = coins.filter(coin =>{
    return coin.value < 1
});
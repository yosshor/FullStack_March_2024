class User {
    name: string;
    id: string;
    cart: string[];
    img: string;

    constructor(name: string, img: string) {
        this.name = name;
        this.id = crypto.randomUUID();
        this.cart = [];
        this.img = img;
    }

    signIn() {
        console.log(this.name)
    }

    addToCart(id: string) {
        this.cart.push(id)
        console.log('item added');
    }

    removeFromCart(id: string):boolean {
        const idIndex = this.cart.indexOf(id)
        if (idIndex >= 0) {
            this.cart.splice(idIndex, 1);
            console.log('item removed');
            return true;
        }
        return false
    }
    
}

const yosef = new User('Yosef', 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png');
const shemuel = new User('Shemuel', 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png');
const yakov = new User('Yakov', 'https://cdn-icons-png.flaticon.com/512/4042/4042356.png');
const michael = new User('Michael', 'https://cdn-icons-png.flaticon.com/512/7084/7084424.png');
const shelomo = new User('Shelomo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8UWsHRdJ3a1BZP7rm1fHm43sco5t8ZVKGHA&s');
const sara = new User('Sara', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tZt2GTv3xusdfAEeIuJj-Po7TUIxUEaTzw&s');

export const users = [yosef, shelomo, shemuel, yakov, michael, sara]


export default User

//model
class Player {
    id: string;
    name: string;
    yearOfBirth: number;
    img: string;
    x: number;
    y: number;

    constructor(name: string, yearOfBirth: number, img: string) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.img = img;

    }

    getAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    moveRight() {
        try {
            if (this.x === undefined) {
                this.x = 0;
            }
            if (this.y === undefined) {
                this.y = 0;
            }
            this.x += 5;
            if (this.x > 100) {
                this.x = 100;
            }
        } catch (error) {
            console.error(error)
        }

    }

    moveUp(){
        try {
            if (this.y === undefined) {
                this.y = 0;
            }
            this.y -= 5;
            if (this.y < 0) {
                this.y = 0;
            }
        } catch (error) {
            console.error(error)
        }
    
    }


}

const tonikRoss = new Player('Tonik Ross', 1989, 'Toni-Kroos.png');

console.log(tonikRoss)

console.log("Age: ", tonikRoss.getAge())
tonikRoss.setPosition(10, 20)
console.log(tonikRoss)
tonikRoss.moveRight();
console.log(tonikRoss)

const ronaldo = new Player('Ronaldo', 1985, "ronaldo.jpg");
console.log(ronaldo)
console.log("Age: ", ronaldo.getAge())
ronaldo.moveRight();
console.log(ronaldo)
ronaldo.setPosition(20, 40)


console.log(ronaldo)

const players: Player[] = [tonikRoss, ronaldo];

//view
const root = document.querySelector('#root') as HTMLElement;

function renderPlayer(player: Player, element: HTMLElement) {

    const html = `<div class="player" style="background-image:url(${player.img}); top:${player.y}%; left:${player.x}%">
    <button class="player__button player__button--up"  onclick="handleUp('${player.id}')">Up</button>
    </div>`;
    return html;

}

function renderPlayers(players: Player[], root: HTMLElement | null) {
    try {

        if (!root) {
            throw new Error('Root element not found');
        }

        let html = '';
        players.forEach(player => {
            html += renderPlayer(player, root);
        });
        root.innerHTML = html;
    } catch (error) {
        console.error(error)
    }


}

renderPlayers(players, root);

//controllers
function handleUp(id: string) {
    try {
        const player = players.find(player => player.id === id);
        if (!player) {
            throw new Error('Player not found');
        }
        player.moveUp();
        renderPlayers(players, root);
    } catch (error) {
        console.error(error)

    }
}



class Players {
    id: string;
    name: string;
    img: string;
    year: number;
    x: number;
    y: number;
    transform: string | null;
    transition: string | null;

    constructor(name: string, img: string, year: number) {
        this.name = name;
        this.img = img;
        this.year = year;
        this.x = Math.round(Math.random() * 75) + 3;
        this.y = Math.round(Math.random() * 75) + 3;
        this.id = Math.random().toString();
        this.transform = null;
        this.transition = null;
    }
    moveRight() {
        if (this.y >= 85) return;
        this.y += 10;
        this.transform = 'transform: scaleX(-1)';
        this.transition = 'transition: top 22s ease, left 5s ease';
    }
    moveLeft() {
        if (this.y >= 85) return;
        this.y -= 10;
        this.transform = 'transform: scaleX(1)';
        this.transition = 'transition: top 22s ease, left 5s ease';

    }
    moveUp() {
        if (this.x <= 10) return;
        this.x -= 10;
        this.transition = 'transition: top 22s ease, left 5s ease';

    }
    moveDown() {
        if (this.x >= 85) return;
        this.x += 10;
        this.transition = 'transition:top 22s ease, left 5s ease';

    }

}


const ronaldo = new Players("Ronaldo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipHy4eZddF2bCOpA5Afi4AOOtr8chWbixfw&s", 1233);
const messi = new Players("Messi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnStjwA0Fj6-Kb0GMrQFcGHilkl2nsvKcNA&s", 1233);
const messi2 = new Players("Messi2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM35OHIXOtJWZDTgEaZxn17ojwZnJLKzPKtA&s", 1233);
const messi3 = new Players("Messi3", "https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg", 1233);

const players = [ronaldo, messi, messi2, messi3];


function renderToDom(player: Players): string | undefined {
    try {
        console.log(player)

        if (!player) throw new Error("player not found");

        const html = `<div id="${player.id}" class="player" style='top:${player.x}%;left:${player.y}%; 
                        ${player.transition};'>
                    <span class="up" onclick=handleClick('up',${player.id})>Up</span>
                    <span class="down" onclick=handleClick('down',${player.id})>Down</span>
                    <span class="left" onclick=handleClick('left',${player.id})>Left</span>
                    <span class="right" onclick=handleClick('right',${player.id})>Right</span>
                    <img style="${player.transform}" src="${player.img}"></img>
                    </div>`
        console.log(html);
        return html;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

function handleClick(direction: string, id: string): void {
    console.log(id)
    const player = players.find(p => p.id == id);

    switch (direction) {
        case "left":
            player?.moveLeft()
            break;
        case "right":
            player?.moveRight()
            break;
        case "up":
            player?.moveUp()
            break;
        case "down":
            player?.moveDown()
            break;
    }
    renderPlayers();
    checkCollision(player);

}

function checkCollision(player: Players): void {

    players.forEach(p => {
        if (Math.abs(player.x - p.x) <= 7 && Math.abs(player.y - p.y) <= 7 && p.id !== player.id) {
            console.log(player.x, p.x);
            console.log('Auch');
            const audioSound = new Audio('./sound/aww-8277.mp3');
            audioSound.play();
        }
    })
}


function renderPlayers() {
    try {
        const playerDiv = document.getElementById('players') as HTMLDivElement;
        let html = '';
        players.forEach(p => {
            html += renderToDom(p)
        });
        playerDiv.innerHTML = html;
        return html
    } catch (error) {
        console.error(error);
    }
}

console.log(renderPlayers())
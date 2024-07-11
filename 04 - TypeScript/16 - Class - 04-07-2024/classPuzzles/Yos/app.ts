class Player {
    name: string;
    year: number;
    img: string;
    x: number;
    y: number;
    id: string;

    constructor(name: string, year: number, img: string) {
        this.name = name;
        this.year = year;
        this.img = img;
        this.id = Math.random().toString();
        this.x = Math.round(Math.random() * 100);
        this.y = Math.round(Math.random() * 100);
    }


    moveRight() {
        try {
            this.y += 5
        } catch (error) {
            console.error(error)
            return undefined;
        }
    }



}

const player: Player = new Player('Efrat', 1988, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s');
const player1: Player = new Player('Efrat', 1988, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s');
const player2: Player = new Player('Efrat', 1988, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s');


//model
const players = [player, player1, player2]

//view
function renderToDom(player: Player) {
    try {
        return `<div id=${player.id} class='player' onclick="handleMoveRight('${player.id}')" 
                style='top:${player.x}vw;left:${player.y}vh;'> 
                <img src='${player.img}'></img> </div>`
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

function handleMoveRight(id: string) {
    try {
        const player = players.find(p => p.id === id);
        if (!player) throw new Error("Player not found");
        player.moveRight();
        renderPlayers();

    } catch (error) {
        console.error(error);
    }
}


//controller 
function renderPlayers(): void | undefined {
    try {
        const playersDiv = document.getElementById('players') as HTMLDivElement;
        let html = '';
        players.forEach(player => {
            console.log(player);
            html += renderToDom(player);
        })

        playersDiv.innerHTML = html;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

renderPlayers();
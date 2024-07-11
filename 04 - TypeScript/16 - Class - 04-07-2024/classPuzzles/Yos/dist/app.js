var Player = /** @class */ (function () {
    function Player(name, year, img) {
        this.name = name;
        this.year = year;
        this.img = img;
        this.id = Math.random().toString();
        this.x = Math.round(Math.random() * 100);
        this.y = Math.round(Math.random() * 100);
    }
    Player.prototype.moveRight = function () {
        try {
            this.y += 5;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    };
    return Player;
}());
var player = new Player('Efrat', 1988, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s');
var player1 = new Player('Efrat', 1988, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s');
var player2 = new Player('Efrat', 1988, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s');
//model
var players = [player, player1, player2];
//view
function renderToDom(player) {
    try {
        return "<div id=" + player.id + " class='player' onclick=\"handleMoveRight('" + player.id + "')\" \n                style='top:" + player.x + "vw;left:" + player.y + "vh;'> \n                <img src='" + player.img + "'></img> </div>";
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function handleMoveRight(id) {
    try {
        var player_1 = players.find(function (p) { return p.id === id; });
        if (!player_1)
            throw new Error("Player not found");
        player_1.moveRight();
        renderPlayers();
    }
    catch (error) {
        console.error(error);
    }
}
//controller 
function renderPlayers() {
    try {
        var playersDiv = document.getElementById('players');
        var html_1 = '';
        players.forEach(function (player) {
            console.log(player);
            html_1 += renderToDom(player);
        });
        playersDiv.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
renderPlayers();

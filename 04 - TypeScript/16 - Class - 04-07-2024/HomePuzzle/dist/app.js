var Players = /** @class */ (function () {
    function Players(name, img, year) {
        this.name = name;
        this.img = img;
        this.year = year;
        this.x = Math.round(Math.random() * 75) + 3;
        this.y = Math.round(Math.random() * 75) + 3;
        this.id = Math.random().toString();
        this.transform = null;
        this.transition = null;
    }
    Players.prototype.moveRight = function () {
        if (this.y >= 85)
            return;
        this.y += 10;
        this.transform = 'transform: scaleX(-1)';
        this.transition = 'transition: top 22s ease, left 5s ease';
    };
    Players.prototype.moveLeft = function () {
        if (this.y >= 85)
            return;
        this.y -= 10;
        this.transform = 'transform: scaleX(1)';
        this.transition = 'transition: top 22s ease, left 5s ease';
    };
    Players.prototype.moveUp = function () {
        if (this.x <= 10)
            return;
        this.x -= 10;
        this.transition = 'transition: top 22s ease, left 5s ease';
    };
    Players.prototype.moveDown = function () {
        if (this.x >= 85)
            return;
        this.x += 10;
        this.transition = 'transition:top 22s ease, left 5s ease';
    };
    return Players;
}());
var ronaldo = new Players("Ronaldo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipHy4eZddF2bCOpA5Afi4AOOtr8chWbixfw&s", 1233);
var messi = new Players("Messi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnStjwA0Fj6-Kb0GMrQFcGHilkl2nsvKcNA&s", 1233);
var messi2 = new Players("Messi2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM35OHIXOtJWZDTgEaZxn17ojwZnJLKzPKtA&s", 1233);
var messi3 = new Players("Messi3", "https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg", 1233);
var players = [ronaldo, messi, messi2, messi3];
function renderToDom(player) {
    try {
        console.log(player);
        if (!player)
            throw new Error("player not found");
        var html = "<div id=\"" + player.id + "\" class=\"player\" style='top:" + player.x + "%;left:" + player.y + "%; \n                        " + player.transition + ";'>\n                    <span class=\"up\" onclick=handleClick('up'," + player.id + ")>Up</span>\n                    <span class=\"down\" onclick=handleClick('down'," + player.id + ")>Down</span>\n                    <span class=\"left\" onclick=handleClick('left'," + player.id + ")>Left</span>\n                    <span class=\"right\" onclick=handleClick('right'," + player.id + ")>Right</span>\n                    <img style=\"" + player.transform + "\" src=\"" + player.img + "\"></img>\n                    </div>";
        console.log(html);
        return html;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function handleClick(direction, id) {
    console.log(id);
    var player = players.find(function (p) { return p.id == id; });
    switch (direction) {
        case "left":
            player === null || player === void 0 ? void 0 : player.moveLeft();
            break;
        case "right":
            player === null || player === void 0 ? void 0 : player.moveRight();
            break;
        case "up":
            player === null || player === void 0 ? void 0 : player.moveUp();
            break;
        case "down":
            player === null || player === void 0 ? void 0 : player.moveDown();
            break;
    }
    renderPlayers();
    checkCollision(player);
}
function checkCollision(player) {
    players.forEach(function (p) {
        if (Math.abs(player.x - p.x) <= 7 && Math.abs(player.y - p.y) <= 7 && p.id !== player.id) {
            console.log(player.x, p.x);
            console.log('Auch');
            var audioSound = new Audio('./sound/aww-8277.mp3');
            audioSound.play();
        }
    });
}
function renderPlayers() {
    try {
        var playerDiv = document.getElementById('players');
        var html_1 = '';
        players.forEach(function (p) {
            html_1 += renderToDom(p);
        });
        playerDiv.innerHTML = html_1;
        return html_1;
    }
    catch (error) {
        console.error(error);
    }
}
console.log(renderPlayers());

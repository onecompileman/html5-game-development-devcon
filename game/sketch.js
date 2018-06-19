
let gameManager;

function setup() {
    createCanvas(400, 600);
    gameManager = new GameManager();
}

function draw() {
    background(0);
    gameManager.render();
} 

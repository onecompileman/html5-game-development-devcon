
var gameManager;

function setup() {
    createCanvas(400,600);
    gameManager = new GameManager();
}

function draw() {
    // console.log('hahaha');
    background(0);    
    gameManager.render();
}

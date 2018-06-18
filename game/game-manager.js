class GameManager {

    constructor() {
        const playerPosition = createVector(width / 2, height - 50);
        const playerSize = createVector(50,50);
        this.player = new Player(playerPosition,3,playerSize);
    }

    render() {
        this.playerRender();
    }



    playerRender() {
        this.player.update();
        this.player.render();
    }

}
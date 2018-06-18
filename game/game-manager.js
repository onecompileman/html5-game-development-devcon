class GameManager {
    
    constructor() {
        this.player = new Player(createVector(0,height - 50), 3, 50, 50);
    }

    render() {
       this.player.update();
       this.player.render(); 
    }
}
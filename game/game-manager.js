class GameManager {

    constructor() {
        const playerPosition = createVector(width / 2, height - 50);
        const playerSize = createVector(50,50);
        this.player = new Player(playerPosition,3,playerSize);
        this.enemies = [new Enemy(createVector(50,50), 3, playerSize)]; 
        this.bullets = [];
    }

    render() {
        this.enemiesRender();
        this.fireBullet();
        this.bulletsRender();
        this.playerRender();        
    }

    playerRender() {
        this.player.update();
        this.player.render();
    }

    fireBullet() {
        if (frameCount % 10 === 0) {
            const playerPosition = this.player.position.copy();
            playerPosition.y -= 20;
            const bulletSize = createVector(10,10);
            const bulletVelocity = createVector(0, -5);

            this.bullets.push(new Bullet(playerPosition, bulletSize, bulletVelocity));
        }
    }

    bulletsRender() {
        this.bullets = this.bullets.filter(bullet => {
			bullet.update();
			bullet.render();
            return bullet.onEdge();
		});
    }

    enemiesRender() {
        this.enemies.forEach(enemy => {
            enemy.update();
            enemy.render();
        });
    }

}
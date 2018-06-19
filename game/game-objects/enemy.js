class Enemy {

    constructor(position, life, size) {
        this.position = position;
        this.life = life;
        this.size = size;
    }

    render() {
        const halfSize = this.size.x / 2;
        const quaterSize = (this.size.x / 4) + 2;
        push();
        translate(this.position.x, this.position.y);
        rotate(frameCount / 10);    
        rectMode(CENTER);
        fill(200);
        rect(-quaterSize, quaterSize, halfSize, halfSize);
        rect(quaterSize, -quaterSize, halfSize, halfSize);
        rect(-quaterSize, -quaterSize, halfSize, halfSize);
        rect(quaterSize, quaterSize, halfSize, halfSize);
        fill(250,100,100);
        ellipseMode(CENTER);
        ellipse(0, 0,halfSize, halfSize);
        pop();
    }

    update() {

    }

}
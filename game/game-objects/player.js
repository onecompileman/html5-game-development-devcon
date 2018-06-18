class Player {

    constructor(position, life, height, width) {
        this.position = position;
        this.life = life;     
        this.height = height;
        this.width = width;
    }

    render() {
        push();
        const { x, y } = this.position;
        fill(color(255));
        ellipseMode(CENTER);
        translate(x,y);
        ellipse(0, 0, this.width, this.height);
        pop();
    }

    update() {
        this.position.x = constrain(mouseX, 25, width - 25);
    }

}
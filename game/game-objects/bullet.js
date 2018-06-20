class Bullet extends GameObject {

    constructor(position, size, velocity) {
        super(position, size, velocity);
    }

    render() {
        push();
        translate(this.position.x, this.position.y);
        ellipseMode(CENTER);
        fill(100,200,150);
        ellipse(0,0,this.size.x,this.size.y);
        pop();
    }

    update() {
        this.position.add(this.velocity);
    }

}
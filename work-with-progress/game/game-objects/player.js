class Player {

    constructor(position, life, size) {
        this.position = position;
        this.life = life;
        this.size = size;
    }

    render() {
       
        push();
        translate(this.position.x, this.position.y - 25);
        fill(color(150,100,200));
        rectMode(CENTER);
        rect(0,0, 10, 30);
        pop();

        push();
        translate(this.position.x - 15, this.position.y - 25);
        fill(color(150, 100, 200));
        rectMode(CENTER);
        rect(0, 0, 10, 30);
        pop();

        push();
        translate(this.position.x + 15, this.position.y - 25);
        fill(color(150, 100, 200));
        rectMode(CENTER);
        rect(0, 0, 10, 30);
        pop();

        // player body
        push();
        translate(this.position.x, this.position.y);
        fill(255);
        ellipseMode(CENTER);
        ellipse(0, 0, this.size.x, this.size.y);
        pop();
       
        // player body
        push();
        translate(this.position.x, this.position.y);
        fill(color(255,100,100));
        ellipseMode(CENTER);
        ellipse(0, 0, this.size.x / 2, this.size.y / 2);
        pop();


    }

    update() {
        const {x,y} = this.size;
        this.position.x = constrain(mouseX, (x/2), width - (x/2));
    }

}
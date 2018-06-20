class GameObject {

    constructor(position, size, velocity) {
        this.position = position;
        this.size = size;
        this.velocity = velocity || createVector(0,0);
    }
}
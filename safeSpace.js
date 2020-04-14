class Safespace {
    constructor(x, y, dx, dy, playerSize, color, ballArray, collision) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.playerSize = playerSize;
        this.color = color;
        this.ballArray = ballArray;
       this.collision = collision;
    }

    draw () {
        c.beginPath();
        c.arc(this.x, this.y, this.playerSize, 0, Math.PI * 2);
        c.strokeStyle = this.color;
        c.stroke();
        c.closePath();

    }
    update () {
        if (this.x + this.playerSize >= canvas.width || this.x - this.playerSize < 0) {
            this.dx = -this.dx;
        };
        if (this.y >= canvas.height - this.playerSize || this.y - this.playerSize < 0) {
            this.dy = - this.dy;
        };
    


        this.draw();
    }

}
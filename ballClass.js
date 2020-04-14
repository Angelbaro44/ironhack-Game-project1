class Circle extends Safespace {


    update() {
        if (this.x + this.playerSize >= canvas.width || this.x - this.playerSize < 0) {
            this.dx = -this.dx;
        };
        if (this.y >= canvas.height - this.playerSize || this.y - this.playerSize < 0) {
            this.dy = - this.dy;
        };
  
        this.x += this.dx;
        this.y += this.dy;
        // //MoveHover
        /*if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.playerSize < 40) {
                this.playerSize += 3;
            }
        }
        else {
            if (this.playerSize > 6) this.playerSize--
        };*/

        this.draw();
    }
}
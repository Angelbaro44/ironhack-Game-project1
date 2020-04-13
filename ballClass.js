function Circle (x,y,dx,dy,playerSize,color,ballArray,collision){ 
    this.x = x;
    this.y = y;
    this.dx = Math.random() * (dx * 3);
    this.dy = Math.random() * (dy * 3);
    this.playerSize = playerSize;
    this.color = color;
    this.ballArray = ballArray;
    this.collision = collision;
    this.draw =function () {
        c.beginPath();
        c.arc(this.x, this.y, this.playerSize, 0, Math.PI*2);
        c.strokeStyle = this.color;
        // console.log(this.color)
        c.stroke();
        c.closePath();

    }
    this.update = function (){
        if (this.x + this.playerSize >= canvas.width || this.x - this.playerSize < 0){
            this.dx = -this.dx;
            // strobeLight();
            };
        if (this.y >= canvas.height - this.playerSize || this.y - this.playerSize < 0){
                this.dy = - this.dy;
                // strobeLight();
                };
        for (let i = 0; i < this.ballArray.length; i++) {
            if(this === this.ballArray[i]) {continue}  
            if (this.collision(this.x,this.y,this.ballArray[i].x,this.ballArray[i].y) - (this.playerSize * 2) < 5){
               this.ballArray.splice(i,1);
        }
    }
            this.x += this.dx;
            this.y += this.dy;
// //MoveHover
                if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y <50 && mouse.y - this.y > -50) {
                    if(this.playerSize < 40){
                      this.playerSize +=3;}
                }
                 else {
                     if(this.playerSize > 6)this.playerSize--
               };
        
            this.draw();
    }
}
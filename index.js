var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas)
var c = canvas.getContext('2d');





function Circle (x,y,dx,dy,playerSize,color){ 
    this.x = x;
    this.y = y;
    this.dx = Math.random() * (dx * 3);
    this.dy = Math.random() * (dy * 3)
    this.playerSize = playerSize;
    this.color = color

    this.draw =function () {
        c.beginPath();
        c.arc(this.x, this.y, this.playerSize, 0, Math.PI*2);
        c.fillStyle = this.color;
        console.log(this.color)
        c.fill();
        c.closePath();

    }
    this.update = function (){
        if (this.x + this.playerSize >= canvas.width || this.x - this.playerSize < 0){
            this.dx = -this.dx;
            // strobeLight();
            }
        if (this.y >= canvas.height - this.playerSize || this.y - this.playerSize < 0){
                this.dy = - this.dy;
                // strobeLight();
                }
            // this.x += this.dx;
            // this.y += this.dy;

            this.draw();
    }
}


var ballArray = [];

for (let i = 0; i < 100; i++) {
    let playerSize= 30;
    let x = Math.random()*(canvas.width - playerSize*2)+playerSize;
    let y = Math.random()*(canvas.height - playerSize*2)+playerSize;
    let dx = 5;
    let dy =5;
   ballArray.push(new Circle(x,y,dx,dy,playerSize,getRndColor()));
    console.log(ballArray)
}

function animate (){
 requestAnimationFrame(animate)
 c.clearRect(0,0,canvas.width,canvas.height);
 for (let i = 0; i < ballArray.length; i++) {
     ballArray[i].update();
     
 }
}

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0,
        o = Math.random() + .1;
    return 'rgb(' + r + ',' + g + ',' + b + ','+o+')';
}
animate()


function strobeLight () {
    c.beginPath
    c.fillStyle='rgba(0,0,0,.5)'
    c.fillRect(0,0,canvas.width,canvas.height)
    c.closePath
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
  
    for(let i =0; i<50; i++){
                c.beginPath
                c.fillStyle ='rgba(255,0,0,.4)';
                c.fillRect(x,y,100,100);
                c.stroke();
                c.closePath
            }
            for(let i =0; i<30; i++){
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                    c.beginPath
                    c.fillStyle = 'rgba(0,255,0,.4)';
                    c.fillRect(x,y,100,100);
                    c.stroke();
                    c.closePath
                }
                for(let i =0; i<30; i++){
                    let x = Math.random() * canvas.width;
                    let y = Math.random() * canvas.height;
                        c.beginPath
                        c.fillStyle = 'rgba(0,0,255,.4)';
                        c.fillRect(x,y,100,100);
                        c.stroke();
                        c.closePath
                    }
                    for(let i =0; i<30; i++){
                        let x = Math.random() * canvas.width;
                        let y = Math.random() * canvas.height;
                            c.beginPath
                            c.fillStyle = 'rgba(255,255,255,1';
                            c.fillRect(x,y,50,50);
                            c.stroke();
                            c.closePath
                        }
                        for(let i =0; i<50; i++){
                            let x = Math.random() * canvas.width;
                            let y = Math.random() * canvas.height;
                                c.beginPath
                                c.fillStyle = 'rgba(0,0,0,.3';
                                c.fillRect(x,y,25,25);
                                c.stroke();
                                c.closePath
                            }
                        }

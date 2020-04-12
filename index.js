var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas)

var c = canvas.getContext('2d');
let playerSize= 30;
let x = 200;
let y = 200;
dx = 5;
dy =5;
 // c.beginPath
 // c.fillStyle ='rgba(0,0,0,1)';
 // c.fillRect(x,y,100,100);
// c.stroke()
        
function animate (){
 requestAnimationFrame(animate)
 c.clearRect(0,0,canvas.width,canvas.height); 
  
//  c.beginPath;
//  c.arc(x,y,playerSize,0,Math.PI * 2,false); 
//  c.fillStyle='rgba(200,0,0,1)';
//  c.stroke();

 c.beginPath;
 c.fillStyle ='rgba(0,0,0,1)';
 c.fillRect(x,y,playerSize,playerSize);
 c.stroke();
x+=dx;
y+=dy;
// console.log(x);
console.log(y)

if (x>= canvas.width - playerSize || x < 0){
dx = -dx;
strobeLight();
}
if (y >= canvas.height - playerSize || y < 0){
    dy = -dy;
    strobeLight();
    }
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

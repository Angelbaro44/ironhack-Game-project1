var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas)
var c = canvas.getContext('2d');

// var mouse = { x: undefined, y: undefined };
// document.addEventListener('mousemove', (event) => {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     console.log(mouse)
// })







var ballArray = [];
const safeZone = new Safespace(canvas.width / 2, canvas.height / 2, 0, 0, 100, getRndColor(), ballArray, collision)
ballArray.push(safeZone)
function init(params) {
    for (let i = 0; i < 20; i++) {
        // let playerSize = (Math.random() + .3) * 6;
        let playerSize = 20;
        let x = Math.random() * (canvas.width - playerSize * 2) + playerSize;
        let y = Math.random() * (canvas.height - playerSize * 2) + playerSize;
        let dx = Math.random()  * 1.5;
        let dy = Math.random() * 1.5;

        if (i !== 0) {
            for (let j = 0; j < ballArray.length; j++) {
                console.log(collision(x,y,ballArray[j].x,ballArray[j].y) - playerSize * 2 )
                console.log(playerSize)
                if (collision(x, y, ballArray[j].x, ballArray[j].y, playerSize, ballArray[j].playerSize)) {
                    x = Math.random() * (canvas.width - playerSize * 2) + playerSize;
                    y = Math.random() * (canvas.height - playerSize * 2) + playerSize;
                    j = -1

                }

            }

        }
        ballArray.push(new Circle(x, y, dx, dy, playerSize, getRndColor(), ballArray, collision));

    }
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);
    ballArray.forEach((ball, ind) => {
        ball.update()
        for(let i=ind+1; i < ballArray.length; i++) {
            if (collision(ball.x, ball.y, ballArray[i].x, ballArray[i].y, ball.playerSize, ballArray[i].playerSize) === true) {
                ball.dx = -ball.dx;
                ball.dy = -ball.dy;
                ballArray[i].dx = -ballArray[i].dx;
                ballArray[i].dy = -ballArray[i].dy;

            }
        }
    });
    // safeZone.update()
    // safeZone()
    // strobeLight();
}
//(x2-x1)**2 + (y2-y1)**2 <= (r2+r1)**2

function collision(x1, y1, x2, y2, r1, r2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    // console.log((xDistance ** 2) + (yDistance ** 2) + (r2+r1))
    // return ((xDistance ** 2) + (yDistance ** 2) + (r2+r1))
    return ((xDistance ** 2) + (yDistance ** 2) <= (r2+r1)**2)
}

function getRndColor() {
    var r = 255 * Math.random() | 0,
        g = Math.random() | 0,
        b = 255 * Math.random() | 0,
        o = Math.random() + .4;
    return 'rgb(' + r + ',' + g + ',' + b + ',' + o + ')';
}
// safeZone();
init();
animate();


// function strobeLight () {
//     c.beginPath
//     c.fillStyle='rgba(0,0,0,.5)'
//     c.fillRect(0,0,canvas.width,canvas.height)
//     c.closePath
//     let x = Math.random() * canvas.width;
//     let y = Math.random() * canvas.height;

//     for(let i =0; i<50; i++){
//                 c.beginPath
//                 c.fillStyle ='rgba(255,0,0,.4)';
//                 c.fillRect(x,y,100,100);
//                 c.stroke();
//                 c.closePath
//             }
//     for(let i =0; i<30; i++){
//                 let x = Math.random() * canvas.width;
//                 let y = Math.random() * canvas.height;
//                     c.beginPath
//                     c.fillStyle = 'rgba(0,255,0,.4)';
//                     c.fillRect(x,y,100,100);
//                     c.stroke();
//                     c.closePath
//                 }
//     for(let i =0; i<30; i++){
//                     let x = Math.random() * canvas.width;
//                     let y = Math.random() * canvas.height;
//                         c.beginPath
//                         c.fillStyle = 'rgba(0,0,255,.4)';
//                         c.fillRect(x,y,100,100);
//                         c.stroke();
//                         c.closePath
//                     }
//     for(let i =0; i<30; i++){
//                         let x = Math.random() * canvas.width;
//                         let y = Math.random() * canvas.height;
//                             c.beginPath
//                             c.fillStyle = 'rgba(255,255,255,1';
//                             c.fillRect(x,y,50,50);
//                             c.stroke();
//                             c.closePath
//                         }
//      for(let i =0; i<50; i++){
//                             let x = Math.random() * canvas.width;
//                             let y = Math.random() * canvas.height;
//                                 c.beginPath
//                                 c.fillStyle = 'rgba(0,0,0,.3';
//                                 c.fillRect(x,y,25,25);
//                                 c.stroke();
//                                 c.closePath
//                             }
//                         }

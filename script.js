const canvas= document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// canvas.width = 200;
// canvas.width = window.innerWidth;

// fill Rect()

// ctx.fillStyle ="red";
// ctx.fillRect(20,20,150,100);

// ctx.fillStyle ="blue";
// ctx.fillRect(200,20,150,100);

// //stroke Rect()

// ctx.lineWidth = 5;
// ctx.strokeStyle='green';
// ctx.strokeRect(100, 200, 150, 100);

// //clear Rect()

// ctx.clearRect(205,25,140,90)

// //fillText()

// ctx.font = '30px Arial';
// ctx.fillStyle = 'purple';
// ctx.fillText('Hello World', 400, 50);

// //strokeText
// ctx.lineWidth=1;
// ctx.strokeStyle= 'orange';
// ctx.strokeText('Hello World', 400 , 150)


// //Paths

// ctx.beginPath();
//  ctx.moveTo(50,50);
//  ctx.lineTo(150,50);
//  ctx.lineTo(100,200);
//  ctx.lineTo(50,50);
// //ctx.closePath();
// //ctx.stroke();
// ctx.fillStyle= 'coral';
// ctx.fill();


// ctx.beginPath();
// ctx.moveTo(200,50);
// ctx.lineTo(150,200);
// ctx.lineTo(250,200);
// ctx.lineTo(200,50);
// // ctx.stroke();
// ctx.fillStyle='purple';
//  ctx.fill();


//  // rectange
//  ctx.beginPath();
// ctx.rect(300,50, 150, 100);
// ctx.fillStyle='yellow';
// ctx.fill();


// //arcs (circles)
// ctx.beginPath();

// // ctx.arc(100, 100, 40, 0, Math.PI * 2);
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// // Draw head
// ctx.arc(centerX, centerY, 200 , 0, Math.PI * 2);

// // Move to Mouth
// ctx.moveTo(centerX + 100, centerY);

// // draw mouth
// ctx.arc(centerX, centerY,100, 0, Math.PI, false);

// //move to left eye
// ctx.moveTo(centerX - 60, centerY - 80);

// //draw left eye
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI *2 );

// // move to right eye
// ctx.moveTo(centerX + 100, centerY - 80);
// //draw right eye
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI *2 );

// ctx.stroke();


// //QUadratic curve
// ctx.moveTo(75,25);
// ctx.quadraticCurveTo(25, 25 , 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50,120,30,125);
// ctx.quadraticCurveTo(60,120,65,100);
// ctx.quadraticCurveTo(125, 100, 125,62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);

// ctx.stroke();

// //Animation 1

// const circle = {
//     x: 200,
//     y: 200,
//     size: 30,
//     dx: 5,
//     dy: 4
// }

// function drawCircle() {
//  ctx.beginPath();
//  ctx.arc(circle.x,circle.y,circle.size, 0, Math.PI * 2);
//  ctx.fillStyle= "purple";
//  ctx.fill();
// }

// function update() {
//  ctx.clearRect(0, 0, canvas.width, canvas.height);

//     drawCircle();

//     // change Position
//     circle.x += circle.dx;
//     circle.y += circle.dy;

//     //Delete side walls
//     if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0){
//         circle.dx *= -1; // circle.dx= circle.dx * -1
//     }
//     //Detect top and bottom wall
//     if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0){
//         circle.dy *= -1; 
//     }
//     requestAnimationFrame(update);
// }

// update();

// Animation 2 character

const image = document.getElementById('source');

const player = {
    w: 50,
    h: 70,
    x:20,
    y: 200,
    speed:10,
    dx: 4,
    dy: 0
};

function drawImage() {
    ctx.drawImage(image, player.x, player.y, player.w, player.h);

}

function clear(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

function newPos() {
    player.x += player.dx;
    player.y += player.dy;

    detectWalls();
}

function detectWalls(){
    //Left Wall
    if(player.x < 0) {
        player.x = 0;
    }
    //Right Wall
    if(player.x + player.w > canvas.width){
        player.x = canvas.width - player.w;
    }
    //Top Wall
    if(player.y < 0){
        player.y = 0;
    }
    //Bottom Wall
    if(player.y + player.h > canvas.height){
        player.y = canvas.height - player.h;
    }
}

function update() {
    clear();
    drawImage();
    newPos();
    requestAnimationFrame(update);
}

function moveUp(){
    player.dy = -player.speed;
}
function moveDown(){
    player.dy = player.speed;
}
function moveLeft(){
    player.dx = -player.speed;
}
function moveRight(){
    player.dx = player.speed;
}

function keyDown(e){
    if(e.key === 'ArrowRight' || e.key === 'Right'){
moveRight();
    }else if(e.key === 'ArrowLeft' || e.key === 'Left'){
        moveLeft();
    }else if(e.key === 'ArrowUp' || e.key === 'Up'){
        moveUp();
    }else if(e.key === 'ArrowDown' || e.key === 'Down'){
        moveDown();
    }
}

function keyUp(e){
    if(e.key == 'Right' || e.key == 'ArrowRight' || e.key == 'Left' || e.key =='ArrowLeft' || e.key == 'up' ||  e.key == 'ArrowUp' || e.key == ' Down' || e.key=='ArrowDown'){
      player.dx = 0;
      player.dy = 0;  
    }
}


update();

document.addEventListener('keydown',keyDown)
document.addEventListener('keyup',keyUp)



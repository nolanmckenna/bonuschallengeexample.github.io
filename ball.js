var velocity = 100;
var velocity2 = 200;
var positionX = 0;
var positionY = 0;
var positionX2 = 0;
var positionY2 = 0;
var ball = document.getElementById('ball');
var ball2 = document.getElementById('ball2');
var reverse = false;

function moveBall(){
    var Xmin = 0;
    var Xmax = 300;
    var Ymin = 0;
    var Ymax = 300;
    if(reverse === true) {
        positionX -= velocity;
        positionY -= velocity;
    }else{
        positionX += velocity;
        positionY += velocity;
    };

    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';

    if(positionX > Xmax || positonX === Xmin || positionY > Ymax || PositionY === Ymin) {
        reverse = !reverse;
    };
};

setInterval(moveBall, 100);


function moveBall2(){
    var X2min = 600;
    var X2max = 900;
    var Y2min = 600;
    var Y2max = 900;
    if(reverse === true){
        PositionX2 -= velocity2;
        PositionY2 -= velocity2;
        
    }else{
        positionX += velocity2;
        positionY += velocity2;
    };

    ball2.style.left = positionX2 + 'px';
    ball2.style.top = positionY + 'px';

    if(positionX2 > X2max || positonX2 === X2min || positionY2 > Y2max || PositionY2 === Y2min) {
        reverse = !reverse;
    };



};
setInterval(moveBall2, 300);

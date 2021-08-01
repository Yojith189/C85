canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var back_img="mars.jpg";

rover_img="rover.png";
Rv_X = 10;
Rv_Y = 10;

Rv_width = 90;
Rv_height = 89;


function add(){
    background_img= new Image();
    background_img.src= back_img;
    background_img.onload=uploadBackground ;

    Marsrov_img = new Image();
    Marsrov_img.src = rover_img;
    Marsrov_img.onload = uploadImage;


}
function uploadBackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);

}
function uploadImage(){
    ctx.drawImage(Marsrov_img ,Rv_X,Rv_Y,Rv_width,Rv_height);
}

window.addEventListener("keydown", myPreciousKeydown);

function myPreciousKeydown(e){
WhenKeyPressed= e.keyCode;
console.log(WhenKeyPressed);

if(WhenKeyPressed == '87'){
Up();
console.log("W");
}
if(WhenKeyPressed == '83'){
    Down();
    console.log("S");
    }
    if(WhenKeyPressed == '65'){
        Left();
        console.log("A");
        }
        if(WhenKeyPressed == '68'){
            Right();
            console.log("D");
            }
}
function Up(){
if(Rv_Y >= 7){
Rv_Y = Rv_Y-7;
console.log("The X ="+ Rv_X+"And Y =" +Rv_Y);
uploadBackground();
uploadImage();
}

}
function Down(){
    if(Rv_Y <= 500){
        Rv_Y = Rv_Y+7;
        console.log("The X ="+ Rv_X+"And Y =" +Rv_Y);
        uploadBackground();
        uploadImage();
        }
}
function Left(){
    if(Rv_X >= 2){
        Rv_X = Rv_X-7;
        console.log("The X ="+ Rv_X+"And Y =" +Rv_Y);
        uploadBackground();
        uploadImage();
        }
}
function Right(){
    if(Rv_X <= 830){
        Rv_X = Rv_X+7;
        console.log("The X ="+ Rv_X+"And Y =" +Rv_Y);
        uploadBackground();
        uploadImage();
        }
}















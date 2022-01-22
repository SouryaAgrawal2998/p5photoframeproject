function preload(){
 myimage= loadImage("https://i.postimg.cc/wjsYNT08/oslcyof.png");
  
}
function setup(){
mycanvas= createCanvas(600,300);
    mycanvas.center();
    
}
function draw(){
    fill(255,0,0);
    noFill();
    stroke("#FFEF00");
    strokeWeight(10);
    rect(50,50,500,200);
    //stroke("#FFEF00");
   // strokeWeight(10);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,50,50);
    circle(50,250,50,50);
    circle(550,50,50,50);
    circle(550,250,50,50);
    image(myimage,250,100,50,50);
}
function take_snapshot(){

}
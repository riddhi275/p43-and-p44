var pin1;
var pin_img;

var pin2;
var pin_img;

var pin3;
var pin_img;

var pin4;
var pin_img;

var pin5;
var pin_img;

var pin6;
var pin_img;

var pin7;
var pin_img;

var pin8;
var pin_img;

var pin9;
var pin_img;

var pin10;
var pin_img;

var bowl;
var bowl_img;

function preload()
{
  pin_img = loadImage("pin.png");
  pin_img = loadImage("pin.png");
  pin_img = loadImage("pin.png");
  pin_img = loadImage("pin.png");
  pin_img = loadImage("pin.png");
  pin_img = loadImage("pin.png");
  pin_img = loadImage("pin.png");
  pin_img = loadImage("pin.png");
  pin_img = loadImage("pin.png");
  pin_img = loadImage("pin.png");
  bowl_img = loadImage("bowl.png");
}

function setup() 
{
  createCanvas(displayWidth, displayHeight);
  
  pin1 = createSprite(200, 200);
  pin1.addImage(pin_img);
  pin1.scale = 0.8;

  pin2 = createSprite(250, 250);
  pin2.addImage(pin_img);
  pin2.scale = 0.8;

  pin3 = createSprite(260, 260);
  pin3.addImage(pin_img);
  pin3.scale = 0.8;

  pin4 = createSprite(240, 240);
  pin4.addImage(pin_img);
  pin4.scale = 0.8;

  pin5 = createSprite(280, 280);
  pin5.addImage(pin_img);
  pin5.scale = 0.8;

  pin6 = createSprite(200, 200);
  pin6.addImage(pin_img);
  pin6.scale = 0.8;

  pin7 = createSprite(200, 200);
  pin7.addImage(pin_img);
  pin7.scale = 0.8;

  pin8 = createSprite(200, 200);
  pin8.addImage(pin_img);
  pin8.scale = 0.8;

  pin9 = createSprite(200, 200);
  pin9.addImage(pin_img);
  pin9.scale = 0.8;

  pin10 = createSprite(200, 200);
  pin10.addImage(pin_img);
  pin10.scale = 0.8;

  

  bowl = createSprite(300, 400);
  bowl.addImage(bowl_img);
  bowl.scale = 0.3;

}

function draw() 
{
  background(0);

  bowl.x = mouseX;
  bowl.y = mouseY;
  
  drawSprites();
}















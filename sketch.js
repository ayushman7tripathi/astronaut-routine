
function preload() {
 bg = loadImage("images/iss.png");
 sleep = loadImage("images/sleep.png");
 brush = loadImage("images/brush.png");
 gym = loadAnimation("images/gym1.png","images/gym2.png");
 gym1 = loadAnimation("images/gym11.png","images/gym12.png");
 eat = loadAnimation("images/eat1.png","images/eat2.png");
 drink = loadAnimation("images/drink1.png","images/drink2.png");
 move = loadAnimation("images/move.png","images/move1.png");
 bath = loadAnimation("images/bath1","images/bath2");
}

function setup() {
 createCanvas(400, 400);
 
 spaceship = createSprite(20,20,300,200);
 spaceship.addImage(bg);
 spaceship.scale = 0.12;
 spaceship.x = 200;
 spaceship.y = 200;

 astronaut = createSprite(20,20,200,200);
 astronaut.addImage(sleep);
 astronaut.addAnimation(drink);
 astronaut.scale = 0.08;
 astronaut.x = 200;
 astronaut.y = 250;

 border1 = createSprite(200,400,400,10);
 border1.visible = false;

 border2 = createSprite(200,1,400,10);
 border2.visible = false;

 border3 = createSprite(400,200,10,400);
 border3.visible = false;

 border4 = createSprite(1,200,10,400);
 border4.visible = false;
}

function draw() {
  background(220);

  if(keyDown("W")){ 
   astronaut.addAnimation("brushing", brush); 
   astronaut.changeAnimation("brushing"); 
   astronaut.y = 250; 
   astronaut.velocityX = 0; 
   astronaut.velocityY = 0; 
  } 

  if(keyDown("E")){ 
     astronaut.addAnimation("bathing", bath);
     astronaut.changeAnimation("bathing");
     astronaut.y = 250;
     astronaut.velocityX = 0; 
     astronaut.velocityY = 0; 
    } 
 
    if(keyDown("S")){
     astronaut.addAnimation("gymming", gym); 
     astronaut.changeAnimation("gymming"); 
     astronaut.y = 250; 
     astronaut.velocityX = 0;
     astronaut.velocityY = 0; 
    } 

    if(keyDown("C")){
     astronaut.addAnimation("gymming1", gym1); 
     astronaut.changeAnimation("gymming1"); 
     astronaut.y = 250; 
     astronaut.velocityX = 0;
     astronaut.velocityY = 0; 
    } 

    if(keyDown("a")){
     astronaut.addAnimation("eating", eat);
     astronaut.changeAnimation("eating"); 
     astronaut.x = 150; 
     astronaut.y = 250;
     astronaut.velocityX = 0.5;
     astronaut.velocityY = 0.5; 
    } 

    if(keyDown("d")){ 
     astronaut.addAnimation("moving", move);
     astronaut.changeAnimation("moving"); 
     astronaut.velocityX = 1; 
     astronaut.velocityY = 1; 
    }

    if(keyDown("z")){
      astronaut.addAnimation("drinking", drink); 
      astronaut.changeAnimation("drinking"); 
      astronaut.y = 250; 
      astronaut.velocityX = 0;
      astronaut.velocityY = 0; 
     } 

     if(keyDown("q")){
      astronaut.addAnimation("sleeping", sleep); 
      astronaut.changeAnimation("sleeping"); 
      astronaut.y = 250; 
      astronaut.velocityX = 0;
      astronaut.velocityY = 0; 
     } 

     astronaut.bounceOff(border1);
     astronaut.bounceOff(border2);
     astronaut.bounceOff(border3);
     astronaut.bounceOff(border4);

  drawSprites();
}
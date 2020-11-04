
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

//Gamestates
var PLAY=1;
var END=0;
var gameState=1;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600);
  
  //Ground
  ground = createSprite(300,550,600,5);
  
  //Monkey
  monkey = createSprite(100,530,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.125;
  
  //Creating groups
  foodGroup = new Group();
  obstacleGroup = new Group();
  

  
}


function draw() {
  background(220);
  
  //gameState is Play
  if(gameState===PLAY){
    //ground
    ground.velocityX=-12;
    if(ground.x>0){
      ground.x = ground.width/2;
    }
    
    //Jumping
    if(keyDown("SPACE")){
      monkey.y=monkey.y-20;
    }
    
    //add gravity
    monkey.velocityY=monkey.velocityY+0.8;
    
    score();
  
  }
  
  //gameState is End
  if(gameState===END){
    
  }
  
  
  monkey.collide(ground);
  
  //Function
  foodF();
  obstaclesF();
  

  drawSprites();
}

function foodF(){
  if(frameCount%80===0){
    banana = createSprite(600,400,10,10);
    banana.addImage(bananaImage)
    banana.scale=0.1;
    
    banana.velocityX=-5;
    
    banana.y=Math.round(random(350,450));
    
    banana.lifetime=-100;
    
    foodGroup.add(banana);
    }
  
  
  }


function obstaclesF(){
  if(frameCount%100===0){
    obstacle = createSprite(600,525,10,10);
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.15;
    
    obstacle.velocityX=-5;
    
    obstacle.lifetime=-100;
    
    obstacleGroup.add(obstacle);
    
  }
  
}

function score(){
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time = "+survivalTime,10,20)
}





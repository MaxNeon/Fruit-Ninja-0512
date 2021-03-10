var PLAY = 1;
var END = 0;
var gameState = PLAY;


var swordImage,sword,fuirt,fruit1,fruit2,fruit3,fruit4, monsterimage,fruitgroup,enemygroup,gameover;

 function  preload(){
 swordImage=loadImage("sword.png"); 
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
   gameover=loadImage("gameover.png")
  monsterimage=loadAnimation("alien1.png","alien2.png");
  
 
}

function setup(){
  
  createCanvas(600,600)
sword=createSprite(40,200,20,20);
sword.addImage(swordImage);
sword.scale=0.7;
  
  fruitgroup=new Group()
  enemygroup=new Group()
  
  
}



function draw(){
background(250);
  if(gameState===PLAY){
enemy();
  fruit();
    sword.x=mouseX;
  sword.y=mouseY;
  if(fruitgroup.isTouching(sword)){
    fruitgroup.destroyEach();
  }
  
  else {
    if(enemygroup.isTouching(sword)){
      gameState=END;
    enemygroup.destroyEach();
      fruitgroup.destroyEach();
      sword.addImage(gameover);
      sword.x=200;
      sword.y=200;
  }
  }  
  }
    
  
  drawSprites();

}

function fruit() {
  if(World.frameCount%80===0){
    fuirt=createSprite(400,200,20,20)
    fuirt.scale=0.2
     fuirt.velocityX=-3
    r=Math.round(random(1,4))
    if (r==1){
      fuirt.addImage(fruit1)
    
    }
    if(r==2){
       fuirt.addImage(fruit2)
      
    }
    if(r==3){
      fuirt.addImage(fruit3)
     
    }
    if(r==4){
      fuirt.addImage(fruit4)
     
    }
    fuirt.lifetime=80;
    fuirt.y=Math.round(random(100,300))
    fruitgroup.add(fuirt);  
  }
  
  
  
}

function enemy() {
  if(World.frameCount%200===0){
    var monster=createSprite(400,200,20,20);
    monster.addAnimation("enemy",monsterimage)
    monster.velocityX=-5;
    monster.y=Math.round(random(100,300))
    monster.lifetime=80;
    enemygroup.add(monster);
  }

   
   }

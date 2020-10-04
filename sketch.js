
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var backdrop,backdrop_img
var invisibileground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   
  backdrop_img=loadImage("background.jpg")
 
  
}



function setup() {
  
createCanvas(400,400)
 
  
backdrop=createSprite(200,200,400,400)
backdrop.addImage(backdrop_img)
backdrop.velocityX=-5
  
monkey=createSprite(40,350)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
  
  
  
invisibleground=createSprite(200,380,1000,4)
  invisibleground.visible=false

  obstacleGroup=new Group();
  FoodGroup=new Group();
}

function draw() {
  background(0)
  monkey.depth=monkey.depth+1

  
  spawn_obstacles();
  spawnbanana();
  
   if (backdrop.x < 100){
      backdrop.x = backdrop.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -13;
     
    }
    
 if(monkey.isTouching(FoodGroup))
   FoodGroup.destroyEach();
  
  
  
  

    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleground)
  

   score = score + Math.round(frameCount/100);
 
  
  
drawSprites();
  
function spawnbanana(){
     if(frameCount%70===0){
  banana=createSprite(399,250)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-5
    banana.lifetime=77
  FoodGroup.add(banana)
  }
}
    fill("black")
  textSize(20)
    text("SURVIVAL TIME = "+score,150,50)
  
  
  function spawn_obstacles(){
    
    
    if(frameCount%40===0){
    
    obstacle=createSprite(380,360)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
   obstacle.velocityX=-(5+score/1000)
      obstacle.lifetime=75
      obstacleGroup.add(obstacle)
  
    }
  }

  





}


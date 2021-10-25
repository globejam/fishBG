var fishingRod;
var fishingRodImg;
var fisherman,fishermanImg
var bg
var fLineLength
var hook,hookPos
var deepSea
var bluepurpleFish
var fishGroup
function preload(){
fishingRodImg = loadImage("assets/FishingRod.png");
//bg=createImg("./assets/background.gif");
bg=loadImage("./assets/background.gif");
fishermanImg=loadImage("./assets/fishingBoat2.png")
hook=loadImage("./assets/hook.png")
deepSea=loadImage("./assets/deepSea.png")
bluepurpleFish=loadImage("./assets/blue-purpleFish.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 // fishingRod = createSprite(windowWidth/2+200,windowHeight/2-200,10,10);
  fisherman = createSprite(1050,880,10,10);
//fishingRod.addImage(fishingRodImg);
fisherman.addImage(fishermanImg);
fLineLength = 56;
fishGroup=new Group();

}

function draw() {
  camera.position.y=hookPos
  background(50);
  image(bg, 0, 0, width, height);
  image(deepSea, 0, 1050, width, height);
  rodLength()
  
drawSprites();
}

//FUNCTIONS

//changing rod length
function rodLength(){
  fill("red");
  if(keyIsDown(UP_ARROW)&& fLineLength>=0){
    fLineLength -=2
  }

  if(keyIsDown(DOWN_ARROW)&& fLineLength<=872){
    fLineLength +=2
  }
rect(910,672,2,fLineLength);
image(hook,862,672+fLineLength,100,100)

hookPos = 672+fLineLength
}

function fish(x,y){
  var fish = createSprite(x,y,20,20);
  fishGroup.add(fish);
  fish.position.x +=1
  if(fish.position.x>1000){
    fish.position.x = x;
  }
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;
var spam=[];
var ballcount=0;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  
}

function keyPressed(){
  if(keyCode===32){
    arrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y, 100, 10);
  spam.push(arrow)
  }
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()
  
  // if(keyCode === 32){
  //   arrow.display()
  //   arrow.shoot(playerArcher);
  //  }

  //  if(keyCode === 32){
  //   arrow.shoot(playerArcher.body.angle);
  //  }
   
  if(keyCode === 32){
     arrow.shoot(playerArcher.body.angle);
    }
    for(var i=0;i<spam.length;i++){showarrows(spam[i],i)}
}
function showarrows(arrow,index){
  arrow.display()
  if (arrow.body.position.x>width) {
    World.remove(world,arrow.body)
    spam.splice(index,1)
    ballcount=ballcount-1
  }
  if (arrow.body.position.y>height) {
    World.remove(world,arrow.body)
    spam.splice(index,1)
    ballcount=ballcount-1
  }
}



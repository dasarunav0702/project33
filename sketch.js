const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particle;
var score=0;
var gameState="start";
var count=0;
function preload(){

}

function setup() {
  engine= Engine.create();
  world= engine.world;
 
  createCanvas(600,600);
  block1=new Block(300,550,400,10);
  block2=new Block(105,300,10,500);
  block3=new Block(495,300,10,500);
  block4=new Block(180,400,10,300);
  block5=new Block(260,400,10,300);
  block6=new Block(340,400,10,300);
  block7=new Block(420,400,10,300);
  

  object1=new Circle(140,100,10);
  object2=new Circle(180,100,10);
  object3=new Circle(220,100,10);
  object4=new Circle(260,100,10);
  object5=new Circle(300,100,10);
  object6=new Circle(340,100,10);
  object7=new Circle(380,100,10);
  object8=new Circle(420,100,10);
  object9=new Circle(460,100,10);

  object10=new Circle(160,150,10);
  object11=new Circle(200,150,10);
  object12=new Circle(240,150,10);
  object13=new Circle(280,150,10);
  object14=new Circle(320,150,10);
  object15=new Circle(360,150,10);
  object16=new Circle(400,150,10);
  object17=new Circle(440,150,10);

  object18=new Circle(140,200,10);
  object19=new Circle(180,200,10);
  object20=new Circle(220,200,10);
  object21=new Circle(260,200,10);
  object22=new Circle(300,200,10);
  object23=new Circle(340,200,10);
  object24=new Circle(380,200,10);
  object25=new Circle(420,200,10);
  object26=new Circle(460,200,10);


  

  Engine.run(engine);
}

function draw() {
  background("black");  
  noStroke()
  textSize(35);
  fill("white");
  text("Score: "+ score, width-300,50);
  text("100", 110,300);
  text("300", 190,300);
  text("500", 270,300);
  text("300", 350,300);
  text("100", 430,300);
  
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  object1.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();
  object6.display();
  object7.display();
  object8.display();
  object9.display();
  object10.display();
  object11.display();
  object12.display();
  object13.display();
  object14.display();
  object15.display();
  object16.display();
  object17.display();
  object18.display();
  object19.display();
  object20.display();
  object21.display();
  object22.display();
  object23.display();
  object24.display();
  object25.display();
  object26.display();
  if ( gameState =="end") {
    
    textSize(50);
    text("GameOver", 150, 250);

  }
  if (particle!= null){ 
    particle.display();
    if (particle.body.position.y>300){
      if(particle.body.position.x<180){
        score=score+100;
        particle=null;
        if (count>=5) gameState="end";
      }
     else if(particle.body.position.x<260 && particle.body.position.x>180){
        score=score+300;
        particle=null;
        if (count>=5) gameState="end";
      }
     else if(particle.body.position.x<340 && particle.body.position.x>260){
        score=score+500;
        particle=null;
        if (count>=5) gameState="end";
      }
     else if(particle.body.position.x<420 && particle.body.position.x>340){
        score=score+300;
        particle=null;
        if (count>=5) gameState="end";
      }
     else if(particle.body.position.x<495 && particle.body.position.x>420){
        score=score+100;
        particle=null;
        if (count>=5) gameState="end";
      }
    }
  }

 

}

function mousePressed(){
  if (gameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}

var wall1;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  wall1 = new wall(200,200,70,400);
  wall2 = new wall(270,200,70,400);
  wall3 =new wall(340,200,100,400);
  wall4 = new wall(440,200,70,400);
  wall0 = new wall (130,200,70,400);
}

function draw() {
  createCanvas(800,800);
  background("beige");  
  drawSprites();
  wall1.display();
  triangle(230,100,200,200,270,200);
  wall2.display();
  wall3.display();
  triangle(380,100,340,200,440,200);
  wall4.display();
  wall0.display();
}
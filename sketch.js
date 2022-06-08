var starImg,bgImg, fairyImg;
var star, starBody;
var fairy;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadImage("images/fairyImage1.png");
}

function distance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

window.addEventListener("click", () => {
	if (starBody.isStatic && distance(650, 30, fairy.x, fairy.y) <= 200)
		starBody.isStatic = false;
	// else starBody.isStatic = true;
});
window.addEventListener("mousemove", e => {
	fairy.x = e.pageX;
	fairy.y = e.pageY;  
})

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

	var starBody_options = { restitution: 2, isStatic: false };



	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(200, 200);
	fairy.addImage(fairyImg);
	fairy.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , starBody_options);
	starBody.isStatic = true;
	starBody.positionImpulse = { x: 0, y: 0 };
	World.add(world, starBody);
	
	Engine.run(engine);

	console.log(starBody);
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

//   console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if (keyCode === RIGHT_ARROW) {
		fairy.x += 1;
	}

	//writw code to move fairy left and right
	
}

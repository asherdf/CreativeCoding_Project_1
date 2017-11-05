/*Pick an adjective and make a program that illustrates that 
adjective interactively. You may not use images. Only drawing
functions, meaning mostly stuff found in the ‘graphics’ section.

Use only the drawing functions - stuff found in the Shape, Color,
Events and Math sections. 
Make sure to read Learning Processing Chapters 13 + 14, as well 
as the Generative Design Text.

Create custom functions that are triggered on some event, and
make those functions vary. 

The focus of this project is procedural intensity. How expressive
can you be with only line, shapes, color and movement?

Ingredients:

• Graphics (shape, color, line, placement, custom shapes)
• Control Structures (if, for, while)
• Movement
• Interaction (mouse, keyboard)
• Custom functions with passing parameters
• Arrays
• Math
• Random (crafted)
• OOP

Must haves:

• heavy use of variables 
• custom functions passing variables as parameter
• loops
• control structures
• math or random
• some use of interaction or change over time
• movement, change, variety
• arrays
• conditionals
• custom OOP usage with methods and parameters*/


var stars = [];	//array
var ff = [];	//array

var change = 0;	//change color of flower

// var r;
// var g;
// var b;

//var n = 0;
//var theta = 0;

var rotation = 0;	//radian to rotate the stars

//---------------------------------------------------------------
function setup() { 
	createCanvas(400,400);
	//console.log("test");
	
	noStroke();
	colorMode(HSB, 360,360,360, 100);

	//create the array of stars
	for (var i = 0; i < 100; i++){
		stars[i] = new Star();
	}

	//create the array of Fireflies
	for (var i = 0; i < 30; i++){
		ff[i] = new Firefly();
	}
	//angleMode(DEGREES);
}

//---------------------------------------------------------------
function draw() {
	background(0,0,0,20);
	
	//stars
	//push();
		for (var i = 0; i < stars.length; i++){	
			stars[i].display();
			// stars[i].glow();
		}
	//pop();
	
	//fireflies
	for (var i = 0; i < ff.length; i++){	
			ff[i].reset();
			ff[i].display();
			ff[i].glow();
	}

	// if (change == 0)
	// 	flower(200, 10, 360);	//rainbow
	// if (change == 0)
	// 	flower(100, 300, 360);	//rainbow
	// else if (change == 3)
	// 	flower(150, 150, 360);	//rainbow
	
	if (change == 0)
		flower(360, 360, 360);	//blue & red
	else if (change == 1)
		flower(141, 25, 360);	//pastel rainbow
	else if (change == 2)
		flower(20, 360, 360);	//green/yellow & red
	else if (change == 3)
		flower(100, 360, 360);	//vibrant rainbow
}

//---------------------------------------------------------------
//change the flower color every time the mouse is pressed
function mousePressed(){	
	if (change < 3){
		change++;
	} else change = 0;
}

//---------------------------------------------------------------
function flower(hue, sat, bri){
	
	//colorMode(HSB);
	//fill(hue, 350/height, 150);

	push();
		translate(width/2, height/2);
		petal = map(mouseX, 0,width, 0,10);
		
		//if(mouseIsPressed){
			// var hue = 100*x/width;
			// var sat = 350*y/height;
			// var bri = 150;
		//}

		//colorMode(HSB);
		//fill(hue, 350*y/height, 150);

		for (theta = 0; theta < TWO_PI; theta = theta + 0.01){
			var r = cos(petal * theta);
			var x = 125 * r * cos(theta);	//change to cartesian
			var y = 125 * r * sin(theta);	//change to cartesian
			
			//hueF = map(hue, 0,360, 0,theta);

			fill(hue+=(0.01*x/r), sat+=(0.01*y/r), bri);
			//colorMode(RGB);
			// r += 0.5;
			// g += 0.05;
			// b += 0.1;
			
			ellipse(x, y, 5, 5);
		}
	pop();	
}


//---------------------------------------------------------------
//THIS FUNCTION IS NOT WORKING YET
// function stars() { 
	
// 	var rotateSpeed = 0.1;
// 	var rotateBase = 0

// 	rotateBase = rotateBase + rotateSpeed;
	
// 	if ((rotateBase = 2*PI) || (rotateBase = 0)){
// 		rotateBase = rotateBase * -1;
// 	}
// 	rotateBase = constrain(rotateBase, 0, 2*PI);
		
// }
    
// //the part below this is the start of what you want
// translate(width / 2, height / 2);
//   for (var i = 0; i < 62; i = i + 1) {
//     rotate(0.1);
//     ellipse(100, 0, 10, 10);
//   }
/*Pick an adjective and make a program that illustrates that adjective interactively. 
You may not use images. Only drawing functions, meaning mostly stuff found in the ‘graphics’ 
section.

Use only the drawing functions - stuff found in the Shape, Color, Events and Math sections. 
Make sure to read Learning Processing Chapters 13 + 14, as well as the Generative Design Text.

Create custom functions that are triggered on some event, and make those functions vary. 

The focus of this project is procedural intensity. How expressive can you be with only line, 
shapes, color and movement?

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


var blah;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  flower;
  stars;
	
}

//-------------------------------------------------------------------------
function flower(){
	translate(width/2, height/2);
	blah = map(mouseX, 0, width, 0, 2);
	
	scale(blah);
	rect(0,0,100,50);
}

//-------------------------------------------------------------------------
//THIS FUNCTION IS NOT WORKING YET
function stars() { 
	// background(220);
	// for (i = 0; i < 2*PI; i = i + PI/10){
	// 	//translate(width/2, height/2);
	// 	//background(220);
	var rotateSpeed = 0.1;
	var rotateBase = 0

	rotateBase = rotateBase + rotateSpeed;
	
	if ((rotateBase = 2*PI) || (rotateBase = 0)){
		rotateBase = rotateBase * -1;
	}
	rotateBase = constrain(rotateBase, 0, 2*PI);
		
  translate(width / 2, height / 2);
  for (var i = 0; i < 200; i = i + .1) {
    background(220);
		rotate(0.01);
    ellipse(0, 0, 10, 10);
  }
		
// 		rotate(i);
// 		rect(100,100,50,50);
// 		// background(220);
// 	}
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


var blah; //used in the flower function (CHANGE THIS NAME)

//var ffX = 0;	//fire fly X locatoin
//var ffY = 0;	//fire fly Y locatoin
//var ffYstart = 300;	//fire fly starting Y location
//var ffAngle = 0;	//fire fly angle
//var ffSize = 10;	//fire fly size

var stars = [];

var ff = [];


var rotation = 0;	//radian to rotate the stars

function setup() { 
	createCanvas(400,400);
	//console.log("test");
	
	//create the array of stars
	for (var i = 0; i < 400; i++){
		stars[i] = new Star();
	}

	//create the array of Fireflies
	for (var i = 0; i < 15; i++){
		ff[i] = new Firefly();
	}
	//angleMode(DEGREES);
	
}

function draw() {
	background(0);
	
	//for the stars
	push();
		translate(width/2, (1*height));
		rotate(rotation);
		rotation = rotation + 0.01;

		//display the stars
		for (var i = 0; i < stars.length; i++){	
			stars[i].display();
		}
	pop();
		


	//push();
	//pop();
	for (var i = 0; i < ff.length; i++){	
			ff[i].display();
		}
	
}

//-------------------------------------------------------------------------
function flower(){
	translate(width/2, height/2);
	blah = map(mouseX, 0, width, 0, 2);
	
	scale(blah);
	rect(0,0,100,50);
}


// function fireFly(){	
// 	//console.log("Here");
	
	

// 	fill(0,255,0);
// 	noStroke();
// 	ffAngle = sin(ffY);	//WHY IS THIS NOT WORKING?!?!
// 	ellipse(ffX,ffYstart + (ffAngle*2), ffSize,ffSize);

// 	ffX = ffX + 0.5;	//move to the right
// 	ffY = ffY + 0.5;	//oscilate up and down
// }


//-------------------------------------------------------------------------
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
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

//---------------------------------------------------------------
function setup() { 
	createCanvas(400,400);
		
	noStroke();
	colorMode(HSB, 360,360,360, 100);

	//create the array of stars
	for (var i = 0; i < 150; i++){
		stars[i] = new Star();
	}

	//create the array of Fireflies
	for (var i = 0; i < 30; i++){
		ff[i] = new Firefly();
	}
}

//---------------------------------------------------------------
function draw() {
	background(0,0,0,20);
	
	//stars
	for (var i = 0; i < stars.length; i++){	
		stars[i].display();
		stars[i].glow();
	}
		
	//fireflies
	for (var i = 0; i < ff.length; i++){	
		ff[i].reset();
		ff[i].display();
		ff[i].glow();
	}

	if (change == 0)
		flower(300, 360, 360);	//blue & red
	else if (change == 1)
		flower(241, 25, 360);	//pastel rainbow
	else if (change == 2)
		flower(170, 360, 360);	//blue & green
	else if (change == 3)
		flower(100, 360, 360);	//orange & yellow
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
	push();
		translate(width/2, height/2);
		petal = map(mouseX, 0,width, 0,10);
		
		for (theta = 0; theta < TWO_PI; theta = theta + 0.01){
			var r = cos(petal * theta);
			var x = 125 * r * cos(theta);	//change to cartesian
			var y = 125 * r * sin(theta);	//change to cartesian
			
			fill(hue+=(0.005*x/r), sat+=(0.005*y/r), bri);
			ellipse(x, y, 5, 5);
		}
	pop();	
}
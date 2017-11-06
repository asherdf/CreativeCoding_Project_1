class Firefly {
	constructor(){		
		this.x = random(width);	
		this.y = random(50);	
		this.yStart = random(height);	//starting Y location
		this.angle = random(5);
		this.size = random(1,5);
		this.direction = random(2);
		this.speed = 1;
		this.opac = random(100);	//opacity
		this.fade = 1;
	}

	display(){
		fill(125,360,360, this.opac);
		noStroke();
		this.angle = sin(this.y);
		ellipse(this.x, this.yStart + (this.angle*2), 
				this.size, this.size); 

		if (this.direction > 1){
			this.x += this.speed;	//move to the RIGHT
		} else if (this.direction < 1){
			this.x -= this.speed;	//move to the LEFT
		}
		
		this.y = this.y + 0.1;	//oscilate up and down
	}

	glow(){
		this.opac = this.opac + this.fade;		
		if (this.opac > 100){
			this.fade = this.fade * (-1);
		} else if (this.opac < 0){
			this.fade = this.fade * (-1);
		}
	}

	//if the Firefly leaves the screen, make it come back
	reset(){
		if (this.x > (width + 20)){
			this.speed *= -1;
			this.yStart = random(height);
			fill(random(125,360),255,255, this.opac);
		} else if (this.x < -20){
			this.speed *= -1;
			this.yStart = random(height);
			fill(random(125,360),255,255, this.opac);
		}
	}
}

class Star {
	constructor(){		
		this.x = random(0, width);
		this.y = random(0, height);
		this.starSize = random(0,5);
	}

	display(){		
		fill(255);
		noStroke();
		ellipse(this.x,this.y, this.starSize,this.starSize);
	}
}
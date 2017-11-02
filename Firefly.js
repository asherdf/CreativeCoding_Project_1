class Firefly {
	constructor(){		
		this.ffX = random(width);	//fire fly X locatoin
		this.ffY = random(50);	//fire fly Y locatoin
		this.ffYstart = random(300,350);	//fire fly starting Y location
		this.ffAngle = random(5);	//fire fly angle
		this.ffSize = 10;	//fire fly size

		//this.img = loadImage("glow.png");

	}

	display(){		

		// tint(0,150,0);
		// image(this.img,0,0);
		fill(0,150,0);
		noStroke();
		this.ffAngle = sin(this.ffY);
		ellipse(this.ffX,this.ffYstart + (this.ffAngle*2),
				this.ffSize,this.ffSize);

		this.ffX = this.ffX + 0.5;	//move to the right
		this.ffY = this.ffY + 0.5;	//oscilate up and down

		//fill(255);
		//noStroke();
		//ellipse(this.x,this.y, this.starSize,this.starSize);
	}
}
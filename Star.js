class Star {
	constructor(){		
		this.x = random(width);
		this.y = random(height);
		this.starSize = random(0,5);
		this.opac = random(360);
		this.fade = 1;
	}

	display(){		
		noStroke();
		fill(0,0,360, 10);
		ellipse(this.x,this.y, this.starSize,this.starSize);
		
		fill(0,0,360, this.opac);
		ellipse(this.x,this.y, this.starSize / 2,this.starSize / 2);
	}

	glow(){ 
		this.opac = this.opac + this.fade;		
		if (this.opac > 75){
			this.fade = this.fade * (-1);
		} else if (this.opac < 0){
			this.fade = this.fade * (-1);
		}
	}
}
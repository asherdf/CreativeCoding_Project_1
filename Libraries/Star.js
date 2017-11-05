class Star {
	constructor(){		
		this.x = random(-(width*2), (width*2));
		this.y = random(-(height*2), (height*2));
		this.starSize = random(0,5);
		this.opac = random(100);
		this.fade = 1;
	}

	display(){		
		fill(255,255,255, this.opac);
		noStroke();
		ellipse(this.x,this.y, this.starSize,this.starSize);
		fill(255);
		ellipse(this.x,this.y, this.starSize / 2,this.starSize / 2);
	}

	glow(){ 
		this.opac = this.opac + this.fade;		
		if (this.opac > 100){
			this.fade = this.fade * (-1);
		} else if (this.opac < 0){
			this.fade = this.fade * (-1);
		}
	}
}
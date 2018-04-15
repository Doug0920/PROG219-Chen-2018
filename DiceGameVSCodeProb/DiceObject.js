// Dice object definition

let Dice=function(img1, img2) {	//dice constructor for a pair of dice
	this.imageDice1 = img1;	// jQuery DOM object to show the dice1 image
	this.imageDice2 = img2;	// jQuery DOM object to show the dice2 image
	this.point1;			// undefined before roll
	this.point2;
	
    this.roll=function(inputRollingTime){//inputRollingTime is rolling time, roll 2 dice
    	if (inputRollingTime < 51) {	
    		inputRollingTime = 51;		// require one interval pass, uses last point1, point2
    	}
        let diceRolling =setInterval((
            ()=>{
                this.point1=Math.floor(Math.random() * 6) + 1;
                this.imageDice1.attr.src, "/images/dice-" + (this.point1).toString() + ".jpg";
                this.point2=Math.floor(Math.random() * 6) + 1;
                this.imageDice2.attr.src, "/images/dice-" + (this.point2).toString() + ".jpg";
            }
        ), 50);
        setTimeout(()=>{
            clearInterval(diceRolling);
        },inputRollingTime);
    }
}

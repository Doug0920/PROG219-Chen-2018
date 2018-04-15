// Dice object constructor
// (objects cannot depend on global variables/values)

let Dice=function(){//dice constructor
    this.rolling=function(inputRollingTime,$inputImageRef){//inputRollingTime is rolling time, $inputImageRef is jQuery DOM object for show the dice image
        if(inputRollingTime<51){//for make sure dice rolling time more than setInterval time
            inputRollingTime=51;
        }
        let diceRolling =setInterval((
            ()=>{
                this.point=Math.floor(Math.random() * 6) + 1;	// Use last as point used
                rollingImage="./images/dice-" + (this.point).toString() + ".jpg";
                $inputImageRef.attr("src",rollingImage);
            }
        ), 50);
        setTimeout(()=>{
            clearInterval(diceRolling);
        },inputRollingTime);
    }
}
// Dice object constructor

let Dice=function(){//dice constructor
    this.rolling=function(inputRollingTime,$inputImageRef){//inputRollingTime is rolling time, $inputImageRef is jQuery DOM object for show the dice image
        this.point=Math.floor(Math.random() * 6) + 1;
        this.url="./images/dice-" + (this.point).toString() + ".jpg";
        if(inputRollingTime<51){//for make sure dice rolling time more than setInterval time
            inputRollingTime=51;
        }
        let diceRolling =setInterval((
            ()=>{
                let rollingImage="./images/dice-" + (Math.floor(Math.random() * 6) + 1).toString() + ".jpg";
                $inputImageRef.attr("src",rollingImage);
            }
        ), 50);
        setTimeout(()=>{
            clearInterval(diceRolling);
            $inputImageRef.attr("src",this.url);
        },inputRollingTime);
    }
}
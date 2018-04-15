// Player object constructor
// (objects cannot depend on global variables/values)

let Player=function(pName,$inputPlayerRef){
    if(pName==null){
        this.name="I am a robot"
    }
    else{
        this.name= pName;
    }
    this.round=0;
    this.balance=5;
    this.$playerRef=$inputPlayerRef;
    this.playThisRound=function(dice1Point,dice2Point){//update status information, round information, balance information
        let $status=$("#status");
        let $balance=this.$playerRef.find(".balance");
        let $turnCount=this.$playerRef.find(".turnCount");
        this.round=this.round+1;
        $turnCount.text(this.round);//update round status
        if(dice1Point+dice2Point===7){//when sum of the 2 random numbers equals 7, balance add 1
            $status.css("color", "red");
            $status.text("Lucky 7, you win this round.");//update win this round information
            this.balance=this.balance+1;
        }
        else if(dice1Point+dice2Point===11){//when sum of the 2 random numbers equals 11, balance add 1
            $status.css("color", "red");
            $status.text("Lucky 11, you win this round.");//update win this round information
            this.balance=this.balance+1;
        }
        else{//other situation balance minus 1
            $status.css("color", "green");
            $status.text("Total is "+(dice1Point+dice2Point)+". You lost this round.");//update lost this round information
            this.balance=this.balance-1;
        }
        $status.prepend(this.name+". ");
        $balance.text(this.balance);//update balance status
    }
}
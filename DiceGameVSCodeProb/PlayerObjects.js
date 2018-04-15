// Dice object constructor
let Player=function(){
    this.name= 'Player1';
    this.round=0;
    this.balance=5;
    this.playThisRound=function(dice1,dice2){//update status information, round information, balance information
        let $status=$("#status");
        let $balance=$("#balance");
        let $turnCount=$("#turnCount");
        this.round=this.round+1;
        $turnCount.text(this.round);//update round status
        if(dice1===dice2){//when 2 random numbers have the same value, balance add 1
            $status.css("color", "red");
            $status.text("A pair of "+dice1+"s, you win this round.");//update win this round information 
            this.balance=this.balance+1;
        }
        else if(dice1+dice2===7){//when sum of the 2 random numbers equals 7, balance add 1
            $status.css("color", "red");
            $status.text("Lucky 7, you win this round.");//update win this round information
            this.balance=this.balance+1;
        }
        else if(dice1+dice2===11){//when sum of the 2 random numbers equals 11, balance add 1
            $status.css("color", "red");
            $status.text("Lucky 11, you win this round.");//update win this round information
            this.balance=this.balance+1;
        }
        else{//other situation balance minus 1
            $status.css("color", "green");
            $status.text("Total is "+(dice1+dice2)+". You lost this round.");//update lost this round information
            this.balance=this.balance-1;
        }
        $balance.text(this.balance);//update balance status
    }
}
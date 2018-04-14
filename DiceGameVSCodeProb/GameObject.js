let game={
    playThisRound:function(dice1Point,dice2Point){//update status information, round information, balance information
        let $status=$("#status");
        let $balance=$("#balance");
        let $turnCount=$("#turnCount");
        this.round=this.round+1;
        $turnCount.text(this.round);

        // add check result information, update balance--------------------------------------------------------------->need work   change font color  .css("color", "green");
        
    }
}
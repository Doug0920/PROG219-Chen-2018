let Player1={
    name: Player1
    round:0,
    balance:5,
    //   following may be part of Game object instead
    playThisRound:function(){//update status information, round information, balance information
        let $status=$("#status");
        let $balance=$("#balance");
        let $turnCount=$("#turnCount");
        this.round=this.round+1;
        $turnCount.text(this.round);


        // add check result information, update balance--------------------------------------------------------------->need work   change font color  .css("color", "green");
        
    }
}

let Player2={
    name: Puppy
    round:0,
    balance:5,
    //   following may be part of Game object instead
    playThisRound:function(){//update status information, round information, balance information
        let $status=$("#status");
        let $balance=$("#balance");
        let $turnCount=$("#turnCount");
        this.round=this.round+1;
        $turnCount.text(this.round);


        // add check result information, update balance--------------------------------------------------------------->need work   change font color  .css("color", "green");
        
    }
}
let Player1={
    name: Kitten
    round:0,
    balance:5,
    //   following may be part of Game object instead
    playThisRound:function(){//update status information, round information, balance information
        let $status=$("#status");
        let $balance=$("#balance");
        let $turnCount=$("#turnCount");
        this.round=this.round+1;
        $turnCount.text(this.round);


        // add check result information, update balance--------------------------------------------------------------->need work   change font color  .css("color", "green");
        
    }
}

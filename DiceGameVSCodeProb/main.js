$("#status").text("Welcome!");//add welcome message
$( document ).ready(function() {
    let rollingTime=1000;//rolling animation time
    let $image1=$("#image1");
    let $image2=$("#image2");
    let $buttonBet=$("#ButtonBet");
    let diceGame={
    }
    let player1=new Player("AlwaysWin",$("#player1"));
    let player2=new Player("AlwaysLose",$("#player2"));
    let player3=new Player("AlwaysTie",$("#player3"));
    diceGame.players=[player1,player2,player3];
    for(let i=0;i<diceGame.players.length;i++){//update player name in each player status
        diceGame.players[i].$playerRef.find(".playerName").text(diceGame.players[i].name);
    }
    diceGame.currentPlayerPointer=0;//start pointer with first player
    $(".playerName").css( "color", "purple" );
    $buttonBet.click(function() {//click event on the "ButtonBet" button
        let dice1=new Dice();
        dice1.rolling(rollingTime,$image1);
        let dice2=new Dice();
        dice2.rolling(rollingTime,$image2);
        $buttonBet.prop('disabled', true);//disable the "ButtonBet" button
        setTimeout(()=>{//game running result, update display information
            console.log("first dice is ",dice1.point);
            console.log("second dice is ",dice2.point);
            //any player's balance is 0, will out the game.
            diceGame.players[diceGame.currentPlayerPointer].playThisRound(dice1.point,dice2.point);
            if(diceGame.players[diceGame.currentPlayerPointer].balance===0){//if player's balance is zero remove from the players array
            diceGame.players.splice(diceGame.currentPlayerPointer,1);
            }
            else{//move to the next player
                diceGame.currentPlayerPointer++;
            }
            if(diceGame.currentPlayerPointer>=diceGame.players.length){//player pointer move from the last one to the first one.
                diceGame.currentPlayerPointer=0;
            }
            if(diceGame.players.length===1){//only one player left, end game.
                $buttonBet.hide();//hide the button
                $("#status").after("<div id=\"endMessage\"></div>");
                $("#endMessage").text(diceGame.players[0].name+", Congratulations! You win the game!");
                $("div").animate({top: '500px'},2500);
            }
           $buttonBet.prop('disabled', false);//cancel disable the "ButtonBet" button
        },rollingTime);
    });
    
});

$("#status").text("Welcome!");//add welcome message
$( document ).ready(function() {
    let rollingTime=1000;//rolling animation time
    let $image1=$("#image1");
    let $image2=$("#image2");
    let $buttonBet=$("#ButtonBet");
    let diceGame={

    }
    player1=new Player("AlwaysWin",$("#player1"));
    player2=new Player("AlwaysLose",$("#player2"));
    player3=new Player("AlwaysTie",$("#player3"));
    let players=[player1,player2,player3];
    for(let i=0;i<players.length;i++){//update player name in each player status
        players[i].$playerRef.find(".playerName").text(players[i].name);
    }
    let currentPlayerPointer=0;//start pointer with first player
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
            players[currentPlayerPointer].playThisRound(dice1.point,dice2.point);
            if(players[currentPlayerPointer].balance===0){//if player's balance is zero remove from the players array
                players.splice(currentPlayerPointer,1);
                console.log(players);
            }
            else{//move to the next player
                currentPlayerPointer++;
            }
            if(currentPlayerPointer>=players.length){//player pointer move from the last one to the first one.
                currentPlayerPointer=0;
            }

            // add validate game end code here.--------------------------------------------------------------->need work
           $buttonBet.prop('disabled', false);//cancel disable the "ButtonBet" button
        },rollingTime);
    });
    
});

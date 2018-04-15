$( document ).ready(function() {
    let rollingTime=1000;//rolling animation time
    let $image1=$("#image1");
    let $image2=$("#image2");
    let $buttonBet=$("#ButtonBet");
    //add three players in the game.
    let player1=new Player("AlwaysWin",$("#player1"));
    let player2=new Player("AlwaysLose",$("#player2"));
    let player3=new Player("AlwaysTie",$("#player3"));
    diceGame.players.push(player1);
    diceGame.players.push(player2);
    diceGame.players.push(player3);
    //add welcome message for three player.
    $("#status").text("Welcome!");
    //update player name in each player status
    for(let i=0;i<diceGame.players.length;i++){
        diceGame.players[i].$playerRef.find(".playerName").text(diceGame.players[i].name);
        $("#status").append(" "+diceGame.players[i].name+".");
    }
    $(".playerName").css( "color", "purple" );
    //click event on the "ButtonBet" button
    $buttonBet.click(function() {
        let dice1=new Dice();
        dice1.rolling(rollingTime,$image1);
        let dice2=new Dice();
        dice2.rolling(rollingTime,$image2);
        $buttonBet.prop('disabled', true);//disable the "ButtonBet" button
        //change last player background color back to lightblue, change this round background color to white
        let lastPlayerPointer=diceGame.currentPlayerPointer-1;
        if(diceGame.currentPlayerPointer-1<0){
            lastPlayerPointer=diceGame.players.length-1;
        }
        diceGame.players[lastPlayerPointer].$playerRef.css("background-color","lightblue");
        diceGame.players[diceGame.currentPlayerPointer].$playerRef.css("background-color","white");
        setTimeout(()=>{//game running result, update display information
            console.log("first dice is ",dice1.point);
            console.log("second dice is ",dice2.point);
            //any player's balance is 0, will out the game.
            diceGame.playThisRound(dice1.point,dice2.point,diceGame.players[diceGame.currentPlayerPointer]);//play one round
            if(diceGame.players[diceGame.currentPlayerPointer].balance===0){//if player's balance is zero remove from the players array,update players status
            diceGame.players[diceGame.currentPlayerPointer].$playerRef.css("background-color","black");
            diceGame.players[diceGame.currentPlayerPointer].$playerRef.css("color","white");
            diceGame.players[diceGame.currentPlayerPointer].$playerRef.append("<b style=\"color:yellow\">+++++++>Game Overed!<+++++++</b>");
            diceGame.players.splice(diceGame.currentPlayerPointer,1);//remove currentplayer from the players
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

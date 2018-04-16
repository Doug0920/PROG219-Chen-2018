$( document ).ready(function() {
    let playerNumber;
    let $welcomeBox=$("#welcomeBox");
    //add a div for ask how many players will play the game.
    $welcomeBox.append("<div  id=\"playerNumberBox\"><p>How many players? Between 2 to 8.</p><input type=\"number\" id=\"playersNumber\"/><button id=\"playersNumberButton\">Submit</button></div>");
    $welcomeBox.append("<div  id=\"playerNameBox\"></div>");
    $("#playerNameBox").append("<br/><br/><button id=\"startGame\">Start the game!</button>");
    $("#playerNameBox").hide();
    //jump to the div input players' names.
    $("#playersNumberButton").click(()=>{
        playerNumber=$("#playersNumber").val();
        if(!(playerNumber>1&&playerNumber<=8)){
            alert("Please input a number between 2 to 8.")
            return;
        }
        $("#playerNumberBox").hide();
        $("#playerNameBox").show();
        for(let i=playerNumber;i>0;i--){//add input for each players' name
            $("#playerNameBox").prepend("<p>Input player"+i+"\'s name:</p><input class=\"iPlayerName\"></input>");
        }
    });
    $("#startGame").click(()=>{
        if(playerNumber>1){
            for(let i=playerNumber;i>1;i--){
                $("#player1").after("<p id=\"player"+i+"\"><span class=\"playerName\"></span> balance is $<span class=\"balance\">5</span><br />Number of turns <span class=\"turnCount\">0</span></p>");
            }
            let nameArray=[];
            $(".iPlayerName").each(function(index){
                console.log($(this).val())
                diceGame.players.push(new Player($(this).val(),$("#player"+(index+1))));//create players in game object with link their dom ref by jequry
            });
        }
        //add welcome message for three player.
        $("#status").text("Welcome!");
        //update player name in each player status
        for(let i=0;i<diceGame.players.length;i++){
            diceGame.players[i].$playerRef.find(".playerName").text(diceGame.players[i].name);
            $("#status").append(" "+diceGame.players[i].name+".");
        }
        $(".playerName").css( "color", "purple" );
        $welcomeBox.hide();
    });
    let rollingTime=1000;//rolling animation time
    let $buttonBet=$("#ButtonBet");
    //click event on the "ButtonBet" button
    $buttonBet.click(function() {
        let $image1=$("#image1");
        let $image2=$("#image2");
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
                $("div").animate({top: '300px'},2500);
            }
           $buttonBet.prop('disabled', false);//cancel disable the "ButtonBet" button
        },rollingTime);
    });
    
});

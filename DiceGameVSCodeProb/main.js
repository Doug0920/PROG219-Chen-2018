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
<<<<<<< HEAD
    //click event on the "ButtonBet" button
    $buttonBet.click(function() {
        let $image1=$("#image1");
        let $image2=$("#image2");
        let dice1=new Dice();
=======
    let $buttonRestart=$("#ButtonRestart");
    $buttonRestart.hide();//hide the button
    let dice1=new Dice();
    let dice2=new Dice();
    //add three players in the game.
    let player1=new Player("Player",$("#player1"));
    let player2=new Player("AlwaysLose",$("#player2"));
    let player3=new Player("AlwaysTie",$("#player3"));
    // diceGame object created in GameObject.js
    diceGame.players.push(player1);
    diceGame.players.push(player2);
    diceGame.players.push(player3);
    let lastPlayerPointer=diceGame.players.length - 1;
    //add welcome message for three player.
    $("#status").text("Welcome!");
    //update player name in each player status
    for(let i=0;i<diceGame.players.length;i++){
        diceGame.players[i].$playerRef.find(".playerName").text(diceGame.players[i].name);
        $("#status").append(( i > 0 ? ", " : " ")+diceGame.players[i].name);
        diceGame.players[i].$playerRef.find(".balance").text(diceGame.players[i].balance);//set balance status
    }
    $("#status").append(".")
    $(".playerName").css( "color", "purple" );
    //click event on the "ButtonBet" button
    $buttonBet.click(function() {
>>>>>>> f4a0cfad7bfaafb06aed87b2ff7576519107979f
        dice1.rolling(rollingTime,$image1);
        dice2.rolling(rollingTime,$image2);
        $buttonBet.prop('disabled', true);//disable the "ButtonBet" button
        //change last player background color back to lightblue, change this round background color to white
        diceGame.players[lastPlayerPointer].$playerRef.css("background-color","lightblue");
        diceGame.players[diceGame.currentPlayerPointer].$playerRef.css("background-color","white");
        // after delay for dice rolling, run game result, update display information
        setTimeout(()=>{
            //any player's balance is 0, will exit the game.
            diceGame.playThisRound(dice1.point,dice2.point,diceGame.players[diceGame.currentPlayerPointer]);//play one round
            if(diceGame.players[diceGame.currentPlayerPointer].balance===0){//if player's balance is zero remove from the players array,update players status
            diceGame.players[diceGame.currentPlayerPointer].$playerRef.css("background-color","black");
            diceGame.players[diceGame.currentPlayerPointer].$playerRef.css("color","white");
            diceGame.players[diceGame.currentPlayerPointer].$playerRef.append("<b style=\"color:yellow\">+++++++>Game Over For You!<+++++++</b>");
            diceGame.players.splice(diceGame.currentPlayerPointer,1);//remove currentplayer from the players
            //		currentPlayerPointer is adjusted below
            lastPlayerPointer=0;	// harmless change of background color of player[0] since current player removed
            }
            else{//move to the next player
                lastPlayerPointer=diceGame.currentPlayerPointer;
            	diceGame.currentPlayerPointer++;
            }
            // move from the last player to the first one when needed.
        	diceGame.currentPlayerPointer =
        		(diceGame.currentPlayerPointer) % diceGame.players.length;
            if(diceGame.players.length===1){//only one player left, end game.
                $buttonBet.hide();//hide the button
                $("#status").after("<div id=\"endMessage\"></div>");
                $("#endMessage").text(diceGame.players[0].name+", Congratulations! You win the game!");
<<<<<<< HEAD
                $("div").animate({top: '300px'},2500);
=======
                $("div").animate({top: '500px'},2500);
                $buttonRestart.show();// show the Restart button
>>>>>>> f4a0cfad7bfaafb06aed87b2ff7576519107979f
            }
           $buttonBet.prop('disabled', false);//cancel disable the "ButtonBet" button
        },rollingTime);
    });
    
});

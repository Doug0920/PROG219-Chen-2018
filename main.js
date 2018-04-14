$("#status").text("Welcome!");//add welcome message
$( document ).ready(function() {
    let rollingTime=1000;//rolling animation time
    let $image1=$("#image1");
    let $image2=$("#image2");
    let $buttonBet=$("#ButtonBet");
    let diceUsed=new Dice($image1, $image2);
    let currentPlayer = Player1;
    $buttonBet.click(function() {//click event on the "ButtonBet" button
        $buttonBet.prop('disabled', true);//disable the "ButtonBet" button
        diceUsed.roll(rollingTime);
        console.log("first dice is ",diceUsed.point1);
        console.log("second dice is ",diceUsed.point2);

        
        game.playThisRound(currentPlayer);

        // add validate game end code here.--------------------------------------------------------------->need work

       $buttonBet.prop('disabled', false);//cancel disable the "ButtonBet" button
    });
    
});

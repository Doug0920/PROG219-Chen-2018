$("#status").text("Welcome!");//add welcome message
$( document ).ready(function() {
    let rollingTime=1000;//rolling animation time
    let $image1=$("#image1");
    let $image2=$("#image2");
    let $buttonBet=$("#ButtonBet");
    let player1=new Player();
    let currentPlayer = player1;
    $buttonBet.click(function() {//click event on the "ButtonBet" button
        let dice1=new Dice();
        dice1.rolling(rollingTime,$image1);
        let dice2=new Dice();
        dice2.rolling(rollingTime,$image2);
        console.log("first dice is ",dice1.point);
        console.log("second dice is ",dice2.point);
        $buttonBet.prop('disabled', true);//disable the "ButtonBet" button
        setTimeout(()=>{//game running result, update display information
            currentPlayer.playThisRound(dice1.point,dice2.point);

            // add validate game end code here.--------------------------------------------------------------->need work

           $buttonBet.prop('disabled', false);//cancel disable the "ButtonBet" button
        },rollingTime);
    });
    
});

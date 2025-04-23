
 var buttonColours=["red","blue","green","yellow"];


 var gamePattern=[];
 var userClickedPattern=[];
 var start=false;
 var level =0;

// if user press any key rthen game start
 $(document).keypress(function (){
    if(!start){
        $("#level-title").text("Level"+ level);
        nextSequence();
        start=true;
    }
 });
 // by using jquery we add eventlistner to our class btn

 $(".btn").click(function (){
    var userChosenColour =$(this).attr("id")
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
 });


  function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]=== userClickedPattern[currentLevel])
    {
        
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    // when user press wrong btn game restart

     else{
        
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over,Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        },200);
        
        startOver();
    }

  }
  // increase the level of game and here  we generate random no and play game acc to that
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level" + level);
var randomNumber=Math.floor(Math.random()*4);
var randomChosenColour= buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
/*var audio=new Audio("sounds/"+ randomChosenColour+".mp3");
audio.play();*/

}
// add animation
function animatePress(currentColour){
    $("#"+ currentColour ).addClass("pressed");
    setTimeout( function (){
        $("#"+ currentColour).removeClass("pressed");
    },100);
    
    }
    // for playing sound
 function playSound(name){
    var audio=  new Audio("sounds/"+ name+".mp3");
    audio.play();

 }
// restart the game
 function startOver(){
level=0;
gamePattern=[];
start=false;
 }
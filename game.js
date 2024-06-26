var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function animationPress(randomChosenColour) {

    $("#" + randomChosenColour).addClass("pressed");
    setTimeout(function () {
        $("#" + randomChosenColour).removeClass("pressed");
    }, 100);
}

function playSound(randomChosenColour) {

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}

function checkAnswer (currentLevel) {



}

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("h1").text("Level" + " " + level + " " + randomChosenColour);

    animationPress(randomChosenColour);
    playSound(randomChosenColour);

}

$(".btn").on("click", function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    animationPress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer()

});

$(document).keypress(function() {

    nextSequence();

});

if (userClickedPattern === gamePattern) {
    level++;
    nextSequence();
}


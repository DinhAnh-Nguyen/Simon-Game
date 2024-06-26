var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function animationPress(randomChosenColour) {

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

}

function playSound(randomChosenColour) {

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    animationPress(randomChosenColour);
    playSound(randomChosenColour);

}

$(document).keypress(function() {

    $("h1").text("");
    nextSequence();

});

$(".btn").on("click", function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    animationPress(userChosenColour);
    playSound(userChosenColour);

});
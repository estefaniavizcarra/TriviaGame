$(document).ready(function(){
    
    $("#start-button").on("click", stopwatch.start);
    $(".choice").on("click", stopwatch.correctCount);
    $("#done-button").on("click", stopwatch.stop);
   $("#restart-button").on("click", stopwatch.reset);
    $("section").hide();
    $(".jumbotronfooter").hide();
});

var intervalId;
var clockRunning = false;
var correctAnswers = 0;
var stopwatch = {
time= 60,
correctCount= function() {  
     if (clockRunning) {
var selection = $(this).val().trim();

            if (selection === "correct" && correctAnswers < 6) {
                correctAnswers++
            }

            else if (correctAnswers > 6) {
                stopwatch.stop();
            }
                else if (!clockRunning) {
            event.preventDefault();
                }
            }
    reset=function() {
        stopwatch.stop();
        stopwatch.time = 60;
        correctAnswers = 0;
        $("#time-remaining").text("1:00");
        $("input[type='radio']").prop('checked', false);
    }
if(start = function() {
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
            $("section").show();
            $(".card").hide();
            

        }
    },

    stop=function() {
        clearInterval(intervalId);
        clockRunning = false;
        $("section").hide();
        $(".jumbotronfooter").show();
        $("#puntos").html("Score:" + correctAnswers + "/6");
    },

    count= function() {

        if (stopwatch.time > 0) {
            stopwatch.time--;
            var converted = stopwatch.timeConverter(stopwatch.time);

            $("#puntos").text(converted);
        }

        //when the clock reaches 0, stop counting down
        else {
            stopwatch.stop();
        }

    },

    timeConverter=function(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
    

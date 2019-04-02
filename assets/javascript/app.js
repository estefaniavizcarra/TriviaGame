$(document).ready(function(){
    $("section").hide();
    $("#startButton").click(function(){
      $("#startButton").on("click", start);  
      $("#checkButton").on("click", finish);  
      $("#restart-button").on("click", restart);  
      $(".choice").on("click", verify);

      function verify() {
var verify = $(this).val().trim();
    if (verify=== "correct" && correctAnswers < 6) {
            correctAnswers++
            // alert("Correct");
        }
    else if (verify==="wrong" && correctAnswers > 6) {
            counter.stop();
            // alert("wrong");
        }
      }
      var number = 50;
      var correctAnswers = 0;

      function start(){
        number = 50;
          counter = setInterval(timer, 1000);
          show("section");
          hide(".card");
          hide(".jumbotronfooter")

      }
      function timer(){
        number-- 
        $("#time-remaining").html(  number );
        if (number === 0){
          stop(); 
        }
      }
      function stop(){
          number=1
        clearInterval(counter); 
        $(".card").show();
          $("section").hide();
          show(".jumbotronfooter")
         $("#puntos").html("Score:"+ correctAnswers + "/6")      
          


      }
      function finish(){
          number = 1; 
          clearInterval(counter); 
          timer();
          $("#puntos").html(correctAnswers + "/"   + "6")                
          (".jumbotronfooter").show();
          $("input[type='radio']").prop('checked', false);


      }
  
      function restart(){
    number = 50;
    counter = setInterval(timer, 1000);
    show(".card");
          start();
      }
  
      function hide(e) {
          $(e).hide();
      }
      function show(e) {
          $(e).show();
      }
      start(); 
    });
  });
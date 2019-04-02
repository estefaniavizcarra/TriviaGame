$(document).ready(function(){
    $("section").hide();
    $("#start-button").click(function(){
        var number = 50;
        var correctAnswers = 0;
      $("#start-button").on("click", start);  
      $("#done-button").on("click", finish);  
      $("#restart").on("click", restart);  

      function verify() {

    var selection = $(this).val().trim();

        if (selection === "correct" && correctAnswers < 6) {
            correctAnswers++
        }
        else if (correctAnswers > 6) {
            counter.stop();
         
        }
    }
        ;
      function start(){
          counter = setInterval(timer, 1000);
          showMe("section");
          hideMe(".card");
          hideMe(".jumbotronfooter")

      }
      function timer(){
        number-- 
        $("#time-remaining").html(  number );
        if (number === 0){
          stop(); 
        }
      }
      function stop(){
          clearInterval(counter); 
        $(".card").show();
          $("section").hide();
          (".jumbotronfooter").show();
            $("#puntos").html(correctAnswers + "/"   + "6")                


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
          start();
      }
  
      function hideMe(e) {
          $(e).hide();
      }
      function showMe(e) {
          $(e).show();
      }
      start(); 
    });
  });
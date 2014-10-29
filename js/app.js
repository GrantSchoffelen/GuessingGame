//global variables- working 
    var mystery_num = Math.floor((Math.random() * 100) + 1)
	var guess = $("#guessbox").val();
	var guessed = [];  
    var counter = 0; 


//new game function starts new game -working 
$('#newgame').on('click', function(){
	mystery_num = Math.floor((Math.random() * 100) + 1)
	guess = $("#guessbox").val();
	guessed = [];  
    counter = 0; 
    proxy =Math.abs(mystery_num - guess); 
    $('#hint').text("Hint")
    $("#game_text").text("Guess A Number!!!")
    $('#proxy').text('???')
    $('body').removeClass('winner'); 
    $('body').addClass('playing')
	})

$(document).ready(function(){

//Checks if users_ipunt is a valid guess
	$("#guess_submit").on("click", function valid_guess(){
		guess = $("#guessbox").val();
		$("#guessbox").val(""); 
		var proxy =Math.abs(mystery_num - guess); 
		


		if( counter < 5){
			for(var i=0; i<guessed.length; i++){
				if (guess=== guessed[i]){
					alert('You already gussed that number')
					counter= counter -1; 
				}
			}


			if(isNaN(guess)){
			alert("Please enter a Number")
			}
			else if (guess>100 || guess <1 || guess ===0){
			alert("please enter a number between 1 and 100")
			}
			else if (guess > mystery_num){
			$("#game_text").text("Guess Lower")
			guessed.push(guess); 
			counter ++; 
			}

			else if (guess < mystery_num){
			$("#game_text").text("Guess Higher")
			guessed.push(guess); 
			counter ++;
			}

			else if (guess == mystery_num){
			$("#game_text").text("Your on the Money!")
			$('body').removeClass('playing'); 
			$('body').addClass('winner')
			$('#count').text('You Won!')
			}

		
		

			if (proxy>30 && proxy<100){
				$('#proxy').text('You are Ice cold')
			}
			else if (proxy>=15 && proxy<30){
				$('#proxy').text('You are Cold')
			}
			else if (proxy>=7 && proxy<15){
				$('#proxy').text('You are Warm')
			}
			else if (proxy>3 && proxy<7){
				$('#proxy').text('You Are Hot')
			}
			else if (proxy>0 && proxy<=3){
				$('#proxy').text('You Are Boiling Hot')
			}
			else if (proxy===0){
				$('#proxy').text('Congratulations')
			}
             var proxy1 = Math.abs(mystery_num - guessed[i-1]);
             if(proxy1<proxy){
             	$('#last_guess').text("Your guess " + guess + " is further than your guess " + guessed[i-1])
             }
             else if (proxy1>proxy){
             	$('#last_guess').text("Your guess " + guess + " is closer than your guess " + guessed[i-1])

             }
			$('#count').text(5-counter + " Guesses Remaining")
			
			$('#guess_list').text("Previous Guesses " + guessed )
			



		//alert(guessed); 
        //alert(counter); 

     }    

     else (
     	alert('Your done Press Start new game to start over'))

    

 
	}); 

		


//Hint button reveals answer -working 
	$('#hint').click(function(){
		$(this).text("Are you sure You Want a Hint?").click(function(){
			$(this).text("The Answer is" + " " + mystery_num); 
			});
		});

	})

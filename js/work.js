$(document).ready(function() {




var mystery_num = Math.floor((Math.random() * 100) + 1); 




$("#guess_submit").on("click",function check_guess(guess){
    var guess = $("#guessbox").val(); 
    var proxy =Math.abs(mystery_num - guess); 
    var counter = 0; 
    var guessed = [];
  
    


	if(isNaN(guess)){
		alert("Please Enter A Valid Number")
	}

	else if ((guess>100) || guess <1 || guess ===0){
		alert("please enter a number between 1 and 100")
	}

	else if (guess > mystery_num){
		$("#game_text").text("Guess Lower")

	}

	else if (guess < mystery_num){
		$("#game_text").text("Guess Higher")

	}

	else if (guess == mystery_num){
		$("#game_text").text("Your on the Money!")

	}



	if (proxy>30 && proxy<100){
			$('#proxy').text('You are Ice cold')}
	else if (proxy>=15 && proxy<30){
			$('#proxy').text('You are Cold')}
	else if (proxy>=7 && proxy<15){
			$('#proxy').text('You are Warm')}
	else if (proxy>3 && proxy<7){
			$('#proxy').text('You Are Hot')}
	else if (proxy>0 && proxy<=3){
			$('#proxy').text('You Are Boiling Hot')}
	else if (proxy===0){
			$('#proxy').text('Congratulations')}




	


})


$('#hint').click(function(){
	$(this).text("Are you sure You Want a Hint?").click(function(){
		$(this).text("The Answer is" + " " + mystery_num); 
})
	
	
})





}); 
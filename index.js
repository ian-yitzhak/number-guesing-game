//generate a random value 
var y = Math.floor(Math.random() * 10 + 1);


//choose the correct guess
var guess = 1;


document.getElementById("submitguess").onclick=  function(){


	

	//user guesses a number	 
	//the alert to be displayed on guess
	
    var x = document.getElementById("guessField").value;

    if (x == y) {
        alert("CONGRATULATIONS!!! YOU WON " +
            guess  );
    } else if (x > y)
    
    {
        guess++;
        alert("TRY A SMALLER NUMBER");
    } else {
        guess++;
        alert("TRY A GREATER NUMBER")
    }
}


//Allow user to select number of sticks
var difficulty="hard";
$(document).ready(function() {
  var sticksRemaining=0;
	var instructionsText=$('<p id="iText"><br>The aim of the game is to have the other player remove the last stick. <br><br> You must select one to three sticks each turn.<br><br> Try the game now with ten sticks!</p>').hide();

	$('#nimBegin').append('<div class="span4 game"><h4>The Nim Game</h4><div class="btn-group difficultySelector" data-toggle="buttons-radio"><button type="button" class="btn btn-primary easy">Easy</button><button type="button" class="btn btn-primary active medium">Medium</button><button type="button" class="btn btn-primary hard">Hard</button></div><div class="welcome">Please input the number of sticks you would like to play with.<br><br><input type="number" id="stackSize" placeholder = "Stack size"><div class="btn go">Play!</div><p class="btn" id="help">Instructions</p></div ><div class="sticksGraphic" data-toggle="buttons-checkbox"></div><div id="playingArea"></div></div>');

	var numSticks = $('#stackSize').val();


	$('#stackSize').change(function() {
		numSticks = $('#stackSize').val();
		if (numSticks < 0) {
			$('#stackSize').val(0);
		} else if (numSticks !== Math.floor(numSticks)) {
			$('#stackSize').val(Math.floor(numSticks));
		}
		console.log(numSticks);
	});

	//$('#game').hide();
	 //var difficultySelector=$('<div class="btn-group data-toggle="buttons-radio"><button type="button" class="btn easy btn-primary">Easy</button><button type="button" class="btn medium btn-primary">Medium</button><button type="button" class="btn hard btn-primary">Hard</button></div>');
	var easyButton=$('<button class="btn easy">Easy</button>');
	$('.sticksGraphic').hide()

	//var altSelector=$('<div class="btn-group" data-toggle="buttons-radio"><button type="button" class="btn btn-primary easy">Easy</button><button type="button" class="btn btn-primary medium">Medium</button><button type="button" class="btn btn-primary active hard">Hard</button></div>');
	//$('.hard').addClass('active');

	$('.easy').on('click', function() {
		difficulty="easy";
		//$('#playingArea').append(difficulty);
	});


	$('.medium').on('click', function() {
		difficulty="medium";
		//$('#playingArea').append(difficulty);
	});


	$('.hard').on('click', function() {
		difficulty="hard";
		//$('#playingArea').append(difficulty);
	});

	//$('.sticksGraphic').append('<button type="button" class="btn btn-primary stick">Hello</button>');



	/*$('.btn-group').on('click', function() {
		difficulty="medium";
		$('#playingArea').append(difficulty);
	});*/



	//$('#playingArea').append("Anyone there?");

	 //$('.game').prepend(altSelector);
	 // $('.game').prepend(exampleText);
	 //$('.josh').slideDown();
	/*$('#welcome').prepend(difficultySelector);
	$('#playingArea').append(exampleText);
	$('.josh').slideDown();

*/
	$('.btn.go').on('click', function() {
		//$('#playingArea').append("I made it here in the click");
		$('#iText').slideUp();	//Hide Instructions
		if((sticksRemaining=$('#stackSize').val()*1)>1){
		$('.temp').remove();
		$('.cTemp').remove();
		$('.other').remove();
		$('.welcome').slideUp('slow');
		//$('#playingArea').append("I made it here in the click");
		//$('.btn.go').hidden();
		playGame(sticksRemaining);}

	});

	$('#help').on('click', function() {


		$('.welcome').append(instructionsText);

		$('.other').slideUp();
		$('#iText').slideToggle();

	});


});

var waiting=false;






function playGame(sticksLeft){

		//$('#playingArea').append("I made it here in playGame.");
		//$('#playingArea').append("<p class='other'>Welcome to the game.</p>");

		computerTurn(sticksLeft);



	/*
		while(sticksLeft>0){
			if (waiting==true){
				sticksLeft=humanTurn(sticksLeft);

			}
			if(waiting=false) {
				sticksLeft=computerTurn(sticksLeft);
			}
			$('#playingArea').append("Returning human");
		})*/








		/*while(sticksLeft>0) {
		$('#playingArea').append(sticksLeft);
		sticksLeft=humanTurn(sticksLeft);
		$('#playingArea').append("How did I get here");
		$('#playingArea').append(sticksLeft);
		if (sticksLeft>0) {
			sticksLeft=computerTurn(sticksLeft);
			}
		}*/



}

function endOfGame(winner) {
	if(winner==1) {
		$('.temp').slideUp();
		$('.cTemp').slideUp();
		$('.other').slideUp();
		$('#playingArea').append("<p class='other'>Oh no! I am forced to take the last stick. <br> Great job for winning!</p>");
		$('.welcome').slideDown();
	}
	else {
			$('.temp').slideUp();
		$('.cTemp').slideUp();
		$('.other').slideUp();
		$('#playingArea').append("<p class='other'>Too bad you lost. </p>");
		$('.welcome').slideDown();
	}
	firstTurn=true;
}

var firstTurn=true;

function humanTurn(pile) {
	if(pile<=0){
		endOfGame(1);
		return true;
	}

	//var sticksButtons=$('<div class="btn-group sticksGraphic" data-toggle="buttons-checkbox"><button type="button" class="btn btn-primary stick stick1">Hi</button></div>');


	var newInput=$('<input class = "temp" type="number" id="choice" placeholder = "How many?">').hide();
	var request=$("<p class='temp'>There are " +pile+" sticks left. <br>How many would you like to take?</p>").hide();
	var clarification=$("<p class='temp'>Please select a number between 1 and 3</p>").hide();
	var newButton=$('<div class="btn now temp selectButton">Select</div>').hide();
	if(firstTurn==true){
		for (var i = pile-1; i >= 0; i--) {
				$('.sticksGraphic').append('<button type="button" class="btn btn-primary stick">|</button>');

		};

		firstTurn=false;
	}



	$('.sticksGraphic').slideDown();
	//$('.btn.now').on('click',function(){
	//$('#playingArea').append(sticksButtons);


	$('#playingArea').append(request);
	//$('#playingArea').append(newInput);
	$('.sticksGraphic').append(newButton);
	$('.temp').slideDown();
	$('.btn.now').on('click',function(){
		//var stickChoice=$('#choice').val()*1;
		var stickChoice=$('.stick.active').length;
		if(stickChoice>3 || stickChoice<1) {
			$('#playingArea').append(clarification);
			$('#playingArea').append(request);
			//$('#playingArea').append(newInput);
			$('.sticksGraphic').append(newButton);
			$('.temp').slideDown();
		}
		else{
			$('.temp').slideUp();
			$('.temp').remove();
			//$('.stick.active').fadeOut('fast', function(){$('.stick.active').remove();});

			$('.stick.active').remove();

			// Adjust display for plural stick removals
			if(stickChoice>1) {
				$('#playingArea').append('<p class="other">You removed '+stickChoice+' sticks.</p>');
			}
			else
			{
				$('#playingArea').append('<p class="other">You removed '+stickChoice+' stick.</p>');
			}

			pile=pile-stickChoice;
			wating=false;
			return computerTurn(pile);
		}
	});

}


function computerTurn(pile) {
	//$('#playingArea').append("<p>Difficult of: " +difficulty+"</p>");

	if(firstTurn==true){
		$('#playingArea').prepend('<p class="other">You started the game with '+pile+' sticks.</p>')
	}

	if(difficulty=="hard"){

		//$('#playingArea').append(difficulty);
		if(pile<=0){
			endOfGame(0);
			return true;
		}
		var computerChoice=0;

		if(pile%(3+1)==1) {
			computerChoice=1;
		}
		else if(pile<5 && pile>1) {
			computerChoice=pile-1;
		}
		else {
			computerChoice=((pile-1)%(3+1));
		}


	}
	else if(difficulty=="medium"){


		if(pile<=0){
			endOfGame(0);
			return true;
		}
		var computerChoice=pile%(3+2);

		if(pile<5){
			computerChoice=pile-1;
			if(computerChoice==0){
				computerChoice=1;
			}
		}
		if(computerChoice>3 || computerChoice==0){
			computerChoice=3;
		}
	}
	else {
		if(pile>3){
			computerChoice=Math.floor((Math.random()*3)+1);
		}
		else{
			computerChoice=pile-1;
		}
		if(computerChoice==0){
			computerChoice=1;
		}

	}


	//var sticksRemainingNotice=$('<p id="cTemp1" class="cTemp">Sticks remaining: '+pile+'</p>').hide();
	var computerChoiceNotice;

	if (computerChoice>1){
		computerChoiceNotice=$("<p id='cTemp2' class ='cTemp'>I will take " +computerChoice+" sticks.</p>").hide();
	}
	else{
		computerChoiceNotice=$("<p id='cTemp2' class ='cTemp'>I will take " +computerChoice+" stick.</p>").hide();
	}
	//$('#playingArea').append(sticksRemainingNotice);


	$('#playingArea').append(computerChoiceNotice);
	pile=pile-computerChoice;

	//$('#playingArea').append(sticksRemainingNotice);

	$('.cTemp').slideDown();

	$( ".stick").each(function ( index, element) {
        // domEle == this
        //$('#playingArea').append(index);

        if(index>$('.stick').length-computerChoice-1){
        	$(this).fadeOut('slow', function(){$(this).remove();});

        }

      });





	waiting=true;
	return humanTurn(pile);
}



var rounds = prompt ("How many rounds of ro-sham-bo would you like to play?");

var player = 0;
var computer =0;

for (i=0;i<rounds;i++) {

var userChoice = prompt ("Choose rock, paper, or scissors.");

if (userChoice!=="rock" && userChoice!=="paper" && userChoice!=="scissors") {
	console.log("You must choose rock, paper, or scissors");
	break;
}

var computerChoice = Math.random();

if (computerChoice < .33) {
	computerChoice = "rock";
}
else if (computerChoice < .66) {
	computerChoice = "paper";
	}
else {
	computerChoice = "scissors";
}

function compare(var1,var2) {
	if (var1 == var2) {
		 console.log("It's a tie!");
	}
	else if (var1 == "rock") {
		if (var2 == "paper") {
			console.log("Paper wins!");
			computer = computer + 1;
		}
		else {
			console.log("Rock wins!");
			player = player + 1;
	}
}
	else if (var1 == "paper") {
		if (var2 == "scissors") {
			console.log("Scissors wins!");
			computer = computer + 1;
		}
		else {
			console.log("Paper wins!");
			player = player + 1;
}
	}
	else if (var1 == "scissors") {
		if (var2 == "rock") {
			console.log("Rock wins!");
			computer = computer + 1;
		}
		else {
			console.log("Scissors wins!");
			player = player + 1;
	}
}
}

	console.log("You chose " + userChoice + ".");
	console.log("The computer chose " + computerChoice + ".");	
	compare(userChoice,computerChoice);
	console.log("  You: " + player);
	console.log("  Computer: " + computer);
}

if (player > computer) {
	console.log("You won!!");
}
else {
	console.log("You lost!! :(");
}
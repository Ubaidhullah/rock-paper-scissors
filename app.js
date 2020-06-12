let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard_div = document.getElementById(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
function convertToLetter(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissor";
}

function wins(userChoice, compChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	const smallWordU = "user".fontsize(3).sub();
	const smallWordC = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToLetter(
		userChoice
	)}${smallWordU}  Beats  ${convertToLetter(
		compChoice
	)}${smallWordC}  You Win!`;
}

function loses(userChoice, compChoice) {
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	const smallWordU = "user".fontsize(3).sub();
	const smallWordC = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToLetter(
		userChoice
	)}${smallWordU}  Loses To  ${convertToLetter(
		compChoice
	)}${smallWordC}  You Lost!`;
}

function draw(userChoice, compChoice) {
	const smallWordU = "user".fontsize(3).sub();
	const smallWordC = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToLetter(
		userChoice
	)}${smallWordU}  Draws To  ${convertToLetter(
		compChoice
	)}${smallWordC}  It's a Draw!`;
}

function game(userChoice) {
	const compChoice = getComputerChoice();
	switch (compChoice + userChoice) {
		case "pr":
		case "rs":
		case "sp":
			wins(userChoice, compChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			loses(userChoice, compChoice);
			break;

		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);
			break;
	}
}
function main() {
	rock_div.addEventListener("click", function () {
		game("r");
	});

	paper_div.addEventListener("click", function () {
		game("p");
	});

	scissors_div.addEventListener("click", function () {
		game("s");
	});
}

main();

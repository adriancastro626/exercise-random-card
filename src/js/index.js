import "../styles/index.scss";

window.onload = () => {
	document.querySelector(".bodyCard").classList.add(randomSuit());
	document.querySelector(".bodyCard").innerHTML = randomNumber();
};
let randomNumber = () => {
	let numbers = [
		"A",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"J",
		"Q",
		"K"
	];
	let indexNumb = Math.floor(Math.random() * numbers.length);
	return numbers[indexNumb];
};
let randomSuit = () => {
	let suit = ["spade", "club", "diamond", "heart"];
	let indexSuit = Math.floor(Math.random() * suit.length);
	return suit[indexSuit];
};

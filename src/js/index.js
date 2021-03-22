import "../styles/index.scss";

// NUEVA RANDOM CARD
let randomCard = () => {
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
	let indNumb = numbers[indexNumb];
	document.querySelector(".bodyCard").innerHTML = indNumb;

	let suit = ["spade", "club", "diamond", "heart"];
	let indexSuit = Math.floor(Math.random() * suit.length);
	let indSuit = suit[indexSuit];
	document.querySelector(".bodyCard").className = `bodyCard ${indSuit}`;
};

//BOTON PARA NUEVA CARTA
window.addEventListener("load", randomCard);

let btn = document.createElement("BUTTON");
btn.innerHTML = "New Card Here!!";
document.body.appendChild(btn);
btn.addEventListener("click", randomCard);

//INTERVALO DE 10s PARA NUEVA CARTA
window.setInterval(randomCard, 10000);

let countdown = document.createElement("div");
countdown.id = "countdown";
document.body.appendChild(countdown);

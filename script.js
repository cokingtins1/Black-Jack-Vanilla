// import _ from "lodash"

const dealerVal = document.getElementById("dealerVal");
const yourVal = document.getElementById("yourVal");
const yourImg = document.getElementById("yourimg");
const orVal = document.getElementById("orVal");

let yourCards = [];
let dealerCards = [];

let suits = [];
let values = [];
let singleDeck = [];
let shuffledDeck = [];

const numPlayer = 1;

const funcBtns = document.querySelectorAll(".func");

funcBtns.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.id === "play") {
			gameSetUp();
			createDeck();
		} else if (button.id === "deal") {
			dealCards();
			// var test = ["3C", "AS", "5H", "AH"];
			determineVal(yourCards);
			updateDisplay(yourCards);
		} else if (button.id === "hit") {
			hitPlayer();
			determineVal(yourCards);
			updateDisplay(yourCards);
		} else if (button.id === "clear") {
			clearGame();
		}
	});
});

// Game set-up-----------------------------

function gameSetUp() {
	suits = ["D", "C", "H", "S"];
	values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
	singleDeck = [];
	shuffledDeck = [];
}

function createDeck() {
	for (let s = 0; s < suits.length; s++) {
		for (let v = 0; v < values.length; v++) {
			singleDeck.push(values[v] + suits[s]);
		}
	}

	shuffle(singleDeck);
}

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	shuffledDeck = array;
}

//   Determine values-------------------------

function dealCards() {
	if (numPlayer === 1) {
		yourCards.push(shuffledDeck.pop());
		dealerCards.push(shuffledDeck.pop());
		yourCards.push(shuffledDeck.pop());
		dealerCards.push(shuffledDeck.pop());
	}
	return yourCards;
}

function hitPlayer() {
	if (numPlayer === 1) {
		yourCards.push(shuffledDeck.pop());
	}
	return yourCards;
}

function determineVal(hand) {
	let val = 0;
	let orValNum = 0;
	let handVal = [];
	let numAce = [];

	for (let i = 0; i < hand.length; i++) {
		if (hand[i].slice(0, -1) === "A") {
			handVal[i] = 1; // default val of ace
			numAce += 1;
		} else if (
			hand[i].slice(0, -1) === "J" ||
			hand[i].slice(0, -1) === "Q" ||
			hand[i].slice(0, -1) === "K"
		) {
			handVal[i] = 10;
		} else {
			handVal[i] = parseInt(hand[i].slice(0, -1));
		}
	}

	// Handle multiple Aces (change first occurance of ace to 11)
	if (numAce > 1) {
		const index = handVal.indexOf(1);
		if (index !== -1) {
			handVal[index] = 11;
		}
	}

	// Determine hand value
	for (let i = 0; i < handVal.length; i++) {
		val += handVal[i];
	}

	// Determine hand value if hand incldues ace
	if (handVal.includes(1)) {
		for (let i = 0; i < handVal.length; i++) {
			if (handVal[i] === 1) {
				orValNum += 11;
			} else orValNum += handVal[i];
		}
	}

	// Print hand value
	yourVal.textContent = val;
	if (orValNum > 21) {
		orVal.textContent = "bust";
	} else {
		orVal.textContent = orValNum;
	}

	console.log(handVal);
	console.log(numAce);
}

// DOM manipulation
var htmlElements = "";
var imgMap = [];

function updateDisplay(hand) {
	const imgContainer = document.createElement("div");
	imgContainer.classList.add("imgCont");

	if (htmlElements === "") {
		for (let i = 0; i < hand.length; i++) {
			imgMap[i] = "./cards/" + hand[i] + ".svg";
		}

		for (let i = 0; i < hand.length; i++) {
			htmlElements += `<img class = "card" src=${imgMap[i]} alt="" />`;
		}
		console.log(htmlElements);
		imgContainer.innerHTML = htmlElements;
		yourImg.append(imgContainer);
	} else if(htmlElements !== ""){
        return
    }
}

function checkWin() {}

function clearGame() {
	dealerCards = [];
	yourCards = [];
	orValNum = [];
	dealerVal.textContent = "";
	yourVal.textContent = "";
}
// let deck = []

// const createBlack8 = (arr, n) =>
// [].concat(...Array(n).fill(arr));

// deck = createBlack8(singleDeck,8)

// import _ from "lodash"

const dealerVal = document.getElementById("dealerVal");
const yourVal = document.getElementById("yourVal");

const yourCards = [];
const dealerCards = [];

const numPlayer = 1;

const funcBtns = document.querySelectorAll(".func");

funcBtns.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.id === "play") {
			createDeck();
		} else if (button.id === "deal") {
			dealCards();
			determineVal();
		} else if (button.id === "hit") {
			hitPlayer();
			determineVal();
		} else if (button.id === "clear") {
			clearGame();
		}
	});
});

// Game set-up-----------------------------
const suits = ["D", "C", "H", "S"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
var singleDeck = [];
var shuffledDeck = [];

function createDeck() {
	for (let s = 0; s < suits.length; s++) {
		for (let v = 0; v < values.length; v++) {
			singleDeck.push(values[v] + suits[s]);
		}
	}
	dealerVal.textContent = "69";
	yourVal.textContent = "420";
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
let yourValNum = [];

function dealCards() {
	if (numPlayer === 1) {
		yourCards.push(shuffledDeck.pop());
		dealerCards.push(shuffledDeck.pop());
		yourCards.push(shuffledDeck.pop());
		dealerCards.push(shuffledDeck.pop());
	}
}

function hitPlayer() {
	if (numPlayer === 1) {
		yourCards.push(shuffledDeck.pop());
	}
}

function determineVal() {
	var val = 0;
	let yourCardsVal = [];

	for (let i = 0; i < yourCards.length; i++) {
		
		if (yourCards[i].slice(0, -1) === "A") {
			yourCardsVal[i] = 1;
		} else if (
			yourCards[i].slice(0, -1) === "J" ||
			yourCards[i].slice(0, -1) === "Q" ||
			yourCards[i].slice(0, -1) === "K"
		) {
			yourCardsVal[i] = 10;
		} else {
			yourCardsVal[i] = parseInt(yourCards[i].slice(0, -1));
		}
	}
	console.log(yourCards);

	for (let i = 0; i < yourCards.length; i++) {
		if (
			yourCardsVal[i] === "J" ||
			yourCardsVal[i] === "Q" ||
			yourCardsVal[i] === "K"
		) {
			val += 10;
		} else if (yourCardsVal[i] === "A") {
			val += 11;
		} else {
			val += yourCardsVal[i];
		}

		yourVal.textContent = val;
	}

	console.log(val);
    console.log(shuffledDeck.length)
}

let test = [];

function clearGame() {
	// test = [1,2,3,4,5]
	test.push("1");

	if (typeof test[0] === "string") {
		console.log("its a string");
	} else {
		console.log("not a string");
	}
}

// test.push(1,2,3,4,5)
// console.log(test)
// singleDeck = []
// shuffledDeck = []
// yourCards = []
// yourVal = []
// dealerCards = []
// dealerVal = []

// let deck = []

// const createBlack8 = (arr, n) =>
// [].concat(...Array(n).fill(arr));

// deck = createBlack8(singleDeck,8)

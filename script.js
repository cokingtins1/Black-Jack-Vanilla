// import _ from "lodash"

const dealerVal = document.getElementById('dealerVal')
const yourVal = document.getElementById('yourVal')

const yourCards = []
const dealerCards = []



const funcBtns = document.querySelectorAll('.func')

funcBtns.forEach(button => {

    button.addEventListener('click', () => {
        if (button.id === "play") {
            createDeck()
        } else if (button.id === "deal") {
            dealCards()
            
            // console.log(yourCards)
            // console.log(dealerCards)
        } else if (button.id === "contact") {
            return
        }
    })

})


const suits = ['D', 'C', 'H', 'S']
const values = [2,3,4,5,6,7,8,9,10,"J","K","Q","A"]
let singleDeck = []
let shuffledDeck = []



function createDeck(){
    for(let s=0;s<suits.length;s++){
        for(let v=0;v<values.length;v++){
            singleDeck.push(values[v]+suits[s])
        }
    }
    dealerVal.textContent = "69"
    yourVal.textContent = "420"
    // shuffledDeck = _.shuffle(singleDeck)
}

// determineVal(singleDeck[10])

let yourValNum = []

function dealCards(){
    yourCards.push(shuffledDeck.pop())
    dealerCards.push(shuffledDeck.pop())

    determineVal(yourCards[0])
}


function determineVal(card){

    for(let i=0;i<yourCards.length;i++){
        card[i].slice(0,-1)
        console.log(card[i])
        // yourValNum.push(card[i])
    }

    // yourValNum.push(Cardval.value)
    console.log(yourCards)
    console.log(yourValNum)
}




// let deck = []

// const createBlack8 = (arr, n) => 
// [].concat(...Array(n).fill(arr));

// deck = createBlack8(singleDeck,8)







"use strict";
const prompt = require("prompt-sync")();

const suites = [
    { "name": "crown", "image": "\u265B"},  // u2655
    { "name": "anchor", "image": "\u2693"},
    { "name": "spade", "image": "\u2660"},
    { "name": "club", "image": "\u2663"},
    { "name": "heart", "image": "\u2665"},
    { "name": "diamond", "image": "\u2666"},
]

const game = [
    {"turn": 0, "funds": 50}
    ]


function placeBets(funds) {

    const betDetail = {
        betList: [],
        remainFunds: funds, 
    };
    
    let badBet = false, totalAmountBet = 0;
    let entered;
    let promptString = "";
    do {
        suites.forEach(item => {
            promptString = promptString + item.image + ", ";            
        })          
        
        entered = prompt(`enter your bets on ${[promptString.slice(0, -2)]} : `);
        totalAmountBet = entered.match(/\d+/g).reduce(function(a,b) {return +a + +b;});
        if ((funds - totalAmountBet < 0)) {
            console.log(`You only have ${funds} remaining - You can't bet that much`);
            badBet = true;
        }
    } while (badBet);
  
    let i = 0;
    for (let bet of entered.split(",")) {
        betDetail.betList.push(`${bet}`);
        i++;
    }

    if (betDetail.betList.length < 6 ) {
        // console.log(`   bet is only ${betDetail.betList.length} elements, should have 6`)
        for (let i = betDetail.betList.length; i < 6; i++) {
            betDetail.betList.push(0);
        }
        // console.log(`   completing bet details automatically: ${betDetail.betList}`);      
    }

    betDetail.remainFunds = funds - totalAmountBet;

    return betDetail;
}

function rollDice() {
    const diceSides = [];

    suites.forEach(item => {
        diceSides.push(item.name);            
    });
      
    // console.log(`Possible rolls: ${JSON.stringify(diceSides)}`);
    let roll = [];
    let n =3;
    while (n) {
        roll.push(diceSides.splice(Math.floor(Math.random() * diceSides.length), 1)[0]);
        n--;
    }
    // console.log(`This roll: ${JSON.stringify(roll)}`);
    return roll;
}

function collectWinnings(betDetail,roll) {
    let winnings = 0;
    // console.log(`   before calculating your winnings you have: ${betDetail.remainFunds}`);  

    for (const i of roll) {
        //console.log(`item is: ${i}`);    
        const pos = suites.map(e => e.name).indexOf(i);
        //console.log(`${i} index is: ${pos}`);  
        let thebets =  betDetail.betList   
        //console.log(`your bet was: ${JSON.stringify(thebets)}`);        
        //console.log(`   for ${i} you bet ${(thebets[pos])}`);
        winnings = parseInt(winnings) + parseInt(thebets[pos]); 
        //console.log(`Your winning is now: ${winnings}`);
    }
    console.log(`You won a total of : ${winnings}`);  
    return winnings;        
}

while (game[game.length - 1].funds > 0 && game[game.length - 1].funds < 99 ) {
    console.log(`   Turn: ${game[game.length - 1].turn}      Funds: ${game[game.length - 1].funds}`);
    
    const thisBet = placeBets(parseInt(game[game.length - 1].funds));    
    //console.log(`Your Bets are : ${JSON.stringify(thisBet)}`);
    
    const thisRoll = rollDice();
    console.log(`The roll is ${thisRoll}`);
    
    let newFunds = parseInt(thisBet.remainFunds) + parseInt(collectWinnings(thisBet,thisRoll));

    let turn = {"turn": `${parseInt(game[game.length - 1].turn) + 1}`, "funds": `${parseInt(newFunds)}` }
    game.push(turn);




    // console.log(`Fund remaining are ${thisBet.remainFunds}`);
    // console.log(`Funds at start of turn ${turn} are ${funds}`);    
    // console.log(`Funds at end of turn ${turn} are ${thisBet.remainFunds}`);    
    // let turn = {"turn": `game[game.length - 1].turn++`, "funds": `${thisBet.remainFunds}`}
    // game.push(turn);
}

console.log("\n-----------------------");
console.log("\n-------- End --------");
console.log(JSON.stringify(game));

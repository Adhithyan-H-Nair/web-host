//function to create dice
function createDice(number){
    const dicePosition = {
        1: [
            [50, 50]
        ],
        2:[
            [20,20],
            [80,80],
        ],
        3:[
            [20,20],
            [50,50],
            [80,80]
        ],
        4:[
            [20,20],
            [20,80],
            [80,20],
            [80,80]
        ],
        5:[
            [20,20],
            [20,80],
            [50,50],
            [80,20],
            [80,80]
        ],
        6:[
            [20,20],
            [20,80],
            [50,20],
            [50,80],
            [80,20],
            [80,80]
        ]
    };

    const dice = document.createElement("div")
    dice.classList.add("dice");

    for(const dotPosition of dicePosition[number]){
        const dot = document.createElement("div");

        dot.classList.add("dice-dot");
        dot.style.setProperty("--top", dotPosition[0] + "%");
        dot.style.setProperty("--left", dotPosition[1] + "%");
        dice.appendChild(dot)
    }

    return dice;
}

//randomizing number
function randomizeDice(diceContainer, numberOfDice){
    diceContainer.innerHTML = "";

    for (let i = 0; i <numberOfDice; i++){
        const random = Math.floor((Math.random()*6) + 1);
        const dice = createDice(random);

        diceContainer.appendChild(dice);
    }

}

const NUM_OF_DICE = 1
const diceContainer = document.querySelector(".container");
const btnRoll = document.querySelector(".btn-roll");

randomizeDice(diceContainer, NUM_OF_DICE);

//event-listner
btnRoll.addEventListener("click", () => {
    const interval = setInterval(()=> {
        randomizeDice(diceContainer, NUM_OF_DICE);
    },50);
    
    setTimeout(() => clearInterval(interval), 1000);
} );
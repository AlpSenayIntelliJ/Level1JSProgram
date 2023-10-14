const resetBtn = document.getElementById("resetbutton");

function handleClick() {
    window.location.reload();
}

resetBtn.addEventListener('click', handleClick);


function generateRandom() {
    return 1 + Math.floor(Math.random()*100);
}

let random = generateRandom();

const para = document.createElement('p');

function showRandomForTesting() {
    para.textContent = `${random}`;
    document.body.appendChild(para);
}

showRandomForTesting();
para.textContent = "Testing: " + para.textContent;


function add1() {
    document.getElementById("quantity").stepUp(1);
}

function add5() {
    document.getElementById("quantity").stepUp(5);
}

function add10() {
    document.getElementById("quantity").stepUp(10);
}

function add25() {
    document.getElementById("quantity").stepUp(25);
}

function sub1() {
    document.getElementById("quantity").stepDown(1);
}

function sub5() {
    document.getElementById("quantity").stepDown(5);
}

function sub10() {
    document.getElementById("quantity").stepDown(10);
}

function sub25() {
    document.getElementById("quantity").stepDown(25);
}

let guessInput = document.getElementById('quantity');

function determine() {
    let diff = Math.abs(random-guessInput.value);
    if (diff > 55) {
        return "Very Cold"; 
    } else if (diff <= 55 && diff >= 41) {
        return "Cold";
    } else if (diff <= 40 && diff >= 31) {
        return "Very Cool";
    } else if (diff <= 30 && diff >= 21) {
        return "Cool";
    } else if (diff <= 20 && diff >= 16) {
        return "Warm";
    } else if (diff <= 15 && diff >= 9) {
        return "Very Warm";
    } else if (diff <= 8 && diff >= 6) {
        return "Hot";
    } else if (diff <= 5 && diff > 0) {
        return "Very Hot";
    } else if (diff == 0) {
        return "Bingo!"
    }
}

let commit = document.getElementById('commitbutton');
let guesslog = document.getElementById('guesslog');
let guessesLeftSentence = document.getElementById('guessesLeftSentence');
let warningtext = "You have 1 guess left!";
let guessesLeftNum = document.getElementById("guessesLeft");
var defaultGuessesLeft = 5;

commit.addEventListener('click', () => {
    let num = guessInput.value;
    let status = determine();
    if (defaultGuessesLeft != 1) {
        defaultGuessesLeft--;
    }
    if (defaultGuessesLeft == 1) {
        guessesLeftSentence.innerHTML = warningtext.bold();
    }
    guessesLeftNum.innerHTML = defaultGuessesLeft;

    let template = `
                <tr>
                    <td>${num}</td>
                    <td>${status}</td>
                </tr>
                    `;

    guesslog.innerHTML += template;

})






function generateRandom() {
    return 1 + Math.floor(Math.random()*100);
}


const para = document.createElement('p');


function showRandomForTesting() {
    let n = generateRandom();
    para.textContent = `${n}`;
    document.body.appendChild(para);
}

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

let commit = document.getElementById('commitbutton');
let guesslog = document.getElementById('guesslog');

let guessInput = document.querySelector('#quantity');

commit.addEventListener('click', () => {
    let num = guessInput.value;
    

    let template = `
                <tr>
                <td>${num}</td>
                </tr>
                    `;

    table.innerHTML += template;
})


showRandomForTesting();
para.textContent = "Testing: " + para.textContent;







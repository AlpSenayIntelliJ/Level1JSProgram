function generateRandom() {
    return 1 + Math.floor(Math.random()*100);
}


const para = document.createElement('p');


function showRandomForTesting() {
    let n = generateRandom();
    para.textContent = `${n}`;
    document.body.appendChild(para);
}

const add1Button = document.querySelector('button');

var formValue = document.querySelector('input[name="formValue"]');

function add1() {
    formValue.value = formValue.value + 1;
}

add1Button.addEventListener('click', add1);


showRandomForTesting();
para.textContent = "Testing: " + para.textContent;



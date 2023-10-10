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
    let q = document.getElementById("quantity");
    q = `${(q += Number(quantity.value))}$`
}


showRandomForTesting();
para.textContent = "Testing: " + para.textContent;



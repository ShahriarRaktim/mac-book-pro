//  function for fixing extra cost 

function extraCostFixed(costId, cost) {
    const memory = document.getElementById(costId +'-cost');
    memory.innerText = cost;
}

//  function for fixing total price 

function totalFixed() {
    const lastTotal = document.getElementById('last-total');
    const totalPrice = document.getElementById('total-price');
    const basePrice = parseInt(document.getElementById('base-price').innerText);
    const memory = parseInt(document.getElementById('memory-cost').innerText);
    const stroge = parseInt(document.getElementById('stroge-cost').innerText);
    const delivary = parseInt(document.getElementById('delivary-cost').innerText);
    total= basePrice+memory+stroge+delivary;
    totalPrice.innerText = total;
    lastTotal.innerText = total;
}

//  Start Event Handler from here 

document.getElementById('memory-8gb').addEventListener('click', function () {
    extraCostFixed('memory', 0);
    totalFixed();
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    extraCostFixed('memory', 180);
    totalFixed();
})
document.getElementById('stroge-256gb').addEventListener('click', function () {
    extraCostFixed('stroge', 0);
    totalFixed();
})
document.getElementById('stroge-512gb').addEventListener('click', function () {
    extraCostFixed('stroge', 100);
    totalFixed()
})
document.getElementById('stroge-1tb').addEventListener('click', function () {
    extraCostFixed('stroge', 180);
    totalFixed()
})
document.getElementById('late-delivary').addEventListener('click', function () {
    extraCostFixed('delivary', 0);
    totalFixed()
})
document.getElementById('first-delivary').addEventListener('click', function () {
    extraCostFixed('delivary', 20);
    totalFixed()
})

//  Event handler for promo code 

document.getElementById('button-addon2').addEventListener('click', function () {
    const input = document.getElementById('input-promo');
    const lastTotal = document.getElementById('last-total');
    const lastTotalText = lastTotal.innerText;
    const inputPromo = input.value;
    if(inputPromo == 'stevekaku'){
        const promoTotal = parseInt(lastTotalText)*0.8;
        lastTotal.innerText = promoTotal;
        input.value = '';
        input.disabled = true;
    }
    else{
        input.value = 'wrong code';
    }
})
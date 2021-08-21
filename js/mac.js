function costFixed(costId, cost) {
    const memory = document.getElementById(costId +'-cost');
    memory.innerText = cost;
}

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


document.getElementById('memory-8gb').addEventListener('click', function () {
    costFixed('memory', 0);
    totalFixed();
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    costFixed('memory', 180);
    totalFixed();
})
document.getElementById('stroge-256gb').addEventListener('click', function () {
    costFixed('stroge', 0);
    totalFixed();
})
document.getElementById('stroge-512gb').addEventListener('click', function () {
    costFixed('stroge', 100);
    totalFixed()
})
document.getElementById('stroge-1tb').addEventListener('click', function () {
    costFixed('stroge', 180);
    totalFixed()
})
document.getElementById('late-delivary').addEventListener('click', function () {
    costFixed('delivary', 0);
    totalFixed()
})
document.getElementById('first-delivary').addEventListener('click', function () {
    costFixed('delivary', 20);
    totalFixed()
})
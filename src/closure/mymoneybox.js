// function moneybox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Moneybox: $${saveCoins}`);
// }

// moneybox(5); // Moneybox: $5
// moneybox(5); // Moneybox: $5

function moneybox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneybox();
myMoneyBox(5); // Moneybox: $5
myMoneyBox(5); // Moneybox: $10
myMoneyBox(15); // Moneybox: $25

const moneyBoxPedro = moneybox(); 
moneyBoxPedro(10); // Moneybox: $10
moneyBoxPedro(20); // Moneybox: $30
moneyBoxPedro(5); // Moneybox: $35
let unEuro = {
    "JPY": 156.5, // yen
    "USD": 1.07, // dollar
    "GBP": 0.87, // libra
}

// de dolar a yen japones
function fromDollarToYen(valorDollar) {
    // 1 USD to JPY conversion
    return valorDollar * unEuro["JPY"] / unEuro["USD"];
}

// de euro a usd
function fromEuroToDollar(valorEuro) {
    // 1 EUR to USD conversion
    return valorEuro * unEuro["USD"];
}

// de yen a libra
function fromYenToPound(valorYen) {
    // 1 JPY to GBP conversion
    return valorYen * (unEuro["GBP"] / unEuro["JPY"]);
}


let valorEuro = 10;
console.log(`${valorEuro} EUR is ${fromEuroToDollar(valorEuro)} USD`);

module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound};
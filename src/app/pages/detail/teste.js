const borders = ["BRA", "COL", "GUY"];

borders.forEach((border) => {
    return console.log(border);
});

const currencies = {
    BRL: {
        name: "Brazilian real",
        symbol: "R$",
    },
    USD: {
        name: "United States dollar",
        symbol: "$",
    },
};

const currencyCode = "BRL";

console.log(Object.values(currencies)[0].name);

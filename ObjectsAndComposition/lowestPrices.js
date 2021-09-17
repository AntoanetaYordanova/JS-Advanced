function lowestPrices(inputArr) {
    let products = {};

    for(let input of inputArr) {
        let [townName, productName, price] = input.split(' | ');
        price = Number(price);

        if(!products[productName]) {
            products[productName] = new Map;
        }

        products[productName].set(townName, price);
    }

    for(let product in products) {
        const sorted = Array.from(products[product].entries()) 
        .sort((a ,b) => a[1] - b[1] ? a[1] - b[1] : a);
        const printTown = sorted[0][0];
        const printPrice = sorted[0][1];
        console.log(`${product} -> ${printPrice} (${printTown})`);
    }
    
}

lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);
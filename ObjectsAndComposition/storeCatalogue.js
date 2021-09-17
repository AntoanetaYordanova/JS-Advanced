function storeCatalogue(inputArr) {
    let sorted = inputArr.sort((a,b) => a.localeCompare(b));
    let resultObj = {};

    sorted.forEach(item => {
        let firstLetter = item[0];
        let [name, price] = item.split(' : ');

        if(!resultObj[firstLetter]) {
            resultObj[firstLetter] = {};
        }

        resultObj[firstLetter][name] = Number(price);
    });

    for(let letter in resultObj) {
        const items = Object.entries(resultObj[letter]);
        console.log(letter);
        items.forEach(item => console.log(`  ${item[0]}: ${item[1]}`))
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)

console.log('----------------');
storeCatalogue(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])
function solution() {
    let ingredients = {
        protein : 0,
        carbohydrate : 0,
        fat : 0,
        flavour : 0
    };

    const recepies = {
        apple : [{carbohydrate : 1} , {flavour : 2}],
        lemonade : [{carbohydrate : 10}, {flavour : 10}],
        burger : [{carbohydrate : 5}, {fat : 7}, {flavour : 3}],
        eggs : [{protein : 5}, {fat : 1}, {flavour : 1}],
        turkey : [{protein : 10}, {carbohydrate : 10}, {fat : 10}, {flavour : 10}]
    }


    function restock(element, ammount) {
        ingredients[element] += ammount;
    }

    function cook(article, ammount) {
        let recipe = recepies[article];

        for(let element of recipe) {
            let [item, value] = Object.entries(element)[0];
            let isSuccess = true;
            if(ingredients[item] >= value * ammount) {
                ingredients[item] -= (value * ammount);
            } else {
                isSuccess = false;
                return `Error: not enough ${item} in stock `;     
            }

            if(isSuccess) {
                return 'Success'
            }
        }
    }

    function breakfastRobot(stringInput) {
        if(stringInput === 'report') {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
        } else {
            if(stringInput.includes('restock')) {
                let [r, element, ammount] = stringInput.split(' ');
                ammount = Number(ammount);
                restock(element, ammount);

            } else {
                let [p, article, ammount] = stringInput.split(' ');
                ammount = Number(ammount);
                cook(article, ammount);
            }
        }
    }

    return breakfastRobot
}

let manager = solution (); 

console.log(manager('restock carbohydrates 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('report'));

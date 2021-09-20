function solution() {
    const ingredients = {
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

   
    function prepare(item, quantity) {
        const recipe = recepies[item];
        let isSuccess = true;
        let errorMessage = '';

        if(checkAvailability(quantity, recipe)) {

            for(let element of recipe) {
                let [type, ammount] = Object.entries(element)[0];
                    ingredients[type] -= ammount * quantity;
                }
          
        } else  {
            isSuccess = false;

            for(let element of recipe) {
                let [type, ammount] = Object.entries(element)[0];

                    if(ingredients[type] < ammount * quantity) {
                        errorMessage = `Error: not enough ${type} in stock`;
                        break;
                    }
                }
        }

    if(!isSuccess) {
        return errorMessage;
    } else {
        return 'Success';
    }
    
}
    function checkAvailability(quantity, recipe) {
        let isAvailable = true;
        for(let element of recipe) {
            let [type, ammount] = Object.entries(element)[0];

            if(ingredients[type] < ammount * quantity) {
                isAvailable = false;
                break
            }
        }
        return isAvailable;
    }

    function breakfastRobot(inputString) {

        if(inputString === 'report') {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
        } else {

            if(inputString.includes('restock')) {
                let [r, element, quantity] = inputString.split(' ');
                quantity = Number(quantity);
                ingredients[element] += quantity;
                return 'Success'
            } else {
                let [p, item, quantity] = inputString.split(' ');
                quantity = Number(quantity);

               let message =  prepare(item, quantity);
               return message;
            }
        }
    }


    return breakfastRobot
}


let manager = solution();
console.log(manager('restock carbohydrates 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('report'));

// let manager = solution();
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock protein 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('report'));

class Restaurant{
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(arr) {
        arr.forEach(e => {
            let [productName, productQuantity, productTotalPrice] = e.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if(this.budgetMoney >= productTotalPrice) {
                if(!this.stockProducts.hasOwnProperty(productName)){
                    this.stockProducts[productName] = 0;
                }

                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        });

        
        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price ){
        if(this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        }

        this.menu[meal] = {
            neededProducts,
            price
        }

        const mealsCount = Object.keys(this.menu);

        if(mealsCount.length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${mealsCount.length} meals in the menu, other ideas?`;
        }
    }

    showTheMenu() {
        if(Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        const menuArr = [];
        for(let meal in this.menu) {
            menuArr.push(`${meal} - $ ${this.menu[meal].price}`);
        }

        return menuArr.join('\n');
    }

    makeTheOrder(meal){
        if(!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        const products = this.menu[meal].neededProducts;
        let productsInStock = true;

        products.forEach(p => {
            let [name, quantity] = p.split(' ');
            quantity = Number(quantity);
            if(!this.stockProducts.hasOwnProperty(name) || this.stockProducts[name] < quantity) {
                productsInStock = false;
            }
        });

        if(!productsInStock) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        } else {
            products.forEach(p => {
                let [name, quantity] = p.split(' ');
                quantity = Number(quantity);
                this.stockProducts[name] -= quantity;
            });
            
            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
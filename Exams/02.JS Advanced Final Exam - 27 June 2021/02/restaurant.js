class Restaurant{
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(arr) {

        arr.forEach(p => {
            let [name, quantity, price] = p.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            if(this.budgetMoney < price) {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            } else {
                if(!this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] = 0;
                }

                this.stockProducts[name] += quantity;
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            }
        });

        return this.history.join('\n');
    }

    addToMenu(meal, products, price){
        price = Number(price);

        if(this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        } else {
            this.menu[meal] = {
                products,
                price
            }

            const mealsCount = Object.keys(this.menu).length;

            if(mealsCount === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${mealsCount} meals in the menu, other ideas?`
            }
        }
    }

    showTheMenu() {
        if(Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        } else {
            for(let key in this.menu) {
                return `${key} - $ ${this.menu[key].price}`;
            }
        }
    }

    makeTheOrder(meal){
        if(!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        const products = this.menu[meal].products;
        let areAvailable = true;

        products.forEach(p => {
            let[name, quantity] = p.split(' ');
            if(this.stockProducts[name] < Number(quantity) || this.stockProducts[name] === undefined) {
                areAvailable = false;
            }            
        });

        if(areAvailable) {
            products.forEach(p => {
                let[name, quantity] = p.split(' ');
                this.stockProducts[name] -= Number(quantity);
            });
            this.budgetMoney += this.menu[meal].price;

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        } else {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        }
    }
}

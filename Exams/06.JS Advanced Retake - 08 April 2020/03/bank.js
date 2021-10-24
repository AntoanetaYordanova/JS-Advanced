class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
        this.info = {};
    }

    newCustomer(customer) {
        const match = this.allCustomers.find(e => e.personalId === customer.personalId);

        if(match != undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);
        this.info[customer.personalId] = {
            transactions : [],
            totalAmont : 0
        };

        return customer;
    }

    depositMoney(personalId, amount) {
        const customerMatch = this.allCustomers.find(e => e.personalId === personalId);

        if(customerMatch == undefined) {
            throw new Error('We have no customer with this ID!');
        }

       this.info[personalId].totalAmont += amount;
       this.info[personalId].transactions.push({
            number : this.info[personalId].transactions.length + 1,
            names : `${customerMatch.firstName} ${customerMatch.lastName}`,
            typeTansaction : 'deposit',
            amount
       });

       if(!customerMatch.hasOwnProperty('totalMoney')) {
        customerMatch.totalMoney = 0;
       }

       customerMatch.totalMoney += amount;
       return `${this.info[personalId].totalAmont}$`
    }

    withdrawMoney (personalId, amount) {
        const customerMatch = this.allCustomers.find(e => e.personalId === personalId);

        if(customerMatch == undefined) {
            throw new Error('We have no customer with this ID!');
        }

        if(this.info[personalId].totalAmont < amount) {
            throw new Error(`${customerMatch.firstName} ${customerMatch.lastName} does not have enough money to withdraw that amount!`);
        }

        this.info[personalId].totalAmont -= amount;
        this.info[personalId].transactions.push({
            number : this.info[personalId].transactions.length + 1,
            names : `${customerMatch.firstName} ${customerMatch.lastName}`,
            typeTansaction : 'withdraw',
            amount
        });
        customerMatch.totalMoney -= amount;
        return `${this.info[personalId].totalAmont}$`;
    }

    customerInfo (personalId) {
        const customerMatch = this.allCustomers.find(e => e.personalId === personalId);

        if(customerMatch == undefined) {
            throw new Error('We have no customer with this ID!');
        }

        let resultArr = [`Bank name: ${this._bankName}`, `Customer name: ${customerMatch.firstName} ${customerMatch.lastName}`, `Customer ID: ${customerMatch.personalId}`, `Total Money: ${this.info[customerMatch.personalId].totalAmont}$`, 'Transactions:'];

        const sorted = this.info[customerMatch.personalId].transactions.sort((a, b) => b.number - a.number);

        sorted.forEach(e => {
            if(e.typeTansaction == 'deposit') {
                resultArr.push(`${e.number}. ${customerMatch.firstName} ${customerMatch.lastName} made deposit of ${e.amount}$!`);
            } else {
                resultArr.push(`${e.number}. ${customerMatch.firstName} ${customerMatch.lastName} withdrew ${e.amount}$!`);
            }
        });

        return resultArr.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));
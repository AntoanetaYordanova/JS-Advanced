class Movie{
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.profit = 0;
        this.totalTickets = 0;
    }

    newScreening(date, hall, description) {
        const hallMatch = this.screenings.find(e => e[hall]);

        if(!hallMatch) {
            this.screenings.push({
                [hall] : [{
                    date,
                    description
                }]
            });

            return `New screening of ${this.movieName} is added.`
        } else {
            const dateMatch = hallMatch[hall].find(e => e.date === date);
            if(dateMatch) {
                throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
            }

            hallMatch[hall].push({
                date,
                description
            });
            return `New screening of ${this.movieName} is added.`
        }
    }

    endScreening(date, hall, soldTickets) {
        soldTickets = Number(soldTickets);

        const hallMatch = this.screenings.find(e => e[hall]);
        if(!hallMatch) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        const dateMatch = hallMatch[hall].find(e => e.date === date);
        if(!dateMatch) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        const index = hallMatch[hall].indexOf(dateMatch);

        const currentProfit = soldTickets * this.ticketPrice;
        hallMatch[hall].splice(index, 1);
        if(hallMatch[hall].length === 0) {
            this.screenings.splice(this.screenings.indexOf(hallMatch), 1);
        }

        this.profit += currentProfit;
        this.totalTickets += soldTickets;

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`
    }

    toString(){
        let printString = `${this.movieName} full information:\nTotal profit: ${this.profit.toFixed(0)}$\nSold Tickets: ${this.totalTickets}`
        
        if(this.screenings.length !== 0) {
            printString += `\nRemaining film screenings:\n`;
            const remainedScreenings = [];

            const sorted = this.screenings.sort((a, b) => {
                const aKey = Object.keys(a)[0];
                const bKey = Object.keys(b)[0];
                return aKey.localeCompare(bKey);
            });
            sorted.forEach(e => {
                const hall = Object.keys(e)[0];               
                    e[hall].forEach(e => {
                        remainedScreenings.push(`${hall} - ${e.date} - ${e.description}`);
                    });
            });
            printString += remainedScreenings.join('\n');
        } else {
            printString += `\nNo more screenings!`
        }

        return printString;
    }
} 

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());

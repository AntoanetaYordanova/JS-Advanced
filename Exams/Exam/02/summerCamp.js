class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        if(!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        
        const match = this.listOfParticipants.find(e => e.name === name);
        if(match != undefined) {
            return `The ${name} is already registered at the camp.`;
        }

        if(this.priceForTheCamp[condition] > money) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push({
            name,
            condition,
            power : 100,
            wins : 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const match = this.listOfParticipants.find(e => e.name === name);
        
        if(match === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        const index = this.listOfParticipants.indexOf(match);
        this.listOfParticipants.splice(index, 1);
        
        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, participant1, participant2) {
       if(typeOfGame === 'WaterBalloonFights') {
            const firstPlayerMatch = this.listOfParticipants.find(e => e.name == participant1);
            const secondPlayerMatch = this.listOfParticipants.find(e => e.name == participant2);

            if(firstPlayerMatch === undefined || secondPlayerMatch === undefined) {
                throw new Error('Invalid entered name/s.');
            }

            if(firstPlayerMatch.condition !== secondPlayerMatch.condition) {
                throw new Error('Choose players with equal condition.');
            }

            if(firstPlayerMatch.power > secondPlayerMatch.power) {
                firstPlayerMatch.wins++;
                
                return `The ${firstPlayerMatch.name} is winner in the game ${typeOfGame}.`;
            } else if(firstPlayerMatch.power < secondPlayerMatch.power) {
                secondPlayerMatch.wins++;
                
                return `The ${secondPlayerMatch.name} is winner in the game ${typeOfGame}.`;
            } else {
                return 'There is no winner.';
            }
       
        } else if(typeOfGame === 'Battleship'){
            const playerMatch = this.listOfParticipants.find(e => e.name == participant1);

            if(playerMatch === undefined) {
                throw new Error('Invalid entered name/s.');
            }

            playerMatch.power += 20;

            return `The ${playerMatch.name} successfully completed the game ${typeOfGame}.`;
       }
    }

    toString() {
        let resultArr = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`]
        
        const sortedPlayers = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        sortedPlayers.forEach(p => resultArr.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));
    
        return resultArr.join('\n');
    }

}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

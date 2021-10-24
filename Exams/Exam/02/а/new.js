class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        }
        this.listOfParticipants = [];
    }
 
    registerParticipant (name, condition, money){
        if(!this.priceForTheCamp.hasOwnProperty(condition)){
            throw new Error("Unsuccessful registration at the camp.");
        }
        if(this.listOfParticipants.length > 0){
            for(let currName of this.listOfParticipants){
                if(currName.name == name){
                    return `The ${name} is already registered at the camp.`;
                }
            }
        }
        
        if(this.priceForTheCamp.hasOwnProperty(condition)){
            let currPrice = this.priceForTheCamp[condition];
 
            if(currPrice > money){
                return `The money is not enough to pay the stay at the camp.`
            }
        }
 
        this.listOfParticipants.push({name,condition, "power":100,"wins":0});
        return `The ${name} was successfully registered.`
    }
    unregisterParticipant (name){
        if(this.listOfParticipants.length > 0){
            for(let x of this.listOfParticipants){
                if(x.name != name){
                    throw new Error(`The ${name} is not registered in the camp.`);
                }
            }
            this.listOfParticipants.pop(name);
            return `The ${name} removed successfully.`
        }
    }
    timeToPlay (typeOfGame, participant1, participant2){
        const currNam1 = "";
        const currName2 ="";
        let conditon1 = "";
        let condition2 = "";
        let powerOne = 0;
        let powertwo = 0;
        if(typeOfGame == "WaterBalloonFights"){
            if(this.listOfParticipants.length > 0){
                for(let name of this.listOfParticipants){
                    if(name.name == participant1 && name.name == participant2){
                        currNam1 = participant1;
                        currName2 = participant2;
                        conditon1 = this.listOfParticipants.includes(x => x.condition == currNam1);
                        condition2 = this.listOfParticipants.includes(x => x.condition == currName2);
                        if(name.condition != conditon1 && name.condition == condition2){
                            throw new Error(`Choose players with equal condition.`);
                        }
 
                        powerOne = this.listOfParticipants[currNam1].power;
                        powertwo = this.listOfParticipants[currName2].power;
 
                        if(powerOne > powertwo){
                            this.listOfParticipants[currNam1].wins ++;
                            return `The ${powerOne} is winner in the game ${typeOfGame}.`
                        }else if(powertwo > powerOne){
                            this.listOfParticipants[currName2].wins ++;
                            return `The ${powertwo} is winner in the game ${typeOfGame}.`
                        }else{
                            return `There is no winner.`;
                        }
                    }else{
                        throw new Error(`Invalid entered names.`);
                    }
                }
            }
 
 
        }else if(typeOfGame == "Battleship"){
            const currName = "";
            const currPoints = 0;
            if(this.listOfParticipants.length > 0){
                for(let name of this.listOfParticipants){
                    if(name.name == participant1){
                        this.listOfParticipants[participant1].power += 20;
                        return `The ${currName} successfully completed the game ${typeOfGame}.`
                    }else{
                        throw new Error(`Invalid entered name.`);
                    }
                }
 
            }
        }
    }
    toString() {
 
        const result = [];
        for(let x of this.listOfParticipants){
            result.push(`${organizer} will take ${this.listOfParticipants.length} participants on camping to ${location}`);
 
        }
        //this.listOfParticipants.map(x => x.sort((a.b)) => a.name - b.name)
    }
}
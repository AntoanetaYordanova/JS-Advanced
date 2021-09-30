const myObj = {
    name : 'Toni',
    age : 23,
    returnInfo () {
        return `My name is ${this.name} and I'm ${this.age} years old`
    }
}

let returnInfo = myObj.returnInfo;

const newPerson = {
    name : 'Andi',
    age : 25
}

console.log(returnInfo.call(newPerson));
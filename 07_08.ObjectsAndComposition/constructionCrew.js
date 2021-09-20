function constructionCrew(inputObj) {
    function hidrate(obj) {
        obj.levelOfHydrated += (0.1 * obj.weight * obj.experience);
        obj.dizziness = false;
    }

    if(inputObj.dizziness) {
        hidrate(inputObj);
    }

    return inputObj;
}

console.log(constructionCrew({ weight: 80,  experience: 1,  levelOfHydrated: 0,  dizziness: true }));
console.log('------------');
console.log(constructionCrew({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true }));
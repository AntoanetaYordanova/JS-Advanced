function heroicInventory(inputArr) {
    let heroes = [];
    inputArr.forEach(hero => {
        let [name, level, items] = hero.split(' / ');
        items = items ? items.split(', ') : []; 
        heroObj = {
            name,
            level : Number(level),
            items
        }
        heroes.push(heroObj);
    });

    console.log(JSON.stringify(heroes));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest, DestructionSword','Hes / 1 / Desolator, Sentinel, Antara'])
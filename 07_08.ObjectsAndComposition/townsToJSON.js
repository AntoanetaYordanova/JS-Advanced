function townsToJSON(inputArr) {
    let resultArr = [];

    for(let i = 1; i < inputArr.length; i++) {
       let currentInput = inputArr[i].split('|');
       currentInput = currentInput.map(el => el.trim()) .filter(str => str.length > 0);
       let [Town, Latitude, Longitude] = currentInput;
        Latitude = Number(Number(Latitude).toFixed(2));
        Longitude = Number(Number(Longitude).toFixed(2));
       const newObj = {
           Town,
           Latitude,
           Longitude
       }

       resultArr.push(newObj)
    }

    console.log(JSON.stringify(resultArr));
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);
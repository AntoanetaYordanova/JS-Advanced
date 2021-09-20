function magicalMetrices(input) {
    let isMagical = true;

    for(let i = 0; i < input.length; i++) {
        let rowNum = 0;
        input[i].forEach(el => rowNum += el);
        let colNum = 0;
        input.forEach(el => colNum += el[i]);
        if(rowNum !== colNum) {
            isMagical = false;
            break;
        }
    }

    console.log(isMagical);
}

// magicalMetrices([ [ 4, 5, 6 ], [ 6, 5, 4 ], [ 5, 5, 5 ] ]);
magicalMetrices([ [ 11, 32, 45 ], [ 21, 0, 1 ], [ 21, 1, 1 ] ]);
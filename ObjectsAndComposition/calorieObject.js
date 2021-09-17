function calorieObject(input) {
    let printObj = {};

    for(let i = 0; i < input.length; i+=2) {
        const key = input[i];
        const property = Number(input[i+1]);

        printObj[key] = property;
    }

    console.log(printObj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
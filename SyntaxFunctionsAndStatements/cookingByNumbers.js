function cookingByNumbers(...params) {
    let num = Number(params.shift());
    params.forEach(action => actionFunct(action));

    function actionFunct(action) {
        switch (action) {
            case 'chop': 
                num /= 2;
                console.log(num);
            break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
            break
            case 'spice':
                num += 1;
                console.log(num);
            break
            case 'bake':
                num *= 3;
                console.log(num);
            break
            case 'fillet':
                num *= 0.8;
                console.log(num);
            break
        }
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
function rectangle(width, height, color) {
    width = Number(width);
    height = Number(height);
    color = upperCaseFirstLetter(color)
    let rectObj = {
        width,
        height,
        color,
        calcArea () {
            return width * height;
        }
    }

    function upperCaseFirstLetter(str) {
        let arr = str.split('');
        arr[0] = arr[0].toUpperCase();
        return arr.join('');
    }

    return rectObj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

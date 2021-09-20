
function areaAndVolumeCalc (area, volume, input) {
    let resultArr = [];
    let inputArr = JSON.parse(input);

    inputArr.forEach(element => {
        let currentArea = area.call(element);
        let currentVol = volume.call(element);
        let obj = {
            area : currentArea,
            volume : currentVol
        }
        resultArr.push(obj);
    });

    return resultArr
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

let inputJSONExample = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    

console.log(areaAndVolumeCalc(area, vol, inputJSONExample));
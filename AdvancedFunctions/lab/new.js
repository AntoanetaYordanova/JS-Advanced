const x = 42;
const getX = function() {
    return this.x;
}

const moduleX = {
    x
}

const boundGetX = getX.bind(moduleX);
console.log(boundGetX());
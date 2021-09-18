
function calculator() {
    let selOne;
    let selTwo;
    let selResult;
   
    let calcObj = {
        init : (a, b, c) => {
            selOne = document.querySelector(a);
            selTwo = document.querySelector(b);
            selResult = document.querySelector(c);
        },
        add : () => {
            selResult.value = Number(selOne.value) + Number(selTwo.value);
        },
        subtract : () => {
            selResult.value = Number(selOne.value) - Number(selTwo.value);
        }
    }

    return calcObj;
}


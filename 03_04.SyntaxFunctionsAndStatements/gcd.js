function gcd(a, b) {
    let lowestNum = Math.min(a, b);
    let theGCD = 0;

    for(let i = lowestNum; i > 0; i--) {
        if(a % i === 0 && b % i === 0) {
            theGCD = i;
            break
        }
    }

    console.log(theGCD);
}

gcd(15, 5);
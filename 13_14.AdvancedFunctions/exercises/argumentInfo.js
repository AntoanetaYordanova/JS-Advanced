function argumentInfo(...params) {
    let list = [];
    let typesCounter = new Map();

    params.forEach(typeCheckAndCount);

    function typeCheckAndCount(p) {
        let type = typeof p;
        list.push({
            [type] : p
        })

        if(!typesCounter.has(type)) {
            typesCounter.set(type, 0);
        }
        let newCount = typesCounter.get(type);
        newCount++;
        typesCounter.set(type, newCount);
    }

    list.forEach(printElement);
    
    function printElement(e) {
        let [k, v] = Object.entries(e)[0];
        console.log(`${k}: ${v}`);
    }

    let typesCounterSorted = Array.from(typesCounter.entries()).sort((a, b) => a[1] - b[1] ? a[1] - b[1] : a);
    

    for(p of typesCounterSorted) {
        const[k, v] = p;
        console.log(`${k} = ${v}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); }, 42);
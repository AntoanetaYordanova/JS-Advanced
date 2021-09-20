function listProcessor(inputArr) {
    let innerArray = [];

    let commands = {
        add (str) {
            innerArray.push(str)
        },
        remove (str) {
            while(innerArray.indexOf(str) !== -1) {
                let index = innerArray.indexOf(str);
            innerArray.splice(index, 1);
            }
        },
        print () {
            console.log(innerArray.join(','));
        }
    }

    inputArr.forEach(currentInput => {
        const [command, str] = currentInput.split(' ');
        commands[command](str);
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
console.log('---------');
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
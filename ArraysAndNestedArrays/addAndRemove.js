function addAndRemove(commands) {
    let num = 0;
    let arr = [];

    const actions = {
        'add' : add,
        'remove' : remove
    }

    commands.forEach(command => {
        let action = actions[command];
        action()
    });

    function add() {
        num++;
        arr.push(num);
    }

    function remove() {
        num++;
        arr.pop();
    }

    if(arr.length === 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
}

addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']
);
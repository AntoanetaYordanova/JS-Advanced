function attachEventsListeners() {
    const mainElement = document.getElementsByTagName('main')[0];
    const converters = {
        'Days: ' : convertorToDays,
        'Hours: ': converterToHours,
        'Minutes: ': converterToMinutes,
        'Seconds: ': converterToSeconds
    }
    

    mainElement.addEventListener('click', (ev) => {
        if(ev.target.type === 'button') {
            let children = ev.target.parentNode.children;
            let type = children[0].textContent;
            let currentValue = Number(children[1].value);
            let currentValueInDays = returnsDays(type, currentValue);

            printLine(currentValueInDays);
        }
    })

    function returnsDays(type, value){

        if (type === 'Days: '){
            return value;
        } else if (type === 'Hours: ') {
            return value / 24;
        } else if (type === 'Minutes: ') {
            return value / 1440;
        } else if (type === 'Seconds: ') {
            return value / 86400;
        }
    }

    function convertorToDays (value) {
        return value;
    }

    function converterToHours(value) {
        return value * 24;
    }

    function converterToMinutes(value) {
        return value * 1440;
    }

    function converterToSeconds(value) {
        return value * 86400;
    }

    function printLine(value) {
       let mainElementChildren =  Array.from(mainElement.children);

       for(let i = 1; i < mainElementChildren.length; i++){
        let currentType = mainElementChildren[i].children[0].textContent;
        let action = converters[currentType];
        mainElementChildren[i].children[1].value = action(Number(value));
       }
    }
}
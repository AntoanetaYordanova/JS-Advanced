function solution() {
    document.querySelector('.container').addEventListener('click', (ev) => {
        if(ev.target.tagName === 'BUTTON') {
            const buttonName = ev.target.textContent;
            if(buttonName === 'Add gift') {
                addGift();
            } else if(buttonName === 'Send') {
                sendGift(ev);
            } else if(buttonName === 'Discard') {
                discardGift(ev);
            }
        }
    });

    function createEl(type, idName, className, ...content) {
        let result = document.createElement(type);

        if(idName !== undefined) {
            result.id = idName;
        }
        if(className !== undefined) {
            result.classList.add(className);
        }

        if(content.length !== 0) {
            content.forEach(c => {
                if(typeof c === 'string') {
                    result.appendChild(document.createTextNode(c));
                } else {
                    result.appendChild(c);
                }
            });
        }

        return result;
    }

    let list = [];
    function addGift(){
        const input = document.querySelector('.card div input');
        if(input.value === '') {
            return;
        }
        const ul = document.querySelector('.container section:nth-child(2) ul');
        const gift = input.value;
        input.value = '';
        const li = createEl('li', undefined, 'gift',gift ,createEl('button','sendButton', undefined, 'Send'), createEl('button', 'discardButton', undefined, 'Discard'));

        list.push({
            name: gift,
            ref : li
        });

        const sortedList = list.sort((a, b) => a.name.localeCompare(b.name));
        sortedList.forEach(li => ul.appendChild(li.ref));
    }

    function sendGift(ev) {
        const parentLi = ev.target.parentElement;
        ev.target.nextSibling.remove();
        ev.target.remove();
        const liInLinst = list.find(li => li.ref === ev.target);
        const index = list.indexOf(liInLinst);
        list.splice(index, 1);
        document.querySelector('.container section:nth-child(3) ul').appendChild(parentLi);
    }

    function discardGift(ev) {
        const parentLi = ev.target.parentElement;
        ev.target.previousSibling.remove();
        ev.target.remove();
        const liInLinst = list.find(li => li.ref === ev.target);
        const index = list.indexOf(liInLinst);
        list.splice(index, 1);
        
        document.querySelector('.container section:nth-child(4) ul').appendChild(parentLi);
    }
}
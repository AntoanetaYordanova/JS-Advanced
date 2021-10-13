function solution() {
    document.querySelector('.container').addEventListener('click', (ev) => {
        const target = ev.target;

        if(target.tagName === 'BUTTON') {
            if(target.textContent === 'Add gift'){
                addPresent();
            } else if (target.textContent === 'Send'){
                sendPresent(ev);
            } else if (target.textContent === 'Discard'){
                discardPresent(ev);
            }
        }
    });

    let lis = new Map;

    function addPresent() {
        const gift = document.querySelector('input').value;

        if(gift === ''){
            return;
        }

        const sendButton = createEl('button', 'Send', 'sendButton');
        const discardButton = createEl('button', 'Discard', 'discardButton');
        const li = createEl('li', gift, 'gift');
        li.appendChild(sendButton);
        li.appendChild(discardButton);
        lis.set(li, gift);

        const sorted = Array.from(lis.entries()) .sort((a, b) => a[1].localeCompare(b[1]));
        
        sorted.forEach(e => {
            document.querySelector('.card:nth-child(2) ul').appendChild(e[0]);
        });
    }

    function createEl(type, content, className){
        const el = document.createElement(type);

        if(content !== undefined) {
            el.textContent = content;
        }

        if(className !== undefined) {
            el.classList.add(className);
        }

        return el;
    }

    function sendPresent(ev) {
        const gift = lis.get(ev.target.parentElement);
        ev.target.parentElement.remove();
        lis.delete(ev.target.parentElement);

        const li = createEl('li', gift, 'gift');
        document.querySelector('.card:nth-child(3) ul').appendChild(li);
    }

    function discardPresent(ev) {
        const gift = lis.get(ev.target.parentElement);
        ev.target.parentElement.remove();
        lis.delete(ev.target.parentElement);

        const li = createEl('li', gift, 'gift');
        document.querySelector('.card:nth-child(4) ul').appendChild(li);
    }
}

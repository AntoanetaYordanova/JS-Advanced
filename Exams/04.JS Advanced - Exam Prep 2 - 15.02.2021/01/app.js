function solution() {
    document.querySelector('.card button').addEventListener('click', addGift);

    function addGift() {
        const input = document.querySelector('.card input');
        const gift = input.value
        const giftsList = document.querySelector('.card:nth-child(2) ul');
        const li = newEl('li', 'gift', gift);
        const sendBtn = newEl('button', 'sendButton', 'Send');
        sendBtn.addEventListener('click', sendGift);
        li.appendChild(sendBtn);
        const discardBtn = newEl('button', 'discardButton', 'Discard');
        discardBtn.addEventListener('click', discardGift);
        li.appendChild(discardBtn);
        giftsList.appendChild(li);

        const sorted = Array.from(giftsList.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
        sorted.forEach(e => giftsList.appendChild(e));
        input.value = '';
    }

    function sendGift(ev) {
        const sentGifts = document.querySelector('.card:nth-child(3) ul');
        const currentLi = ev.target.parentElement;
        Array.from(currentLi.children).forEach(c => c.remove());
        sentGifts.appendChild(currentLi);
    }

    function discardGift(ev) {
        const discartedGifts = document.querySelector('.card:nth-child(4) ul');
        const currentLi = ev.target.parentElement;
        Array.from(currentLi.children).forEach(c => c.remove());
        discartedGifts.appendChild(currentLi);
    }

    function newEl(type,className, content) {
        const el = document.createElement(type);
    
        if(className !== undefined) {
            el.classList.add(className);
        }
        
        if(content !== undefined) {
            el.appendChild(document.createTextNode(content));
        }
        return el;
    }
}
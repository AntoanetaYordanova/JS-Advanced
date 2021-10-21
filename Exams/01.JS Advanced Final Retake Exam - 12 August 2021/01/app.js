window.addEventListener('load', solve);

function solve() {
    document.getElementById('add').addEventListener('click', addArticle);

    const buttonsStatus = new Map;

    function newEl(type,className, attributeName, ...content) {
        const el = document.createElement(type);
    
        if(className !== undefined) {
            el.classList.add(className);
        }
        
        if(attributeName !== undefined) {
            const [name, value] = attributeName;
            el.setAttribute(name, value);
        }
            content.forEach(c => {
                if(typeof c === 'string') {
                    el.appendChild(document.createTextNode(c));
                } else {
                    el.appendChild(c);
                }
            });
        return el;
    }

    function addArticle(ev) {
        ev.preventDefault();
        const inputs = Array.from(document.querySelectorAll('form input'));
        const descriptionInput = document.querySelector('textarea');

        const model = inputs[0].value;
        const year = Number(inputs[1].value);
        const description = descriptionInput.value;
        const price = Number(inputs[2].value);

        if(model === '' || description === '' || year <= 0 || price <= 0) {
            return;
        }

        const furnitureList = document.querySelector('#furniture-list');
        const moreBtn = newEl('button', 'moreBtn', undefined,'More Info');
        buttonsStatus.set(moreBtn, false);
        moreBtn.addEventListener('click', moreInfo);
        const buyBtn = newEl('button', 'buyBtn', undefined, 'Buy it');
        buyBtn.addEventListener('click', buy);

        const trInfo = newEl('tr', 'info', undefined, newEl('td', undefined, undefined, model), newEl('td', undefined, undefined, price.toFixed(2)), newEl('td', undefined, undefined, moreBtn, buyBtn));
        const trHidden = newEl('tr', 'hide', undefined, newEl('td', undefined, undefined, `Year: ${year}`), newEl('td', undefined, ['colspan', '3'], `Description: ${description}`));

        furnitureList.appendChild(trInfo);
        furnitureList.appendChild(trHidden);

        inputs.forEach(i => i.value = '');
        descriptionInput.value = '';
    }

    function moreInfo(ev) {

        if(!buttonsStatus.get(ev.target)) {
            ev.target.textContent = 'Less Info';
            ev.target.parentElement.parentElement.nextSibling.style.display = 'contents';
            buttonsStatus.set(ev.target, true);
        } else {
            ev.target.textContent = 'More Info';
            ev.target.parentElement.parentElement.nextSibling.style.display = 'none';
            buttonsStatus.set(ev.target, false);
        }
        
    }

    function buy(ev) {
        const total = document.querySelector('tfoot td.total-price');
        const currentValue = Number(total.textContent);
        const newValue = Number(ev.target.parentElement.previousSibling.textContent) + currentValue;
        total.textContent = newValue.toFixed(2);
        ev.target.parentElement.parentElement.nextSibling.remove();
        ev.target.parentElement.parentElement.remove();
        
    }
}

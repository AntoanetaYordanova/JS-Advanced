window.addEventListener('load', solve);

function solve() {
    document.querySelector('div.store').addEventListener('click', (ev) => {
        if(ev.target.tagName === 'BUTTON') {
            const button = ev.target;
            if(button.textContent === 'Add'){
                ev.preventDefault();
                addArticle();
            } else if(button.textContent === 'More Info') {
                moreInfo(ev);
            } else if(button.textContent === 'Less Info') {
                lessInfo(ev);
            } else if(button.textContent === 'Buy it') {
                buy(ev);
            }
        }
    });

    function newEl(type,className, ...content) {
        const el = document.createElement(type);
    
        if(className !== undefined) {
            el.classList.add(className);
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

    function addArticle() {
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

        const trInfo = newEl('tr', 'info', newEl('td', undefined, model), newEl('td', undefined, price.toFixed(2)), newEl('td', undefined, newEl('button', 'moreBtn', 'More Info'), newEl('button', 'buyBtn', 'Buy it')));
        const trHidden = newEl('tr', 'hide', newEl('td', undefined, `Year: ${year}`), newEl('td', undefined, `Description: ${description}`));

        furnitureList.appendChild(trInfo);
        furnitureList.appendChild(trHidden);
        document.querySelector('tbody tr.hide td:nth-child(2)').setAttribute('colspan', '3');

        inputs.forEach(i => i.value = '');
        descriptionInput.value = '';
    }

    function moreInfo(ev) {
        ev.target.textContent = 'Less Info';
        document.querySelector('tbody tr.hide').style.display = 'contents';
    }

    function lessInfo(ev) {
        ev.target.textContent = 'More Info';
        document.querySelector('tbody tr.hide').style.display = 'none';
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

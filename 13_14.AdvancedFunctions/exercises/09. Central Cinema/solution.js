function solve() {
    let archivedListItemsTracker = [];
    let movies = [];

    document.querySelector('form button').addEventListener('click', getData);
    document.querySelector('#archive button').addEventListener('click', clearArchive)
    function getData(ev) {
        ev.preventDefault()
        let inputs = Array.from(document.querySelectorAll('form input'));
        let [nameInput, hallInput, priceInput] = inputs;
        const name = nameInput.value;
        const hall = hallInput.value;
        let price = priceInput.value;
        inputs.forEach(i => i.value = '');

        if(isValidInput(name, hall, price)) {
            createLi(name, hall, price);
        }

        function isValidInput(name, hall, price) {
            if(name && hall && (!isNaN(Number(price)))) {
                return true;
            }
        }
    }
    
    function createLi(name, hall, price) {
        price = Number(price).toFixed(2);
        const input = document.createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');
        const button = document.createElement('button');
        button.textContent = 'Archive';
        button.addEventListener('click', archive);
        let li = createEl('li', createEl('span', name), createEl('strong', `Hall: ${hall}`), createEl('div', createEl('strong', price), input, button));
        document.querySelector('#movies ul').appendChild(li);
        let objButton = {
            button : button,
            isArchived : false
        }

        const objMovie = {
            movie : li,
            getData () {
                return  [name, price];
            }
        }
        archivedListItemsTracker.push({});
        archivedListItemsTracker.push(objButton);
        movies.push(objMovie);
    }

    function createEl(type, ...content) {
        let result = document.createElement(type);

        if(typeof content[0] === 'string') {
            result.textContent = content;
        } else {
            content.forEach(c => result.appendChild(c));
        }

        return result;
    }

    function archive(ev) {
        const ticketsInput = ev.target.parentElement.querySelector('input');
        const currentLi = ev.target.parentElement.parentElement;
        const buttonObj = archivedListItemsTracker.find(b => b.button === ev.target);
        
        if(buttonObj.isArchived === false) {
        const ticketsAmount = ticketsInput.value;
            if(!isNaN(Number(ticketsAmount)) && ticketsAmount) {
                buttonObj.isArchived = true;
                const movie = movies.find(m => m.movie === currentLi).getData();
                const name = movie[0];
                const price = Number(movie[1]) * Number(buttonObj.button.previousElementSibling.value)
                const newLi = createEl('li', createEl('span', name), createEl('strong', `Total amount: ${price.toFixed(2)}`), buttonObj.button);
                document.querySelector('#archive ul').appendChild(newLi);
                ev.target.textContent = 'Delete';
                currentLi.remove()
            }
        } else {
            let newLi = ev.target.parentElement
            newLi.remove()
        }
        
    }

    function clearArchive(ev) {
        Array.from(document.querySelectorAll('#archive li')).forEach(li => li.remove())
    }
}
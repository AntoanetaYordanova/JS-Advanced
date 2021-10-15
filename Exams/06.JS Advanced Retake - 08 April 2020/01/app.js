function solve() {
    const main = document.querySelector('main');
    main.addEventListener('click', (ev) => {

        if(ev.target.tagName === 'BUTTON') {
            if(ev.target.textContent === 'Add') {
                addTask(ev);
            } else if(ev.target.textContent === 'Start') {
                startTask(ev);
            } else if(ev.target.textContent === 'Delete') {
                delArticle(ev);
            } else if(ev.target.textContent === 'Finish') {
                finishTask(ev);
            }
        }
    });

    function addTask(ev) {
        ev.preventDefault();

        const divParent = document.querySelector('.wrapper section:nth-child(2) div:nth-child(2)');
        const tasktInput = document.querySelector('#task');
        const descriptionInput = document.querySelector('#description');
        const dateInput = document.querySelector('#date');
        const task = tasktInput.value;;
        const description = descriptionInput.value;
        const dueDate = dateInput.value;

        if(tasktInput.value === '' || descriptionInput.value === '' || dateInput.value === '') {
            return;
        }

        const article = createEl('article', undefined, createEl('h3', undefined, task), createEl('p', undefined, `Description: ${description}`), createEl('p', undefined, `Due Date: ${dueDate}`), createEl('div','flex', createEl('button', 'green', 'Start'), createEl('button', 'red', 'Delete')));
        divParent.appendChild(article);
    }

    function startTask(ev) {
        const article = ev.target.parentElement.parentElement;
        const firstButton = ev.target;
        const secondButton = ev.target.parentElement.children[1];
        firstButton.classList.remove('green');
        firstButton.classList.add('red');
        firstButton.textContent = 'Delete';
        secondButton.classList.remove('red');
        secondButton.classList.add('orange');
        secondButton.textContent = 'Finish';
        
        document.querySelector('.wrapper section:nth-child(3) div:nth-child(2)').appendChild(article);
    }

    function delArticle(ev) {
        ev.target.parentElement.parentElement.remove()
    }

    function finishTask(ev) {
        const article = ev.target.parentElement.parentElement;
        document.querySelector('.wrapper section:nth-child(4) div:nth-child(2)').appendChild(article);
        ev.target.parentElement.remove();   
    }

    function createEl(type,className, ...content) {
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
}
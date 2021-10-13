function solve() {

    document.querySelector('.container').addEventListener('click', (ev) => {

        if(ev.target.tagName === 'BUTTON') {
            ev.preventDefault();

            if(ev.target.textContent === 'Add'){
                addLecture();
            } else if (ev.target.textContent === 'Del') {
                del(ev);
            }
        }
    });
    let modulesObj = {};

    function addLecture(ev) {
        const inputs = Array.from(document.querySelectorAll('.form-control input'));
        const name = inputs[0].value;
        let wholeDate = inputs[1].value;
        const module = document.querySelector('.form-control select').value;
        const trainingsDiv = document.querySelector('.modules');

        if(name !== '' && wholeDate !== '' && module !== 'Select module') {
            let [date, time] = wholeDate.split('T');
            date = date.split('-').join('/');
            const infoString = `${name} - ${date} - ${time}`;
            
            const h4 = createEl('h4', infoString);
            const button = createEl('button', 'Del', 'red');
            const li = createEl('li', undefined, 'flex');
            li.appendChild(h4);
            li.appendChild(button);

            if(!modulesObj[module]){
                modulesObj[module] = {
                    lis : [],
                };

                const ul = createEl('ul')
                const h3 = createEl('h3', `${module.toUpperCase()}-MODULE`);
                const div = createEl('div', undefined, 'module');
                div.appendChild(h3);
                div.appendChild(ul);
                trainingsDiv.appendChild(div);
                modulesObj[module].ulRef = ul;

            }


            modulesObj[module].lis.push({li : li, date : wholeDate});
            const sorted = modulesObj[module].lis.sort((a, b) => {
                let firstDate = new Date(a.date);
                let secondDate = new Date(b.date);
                if(firstDate > secondDate) {
                    return 1;
                } else {
                    return -1;
                }
            });

            sorted.forEach(e => {
                 modulesObj[module].ulRef.appendChild(e.li);               
            });
        }

       
    }

    function createEl(type, content, $class) {
        let el = document.createElement(type);
        if(content !== undefined) {
            el.textContent = content;
        } 
        if($class !== undefined) {
            el.classList.add($class);
        }

        return el;
    }

    function del(ev) {
        const liTarget = ev.target.parentElement;
        const ulTarget = liTarget.parentElement;
        console.log(ulTarget);
        console.log(Array.from(ulTarget.children));
        
        if(Array.from(ulTarget.children).length === 1) {
            const module =  ulTarget.parentElement.querySelector('h3').textContent;
            liTarget.remove();
            ulTarget.parentElement.remove();
            delete modulesObj[module]
        } else {
            liTarget.remove();
        }
    }

};
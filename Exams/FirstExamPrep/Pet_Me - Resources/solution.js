function solve() {
    const adoptionSection = document.querySelector('#adoption ul')

    const body = document.querySelector('body');
    body.addEventListener('click', (ev) => {
        ev.preventDefault();
        
        if(ev.target.tagName === 'BUTTON') {
            if(ev.target.textContent === 'Add') {
                addPet();
            } else if(ev.target.textContent === 'Contact with owner') {
                newOwnerInput(ev);
            } else if(ev.target.textContent === 'Yes! I take it!') {
                addopt(ev)
            } else if(ev.target.textContent === 'Checked') {
                ev.target.parentElement.remove()
            }
        }
    });

    function createEl(type, ...content) {
        const el = document.createElement(type);

        if(content.length !== 0) {
            content.forEach(c => {
                if(typeof c === 'string'){
                    el.appendChild(document.createTextNode(c));
                } else {
                    el.appendChild(c);
                }
            });
        }
        return el;
    }

    function addPet() {
        const inputs = Array.from(document.querySelectorAll('#container input'));
        const name = inputs[0].value;
        const age = inputs[1].value;
        const kind = inputs[2].value;
        const currentOwner = inputs[3].value;
        let areEmptyInputs = false;

        inputs.forEach(i => {
            if(!i.value) {
                areEmptyInputs = true;
            }
        });
        
        if(areEmptyInputs || isNaN(Number(age))) {
            return;
        }

        const li = createEl('li', createEl('p', createEl('strong', name), ' is a ', createEl('strong', age), ' year old ', createEl('strong', kind)), createEl('span', `Owner: ${currentOwner}`), createEl('button', 'Contact with owner'));
        adoptionSection.appendChild(li);
        inputs.forEach(i => i.value = '');
    }

    function newOwnerInput(ev) {
        const currentLi = ev.target.parentElement;
        const buttonRef = ev.target;
        buttonRef.textContent = 'Yes! I take it!';
        currentLi.appendChild(createEl('div', createEl('input'), buttonRef));
        currentLi.querySelector('input').setAttribute('placeholder', 'Enter your names');
    }

    function addopt(ev) {
      if(!ev.target.previousSibling.value) {
          return;
      }

      const newOwner = ev.target.previousSibling.value;
      const currentLi = ev.target.parentElement.parentElement;
      const buttonRef = ev.target;

      currentLi.querySelector('span').textContent = `New Owner: ${newOwner}`;
      buttonRef.textContent = 'Checked';
      currentLi.appendChild(buttonRef);
      currentLi.querySelector('div').remove();

      document.querySelector('#adopted ul').appendChild(currentLi);
    }
}


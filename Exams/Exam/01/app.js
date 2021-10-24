window.addEventListener('load', solve);

function solve() {
    document.getElementById('add-btn').addEventListener('click', collectSong);


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

    function collectSong(ev) {
        ev.preventDefault();

        const inputs = Array.from(document.querySelectorAll('.container-text form input'));
        let areEmptyInputs = false;

        inputs.forEach(i => {
            if(i.value == '') {
                areEmptyInputs = true;
            }
        });

        if(areEmptyInputs) {
            return;
        }

        const collectionContainer = document.querySelector('#all-hits .all-hits-container');

        const genre = inputs[0].value;
        const name = inputs[1].value;
        const author = inputs[2].value;
        const date = inputs[3].value;

        const img = newEl('img');
        img.setAttribute('src', './static/img/img.png');
        const saveBtn = newEl('button', 'save-btn', 'Save song');
        saveBtn.addEventListener('click', saveSong);
        const likeBtn = newEl('button', 'like-btn', 'Like song');
        likeBtn.addEventListener('click', likeSong);
        const deleteBtn = newEl('button', 'delete-btn', 'Delete');
        deleteBtn.addEventListener('click', deleteSong);

        const div = newEl('div', 'hits-info', img, newEl('h2', undefined, `Genre: ${genre}`), newEl('h2', undefined, `Name: ${name}`), newEl('h2', undefined, `Author: ${author}`), newEl('h3', undefined, `Date: ${date}`), saveBtn, likeBtn, deleteBtn);
        collectionContainer.appendChild(div);

        inputs.forEach(i => i.value = '');
    }

    function saveSong(ev) {
        const savedSongsSection = document.querySelector('#saved-hits .saved-container');
        const currentDiv = ev.target.parentElement;
        ev.target.nextSibling.remove();
        ev.target.remove();

        savedSongsSection.appendChild(currentDiv);
    }
    
    function likeSong(ev) {
        const likesEl = document.querySelector('#total-likes .likes p');
        const likesElContent = likesEl.textContent.split(' ');
        let likes = Number(likesElContent[likesElContent.length - 1]);
        likes++;
        likesEl.textContent = `Total Likes: ${likes}`;
        ev.target.setAttribute('disabled', 'true');
    }

    function deleteSong(ev) {
        const currentDiv = ev.target.parentElement;
        currentDiv.remove();
    }
}
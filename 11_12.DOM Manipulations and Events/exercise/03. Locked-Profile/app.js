function lockedProfile() {
    document.getElementById('main').addEventListener('click', show);

    function show(ev){
        if(ev.target.tagName === 'BUTTON') {
           let currentDiv = ev.target.parentNode;
           const isUnlock = currentDiv.querySelector('input:nth-child(5)').checked;
           
           if(isUnlock) {
            currentDiv.querySelector('div:nth-child(10)').style.display = 'inline';
            ev.target.textContent = 'Hide it';
            isUnlock = false;
           }
        }
    }
}
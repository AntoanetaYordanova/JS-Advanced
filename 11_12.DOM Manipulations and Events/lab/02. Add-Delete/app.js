function addItem() {
    const ulElement = document.getElementById('items');
    const newItemText = document.getElementById('newItemText').value;
    let liElement = document.createElement('li');
    let aElement = document.createElement('a', '[Delete]');
    aElement.textContent = '[Delete]';
    aElement.href = '#';
    liElement.textContent = newItemText;
    ulElement.appendChild(liElement);
    liElement.appendChild(aElement);
    aElement.addEventListener('click', remove);
    document.getElementById('newItemText').value = '';

    function remove(){
        aElement.parentNode.remove()
    }
}
function addItem() {
    const ulElement = document.getElementById('items');
    const newItemText = document.getElementById('newItemText').value;
    let liElement = document.createElement('li');
    liElement.textContent = newItemText;
    ulElement.appendChild(liElement);
    document.getElementById('newItemText').value = '';
}
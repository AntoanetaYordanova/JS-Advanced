function addItem() {
    let optionElement = document.createElement('option');
    optionElement.value = document.getElementById('newItemValue').value;
    optionElement.textContent = document.getElementById('newItemText').value;
    document.getElementById('menu').appendChild(optionElement);
    document.getElementById('newItemValue').value = '';
    document.getElementById('newItemText').value = '';
}
function toggle() {

    const extraElement = document.getElementById('extra');
    const button = document.getElementsByClassName('button')[0];
    let buttonText = button.textContent;
    buttonText = buttonText.toLocaleLowerCase()

    if(buttonText === 'more'){
        button.textContent = 'Less';
        extraElement.style.display = 'block';
    } else {
        button.textContent = 'More';
        extraElement.style.display = 'none';
    }
}
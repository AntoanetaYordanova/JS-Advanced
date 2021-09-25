function solve() {
    const outputElement = document.getElementById('output');
    const text = document.getElementById('input').value .split('.');
    let counter = 0;
    let string = '';

    for(let i = 0; i < text.length; i++) {
        const sentence = text[i];
        counter++;

        if(sentence) {
            string += sentence + '.';
        }

        if(counter == 3 || i == text.length - 1) {
            outputElement.innerHTML += `<p>${string}</p>`;
            counter = 0;
            string = '';
        }
        
    }
}
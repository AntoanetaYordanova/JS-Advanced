function collectItems(){
    let listItems = document.getElementsByTagName('li');
    let elementsText = [...listItems].map(e => e.textContent);
    let inputVar = document.getElementById("result");
    inputVar.value = elementsText.join('\n');
}


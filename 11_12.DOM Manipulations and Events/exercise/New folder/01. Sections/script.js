function create(words) {
   let contentElement = document.getElementById('content');

  words.forEach(word => {
     let divElement = document.createElement('div');
     divElement.addEventListener('click', show)
     let pElement = document.createElement('p');
     pElement.textContent = word;
     pElement.style.display = 'none'
     divElement.appendChild(pElement);
     contentElement.appendChild(divElement);

  });

  function show(ev) {
   ev.target.children[0].style.display = 'block';
  }
}
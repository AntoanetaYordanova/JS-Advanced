function create(words) {
   let contentElement = document.getElementById('content');

   words.forEach(element => {
      contentElement.appendChild(document.createElement('div'));
      let children = Array.from(contentElement.children);
      let pElement = document.createElement('p');
      pElement.textContent = element;
      pElement.style.display = 'none';
      children[children.length - 1].appendChild(pElement);
      console.log();
   });

   contentElement.addEventListener('click', (ev) => {
      if(ev.target.tagName === 'DIV') {
         ev.target.children[0].style.display = '';
      }
   });
}
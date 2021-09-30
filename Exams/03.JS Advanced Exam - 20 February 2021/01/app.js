function solve(){
   document.querySelector('.create').addEventListener('click', createArticle);

   function createArticle(ev){
      ev.preventDefault()
      const authorInput = document.getElementById('creator');
      const titleInput = document.getElementById('title');
      const categoryInput = document.getElementById('category');
      const contentInput = document.getElementById('content');
      const postSection = document.querySelector('main section');

      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('buttons');

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('btn');
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', deleteArticle);
      buttonDiv.appendChild(deleteButton);

      const archiveButton = document.createElement('button');
      archiveButton.textContent = 'Archive';
      archiveButton.classList.add('btn');
      archiveButton.classList.add('archive');
      archiveButton.addEventListener('click', archiveArticle);
      buttonDiv.appendChild(archiveButton);

      const article = createEl('article', createEl('h1', titleInput.value), createEl('p', 'Category:', createEl('strong', categoryInput.value)), createEl('p', 'Creator:', createEl('strong', authorInput.value)), createEl('p', contentInput.value), buttonDiv);
      postSection.appendChild(article);
   }

   function createEl(type, ...content){
      let result = document.createElement(type);

      content.forEach(el => {
         if(typeof el === 'string'){
            result.textContent = el;
         } else {
            result.appendChild(el);
         }
      });

      return result;
   }

   function deleteArticle(ev) {
      const targetArticle = ev.target.parentElement.parentElement;
      targetArticle.remove();
   }

   function archiveArticle(ev) {
      const archiveList = document.querySelector('.archive-section ol');
      const targetArticle = ev.target.parentElement.parentElement;
      const title = targetArticle.querySelector('h1').textContent;
      targetArticle.remove();
      const newLi = createEl('li', title);
      archiveList.appendChild(newLi);
      const allLi = Array.from(archiveList.children);
      const sorted = allLi.sort((a, b) => a.textContent.localeCompare(b.textContent));
      sorted.forEach(ch => archiveList.appendChild(ch));
   }
}

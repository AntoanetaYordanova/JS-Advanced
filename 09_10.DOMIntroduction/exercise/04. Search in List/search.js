function search() {
   const listItems = [...document.getElementsByTagName('li')];
   const searchPattern = document.getElementById('searchText').value;
   let matchesCounter = 0;

   for(let i = 0; i < listItems.length; i++) {
      const li = listItems[i];

      if(li.textContent.includes(searchPattern)){
         matchesCounter++;
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
      }
   }

   document.getElementById('result').textContent = '' + matchesCounter + ' matches found';
}

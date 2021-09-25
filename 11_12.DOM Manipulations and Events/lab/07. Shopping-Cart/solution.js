function solve() {
   //add event listener to all buttons
   let addButtons = Array.from(document.getElementsByClassName('add-product'));
   let totalSum = 0;
   const textarea = document.getElementsByTagName('textarea')[0];
   let list = [];

   addButtons.forEach(button => {
      button.addEventListener('click', addItem);
   });

   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);

   function addItem(ev){
      let parent = ev.target.parentNode.parentNode;
      let name = parent.querySelector('.product-title').textContent;
      let price = parent.querySelector('.product-line-price').textContent;
      totalSum += Number(price);
      list.push(name);
      textarea.textContent += `Added ${name} for ${price} to the cart.\n`;
   }

   function checkout(ev){
      list = [...new Set(list)];
      textarea.textContent += `You bought ${list.join(', ')} for ${totalSum.toFixed(2)}.`
      let buttons = document.getElementsByTagName('button');
      for(let button of buttons) {
         button.disabled = true;
      }
   }
}
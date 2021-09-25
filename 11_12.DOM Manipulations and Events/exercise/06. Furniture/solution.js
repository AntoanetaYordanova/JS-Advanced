function solve() {
  document.querySelector('button').addEventListener('click', addItem);

  function addItem() {
    let itemsArr = JSON.parse(document.querySelector('textarea').value );
    
    itemsArr.forEach(item => {
      const trElement = document.createElement('tr');

      for(let i = 0; i < 5; i++) {
        let tdElement = document.createElement('td');

        if (i === 0) {
          const imgElement = document.createElement('img');
          imgElement.src = item.img;
          tdElement.appendChild(imgElement);

        } else if(i === 1) {
          const pElement = document.createElement('p');
          pElement.textContent = item.name;
          tdElement.appendChild(pElement);

        } else if (i === 2) {
          const pElement = document.createElement('p');
          pElement.textContent = item.price;
          tdElement.appendChild(pElement);

        } else if (i === 3) {
          const pElement = document.createElement('p');
          pElement.textContent = item.decFactor;
          tdElement.appendChild(pElement);

        } else if (i === 4) {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          tdElement.appendChild(checkbox);

        }
        trElement.appendChild(tdElement)
      }
      
      document.querySelector('tbody').appendChild(trElement);
    });
    
  }



  document.getElementsByTagName('button')[1].addEventListener('click', makeAnOrder);

  function makeAnOrder() {
    let totalSum = 0;
    let list = [];
    let decFactors = [];

    let checkboxes = Array.from(document.getElementsByTagName('input'));
    
    for(let checkbox of checkboxes) {

      if(checkbox.checked) {
        const row = checkbox.parentNode.parentNode;
        const tDatas = Array.from(row.children);
        list.push(tDatas[1].querySelector('p').textContent)
        totalSum += Number(tDatas[2].querySelector('p').textContent);
        decFactors.push(Number(tDatas[3].querySelector('p').textContent));
      }
    }

    let averageDecFactor = (decFactors.reduce((a ,b) => a + b)) / decFactors.length;
    const output = document.getElementsByTagName('textarea')[1];

    output.value += `Bought furniture: ${list.join(', ')}\n`;
    output.value += `Total price: ${totalSum.toFixed(2)}\n`;
    output.value += `Average decoration factor: ${averageDecFactor}`;
    
  }
}
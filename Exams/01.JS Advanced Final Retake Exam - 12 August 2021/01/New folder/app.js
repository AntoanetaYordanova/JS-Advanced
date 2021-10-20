window.addEventListener('load', solve)
function solve() {
    let buttonsOnArr = [];


    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');
    const tbody = document.getElementById('furniture-list');


    let inputFields = Array.from(document.getElementsByTagName('input'));
    inputFields.push(document.getElementsByTagName('textarea')[0]);
    const addButton = document.getElementsByTagName('button')[0];
    inputFields.forEach(input => {
        input.setAttribute('required', 'true');
    });

    yearInput.setAttribute('min', '0');
    priceInput.setAttribute('min','0');
    addButton.addEventListener('click', addData);

    function addData(ev) {
        let model = modelInput.value;
        let description = descriptionInput.value;
        let year = yearInput.value;
        let price = priceInput.value;

        if(model && description && isPositiveNum(year) && isPositiveNum(price)) {
            const trInfo = document.createElement('tr');
            trInfo.classList.add('info');
            const tdModel = document.createElement('td');
            tdModel.textContent = model;
            trInfo.appendChild(tdModel);
            const tdPrice = document.createElement('td');
            tdPrice.textContent = Number(price).toFixed(2);
            trInfo.appendChild(tdPrice);
            const tdButtons = document.createElement('td');
            const buttonMore = document.createElement('button');
    
            let obj = {
                button : buttonMore,
                isOn : false
            }
            buttonsOnArr.push(obj);
            buttonMore.classList.add('moreBtn');
            buttonMore.textContent = 'More Info';
            buttonMore.addEventListener('click', showText);
            tdButtons.appendChild(buttonMore);
            const buttonBuy = document.createElement('button');
            buttonBuy.addEventListener('click', buy); 
            buttonBuy.classList.add('buyBtn');
            buttonBuy.textContent = 'Buy it';
            tdButtons.appendChild(buttonBuy);
            trInfo.appendChild(tdButtons);
            tbody.appendChild(trInfo);
            const trHidden = document.createElement('tr');
            trHidden.classList.add('hide');
            const tdYear = document.createElement('td');
            tdYear.textContent = 'Year: \n' + year;
            trHidden.appendChild(tdYear);
            const tdDescription =  document.createElement('td');
            tdDescription.colSpan = '3';
            tdDescription.textContent = 'Description: ' +  description;
            trHidden.appendChild(tdDescription);
            tbody.appendChild(trHidden);
            inputFields.forEach(input => input.value = '');
        }
      
    }

    function showText (ev) {
        let currentHideRow = ev.target.parentElement.parentElement.nextElementSibling;
        let currentHideButton = ev.target.parentElement.querySelector('button');
        let buttonInObj = (buttonsOnArr.filter(el => el.button ===  currentHideButton));
        buttonInObj = buttonInObj[0];
        
        if(!buttonInObj.isOn) {
            buttonInObj.isOn = true;
            currentHideRow.style.display = 'contents';
            currentHideButton.textContent = 'Less Info';
        } else {
            buttonInObj.isOn = false; 
            currentHideRow.style.display = 'none';
            currentHideButton.textContent = 'More Info';
        }
    }

    function buy (ev){
        let totalPriceOutput = document.getElementsByClassName('total-price')[0];
        let priceElement = ev.target.parentElement.parentElement.querySelector('td:nth-child(2)');
        let newPrice = (Number(priceElement.textContent) + Number(totalPriceOutput.textContent)).toFixed(2);
        totalPriceOutput.textContent = newPrice;
    }

    function isPositiveNum(num) {
        if(num) {
            return  Number(num) >= 0 ? true : false;
        }
     
    }
}

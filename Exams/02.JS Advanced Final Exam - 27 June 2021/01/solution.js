window.addEventListener('load', solution);

function solution() {
  const submitButton = document.querySelector('#form>input');
  const [nameInput, emailInput, phoneNumInput, addressinput, postalCodeInput] = Array.from(document.querySelectorAll('#form div input'));
  const editButton = document.getElementById('editBTN');
  const contunueButton = document.getElementById('continueBTN');
  const preview = document.querySelector('#infoPreview');
  let infoObj = {};
  submitButton.addEventListener('click', addInfo);
  editButton.addEventListener('click', editInfo);
  contunueButton.addEventListener('click', finishReservation);

  function addInfo(ev) {
    ev.preventDefault()
    const name = nameInput.value 
    const email = emailInput.value

    if(nameInput.value === '' || emailInput.value === '') {
      return;
    }

        infoObj = {
          name, 
          email,
          phoneNum : phoneNumInput.value,
          address : addressinput.value,
          postalCode : postalCodeInput.value
        }

        const ul = document.createElement('ul');
        ul.id = 'infoPreview';
        ul.appendChild(createLi(`Full Name: ${infoObj.name}`));
        ul.appendChild(createLi(`Email: ${infoObj.email}`));
        ul.appendChild(createLi(`Phone Number: ${infoObj.phoneNum}`));
        ul.appendChild(createLi(`Address: ${infoObj.address}`));
        ul.appendChild(createLi(`Postal Code: ${infoObj.postalCode}`));
        preview.appendChild(ul);

        Array.from(document.querySelectorAll('#form div input')).forEach(i => i.value = '');

        submitButton.setAttribute('disabled', 'true');
        editButton.removeAttribute('disabled');
        contunueButton.removeAttribute('disabled');
      
  }

  function editInfo() {
    nameInput.value = infoObj.name;
    emailInput.value = infoObj.email;
    phoneNumInput.value = infoObj.phoneNum;
    addressinput.value = infoObj.address;
    postalCodeInput.value = infoObj.postalCode;

    preview.innerHTML = '';
    submitButton.removeAttribute('disabled');
    editButton.setAttribute('disabled', 'true');
    contunueButton.setAttribute('disabled', 'true');
  }

  function finishReservation(){
    const divBlock = document.getElementById('block');
    divBlock.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    divBlock.appendChild(h3);
  }

  function createLi(content) {
    const result = document.createElement('li');
    result.textContent = content;
    return result;
  }
}

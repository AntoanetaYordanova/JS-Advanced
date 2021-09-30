window.addEventListener('load', solution);

function solution() {
  const submitButton = document.querySelector('#form>input');
  const [nameInput, emailInput, phoneNumInput, addressinput, postalCodeInput] = Array.from(document.querySelectorAll('#form div input'));
  const editButton = document.getElementById('editBTN');
  const contunueButton = document.getElementById('continueBTN');
  const preview = document.querySelector('#infoPreview');
  let infoObj = {};
  submitButton.addEventListener('click', addInfo);
  editButton.addEventListener('click', editInfo)
  contunueButton.addEventListener('click', finishReservation)

  function addInfo(ev) {
    ev.preventDefault()
    const name = nameInput.value 
    const email = emailInput.value

    if(name && email) {

        infoObj = {
          name, 
          email,
          phoneNum : phoneNumInput.value,
          address : addressinput.value,
          postalCode : postalCodeInput.value
        }

        preview.appendChild(createLi(`Full Name: ${infoObj.name}`));
        preview.appendChild(createLi(`Email: ${infoObj.email}`));
        preview.appendChild(createLi(`Phone Number: ${infoObj.phoneNum}`));
        preview.appendChild(createLi(`Address: ${infoObj.address}`));
        preview.appendChild(createLi(`Postal Code: ${infoObj.postalCode}`));

        Array.from(document.querySelectorAll('#form div input')).forEach(i => i.value = '');

        submitButton.setAttribute('disabled', 'true');
        editButton.removeAttribute('disabled');
        contunueButton.removeAttribute('disabled');
       
    }
  }

  function editInfo() {
    nameInput.value = infoObj.name;
    emailInput.value = infoObj.email;
    phoneNumInput.value = infoObj.phoneNum;
    addressinput.value = infoObj.address;
    postalCodeInput.value = infoObj.postalCode;

    Array.from(preview.children).forEach(c => c.remove());
    submitButton.removeAttribute('disabled');
    editButton.setAttribute('disabled', 'true');
    contunueButton.setAttribute('disabled', 'true');
  }

  function finishReservation(){
    const divBlock = document.getElementById('block')
    Array.from(divBlock.children).forEach(c => c.remove());
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    divBlock.appendChild(h3)
  }

  function createLi(content) {
    const result = document.createElement('li');
    result.textContent = content;
    return result;
  }
}

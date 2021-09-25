function deleteByEmail() {
    let email = document.querySelector('body label input').value;
    let allEmails = Array.from(document.querySelectorAll('tbody td:nth-child(2)'));
   
    allEmails.forEach((element) => {

        if(element.textContent === email) {
            let elementToRemove = element.parentElement;
            elementToRemove.parentElement.removeChild(elementToRemove);
            document.getElementById('result').textContent = 'Deleted.';
        } else {
            document.getElementById('result').textContent = 'Not found.';
        }
    })

}
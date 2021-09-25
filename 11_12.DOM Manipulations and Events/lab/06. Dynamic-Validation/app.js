function validate() {
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', isValid);

    function isValid(event) {
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
        const email = event.target.value;
        
        if(pattern.test(email)) {
            inputElement.classList.remove('error');
        } else {
            inputElement.classList.add('error');
        }
    }
}
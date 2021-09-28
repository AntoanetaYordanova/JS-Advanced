function validate() {
    const emailInput = document.getElementById('email');

    emailInput.addEventListener('change', () => {
        const email = emailInput.value;
        const regPattern = /^[a-z]+\@[a-z]+\.[a-z]+$/g;

        if(!regPattern.test(email)) {
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error')
        }
    });
};
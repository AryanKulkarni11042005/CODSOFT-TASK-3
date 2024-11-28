document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 100);

        const inputScreen = document.getElementById('input-screen');
        const buttonText = button.textContent;

        if (buttonText === 'AC') {
            inputScreen.textContent = '';
        } else if (buttonText === 'Del') {
            inputScreen.textContent = inputScreen.textContent.slice(0, -1);
        } else if (buttonText === '=') {
            try {
                inputScreen.textContent = eval(inputScreen.textContent);
            } catch (error) {
                inputScreen.textContent = 'Error';
            }
        } else {
            inputScreen.textContent += buttonText;
        }
    });
});
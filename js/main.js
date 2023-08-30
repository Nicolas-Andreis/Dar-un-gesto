const buttons = document.querySelectorAll('.donation-buttons .btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});
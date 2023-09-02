const buttons = document.querySelectorAll('.donation-buttons .btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});


//
// Código para el modal "donar"
// Obtén una referencia al botón que abre el modal
const openModalButtons = document.querySelectorAll('[data-modal]');

// Obtén una referencia al modal y al botón de cierre
const modals = document.querySelectorAll('.modal');
const closeModalButtons = document.querySelectorAll('.close');

// Función para abrir el modal
function openModal(event) {
    const modalId = event.target.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal(event) {
    const modalId = event.target.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Agrega un evento de clic a los botones que abren el modal
openModalButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

// Agrega un evento de clic a los botones de cierre de los modales
closeModalButtons.forEach(button => {
    button.addEventListener('click', closeModal);
});

// Agrega un evento de clic a la ventana para cerrar el modal si se hace clic fuera de él
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

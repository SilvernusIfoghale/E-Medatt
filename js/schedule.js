/* Appointment Request Management System
This script handles the acceptance and rejection of appointment requests
Sample HTML structure for appointment requests. */
const acceptButtons = document.querySelectorAll('.accept-btn');
const rejectButtons = document.querySelectorAll('.reject-btn');

acceptButtons.forEach(button => {
    button.addEventListener('click', () => {
        const request = button.dataset.request;
        alert(`${request}'s appointment has been accepted.`);
        button.closest('.request-card').remove(); // Remove from the request list.
    });
});

rejectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const request = button.dataset.request;
        alert(`${request}'s appointment has been rejected.`);
        button.closest('.request-card').remove(); // Remove from the request list.
    });
});
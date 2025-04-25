/* Script for Booking Appointments
This script handles the booking of appointments for different doctors.
It allows users to select a doctor and confirm their appointment.*/
const bookButtons = document.querySelectorAll('.book-btn');

bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedDoctor = button.dataset.doctor;
        const confirmation = confirm(`Do you want to book an appointment with ${selectedDoctor}?`);

        if (confirmation) {
            const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
            appointments.push({ doctor: selectedDoctor, time: new Date().toLocaleString() });
            localStorage.setItem('appointments', JSON.stringify(appointments));
            alert(`${selectedDoctor} appointment booked successfully!`);
        }
    });
});
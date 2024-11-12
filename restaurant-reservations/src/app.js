import { saveReservation, getReservations, deleteReservation } from './storage.js';

document.getElementById('reservationForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    const reservation = { name, date, time, guests };
    saveReservation(reservation);
    displayReservations();
    document.getElementById('reservationForm').reset();
});

function displayReservations() {
    const reservations = getReservations();
    const list = document.getElementById('reservationList');
    list.innerHTML = '';

    reservations.forEach((reservation, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${reservation.name} | ${reservation.date} | ${reservation.time} | (${reservation.guests} persoane)</span>`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Șterge';
        deleteButton.addEventListener('click', () => {
            deleteReservation(index);
            displayReservations();
        });
        
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}

displayReservations();

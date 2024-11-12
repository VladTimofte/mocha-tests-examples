import { saveCar, deleteCar, getCars } from './storage.js';

function displayCars() {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';

    getCars().forEach((car, index) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <span><strong>${car.licensePlate}</strong> <br/> <strong>ITP:</strong> ${car.itp} <br/> <strong>Asigurare:</strong> ${car.insurance}<br/> <strong>Rovinieta:</strong> ${car.rovignette}</span>
            <button class="delete-button">Șterge</button>
        `;
        
        // Atașăm un listener pentru butonul de ștergere
        const deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => handleDeleteCar(index));

        carList.appendChild(li);
    });
}

function handleDeleteCar(index) {
    deleteCar(index);
    displayCars();
}

export { displayCars, handleDeleteCar };

import { saveCar } from './storage.js';
import { displayCars } from './dom.js';

document.getElementById('carForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const licensePlate = document.getElementById('licensePlate').value;
    const itp = document.getElementById('itpDate').value;
    const insurance = document.getElementById('insuranceDate').value;
    const rovignette = document.getElementById('rovignetteDate').value;

    const car = { licensePlate, itp, insurance, rovignette };
    saveCar(car);
    displayCars();

    document.getElementById('carForm').reset();
});

displayCars();

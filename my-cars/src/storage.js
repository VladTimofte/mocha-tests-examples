// Functii CRUD pentru a gestiona datele in localStorage

function getCars() {
  const cars = localStorage.getItem('cars');
  return cars ? JSON.parse(cars) : [];
}

function saveCar(car) {
  const cars = getCars();
  cars.push(car);
  localStorage.setItem('cars', JSON.stringify(cars));
}

function updateCar(index, updatedCar) {
  const cars = getCars();
  cars[index] = updatedCar;
  localStorage.setItem('cars', JSON.stringify(cars));
}

function deleteCar(index) {
  const cars = getCars();
  cars.splice(index, 1);
  localStorage.setItem('cars', JSON.stringify(cars));
}

export { getCars, saveCar, updateCar, deleteCar };

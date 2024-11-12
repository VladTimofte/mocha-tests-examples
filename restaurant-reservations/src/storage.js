// Funcție pentru a adăuga o rezervare
function saveReservation(reservation) {
  const reservations = getReservations();
  reservations.push(reservation);
  localStorage.setItem("reservations", JSON.stringify(reservations));
}

// Funcție pentru a obține toate rezervările
function getReservations() {
  const reservations = localStorage.getItem("reservations");
  return reservations ? JSON.parse(reservations) : [];
}

// Funcție pentru a șterge o rezervare după index
function deleteReservation(index) {
  const reservations = getReservations();
  reservations.splice(index, 1);
  localStorage.setItem("reservations", JSON.stringify(reservations));
}

export { saveReservation, getReservations, deleteReservation };

// Funcție pentru a adăuga o rezervare
function saveReservation(reservation) {
  if (Object.keys(reservation)?.length !== 4) return;
  const reservations = getReservations();

  const duplicate = reservations.some(
    (res) =>
      res.name === reservation.name &&
      res.date === reservation.date &&
      res.time === reservation.time &&
      res.guests === reservation.guests
  );

  if (duplicate) {
    console.log("Aceasta rezervare exista deja si nu va fi salvata din nou!");
    return;
  }

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

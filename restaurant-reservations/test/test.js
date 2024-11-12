// test.js
import { expect } from 'chai' 
import { saveReservation, getReservations, deleteReservation } from '../src/storage.js'

import { LocalStorage } from 'node-localstorage'
global.localStorage = new LocalStorage('./scratch')

describe('Reservation Storage Functions', () => { 

    beforeEach(() => {
        localStorage.clear()
    })

    it('should add a reservation', () => {
        const reservation = {
            name: "John Charlie",
            date: "2024-11-12",
            time: "20:00",
            guests: 4
        }
        saveReservation(reservation)
        const reservationsLS = getReservations()
        expect(reservationsLS).to.have.lengthOf(1)
        expect(reservationsLS[0]).to.deep.equal(reservation)
    });

    it('should get all reservations', () => {
        const reservation1 = {
            name: "John Charlie",
            date: "2024-11-12",
            time: "20:00",
            guests: 4
        }
        const reservation2 = {
            name: "Bob Test",
            date: "2024-11-12",
            time: "19:00",
            guests: 6
        }
        saveReservation(reservation1)
        saveReservation(reservation2)

        const reservationsLS = getReservations()
        expect(reservationsLS).to.have.lengthOf(2)
    });

    it('should delete a reservation by index', () => {
        const reservation1 = {
            name: "John Charlie",
            date: "2024-11-12",
            time: "20:00",
            guests: 4
        }
        const reservation2 = {
            name: "Bob Test",
            date: "2024-11-12",
            time: "19:00",
            guests: 6
        }
        saveReservation(reservation1)
        saveReservation(reservation2)
        deleteReservation(0)
        const reservationsLS = getReservations()

        expect(reservationsLS).to.have.lengthOf(1)
        expect(reservationsLS[0]).to.deep.equal(reservation2)
    });

    it('should NOT add an incomplete reservation', () => {
        const incompleteReservation = {
            name: 'John',
            date: '2024-11-12'
        }

        saveReservation(incompleteReservation)
        const reservationsLS = getReservations()

        expect(reservationsLS).to.have.lengthOf(0)
        
    });

    it('should handle duplicate reservations correctly', () => {
        const reservation = {
            name: "Bob Test",
            date: "2024-11-12",
            time: "19:00",
            guests: 6
        } 

        saveReservation(reservation)
        saveReservation(reservation)

        const reservationsLS = getReservations()
        expect(reservationsLS).to.have.lengthOf(1)
    });

 })
import React, { useState } from 'react';
import './Booking.scss';
import { Reservation } from '../../models/Reservation';
import { BookingService } from '../../services/BookingService';

//let newReservation: Reservation = new Reservation()
// const [booking, setBooking] = useState<Reservation>(); // Kolla om vi behöver ange startegenskaper. Kanske undefined.

let service = new BookingService
const newcustomer = () => {
    
    let customer: Reservation = new Reservation( 
        "2022-04-09",
        "18:00", 
        4, 
          {
              name: "majojo",
              lastname: 'test',
              email: 'email@mail.com',
              phone:'070123456'
          }
    )
    service.createBooking(customer)
}

const fetchBookings = () => {
  console.log('fetchBookings');
  service.fetchBookings();
}

export function Booking () {
    return(<>
        <h1>Booking works!</h1>

        <button onClick={newcustomer}>Ny kund</button>
        <button onClick={fetchBookings}>Hämta data</button>
        </>)
}
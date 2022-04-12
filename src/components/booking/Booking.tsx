import React, { useState } from 'react';
import './Booking.scss';
import { Reservation } from '../../models/Reservation';
import { BookingService } from '../../services/BookingService';
import { IReservation } from '../../models/IReservation';

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
    const [booking, setBooking] = useState<Reservation>(); // Kolla om vi behöver ange startegenskaper. Kanske undefined.
    const [bookingDates, setBookingDates] = useState<IReservation[]>([]);
    const [bookings, setBookings] = useState<IReservation[]>([]);
    const [selects, setSelects] = useState(0); // Sätter antal personer
    const [requestedDate, setRequestedDate] = useState(""); // Sätter valt datum
    console.log("Datum: " + requestedDate + " " + "Antal personer: " + selects);

    function checkIfAvailable() {
       // service.fetchBookings().then(data => setBookings(data) )
       // let match = bookings.find(match => match.date===requestedDate)
        //setBookingDates()
        
        console.log("Hej hej")
    };

    return(<>
        <div className='headerContainer'>
            <h1>Booking works!</h1>

            <button onClick={newcustomer}>Ny kund</button>
            <button onClick={fetchBookings}>Hämta data</button>
            
        </div>

        <div className='bookingSearchContainer'>
            <h2>Sök önskad bokning</h2>

            <form onSubmit={checkIfAvailable}>
                
                <label> Antal gäster: 
                    <br />
                    <select value={selects} onChange={e => setSelects(parseInt(e.target.value))}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </label>

                <br />
                <br />

                <label>
                    Önskat datum:
                    <br />
                    <input type="date" onChange={e => setRequestedDate(e.target.value)} />
                </label>

                <br />
                <br />
                
                <input type="submit"/>

            </form>
        </div>
        </>)
}
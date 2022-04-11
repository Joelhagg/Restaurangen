import { useEffect, useState } from 'react';
import { IReservation } from '../../models/IReservation';
import { Reservation } from '../../models/Reservation';
import { BookingService } from '../../services/BookingService';
import './Admin.scss';

export function Admin () {
    
    const [bookings, setBookings] = useState<IReservation[]>([]);

    console.log("bookings" + bookings)
    useEffect(() => {
        let service = new BookingService;
        service.fetchBookings()
        .then(fetchedBookings => setBookings(fetchedBookings));
        console.log()
    }, ([]));

    let bookingsHtml = bookings.map((b) => {
        return <li key={b._id}>
        <span>{b.customerId} </span>
        <span>{b.date}</span>
        <button>Remove</button>
      </li>
    }
    )


    return(<>
       <h1 className='adminHeader'>Admin works!</h1> 
       <ul> {bookingsHtml}</ul>
    </>)
}
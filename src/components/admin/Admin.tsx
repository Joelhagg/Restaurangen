import { useEffect, useState } from 'react';
import { Reservation } from '../../models/Reservation';
import { BookingService } from '../../services/BookingService';
import './Admin.scss';

export function Admin () {
    
    const [bookings, setBookings] = useState<Reservation[]>([]);

    useEffect(() => {
        let service = new BookingService;
        service.fetchBookings()
        .then(fetchedBookings => setBookings(fetchedBookings));
        console.log(bookings)
    }, ([]));
/*
    let bookingsHtml = bookings.map((b) => {
        return <li key={}>
        <span>{b.customer}: </span>
        <span>{b.date}</span>
      </li>
    }
    )
*/

    return(<>
       <h1 className='adminHeader'>Admin works!</h1> 
       <ul> </ul>
    </>)
}
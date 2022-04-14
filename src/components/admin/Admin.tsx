import axios from 'axios';
import { useEffect, useState } from 'react';
import { IReservation } from '../../models/IReservation';
import { Reservation } from '../../models/Reservation';
import { BookingService } from '../../services/BookingService';
import './Admin.scss';

export function Admin () {
    let service = new BookingService;
    const [bookings, setBookings] = useState<IReservation[]>([]);
    const [idToRemove, setIdToRemove] = useState("");
    
    
    const deleteBooking = async (idToRemove: any) => {

         setIdToRemove(idToRemove)
         const sendDelete = await axios.delete<IReservation>(`https://school-restaurant-api.azurewebsites.net/booking/delete/${idToRemove}`);
         
         await service.fetchBookings()
        .then(fetchedBookings => setBookings(fetchedBookings));
    }
    
    useEffect(() => {
        let service = new BookingService;
        service.fetchBookings()
        .then(fetchedBookings => setBookings(fetchedBookings));
    }, ([]));

    let bookingsHtml = bookings.map((b) => {
        return <li key={b._id}>
        <span>{b._id} </span>
        <span>{b.date}</span>
        <button onClick= {(e) => deleteBooking(b._id)}>Remove</button>
      </li>
    }
    )

    return(<>
       <h1 className='adminHeader'>Admin works!</h1> 
       <ul> {bookingsHtml}</ul>
    </>)
}
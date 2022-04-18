import axios from 'axios';
import { fchmodSync } from 'fs';
import { useEffect, useState } from 'react';
import { ICustomer } from '../../models/ICustomer';
import { IReservation } from '../../models/IReservation';
import { Reservation } from '../../models/Reservation';
import { BookingService } from '../../services/BookingService';
// import { ICustomer } from ''
import './Admin.scss';

export function Admin () {
    let service = new BookingService;
    const [bookings, setBookings] = useState<IReservation[]>([]);
    const [idToRemove, setIdToRemove] = useState("");
    const [customerList, setCustomerList] = useState<ICustomer[]>([]);
    const [customerDetails, setCustomerDetails] = useState<ICustomer>({
        id: "",
        name: "",
        lastname: "",
        email: "",
        phone: ""
    });
    
    
    const deleteBooking = async (idToRemove: any) => {

         setIdToRemove(idToRemove)
         const sendDelete = await axios.delete<IReservation>(`https://school-restaurant-api.azurewebsites.net/booking/delete/${idToRemove}`);
         
         await service.fetchBookings()
        .then(fetchedBookings => setBookings(fetchedBookings));
    }

    const showCustomerInformation = async (customerId: string) => {

        let customerToShow = await axios.get<ICustomer>(`https://school-restaurant-api.azurewebsites.net/customer/${customerId}`);
        console.log(customerToShow.data.email)
        
        setCustomerDetails(customerToShow.data)
        console.log(typeof customerDetails)
        console.log('customerDetails', customerDetails.name);
    }
    
    
    useEffect(() => {
        let service = new BookingService;
        service.fetchBookings()
        .then(fetchedBookings => setBookings(fetchedBookings));
    }, ([]));

    let bookingsHtml = bookings.map((b) => {
        return( 
        <li key={b._id}>
        <span>Datum: {b.date} </span>
        <span>Tid: {b.time}</span>
        <span>Antal gäster: {b.numberOfGuests}</span>
        <button onClick= {(e) => deleteBooking(b._id)}>Remove</button>
        <button onClick={(id) => showCustomerInformation(b.customerId)} >hämta kunddata</button>
      </li>
      )
    }
    )

    return(<>
       <h1 className='adminHeader'>Admin works!</h1> 
       <ul> {bookingsHtml}</ul>
    </>)
}

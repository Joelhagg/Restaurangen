import React from 'react';
import { Reservation } from '../../models/Reservation';
import { BookingService } from '../../services/BookingService';

//let newReservation: Reservation = new Reservation()

const newcustomer = () => {
    
    // let customer: Reservation = new Reservation( 
        
    //     "2022-04-09",
    //     "18:00", 
    //     4, 
    //         {
    //             name: "majojo",
    //             lastname: 'test',
    //             email: 'email@mail.com',
    //             phone:'070123456'
    //         }
    // )

    
    let service = new BookingService
    service.createBooking({
    restaurantId: "624edd698da20f7ae72e1559",
        date: "20220101",
        time: "18:00",
        numberOfGuests: 4,
        customer: {
          name: "Franzén",
          lastname: "Sebastian",
          email: "someone@somedomain.com",
          phone: "070-1112233"
        }
      })

    
}

export function Booking () {
    return(<>
        <h1>Booking works!</h1>

        <button onClick={newcustomer}>Ny kund</button>
        </>)
}
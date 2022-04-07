import React from 'react';
import { Reservation } from '../../models/Reservation';

//let newReservation: Reservation = new Reservation()

const newcustomer = () => {
    
    let customer: Reservation = new Reservation( 
        
        "string",
        "", 
        4, 
            {
                name: "string",
                lastname: 'lastname',
                email: 'email',
                phone:'number'
            }
    )

    console.log(customer);
    

    
}

export function Booking () {
    return(<>
        <h1>Booking works!</h1>

        <button onClick={newcustomer}>Ny kund</button>
        </>)
}
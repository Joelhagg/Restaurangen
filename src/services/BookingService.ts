import { Reservation } from "../models/Reservation";
import axios from "axios"

export class BookingService {
    async createBooking(newReservation: Reservation) {
        let response = await axios.post<Reservation>('https://school-restaurant-api.azurewebsites.net/booking/create', newReservation
           
        );
        
        console.log('response.data', response.data);      
            
    }

    // bookingFunction(newReservation: Reservation) {
    //     axios.post<Reservation>('https://school-restaurant-api.azurewebsites.net/booking/create', newReservation)
    //     .then(response => console.log(response.data))
        
    // }
    
}
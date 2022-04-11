import { Reservation } from "../models/Reservation";
import axios from "axios"

export class BookingService {

    // Den metoden skickar en nu bokning till API:t

    async createBooking(newReservation: Reservation) {
        let createdResponse = await axios.post<Reservation>('https://school-restaurant-api.azurewebsites.net/booking/create', newReservation
           
        );
        
        console.log('createdResponse.data', createdResponse.data);      
            
    }

    // Den här metoden hämtar bokningar från API:t

    async fetchBookings(): Promise<Reservation[]> {
        let fetchedResponse = await axios.get<Reservation[]>('https://school-restaurant-api.azurewebsites.net/booking/restaurant/624edd698da20f7ae72e1559'
         
        );
        let bookingArray: Reservation[] = fetchedResponse.data 
        return bookingArray;
        console.log('fetchedResponse.data', fetchedResponse.data);        
    }
}




/* När man klickar på boka ska detta ske:

 - Hämta befintliga bokningar från API - spara i en array
 - Loopa igenom och kontrollera att datum och tid inte finns i en befintlig bokning. Array.find
 - Om ingen matchning finns, kör array.push 

 */
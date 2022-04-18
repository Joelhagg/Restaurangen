import { Reservation } from "../models/Reservation";
import axios from "axios"
import { IReservation } from "../models/IReservation";
import { ICustomer } from "../models/ICustomer";

export class BookingService {

    // Den metoden skickar en nu bokning till API:t

    async createBooking(newReservation: Reservation) {
        let createdResponse = await axios.post<Reservation>('https://school-restaurant-api.azurewebsites.net/booking/create', newReservation
           
        );
        
        console.log('createdResponse.data', createdResponse.data);      
            
    }

    // Den här metoden hämtar bokningar från API:t

    async fetchBookings(): Promise<IReservation[]> {
        let fetchedResponse = await axios.get<IReservation[]>('https://school-restaurant-api.azurewebsites.net/booking/restaurant/624edd698da20f7ae72e1559'
         
        );
        let bookingArray: IReservation[] = fetchedResponse.data 
       
        return bookingArray;
    }

    customerList: ICustomer[] = [];
    async fetchCustomer(customerId: any): Promise<ICustomer> {
        let fetchedResponse = await axios.get<ICustomer>(`https://school-restaurant-api.azurewebsites.net/customer/${customerId}`);
        
        let fetchedCustomer: ICustomer = fetchedResponse.data;
        //this.customerList.push(fetchedCustomer)
       
        return fetchedCustomer
    }


    // async fetchAvailableBookings(requestedDate: string, numberOfGuests: number){
    //     let fetchedResponse = await axios.get<IReservation[]>('https://school-restaurant-api.azurewebsites.net/booking/restaurant/624edd698da20f7ae72e1559'

    //     );
    //     let bookingArray: IReservation[] = fetchedResponse.data 
    //     console.log(bookingArray);
        
    //     let match = bookingArray.find((bookingData: IReservation) => {
    //             if(bookingData.date === requestedDate) {
    //                 console.log('date match', requestedDate);
                    
    //             } else {
    //                 console.log('no date' );
    //             }
    //         })

    //         console.log(match);
            
            
    //         return match;
    //     }
        // console.log('date' ,date);
        // console.log('numberOfGuests', numberOfGuests);
        
    }




    

/* När man klickar på boka ska detta ske:

 - Hämta befintliga bokningar från API - spara i en array
 - Loopa igenom och kontrollera att datum och tid inte finns i en befintlig bokning. Array.find
 - Om ingen matchning finns, kör array.push 

 */
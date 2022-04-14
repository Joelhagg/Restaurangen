import React, { FormEvent, useEffect, useState } from "react";
import "./Booking.scss";
import { Reservation } from "../../models/Reservation";
import { BookingService } from "../../services/BookingService";
import { IReservation } from "../../models/IReservation";

let service = new BookingService();
const newcustomer = () => {
  let customer: Reservation = new Reservation("2022-04-09", "21:00", 4, {
    name: "majojo",
    lastname: "test",
    email: "email@mail.com",
    phone: "070123456",
  });
  service.createBooking(customer);
};


export function Booking() {

  const [booking, setBooking] = useState<Reservation>(); // Kolla om vi behöver ange startegenskaper. Kanske undefined.
  const [bookingDates, setBookingDates] = useState<IReservation[]>([]);
  const [bookings, setBookings] = useState<IReservation[]>([]); // Hämta hem befintliga bokningar
  const [selects, setSelects] = useState(0); // Sätter antal personer
  const [requestedDate, setRequestedDate] = useState(""); // Sätter valt datum
  const [availableSeats, setAvailableSeats] = useState(0);

  useEffect(() => {
    service.fetchBookings().then((response) => setBookings(response));

  }, []);

  function checkIfAvailable(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let dateMatch = bookings.filter((match) => { // Hämtar bokningar och filtrerar på valt datum      
      return match.date === requestedDate;
      
    });

    let timeMatch = dateMatch.filter((match) => {
        return match.time == "21:00" 
    })

    if(bookingDates.length >= 15) { 
    }
    
    setBookingDates(timeMatch);
    console.log(bookingDates)

    let seats = 0;
    for (let i=0; i<bookingDates.length; i++) {
        seats = seats + bookingDates[i].numberOfGuests
    }
    //console.log(seats)
    setAvailableSeats(seats);
    console.log("taken seats: " + availableSeats)


    if (selects <= 6) {
        // bord = 1
        //setAvailableSeats(-6)
        console.log('mindre än 6');
        
    } else if (selects >=7 && selects <= 10 ) {
        // bord = 2
        //setAvailableSeats(-12)
        console.log('mer än 6');
    }
  }


  return (
    <>
      <div className="headerContainer">
        <h1>Booking works!</h1>

        <button onClick={newcustomer}>Ny kund</button>
      </div>

      <div className="bookingSearchContainer">
        <h2>Sök önskad bokning</h2>

        <form onSubmit={checkIfAvailable}>
          <label>
            {" "}
            Antal gäster:
            <br />

          </label>

          <br />
          <br />

          <label>
            Önskat datum:
            <br />
            <input
              type="date"
              onChange={(e) => setRequestedDate(e.target.value)}
            />
          </label>

          <br />
          <br />
          <label></label>
  
          <input type="submit" />
        </form>
        {bookingDates.map(booking => 
            <h1 key={booking._id}>{booking.time}</h1>)}

            <br />

            {/* {bookingDates.length >= 15 ? <p></p> : <label><input type="radio" />kl 18</label> }
            {bookingDates.length >= 15 ? <p></p> : <label><input type="radio" />kl 21</label> } */}
          <div>
        </div>
      </div>
    </>
  );
}
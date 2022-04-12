import React, { useEffect, useState } from "react";
import "./Booking.scss";
import { Reservation } from "../../models/Reservation";
import { BookingService } from "../../services/BookingService";
import { IReservation } from "../../models/IReservation";
import axios from "axios";

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

  useEffect(() => {
    service.fetchBookings().then((response) => setBookings(response));
  }, []);

  function checkIfAvailable(e: any) {
    e.preventDefault();

    

    let foundBooking = bookings.filter((match) => {
      return match.date === requestedDate;
      //matches.push(match);

    
    });
    setBookingDates(foundBooking);
/*  
    if (foundBooking !== undefined) {
      setBookingDates([...bookingDates, foundBooking]);
    }
*/
   

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
            <select
              value={selects}
              onChange={(e) => setSelects(parseInt(e.target.value))}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
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

          <input type="submit" />
        </form>
        {bookingDates.map(booking => 
            <h1 key={booking._id}>{booking.time}</h1>)
            
            }
        <div>

        </div>
      </div>
    </>
  );
}


/*
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
*/
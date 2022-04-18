import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./Booking.scss";
import { Reservation } from "../../models/Reservation";
import { BookingService } from "../../services/BookingService";
import { IReservation } from "../../models/IReservation";

export function Booking() {
  const [booking, setBooking] = useState<Reservation>(); // Kolla om vi behöver ange startegenskaper. Kanske undefined.
  const [bookingDates, setBookingDates] = useState<IReservation[]>([]);
  const [bookings, setBookings] = useState<IReservation[]>([]); // Hämta hem befintliga bokningar
  const [selects, setSelects] = useState(1); // Sätter antal personer
  const [requestedDate, setRequestedDate] = useState(""); // Sätter valt datum
  const [availableSeats, setAvailableSeats] = useState(0);
  const [eveningDates, setEveningsDates] = useState<IReservation[]>([]);
  const [nightDates, setNightDates] = useState<IReservation[]>([]);
  const [requestedTime, setRequestedTime] = useState("");
  const [showTime, setShowTime] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  let service = new BookingService();

  useEffect(() => {
    service.fetchBookings().then((response) => setBookings(response));
  }, []);

  useEffect(() => {
    console.log(requestedDate)
    if ((selects !<= 1 && selects !<= 6) || requestedDate === "") {
    setShowTime(false);   
    } else {

      if (selects == NaN) {
        setShowTime(false)
      }

    setShowTime(true)}

    console.log('selects inside useEffects', selects);
    
      
    let dateMatch = bookings.filter((match) => {
      // Hämtar bokningar och filtrerar på valt datum
      return match.date === requestedDate;
    });

    let nightMatch = dateMatch.filter((match) => {
      return match.time === "21:00";
    });

    let eveningMatch = dateMatch.filter((match) => {
      return match.time === "18:00";
    });

    setNightDates(nightMatch);
    setEveningsDates(eveningMatch);
  
  }, [selects, requestedDate])

 
  //   // Hanterar inmatad info om kunden
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let customer: string = e.target.name;
    setNewCustomer({ ...newCustomer, [customer]: e.target.value });
  }


  const newBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let customer: Reservation = new Reservation(
      requestedDate,
      requestedTime,
      selects,
      {
        name: newCustomer.name,
        lastname: newCustomer.lastName,
        email: newCustomer.email,
        phone: newCustomer.phone,
      }
    );
    service.createBooking(customer);
  };

  function changeSelects(e: ChangeEvent<HTMLSelectElement>) {
    setSelects(parseInt(e.target.value))
    console.log('selects', selects);
    
  }

   
       
  return (
    <>
      <div className="headerContainer">
        <h1>Booking works!</h1>
      </div>

      <div className="bookingSearchContainer">
        <h2>Sök önskad bokning</h2>

        <form>
          <label>
            {" "}
            Antal gäster:
            <br />
            <input
              type="number"
              min="1"
              max="6"
              onChange={(e) => setSelects(parseInt(e.target.value))}

              
            />
            <select onChange={(e) => changeSelects(e)}>
              <option value={1} >1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
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

          
        </form>
        {bookingDates.map((booking) => (
          <h1 key={booking._id}>{booking.time}</h1>
        ))}

        <br />
          <p>Den {requestedDate} finns dessa lediga bord för {selects} personer: </p>
        {/* vi wrapar och visar när man klickat på knappen - tex en boolean som blir true */}
        {showTime &&
        <section>  
        {eveningDates.length >= 15 ? (
          <p>kl 18:00 - Fullbokat</p>
        ) : (
          <label>
            <input type="radio" onChange={() => setRequestedTime("18:00")} />
            kl 18
          </label>
        )}
        {nightDates.length >= 15 ? (
          <p>kl 21:00 - Fullbokat</p>
        ) : (
          <label>
            <input type="radio" onChange={() => setRequestedTime("21:00")} />
            kl 21
          </label>
        )}
        <br />
        <br />
        <div>
          <form onSubmit={newBooking}>
            <input
              type="text"
              name="name"
              placeholder="namn"
              value={booking?.customer.name}
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <input
              type="text"
              name="lastname"
              placeholder="efternamn"
              value={booking?.customer.lastname}
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Mejl"
              value={booking?.customer.email}
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <input
              type="text"
              name="phone"
              placeholder="Mobil"
              value={booking?.customer.phone}
              onChange={handleChange}
            ></input>
            <br />
            <br />
           { <input type="submit" /> }
          </form>
         
        </div>
        </section>
}
      </div>
    </>
  );
}


import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./Booking.scss";
import { Reservation } from "../../models/Reservation";
import { BookingService } from "../../services/BookingService";
import { IReservation } from "../../models/IReservation";

export function Booking() {
  const [booking, setBooking] = useState<Reservation>(); // Kolla om vi behöver ange startegenskaper. Kanske undefined.
  const [bookingDates, setBookingDates] = useState<IReservation[]>([]);
  const [bookings, setBookings] = useState<IReservation[]>([]); // Hämta hem befintliga bokningar
  const [selects, setSelects] = useState(0); // Sätter antal personer
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

  function checkIfAvailable(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowTime(true);
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

    if (bookingDates.length >= 15) {
    }

    console.log(bookingDates);

    let seats = 0;
    for (let i = 0; i < bookingDates.length; i++) {
      seats = seats + bookingDates[i].numberOfGuests;
    }
    //console.log(seats)
    setAvailableSeats(seats);
    console.log("taken seats: " + availableSeats);

    if (selects <= 6) {
      // bord = 1
      //setAvailableSeats(-6)
      console.log("mindre än 6");
    } else if (selects >= 7 && selects <= 10) {
      // bord = 2
      //setAvailableSeats(-12)
      console.log("mer än 6");
    }
  }
  //   // Hanterar inmatad info om kunden
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let customer: string = e.target.name;
    setNewCustomer({ ...newCustomer, [customer]: e.target.value });
  }

  //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     let name: string = e.target.name;
  //     setNewUser({ ...newUser, [name]: e.target.value });
  //   };

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

   
       
  return (
    <>
      <div className="headerContainer">
        <h1>Booking works!</h1>
      </div>

      <div className="bookingSearchContainer">
        <h2>Sök önskad bokning</h2>

        <form onSubmit={checkIfAvailable}>
          <label>
            {" "}
            Antal gäster:
            <br />
            <input
              type="number"
              onChange={(e) => setSelects(parseInt(e.target.value))}
            />
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
        {bookingDates.map((booking) => (
          <h1 key={booking._id}>{booking.time}</h1>
        ))}

        <br />

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
        <div>
          <form onSubmit={newBooking}>
            <input
              type="text"
              name="name"
              value={booking?.customer.name}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              name="lastname"
              value={booking?.customer.lastname}
              onChange={handleChange}
            ></input>
            <input
              type="email"
              name="email"
              value={booking?.customer.email}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              name="phone"
              value={booking?.customer.phone}
              onChange={handleChange}
            ></input>
            <input type="submit" />
          </form>
          {showTime && <p>Gör din bokning</p>}
        </div>
        </section>
}
      </div>
    </>
  );
}

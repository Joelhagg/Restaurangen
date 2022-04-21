import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./Booking.scss";
import { Reservation } from "../../models/Reservation";
import { BookingService } from "../../services/BookingService";
import { IReservation } from "../../models/IReservation";
import { Link } from "react-router-dom";

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
  const [bookingComplete, setBookingComplete] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  let service = new BookingService();

  useEffect(() => {
    service.fetchBookings().then((response) => setBookings(response));
    setBookingComplete(false);
  }, []);

  useEffect(() => {
    if (requestedDate === "") {
      setShowTime(false);
    } else {
      setShowTime(true);
    }

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
  }, [selects, requestedDate]);

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
        lastname: newCustomer.lastname,
        email: newCustomer.email,
        phone: newCustomer.phone,
      }
    );

    service.createBooking(customer);

    setShowTime(false);
    setBookingComplete(true);
  };

  function changeSelects(e: ChangeEvent<HTMLSelectElement>) {
    setSelects(parseInt(e.target.value));
  }

  return (
    <>
      <div className="bookingWrapper">
        {bookingComplete && (
          <div className="orderConfirmation">
            <h1>
              Tack {newCustomer.name} {newCustomer.lastname} för din bokning!
            </h1>
            <h3>
              Du är välkommen till oss den {requestedDate} klockan{" "}
              {requestedTime}. Antal gäster: {selects}
            </h3>

            <div className="wrapper">
              {" "}
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>

            <Link to="/">
              {" "}
              <button>Tillbaka till startsidan</button>
            </Link>
          </div>
        )}

        {!bookingComplete && (
          <div>
            <div className="bookingSearchContainer">
              <h2>Sök önskad bokning</h2>

              <form>
                <label>
                  {" "}
                  Antal gäster:
                  <br />
                  <select onChange={(e) => changeSelects(e)}>
                    <option value={1}>1</option>
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
                    className="datePicker"
                    onChange={(e) => setRequestedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </label>

                <br />
                <br />
              </form>

              <br />

              {showTime && (
                <section>
                  <h3>
                    Den {requestedDate} finns dessa lediga bord för {selects}{" "}
                    personer:{" "}
                  </h3>
                  <form onSubmit={newBooking}>
                    {eveningDates.length >= 15 ? (
                      <p>kl 18:00 - Fullbokat</p>
                    ) : (
                      <label>
                        <input
                          type="radio"
                          id="18"
                          value={requestedTime}
                          name="radio"
                          className="radioBtn"
                          required
                          onChange={() => setRequestedTime("18:00")}
                        />
                        kl 18
                      </label>
                    )}
                    {nightDates.length >= 15 ? (
                      <p>kl 21:00 - Fullbokat</p>
                    ) : (
                      <label>
                        <input
                          type="radio"
                          id="21"
                          value={requestedTime}
                          name="radio"
                          required
                          onChange={() => setRequestedTime("21:00")}
                        />
                        kl 21
                      </label>
                    )}

                    <br />
                    <br />
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Namn"
                        required
                        minLength={2}
                        value={booking?.customer.name}
                        onChange={handleChange}
                      />
                      <br />
                      <br />
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Efternamn"
                        required
                        minLength={2}
                        value={booking?.customer.lastname}
                        onChange={handleChange}
                      ></input>
                      <br />
                      <br />
                      <input
                        type="email"
                        name="email"
                        placeholder="Mejl"
                        required
                        value={booking?.customer.email}
                        onChange={handleChange}
                      ></input>
                      <br />
                      <br />
                      <input
                        type="text"
                        name="phone"
                        placeholder="Mobil"
                        minLength={10}
                        required
                        value={booking?.customer.phone}
                        onChange={handleChange}
                      ></input>

                      <br />
                      <br />
                      <br />

                      <label>
                        {" "}
                        Godkänner du att vi hanterar din persondata enligt GDPR?
                        <input required type="checkbox" />
                      </label>

                      <br />
                      <br />

                      <button type="submit">Boka!</button>
                      <h5>
                        Ring om ni önskar boka fler än 6 gäster på
                        telefonnummer:{" "}
                        <a href="tel:+08-740 00 01">08-740 00 01</a>{" "}
                      </h5>
                    </div>
                  </form>
                </section>
              )}
            </div>
            <br />
          </div>
        )}
      </div>
    </>
  );
}

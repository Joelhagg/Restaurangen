import axios from "axios";
import { useEffect, useState } from "react";
import { ICustomer } from "../../models/ICustomer";
import { IReservation } from "../../models/IReservation";
import { BookingService } from "../../services/BookingService";
import { Customer } from "../customer/Customer";
import "./Admin.scss";

export function Admin() {
  let service = new BookingService();
  const [bookings, setBookings] = useState<IReservation[]>([]);
  const [idToRemove, setIdToRemove] = useState("");
  const [customerDetails, setCustomerDetails] = useState<ICustomer>({
    _id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const deleteBooking = async (idToRemove: any) => {
    setIdToRemove(idToRemove);
    const sendDelete = await axios.delete<IReservation>(
      `https://school-restaurant-api.azurewebsites.net/booking/delete/${idToRemove}`
    );

    await service
      .fetchBookings()
      .then((fetchedBookings) => setBookings(fetchedBookings));
  };

  useEffect(() => {
    let service = new BookingService();
    service
      .fetchBookings()
      .then((fetchedBookings) => setBookings(fetchedBookings));
  }, []);

  let bookingsHtml = bookings.map((b) => {
    return (
      <div key={b._id} className="bookingCell">
        <p>Bokningsdatum: {b.date} </p>
        <p>Tid: {b.time}</p>
        <p>Antal gäster: {b.numberOfGuests}</p>
        <Customer customerId={b.customerId} />
        <button onClick={(e) => deleteBooking(b._id)}>Ta bort bokning</button>
        <br />
        <br />
        <hr />
        <br />
      </div>
    );
  });

  return (
    <>
      <h1 className="adminHeader">Admin - Bokningar</h1>
      <div className="bookingContiner">
        <p>{bookingsHtml}</p>
      </div>
    </>
  );
}

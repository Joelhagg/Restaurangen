import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/main/Main";
import { Booking } from "./components/booking/Booking";
import { Admin } from "./components/admin/Admin";
import { Structure } from "./components/structure/Structure";
import { NotFound } from "./components/notFound/NotFound";
import { Contact } from "./components/contact/Contact";
import { Menu } from "./components/meny/Menu";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container as Element);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route index element={<Main />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

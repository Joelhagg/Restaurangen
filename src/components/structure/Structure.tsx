import React from "react";
import "./Structure.scss";

import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Nav } from "../nav/Nav";

export function Structure() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

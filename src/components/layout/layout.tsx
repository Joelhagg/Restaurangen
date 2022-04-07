import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { Nav } from '../nav/Nav';


export function Layout() {
  return (
    <>
      <h1>Layout works!</h1>
      <header>
        <Nav></Nav>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer> 
          <Footer></Footer>
      </footer>
    </>
  );
}

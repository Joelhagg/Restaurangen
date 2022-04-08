import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Nav } from "../nav/Nav";

export function Structure () {

return (
    <>
      <h1>Structure works!</h1>
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
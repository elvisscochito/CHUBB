import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      {/* <main>
        <section> */}
      <Outlet />
      {/* </section>
      </main> */}
    </>
  );
}

export default Layout;

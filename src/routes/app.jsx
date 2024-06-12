import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../pages/About";
import ChatBot from "../pages/ChatBot";
import ChobPoints from "../pages/ChobPoints";
import Conferences from "../pages/Conferences";
import Contact from "../pages/Contact";
import CuadroChobs from "../pages/CuadroChobs";
import Login from "../pages/Login";
import Mentors from "../pages/Mentors";
import More from "../pages/More";
import Selection from "../pages/Selection";
import User from "../pages/User";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/selection" element={<Selection />} />
        <Route element={<Layout />}>
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/cuadro-chobs" element={<CuadroChobs />} />
          <Route path="/chob-points" element={<ChobPoints />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

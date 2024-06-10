import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import ChatBot from "../pages/ChatBot";
import ChobPoints from "../pages/ChobPoints";
import Conferences from "../pages/Conferences";
import CuadroChobs from "../pages/CuadroChobs";
import Login from "../pages/Login";
import Selection from "../pages/Selection";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import ChatBot from "../pages/ChatBot";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

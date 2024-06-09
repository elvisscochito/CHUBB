import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatBot from "../pages/ChatBot";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

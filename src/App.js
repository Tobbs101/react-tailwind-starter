import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/SignIn";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Header from "./components/header/Header";

function App() {
  return (
    <div
      className="p-5"
      style={{ backgroundColor: "#f3f5f9", minHeight: "100vh" }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";
import './styles/style.css';


function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={isAuthenticated ? <Users /> : <Navigate to="/" />} />
        <Route path="/edit/:id" element={isAuthenticated ? <EditUser /> : <Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;

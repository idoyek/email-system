import "./App.css";
import EmailPage from "./components/EmailPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { AppProvider } from "./store/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/email" element={<EmailPage />} />
            <Route path="/" element={<Navigate to="/register" />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;

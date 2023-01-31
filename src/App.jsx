import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { LoginProvider, LoginContext } from "./context/auth";
import Login from "./pages/login";
import Home from "./pages/home";
import './App.css';

function App() {

  const Private = ({ children }) => {
    const { authenticated } = useContext(LoginContext);

    if (!authenticated) {
      return <Navigate to="/login" />
    }

    return children;
  }

  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Private><Home /></Private>}/>
        </Routes>
      </LoginProvider>

    </BrowserRouter>
  )
}

export default App;

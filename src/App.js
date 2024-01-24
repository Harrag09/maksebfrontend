import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import StatsLive from "./pages/StatsLive";
import Blank from "./pages/Blank";
import LoginForm from "./pages/signIn/LoginForm";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import 'bootstrap/dist/css/bootstrap.min.css';
import StatsParDate from "./pages/StatsParDate";
import AdminPage from "./pages/components/AdminPage";
import Stores from "./pages/Stores";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      const isLoggedIn = Cookies.get("loggedIn") === "loggedIn";
      setLoggedIn(isLoggedIn);

      const token = Cookies.get("access_token");
   
      if (token) {
        const decodedToken = await parseJwt(token);
        setUserRole(decodedToken ? decodedToken.Role : "");
        console.log(userRole);
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <BrowserRouter path="">
      <Routes>
        {loggedIn ? (
          <Route path="/maksebfrontend/" element={<MainLayout />}>
              <Route index  element={<Blank />} />

            {userRole === "store" && (
              <>
                <Route index path="/maksebfrontend/StateLive" element={<StatsLive />} />
                <Route path="/maksebfrontend/StateParDate" element={<StatsParDate />} />
                </>
            )}

            {userRole === "admin" && (
              <>
              <Route   path="/maksebfrontend/AdminPage" element={<AdminPage />} />
              <Route   path="/maksebfrontend/Store" element={<Stores />} />
              </>
              
            )}
          </Route>

        ) : (
          <Route path="*" element={<LoginForm />} />
        )}
      </Routes>
    </BrowserRouter >
  );
}

export default App;

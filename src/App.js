import React, { useEffect } from "react";
import { useState } from "react";
import Navigation from "./navigation/Navigation";
import { Outlet } from "react-router-dom";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import LandingPage from "./home/Landing-Page";

import "./App.scss";
import { postNewUser } from "./apis/users-handler";

const App = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    if (user) {
      postNewUser(user.access_token)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));

          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  const logOut = () => {
    googleLogout();
    localStorage.removeItem("user");
    setProfile(null);
  };

  return (
    <div>
      {profile || localStorage.getItem("user") ? (
        <>
          <Navigation></Navigation>
          <button onClick={logOut}>Log out</button>
          <Outlet context={{ profile }}></Outlet>
        </>
      ) : (
        <>
          <LandingPage login={login}></LandingPage>
        </>
      )}
    </div>
  );
};

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App({ signOut, user }) {
  return (
    <div>
      <Header />
      <>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign Out</button>
      </>
      <Outlet />
      <Footer />
    </div>
  );
}

export default withAuthenticator(App);

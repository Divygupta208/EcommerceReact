import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import CartComponent from "../components/CardComponent";

const Root = () => {
  return (
    <div className="root-main">
      <NavbarComponent />
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

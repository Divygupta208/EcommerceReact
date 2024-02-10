import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import CartComponent from "../components/CardComponent";

const Root = () => {
  return (
    <>
      <NavbarComponent />
      <Header />

      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

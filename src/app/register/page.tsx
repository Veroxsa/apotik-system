import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../assets/custom.css";

const Register = () => {
  return (
    <>
      <main className="container">
        <div className="header-container">
          <Header />
        </div>
        <div className="form-register">
          <div className="container">
          </div>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </main>
    </>
  );
}
export default Register;
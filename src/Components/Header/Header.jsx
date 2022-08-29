import React from "react";
import Navbar from "../Navbar/Navbar";
function Header({ setUserName, userData }) {
  return (
    <>
      <header className="header bg-dark">
        <Navbar setUserName={setUserName} userData={userData} />
      </header>
    </>
  );
}

export default Header;

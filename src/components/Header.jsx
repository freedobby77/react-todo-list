import React from "react";

function Header({ children }) {
  return (
    <header
      style={{
        padding: "0px 30px 0px 30px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {children}
    </header>
  );
}

export default Header;

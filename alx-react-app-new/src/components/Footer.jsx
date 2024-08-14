import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "10px",
          position: "fixed",
          bottom: "0",
          width: "100%",
        }}
      >
        <p>&copy; 2023 City Lovers</p>
      </footer>
    </div>
  );
};

export default Footer;

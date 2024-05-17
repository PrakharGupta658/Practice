import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/Daco_30248.png";

function Header() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "90px",
          backgroundColor: "gray",
          margin: "0",
          padding: "0",
        }}
      >
        <div
          style={{
            display:"flex",
            textDecoration: "none",
            justifyContent:"space-between"
          }}
        >
          <div style={{display:"flex", alignItems:"center"}}>
            <img src={Logo} alt="logo" style={{height:"70px" , width:"100px" , marginLeft:"20px"}}/>
          </div>
          <div>
            <ul
              style={{
                display: "flex",
                marginLeft: "20px",
                listStyleType: "none",
                fontSize: "20px",
                textDecoration: "none",
                marginRight:"45px",
              }}
            >
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li style={{ margin: "15px" }}>Home</li>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li style={{ margin: "15px" }}>Login</li>
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li style={{ margin: "15px" }}>About Us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

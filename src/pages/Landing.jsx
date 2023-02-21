import React from 'react';
import { Link } from 'react-router-dom';




const Landing = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "blue",
        color: "white",
      }}
    >   {/* Nav*/}
      <div  
        style={{
          height: "70px",
          width: "100%",
          background: "#fefef2",
          color: "white",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
          alignItems: "center",
          boxShadow: "3px 3px 3px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            height: "70px",
            width: "100px",
            background: "blue",
            color: "white",
            fontSize: "20px",
          }}
        >
          iBukun
        </div>
      </div>
    </div>
  );
}

export default Landing;
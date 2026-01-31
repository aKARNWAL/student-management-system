import React from "react";
import cardData from "../data/cardData";
import Notices from "./Notices";

const Home = () => {
  return (
    <>
    <div style={{ display: "flex", gap: "22px", marginTop: "20px" }}>
      {cardData.map((item) => (
        <div
          key={item.id}
          style={{
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "space-evenly",
            boxShadow: "10px 10px 10px lightgrey",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={item.image} alt={item.name} />
            <h3> {item.name} </h3>
            <p> {item.number} </p>
          </div>
        </div>
      ))}
     
    </div>
      <div style={{ marginTop: "40px" }}>
        <h2>Notices</h2>
        <Notices />
      </div>
      </>
  );
};

export default Home;

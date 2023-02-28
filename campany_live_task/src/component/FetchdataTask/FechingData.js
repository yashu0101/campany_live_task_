import { Button } from "@mui/material";
import { border } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
const FechingData = () => {
  const [data, setData] = useState([]);
  const handleClick = () => {
    axios
      .get("https://63eb75d7fb6b6b7cf7dedc91.mockapi.io/receipts")
      .then((response) => {
        setData(response.data);
      }, []);
  };

  console.log(data);

  return (
    <>
      <h1>Data</h1>

      <Button onClick={handleClick}>Click Me</Button>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(data) &&
          data.map((value) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  width: "100%",
                  height: "10%",
                  padding: 5,
                  margin: 5,
                  display: "flex",
                }}
              >
                <div>
                  <img src={value.receiptUrl} style={{ height: 100 }} />
                </div>
                <div>
                  <h3>{value.amount}</h3>
                </div>
                <h3>{value.categoryId.name}</h3>
                <h3>{value.merchantId.name}</h3>
                <h3>{value.date.split("/")}</h3>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default FechingData;

import { Button } from "@mui/material";
import { border } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";

const Akash = () => {
  const [data, setData] = useState([]);
  const handleClick = () => {
    axios.get("https://api.npoint.io/20c1afef1661881ddc9c").then((response) => {
      setData(response.data.teamsList);
      console.log();
      console.log("data", data);
    }, []);
  };

  console.log(data);

  return (
    <>
      <h1>Data</h1>

      <Button onClick={handleClick}>Click Me</Button>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          {data.map((val, i) => {
            return (
              <li key={i}>
                <h2>TID-:{val.TID}</h2>
                <h2>WebName-:{val.WebName}</h2>
                <h2>ShortName-:{val.ShortName}</h2>
              </li>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Akash;

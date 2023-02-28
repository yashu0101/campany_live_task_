import React, { useEffect, useState } from "react";
import StudantForm from "./StrudantForm";
import StudantListing from "./StudantListing";

const StudantTask = () => {
  const [users, setUsers] = useState([]);
  const getUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <h3>
        <StudantForm getUser={getUser} />
        <br />
        <StudantListing users={users} />
      </h3>
    </>
  );
};

export default StudantTask;

import { DataGrid } from "@mui/x-data-grid";
import React from "react";
const StudantListing = ({ users }) => {
  const columns = [
    { field: "name", width: 150 },
    { field: "middlename", width: 150 },
    { field: "surname", width: 150 },
    { field: "age", width: 150 },
    { field: "emailid", width: 150 },
    { field: "homename", width: 150 },
    { field: "streetname", width: 150 },
    { field: "city", width: 150 },
    { field: "state", width: 150 },
    { field: "country", width: 150 },
    { field: "specialsub", width: 150 },
    { field: "branch", width: 150 },
    { field: "scoreten", width: 150 },
    { field: "scoret", width: 150 },
    { field: "board", width: 150 },
    { field: "graduation", width: 150 },
    // { field: "golabc", width: 150 },
    // { field: "poste", width: 150 },
  ];

  return (
    <>
      <h2>Submited list</h2>

      <section style={{ height: 500 }}>
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row.name + row.age}
        />
      </section>
    </>
  );
};

export default StudantListing;

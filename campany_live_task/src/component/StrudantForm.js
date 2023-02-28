import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const StudantForm = ({ getUser }) => {
  const [user, setUsers] = useState({
    name: "",
    middlename: "",
    surname: "",
    age: "",
    emailid: "",
    homename: "",
    streetname: "",
    city: "",
    state: "",
    country: "",
    specialsub: "",
    branch: "",
    scoreten: "",
    scoret: "",
    board: "",
    graduation: "",
    golabc: "",
    poste: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users: ", user);
    getUser(user);
  };

  return (
    <>
      <h1>Application Form</h1>
      <Container>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ backgroundColor: "#aaa", padding: 2 }}
        >
          <h2>Personal Information</h2>
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Name"
              name="name"
              type="text"
              value={user?.name}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="MiddleName"
              name="middlename"
              value={user?.middlename}
              onChange={handleChange}
              type="text"
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Surname"
              name="surname"
              value={user?.surname}
              onChange={handleChange}
              type="text"
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Age"
              name="age"
              value={user?.age}
              onChange={handleChange}
              type="number"
            />
            <TextField
              variant="outlined"
              fullWidth
              label="EmailId"
              name="emailid"
              value={user?.emailid}
              onChange={handleChange}
              type="email"
            />
          </Grid>
          <h2>Address Information</h2>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Home Name/No"
              name="homename"
              value={user?.homename}
              onChange={handleChange}
              type="text"
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Street Name"
              name="streetname"
              value={user?.streetname}
              onChange={handleChange}
              type="text"
            />
            <TextField
              variant="outlined"
              fullWidth
              label="City"
              name="city"
              type="text"
              value={user?.city}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="State"
              name="state"
              value={user?.state}
              onChange={handleChange}
              type="text"
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Country"
              name="country"
              value={user?.country}
              onChange={handleChange}
              type="text"
            />
          </Grid>
          <h2>Education Details</h2>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Graduation</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="eduction"
              name="branch"
              value={user?.branch}
              onChange={handleChange}
            >
              <MenuItem value={"BE"}>BE</MenuItem>
              <MenuItem value={"B.Tech"}>B.Tech</MenuItem>
              <MenuItem value={"BCA"}>BCA</MenuItem>
              <MenuItem value={"BSC"}>BSC</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            fullWidth
            label="Special Sub"
            name="specialsub"
            value={user?.specialsub}
            onChange={handleChange}
            type="text"
          />

          <TextField
            variant="outlined"
            fullWidth
            label="10th score"
            name="scoreten"
            value={user?.scoreten}
            onChange={handleChange}
            type="text"
          />
          <TextField
            variant="outlined"
            fullWidth
            label="12th score"
            name="scoret"
            value={user?.scoret}
            onChange={handleChange}
            type="text"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Board</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Board"
              name="board"
              value={user?.board}
              onChange={handleChange}
            >
              <MenuItem value={"Stage"}>Stage</MenuItem>
              <MenuItem value={"Centeral"}>Centeral</MenuItem>
              <MenuItem value={"Internatinal"}>Internatinal</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            fullWidth
            label="Graduation score"
            name="graduation"
            value={user?.graduation}
            onChange={handleChange}
            type="text"
          />
          <Grid item xs={12}>
            <h2>Achivement & Post Exprerince</h2>
            <textarea style={{ width: 500, height: 200 }} />
          </Grid>
          <Grid iteam xs={12}>
            <h2>Global Certificate</h2>
            <TextField type="file" />
          </Grid>
          <Grid iteam xs={12}>
            <h2>Post Experience</h2>
            <TextField type="file" />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              submit
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default StudantForm;

import { Container } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import BasicDatePicker from "./DatePicker";

const AppoimentDiv = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={6}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
                label="Name"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <BasicDatePicker />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AppoimentDiv;

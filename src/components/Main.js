import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LawyersTable from "./dashboard/UserTable";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/LawyerDataSlice";
import { useState } from "react";
import { interFaces } from "../utils";
import AppointmentDashboard from "./appointment/AppointmentDashboard";

function Main() {
  let dispatch = useDispatch();
  const [currentInterFace,setCurrentInterFace] = useState(interFaces.DASHBOARD)

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const component = {
    DASHBOARD:LawyersTable,
    APPOINTMENT:AppointmentDashboard
  }

  let Component = component[currentInterFace]

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Legistify
          </Typography>
          <Button sx={{color:"white"}} variant="contained" onClick={()=>{
            if(currentInterFace===interFaces.DASHBOARD){
              setCurrentInterFace(interFaces.APPOINTMENT)
            }else{
              setCurrentInterFace(interFaces.DASHBOARD)
            }

          }} >Book An Appointment</Button>
        </Toolbar>
      </AppBar>
      <Box component="nav"></Box>
      <Box component="main" sx={{ p: 3, width: "100%" }}>
        <Toolbar />
        <Box sx={{ width: "100%" }}>
        { Component &&<Component />}
        </Box>
      </Box>
    </Box>
  );
}

export default Main;

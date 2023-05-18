import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LawyersTable from "./UserTable";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/LayerDataSlice";

function Main() {
  let dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);
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
        </Toolbar>
      </AppBar>
      <Box component="nav"></Box>
      <Box component="main" sx={{ p: 3, width: "100%" }}>
        <Toolbar />

        <Box sx={{ width: "100%" }}>
          <LawyersTable />
        </Box>
      </Box>
    </Box>
  );
}

export default Main;

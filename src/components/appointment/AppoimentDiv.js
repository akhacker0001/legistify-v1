import { Container } from "@mui/material";
import React, { forwardRef} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { allUserData } from "../../store/LawyerDataSlice";
import "react-datepicker/dist/react-datepicker.css";
import Select from "@mui/material/Select";

const AppoimentDiv = ({
  appointmentDetails,
  handleCollectAppointmentDetails,
  handleBookAppointment
}) => {
  const data = useSelector(allUserData);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Button color="primary" variant="contained" size="medium" onClick={onClick} ref={ref}>
      {value ? value : 'Select Date'}
    </Button>
  ));

  let availableLawyers = data.filter((ele)=>ele.available_time)
  let findBookedDates =  useSelector((state) => state.BookingReducer.bookingDetails);
  let bookingDetails = findBookedDates.filter((ele=>ele.lawyerId===appointmentDetails.lawyerId)).map(ele=>ele.date) // here I'm finding the dates which dates have been booked for Lawyer

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} alignItems="center" justifyContent={'center'}>
          <Grid item xs={5}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">lawyers</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="layers"
                name="lawyerId"
                value={`${appointmentDetails.lawyerId}-${appointmentDetails.lawyerName}` }
                onChange={handleCollectAppointmentDetails}
            
              >
                {
                  availableLawyers.map((element)=>(
                    <MenuItem value={`${element.id}-${element.name}`}>{element.name}</MenuItem>
                  ))
                }
               
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2} alignItems="center" justifyContent={'center'}  >
            <DatePicker
              excludeDates={bookingDetails}
              showIcon
              disabled={!appointmentDetails.lawyerId}
              withPortal
              name="datepicker"
              selected={appointmentDetails.date}
              onChange={(data)=>{
                let obj = {
                  target:{
                    name:"date",
                    value:data
                  }
                }
                handleCollectAppointmentDetails(obj)
              }}
              customInput={<ExampleCustomInput value={appointmentDetails.date} />}
            />
          </Grid>
          <Grid item xs={5}>
            <Button  fullWidth color="primary" onClick={handleBookAppointment} variant="contained" size="medium" >Book now</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AppoimentDiv;

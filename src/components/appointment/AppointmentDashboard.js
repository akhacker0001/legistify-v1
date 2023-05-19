import React, { useState } from "react";
import AppoimentDiv from "./AppoimentDiv";
import AppointmentTable from "./AppointmentTable";
import { useDispatch } from "react-redux";
import { addBooking } from "../../store/bookSlicer";
import uniqid from 'uniqid';

const AppointmentDashboard = ({handleSetMessage}) => {
  const dispatch = useDispatch()
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "",
    lawyerId: null,
    lawyerName:"",
    bookingId:uniqid('6-5-9')
  });

  const handleCollectAppointmentDetails = (event) => { // here I'm collecting booking data like lawyer name lawyer id and Date
    let {
      target: { name, value },
    } = event;
    if(name==="lawyerId"){
      let val = value.split("-")
      let id = Number(val[0])
      let lawerName = val[1]
      setAppointmentDetails((state) => ({
        ...state,
        [name]: id,
        "lawyerName":lawerName
      }));
    }else{
      setAppointmentDetails((state) => ({
        ...state,
        [name]: value,
      }));
    }
  };

  const handleBookAppointment = () => {
    if(!appointmentDetails.lawyerId){
      handleSetMessage("please Select Lawyer")
    }else{
      handleSetMessage("please Select Appointment Date")
    }
    if(appointmentDetails.lawyerId && appointmentDetails.date){ // here I'm checking condition and save booking data in redux
      dispatch(addBooking(appointmentDetails))
      handleSetMessage("Appointment Booked SuccessFully")
      setAppointmentDetails({
        date: "",
        lawyerId: null,
        lawyerName:"",
        bookingId:uniqid('6-5-9')
      })
    }

  }
  return (
    <div>
      <AppoimentDiv
        handleCollectAppointmentDetails={handleCollectAppointmentDetails}
        appointmentDetails={appointmentDetails}
        handleBookAppointment={handleBookAppointment}
      />
      <AppointmentTable />
    </div>
  );
};

export default AppointmentDashboard;

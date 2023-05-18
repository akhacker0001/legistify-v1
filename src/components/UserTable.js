import * as React from "react";
import { useSelector } from "react-redux";
import { allUserData } from "../store/LayerDataSlice";
import Table from "./Table"
import SearchBar from "./SearchBar";
import { Container } from "semantic-ui-react";
import AppointmentModal from "./modal";

export default function LawyersTable() {
  const data = useSelector(allUserData);
  const [layersDetails, setLayersDetails] = React.useState([]);
  const [userDetails, setUserDetails] = React.useState([]);
  const [inputText,setInputText] = React.useState("")
  const [openModal, setOpenModal] = React.useState(false)



  React.useEffect(() => {
    setLayersDetails(data);
    setUserDetails(data);
  }, [data]);
  
  React.useEffect(()=>{
    // name, speciality, or firms
    let tempLayersData = [...userDetails]
    tempLayersData = tempLayersData.filter((ele)=>{
      if(ele['name'].toLowerCase().includes(inputText.toLowerCase()) || ele['speciality'].toLowerCase().includes(inputText.toLowerCase()) || ele['firms'].toLowerCase().includes(inputText.toLowerCase())){
        return true
      }else{
        return false
      }
    })
    setLayersDetails(tempLayersData)
  },[inputText])

  const handleCollectData = (event,data) => {
    setInputText(data.value)
  }

  return (
    <>
    <Container>
    <SearchBar inputText={inputText} handleCollectData={handleCollectData} />
     <Table projectArray={layersDetails}  setOpen={setOpenModal}/>
     <AppointmentModal open={openModal}  setOpen={setOpenModal} />
    </Container>
    </>
  );
}

import * as React from "react";
import { useSelector } from "react-redux";
import { allUserData } from "../../store/LawyerDataSlice";
import Table from "./Table"
import SearchBar from "./SearchBar";
import { Container } from "semantic-ui-react";

export default function LawyersTable() {
  const data = useSelector(allUserData);
  const [layersDetails, setLayersDetails] = React.useState([]);
  const [userDetails, setUserDetails] = React.useState([]);
  const [inputText,setInputText] = React.useState("")



  React.useEffect(() => {
    setLayersDetails(data);
    setUserDetails(data);
  }, [data]);

  const handleFilterLayersData = () => { // here I'm filterning the data with their name | speciality | firms
    let tempLayersData = [...userDetails]
    tempLayersData = tempLayersData.filter((ele)=>{
      if(ele['name'].toLowerCase().includes(inputText.toLowerCase()) || ele['speciality'].toLowerCase().includes(inputText.toLowerCase()) || ele['firms'].toLowerCase().includes(inputText.toLowerCase())){
        return true
      }else{
        return false
      }
    })
    setLayersDetails(tempLayersData)
  }
  
  React.useEffect(()=>{
    if(!inputText.length){
      setLayersDetails(data)
    }else{
      handleFilterLayersData()
    }
  },[inputText])

  const handleCollectData = (event,data) => {
    setInputText(data.value)
  }

  return (
    <>
    <Container>
    <SearchBar inputText={inputText} handleCollectData={handleCollectData} />
     <Table projectArray={layersDetails}  />
    </Container>
    </>
  );
}

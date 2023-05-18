import React from 'react';
import { Container, Icon, Input } from 'semantic-ui-react'

const SearchBar = ({inputText,handleCollectData}) => {
  return (
    <div>
        <Container style={{}}>
        <Input icon='search' iconPosition='left' fluid placeholder='Search...' value={inputText}  onChange={handleCollectData}  labelPosition='right' label={{  content:  <Icon color='green' style={{margin:0,cursor:"pointer"}} size='large' name='calendar check'/>,  }} />
       
        </Container>
    </div>
  )
}

export default SearchBar

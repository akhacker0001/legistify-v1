import React from 'react';
import { Container,  Input } from 'semantic-ui-react'

const SearchBar = ({inputText,handleCollectData}) => {
  return (
    <div>
        <Container>
        <Input icon='search' iconPosition='left' fluid placeholder='Search...' value={inputText}  onChange={handleCollectData}  />
        </Container>
    </div>
  )
}

export default SearchBar

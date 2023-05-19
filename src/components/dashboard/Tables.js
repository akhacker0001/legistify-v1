import React, { Component, useEffect, useState } from 'react'
import { Button, Icon, Table,  Ref } from 'semantic-ui-react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const  LawyerTableList  = ({projectArray}) => {
    const [tableListState,setTableListState] = useState({
        starredProjects: projectArray,
        reorderEnabled: true,
        selectedRowIds: [],
        draggingRowId: null
    })

    useEffect(()=>{
        setTableListState((state)=>({
            ...state,
            starredProjects:projectArray
        }))
    window.addEventListener('click', onWindowClick);
    window.addEventListener('keydown', onWindowKeyDown);
    window.addEventListener('touchend', onWindowTouchEnd);
    return ()=>{
        window.removeEventListener('click', onWindowClick);
        window.removeEventListener('keydown', onWindowKeyDown);
        window.removeEventListener('touchend', onWindowTouchEnd);
    }
    },[projectArray])

 const  getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging && ("lightblue"),
    ...draggableStyle,
  })





  const onDragEnd = result => {
    const { destination, source, reason } = result;

    // Not a thing to do...
    if (!destination || reason === 'CANCEL') {
        setTableListState((state)=>({
            ...state,
            draggingRowId: null

        }))
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const starredProjects = Object.assign([], tableListState.starredProjects);
    const project = tableListState.starredProjects[source.index];
    starredProjects.splice(source.index, 1);
    starredProjects.splice(destination.index, 0, project);
    setTableListState((state)=>({
        ...state,
        starredProjects
    }))
  }
  const unselectAll = () => {
    setTableListState((state)=>({
        ...state,
        selectedRowIds: [],

    }))
  }

  const onWindowKeyDown = event => {
    if (event.defaultPrevented) {
      unselectAll();
    }

    if (event.key === `Escape`) {
      unselectAll();
    }
  }

  const onWindowClick = event => {
    if (event.defaultPrevented) {
      return;
    }
    unselectAll();
  }

  const onWindowTouchEnd = event => {
    if (event.defaultPrevented) {
      return;
    }
    unselectAll();
  }

    return(
    <div style={{padding: "30px" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              { (<Table.HeaderCell />)}
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Layer Name</Table.HeaderCell>
              <Table.HeaderCell>speciality</Table.HeaderCell>
              <Table.HeaderCell>address</Table.HeaderCell>
              <Table.HeaderCell>phone_number</Table.HeaderCell>
              <Table.HeaderCell>firms</Table.HeaderCell>
              <Table.HeaderCell>Availables</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Droppable droppableId="table">
            {(provided, snapshot) => (
              <Ref innerRef={provided.innerRef}>
                <Table.Body {...provided.droppableProps}>
                  {tableListState.starredProjects.map((project, idx) => {
                    let availableTime =  project["available_time"]
                    return (
                      <Draggable
                        draggableId={project.id.toString()}
                        index={idx}
                        key={project.id}
                      >
                        {(provided, snapshot) => (
                        <Ref innerRef={provided.innerRef}>
                          <Table.Row
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                            key={project.id}
                            className="project">
                            { (<Table.Cell>{
                                <Icon
                                  name="bars"
                                  color="grey"
                                  className="ds__DispoGroup__row-drag"
                                />
                              }</Table.Cell>)}
                            <Table.Cell>
                              {project.id}
                            </Table.Cell>
                            <Table.Cell >
                              {project.name}
                            </Table.Cell>
                            <Table.Cell  >
                            {project.speciality}
                            </Table.Cell>
                            <Table.Cell className="fundingCell">
                            {project.address}
                            </Table.Cell>
                            <Table.Cell className="fundingCell">
                            {project.phone_number}
                            </Table.Cell>
                            <Table.Cell className="fundingCell">
                            {project.firms}
                            </Table.Cell>
                            <Table.Cell id="remove-donate-div">
                                
                              <Button color={availableTime ? 'green' : 'red'} onClick={()=>{}} icon>
                                <Icon name='calendar alternate outline' />
                              </Button>
                            </Table.Cell>
                          </Table.Row>
                        </Ref>
                        )}
                    </Draggable>)
                  })}
                  {provided.placeholder}
                </Table.Body>
              </Ref>
            )}
          </Droppable>
        </Table>
      </DragDropContext>
    </div>
    )
}

export default LawyerTableList

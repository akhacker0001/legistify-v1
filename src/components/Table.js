import React, { Component } from 'react'
import { Button, Icon, Table, Flag, Ref } from 'semantic-ui-react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

class StarredProjectsList extends Component {

  constructor(props){
    super(props)
    this.state = {
      starredProjects: props.projectArray,
      reorderEnabled: true,
      selectedRowIds: [],
      draggingRowId: null
    }
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount () {
    this.setState({
        starredProjects:this.props.projectArray
    })
    window.addEventListener('click', this.onWindowClick);
    window.addEventListener('keydown', this.onWindowKeyDown);
    window.addEventListener('touchend', this.onWindowTouchEnd);
  }

  componentDidUpdate(prevProp,prevState){
    if(prevProp.projectArray !==this.props.projectArray){
        this.setState({
            starredProjects:this.props.projectArray
        })
    }
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.onWindowClick);
    window.removeEventListener('click', this.onWindowClick);
    window.removeEventListener('click', this.onWindowClick);
  }

  getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging && ("lightblue"),
    ...draggableStyle,
  })

  reOrder = () => {
    const { reorderEnabled } = this.state

    this.setState({
      reorderEnabled: !reorderEnabled
    })
  }


  onDragStart = start => {
    const id = start.draggableId;
    const selected = this.state.selectedRowIds.find(selectedId => selectedId === id);

    // If dragging an item that is not selected, unselect all items
    if (!selected) {
      this.unselectAll();
    }

    this.setState({
      draggingRowId: start.draggableId,
    });
  }

  unselect = () => {
    this.unselectAll();
  }

  unselectAll = () => {
    this.setState({
      selectedRowIds: [],
    });
  }

  onDragEnd = result => {
    const { destination, source, reason } = result;

    // Not a thing to do...
    if (!destination || reason === 'CANCEL') {
      this.setState({
        draggingRowId: null,
      });
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const starredProjects = Object.assign([], this.state.starredProjects);
    const project = this.state.starredProjects[source.index];
    starredProjects.splice(source.index, 1);
    starredProjects.splice(destination.index, 0, project);
    this.setState({
      starredProjects
    });
  }

  onWindowKeyDown = event => {
    if (event.defaultPrevented) {
      this.unselectAll();
    }

    if (event.key === `Escape`) {
      this.unselectAll();
    }
  }

  onWindowClick = event => {
    if (event.defaultPrevented) {
      return;
    }
    this.unselectAll();
  }

  onWindowTouchEnd = event => {
    if (event.defaultPrevented) {
      return;
    }
    this.unselectAll();
  }




  render(){
    const { reOrder,  } = this;
    const {  selectedRowIds } = this.state;
    return(
    <div style={{padding: "30px" }}>
      <DragDropContext onDragEnd={this.onDragEnd}>
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
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Droppable droppableId="table">
            {(provided, snapshot) => (
              <Ref innerRef={provided.innerRef}>
                <Table.Body {...provided.droppableProps}>
                  {this.state.starredProjects.map((project, idx) => {
                    let availableTime = new Date().toLocaleDateString()  < project["available_time"]
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
                            style={this.getItemStyle(
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
                                
                              <Button color={availableTime ? 'green' : 'red'} onClick={()=>{this.props.setOpen(true)}} icon>
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
}

export default StarredProjectsList

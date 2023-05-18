import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import AppoimentDiv from './AppoimentDiv'

function AppointmentModal({open,setOpen}) {
 

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Book An Appointment</Modal.Header>
      <Modal.Content >
        <AppoimentDiv />
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Book"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default AppointmentModal

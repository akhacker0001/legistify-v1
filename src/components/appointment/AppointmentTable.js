import React from "react";
import { useSelector } from "react-redux";
import {  Table, Container, Button } from "semantic-ui-react";
import uniqid from 'uniqid';

const AppointmentTable = () => {
  let bookingDetails = useSelector(
    (state) => state.BookingReducer.bookingDetails
  );
  return (
    <>
      <Container  style={{marginTop:"10px"}} >
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>BookingId</Table.HeaderCell>
              <Table.HeaderCell>Lawyer Name</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Confirmed</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {bookingDetails.map((ele) => {
              return (
                <>
                  <Table.Row>
                    <Table.Cell>{uniqid('$5^7#5(5^2')}</Table.Cell>
                    <Table.Cell>{ele.lawyerName}</Table.Cell>
                    <Table.Cell>
                      {new Date(ele.date).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell>
                      <Button  positive>
                        Booked
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                </>
              );
            })}
          </Table.Body>
        </Table>
      </Container>
    </>
  );
};

export default AppointmentTable;

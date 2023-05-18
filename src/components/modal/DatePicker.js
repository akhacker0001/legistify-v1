import  React ,{useState, forwardRef} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'semantic-ui-react';

export default function BasicDatePicker() {
    const [startDate, setStartDate] = useState(new Date())
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <Button className='primary'  onClick={onClick} ref={ref}>
          {value}
        </Button>
      ));
  return (
    <DatePicker showIcon  selected={startDate} onChange={(date) => setStartDate(date)}
    customInput={<ExampleCustomInput value={startDate}/>}
    />
  );
}
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerComponent(props) {
  return (
    <DatePicker
      selected={props.selectedDate}
      onChange={props.handleDateChange}
      placeholderText="дд.мм.гггг"
      dateFormat="dd.MM.yyyy"
      minDate={new Date(1900, 0, 1)}
      maxDate={new Date(2022, 11, 31)}
      className={props.className}
      id={props.id}
      name={props.name}
      autoComplete="off"
    />
  );
}

export default DatePickerComponent;

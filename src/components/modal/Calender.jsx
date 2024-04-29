import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";

// import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// Button.defaultProps = {
//     primary: true,
//     size: "medium",
//     label: null,
//     onClick: undefined,
//   };
const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        dateFormat=" yyyy년 MM월 dd일"
        selected={startDate}
        onChange={date => setStartDate(date)}
        minDate={new Date()}
        className="outline-none rounded w-44"
      />
    </div>
  );
};

export default Calendar;

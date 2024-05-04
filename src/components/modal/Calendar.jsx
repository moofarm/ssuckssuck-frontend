import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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

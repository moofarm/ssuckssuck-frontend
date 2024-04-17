import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <DatePicker
            showIcon
            dateFormat="yyyy년 MM월 dd일"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            locale = "ko"
        />
        </div>
    );
  };

export default Calendar;
import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
const SettingsComponent = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>




            <DateTimePicker onChange={(date: any) => setDate(date)} value={date} />



        </div>
    )
}

export default SettingsComponent
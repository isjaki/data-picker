import React, { Component } from 'react';

//import CalendarCreator from '../../helpers/calendar';
import './DatePicker.css';

class DatePicker extends Component {
    state = {
        monthData: [],
        calendarOpen: false
    };

    openCalendarHandler = () => {
        this.setState({ calendarOpen: true });
    }

    render() {
        return (
            <div className="DatePicker">
                <div className="DatePicker__CurrentDate">April 4, 2019</div>
                <div>Calendar</div>
            </div>
        );
    }
}

export default DatePicker;
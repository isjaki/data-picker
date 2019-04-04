import React, { Component } from 'react';
import calendarCreator from '../../helpers/calendar';

import Calendar from '../Calendar/Calendar';
import './DatePicker.css';

class DatePicker extends Component {
    state = {
        pickedDate: null,
        calendarOpen: false
    };

    componentDidMount() {
        const currentMonth = calendarCreator.getCurrentMonth();
        const currentDay = new Date().getDate();
        const currentYear = calendarCreator.getCurrentYear();

        const dateInCaption = `${currentMonth} ${currentDay}, ${currentYear}`;

        this.setState({
            pickedDate: dateInCaption
        });
    }

    openCalendarHandler = () => {
        this.setState({ calendarOpen: true });
    }

    render() {
        return (
            <div className="DatePicker" onClick={this.openCalendarHandler}>
                {
                    this.state.calendarOpen ? 
                    <Calendar /> : 
                    <div className="DatePicker__CurrentDate">{this.state.pickedDate}</div>
                }
            </div>
        );
    }
}

export default DatePicker;
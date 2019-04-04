import React, { Component } from 'react';

import './DatePicker.css';

class DatePicker extends Component {
    state = {
        pickedDate: null,
        calendarOpen: false
    };

    componentDidMount() {
        const currentDate = new Date();

        const currentMonth = currentDate.toLocaleString('en', {month: 'long'});
        const currentDay = currentDate.getDate();
        const currentYear = currentDate.getFullYear();

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
                <div className="DatePicker__CurrentDate">{this.state.pickedDate}</div>
                {this.state.calendarOpen ? <div>Calendar</div> : null}
            </div>
        );
    }
}

export default DatePicker;
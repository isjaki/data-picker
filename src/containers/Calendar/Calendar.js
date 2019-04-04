import React, { Component } from 'react';

import calendarCreator from '../../helpers/calendar';
import './Calendar.css';


class Calendar extends Component {
    state = {
        monthData: []
    }

    componentDidMount() {
        this.setState({
            monthData: calendarCreator.getArrayWithNewMonth()
        });
    }

    switchToNextMonth = () => {

    }

    switchToPrevMonth = () => {
        
    }

    render() {
        return (
            <table className="Calendar">
                <caption>
                    <button onClick={this.switchToPrevMonth}>Prev</button>
                    <span>April, 2019</span>
                    <button onClick={this.switchToNextMonth}>Next</button>
                </caption>
                <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                </tr>
            </table>
        )
    }
}

export default Calendar;
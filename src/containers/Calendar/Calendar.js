import React, { Component, Fragment } from 'react';
import calendarCreator from '../../helpers/calendar';

import CalendarTable from '../../components/CalendarTable/CalendarTable';
import './Calendar.css';

class Calendar extends Component {
    state = {
        monthData: null,
        calendarCaption: null
    }

    componentDidMount() {
        this.setState({
            monthData: calendarCreator.getArrayWithNewMonth(),
            calendarCaption: `${calendarCreator.getCurrentMonth()}, ${calendarCreator.getCurrentYear()}`
        });
    }

    switchToNextMonth = () => {
        this.setState({
            monthData: calendarCreator.getDataForNextMonth(),
            calendarCaption: `${calendarCreator.getCurrentMonth()}, ${calendarCreator.getCurrentYear()}`
        });
    }

    switchToPrevMonth = () => {
        this.setState({
            monthData: calendarCreator.getDataForPreviousMonth(),
            calendarCaption: `${calendarCreator.getCurrentMonth()}, ${calendarCreator.getCurrentYear()}`
        });
    }

    render() {
        let calendarTable = null;

        if (this.state.monthData) {
            calendarTable = <CalendarTable 
                monthData={this.state.monthData} />
        }

        return (
            <Fragment>
                <div className="Calendar__caption">
                    <button 
                        onClick={this.switchToPrevMonth}
                        className="Calendar__prev-button"
                    >Prev</button>
                    <span>{this.state.calendarCaption}</span>
                    <button 
                        onClick={this.switchToNextMonth}
                        className="Calendar__next-button"
                    >Next</button>
                </div>
                <div className="Calendar">
                    <div className="Calendar__header">Mon</div>
                    <div className="Calendar__header">Tue</div>
                    <div className="Calendar__header">Wed</div>
                    <div className="Calendar__header">Thu</div>
                    <div className="Calendar__header">Fri</div>
                    <div className="Calendar__header">Sat</div>
                    <div className="Calendar__header">Sun</div>
                    {calendarTable}
                </div>
            </Fragment>
        )
    }
}

export default Calendar;
import React from 'react';

const calendarTable = props => {

    return props.monthData.map(date => {
        const fullDate = `${date.month} ${date.day}, ${date.year}`;
        const classes = [fullDate, date.monthClass];

        if (date.month === new Date().setMonth(0).toLocaleString('en', {month: 'long'}) 
            && date.monthClass === 'previous-month') {
            classes.push('date-disable');
        }
        return <div className={classes.join(' ')}>{date.day}</div>
    });
}

export default calendarTable;
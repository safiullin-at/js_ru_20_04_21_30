import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    static propTypes = {
        dateRange: PropTypes.object.isRequired,
        onFilterChange: PropTypes.func
    }

    static defaultProps = {
        onFilterChange: () => {}
    }

    handleDayClick = (day) => {
        this.props.onFilterChange(DateUtils.addDayToRange(day, this.props.dateRange))
    }

    render() {
        const { dateRange } = this.props
        const { from, to } = dateRange
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default DateRange

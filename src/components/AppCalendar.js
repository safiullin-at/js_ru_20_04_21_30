import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css"

class AppCalendar extends Component {
    static propTypes = {}
    static defaultProps = {}

    state = {
        selectedDay: undefined,
    };

    render() {
        return (
            <DayPicker
                disabledDays={{ daysOfWeek: [0] }}
                selectedDays={this.state.selectedDay}
                onDayClick={this.handleDayClick}
            />
        )
    }

    handleDayClick = (day, { selected }) => {
        this.setState({
            selectedDay: selected ? undefined : day,
        });
    };
}

export default AppCalendar

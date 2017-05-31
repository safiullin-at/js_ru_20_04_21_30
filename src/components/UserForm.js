import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        value: PropTypes.string
    };

    state = {
        name: ''
    }

    render() {
        return (
            <div>
                Username: <input type = "text" value = {this.props.value} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        const {onChange} = this.props
        if (!onChange) return

        onChange(ev.target.value)
    }
}

export default UserForm
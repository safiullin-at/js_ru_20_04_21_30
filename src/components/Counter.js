import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC/index'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    render() {
        return (
            <h1>
                {this.props.count}
                <a href = "#" onClick = {this.handleClick}>Increment me</a>
            </h1>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        const { increment } = this.props
        increment()
    }
}

function mapStateToProps(storeState) {
    return {
        count: storeState.counter
    }
}


export default connect(mapStateToProps, { increment })(Counter)
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Main menu:</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Menu